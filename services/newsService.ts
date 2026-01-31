import { NewsItem } from "../types";

const GOOGLE_NEWS_RSS =
  "https://news.google.com/rss/search?q=Epstein+case+files+unsealed+court&hl=en-US&gl=US&ceid=US:en";
const CORS_PROXY = "https://api.allorigins.win/raw";
const MAX_ITEMS = 8;

function getRssUrl(): string {
  if (import.meta.env.DEV) {
    return "/api/news-rss";
  }
  return `${CORS_PROXY}?url=${encodeURIComponent(GOOGLE_NEWS_RSS)}`;
}

function parseRssXml(xmlText: string): NewsItem[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const items = doc.querySelectorAll("item");
  const results: NewsItem[] = [];

  items.forEach((item, index) => {
    if (index >= MAX_ITEMS) return;
    const titleEl = item.querySelector("title");
    const linkEl = item.querySelector("link");
    const pubDateEl = item.querySelector("pubDate");
    const descEl = item.querySelector("description");
    const sourceEl = item.querySelector("source");

    const title = titleEl?.textContent?.trim() ?? "";
    const url = linkEl?.textContent?.trim() ?? "";
    const source = sourceEl?.getAttribute("url")
      ? new URL(sourceEl.getAttribute("url")!).hostname.replace(/^www\./, "")
      : sourceEl?.textContent?.trim() ?? "News";
    let date = pubDateEl?.textContent?.trim() ?? "";
    if (date) {
      try {
        const d = new Date(date);
        date = isNaN(d.getTime()) ? date : d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      } catch {
        date = date.slice(0, 16);
      }
    }
    let summary = descEl?.textContent?.trim() ?? "";
    if (summary) {
      const div = parser.parseFromString(`<div>${summary}</div>`, "text/html");
      summary = div.body.textContent?.trim().slice(0, 200) ?? summary.slice(0, 200);
      if (summary.length === 200) summary += "…";
    }

    if (title && url) {
      results.push({ title, summary, url, source, date });
    }
  });

  return results;
}

/**
 * Fetches live Epstein-related news from Google News RSS (no API key required).
 * Uses the dev server proxy to avoid CORS.
 */
export async function fetchLiveNews(): Promise<NewsItem[]> {
  try {
    const res = await fetch(getRssUrl(), { cache: "no-store" });
    if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`);
    const xml = await res.text();
    return parseRssXml(xml);
  } catch (error) {
    console.error("Error fetching live news:", error);
    return [];
  }
}

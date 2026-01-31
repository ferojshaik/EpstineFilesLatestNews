
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import AdPlaceholder from './components/AdPlaceholder';
import { fetchLiveNews } from './services/newsService';
import { NewsItem } from './types';
import { STATIC_FILES, TIMELINE_DATA } from './constants';

const NewsView: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const data = await fetchLiveNews();
    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold italic">Latest Developments</h2>
          <button 
            onClick={() => loadNews()}
            disabled={loading}
            className="text-xs font-bold uppercase bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading…" : "Refresh"}
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-64 bg-zinc-900 animate-pulse rounded-lg border border-zinc-800" />
            ))}
          </div>
        ) : news.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, idx) => (
              <NewsCard key={idx} item={item} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-zinc-900 border border-zinc-800 rounded-lg">
            <p className="text-zinc-500 italic">Unable to load live news. Check your connection and try Refresh.</p>
          </div>
        )}
      </section>

      <AdPlaceholder slot="news-mid-page" className="h-32" />

      <section className="bg-amber-900/10 border-l-4 border-amber-600 p-8 rounded-r-lg">
        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Investigative Note</h3>
        <p className="text-zinc-300 leading-relaxed italic">
          "The unsealing of the Epstein files represents one of the most significant legal events in recent history, 
          involving high-profile figures from government, finance, and entertainment. This platform serves as a 
          neutral archive for documents and current reporting."
        </p>
      </section>
    </div>
  );
};

const FilesView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-bold italic mb-2">The Document Repository</h2>
          <p className="text-zinc-500">Archived court filings, evidence transcripts, and legal briefs.</p>
        </div>
        <div className="flex bg-zinc-900 rounded p-1">
          <button className="px-4 py-1 text-xs font-bold uppercase bg-amber-600 text-black rounded">All Files</button>
          <button className="px-4 py-1 text-xs font-bold uppercase hover:bg-zinc-800 rounded transition-colors">Unsealed 2024</button>
        </div>
      </div>

      <div className="overflow-hidden border border-zinc-800 rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900 border-b border-zinc-800">
              <th className="p-4 text-xs font-bold uppercase text-zinc-500 tracking-widest">Date</th>
              <th className="p-4 text-xs font-bold uppercase text-zinc-500 tracking-widest">Document Title</th>
              <th className="p-4 text-xs font-bold uppercase text-zinc-500 tracking-widest">Type</th>
              <th className="p-4 text-xs font-bold uppercase text-zinc-500 tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody>
            {STATIC_FILES.map((file) => (
              <tr key={file.id} className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors">
                <td className="p-4 text-sm text-zinc-500 font-mono">{file.date}</td>
                <td className="p-4">
                  <div className="font-semibold text-zinc-200">{file.title}</div>
                  <div className="text-xs text-zinc-500 mt-1">{file.description}</div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] rounded uppercase font-bold">
                    {file.category}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-amber-500 hover:text-amber-400 text-xs font-bold uppercase tracking-tighter">
                    View Doc ({file.fileSize})
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AdPlaceholder slot="files-bottom" className="h-48" />
    </div>
  );
};

const TimelineView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 space-y-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold italic mb-4">Case Timeline</h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        <p className="mt-6 text-zinc-500">From the early investigations in Palm Beach to the present day legal fallout.</p>
      </div>

      <div className="relative border-l-2 border-zinc-800 pl-8 ml-4 space-y-12">
        {TIMELINE_DATA.map((event, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-amber-600 border-4 border-black"></div>
            <div className="text-amber-500 font-bold font-mono text-xl mb-2">{event.year}</div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{event.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-12">
        <AdPlaceholder slot="timeline-end" className="h-40" />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black selection:bg-amber-600 selection:text-black">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <Routes>
                <Route path="/" element={<NewsView />} />
                <Route path="/files" element={<FilesView />} />
                <Route path="/timeline" element={<TimelineView />} />
              </Routes>
            </div>
            
            <aside className="lg:col-span-4 space-y-8">
              <AdPlaceholder slot="sidebar-top" className="h-64" />
              
              <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">Legal Disclaimer</h3>
                <p className="text-[11px] text-zinc-500 leading-normal uppercase">
                  All documents provided are public record. This site does not host illegal content or private personal information. Information is for educational and journalistic purposes only.
                </p>
              </div>

              <div className="bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Newsletter Signup</h3>
                <p className="text-sm text-zinc-400 mb-4">Get notifications when new batches of files are unsealed.</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="investigator@example.com" 
                    className="flex-grow bg-black border border-zinc-700 px-3 py-2 text-sm rounded-l focus:outline-none focus:border-amber-600"
                  />
                  <button className="bg-amber-600 text-black font-bold px-4 rounded-r text-sm hover:bg-amber-500 transition-colors">Join</button>
                </div>
              </div>

              <AdPlaceholder slot="sidebar-bottom" className="h-96" />
            </aside>
          </div>
        </main>

        <footer className="bg-zinc-900 border-t border-zinc-800 py-12 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-zinc-400 uppercase text-xs tracking-[0.2em] mb-2">Epstein Files Investigation</h4>
                <p className="text-zinc-600 text-xs">© 2024 Archive & News Dashboard. All public documents verified via PACER.</p>
              </div>
              <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
                <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

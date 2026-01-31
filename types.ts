
export interface NewsItem {
  title: string;
  summary: string;
  url: string;
  source: string;
  date: string;
}

export interface EpsteinFile {
  id: string;
  title: string;
  category: 'Court Document' | 'Evidence' | 'Media Report';
  date: string;
  description: string;
  fileSize?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

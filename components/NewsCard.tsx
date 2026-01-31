
import React from 'react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all group">
      <div className="flex justify-between items-start mb-3">
        <span className="text-amber-500 text-[10px] font-bold uppercase tracking-widest">{item.source}</span>
        <span className="text-zinc-500 text-xs">{item.date}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-amber-100 transition-colors">
        {item.title}
      </h3>
      <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
        {item.summary}
      </p>
      <a 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs font-bold uppercase text-amber-500 hover:text-amber-400 transition-colors"
      >
        Read Full Report
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default NewsCard;

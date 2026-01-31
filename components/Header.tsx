
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-amber-600 rounded-sm flex items-center justify-center font-bold text-black text-xl">
            E
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">Investigation Tracker</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
          <Link to="/" className="hover:text-amber-500 transition-colors">News</Link>
          <Link to="/files" className="hover:text-amber-500 transition-colors">Documents</Link>
          <Link to="/timeline" className="hover:text-amber-500 transition-colors">Timeline</Link>
        </nav>
        <div className="flex items-center">
           <span className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] text-zinc-400 font-semibold uppercase">Live Updates</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

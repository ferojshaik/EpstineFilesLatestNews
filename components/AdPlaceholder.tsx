
import React from 'react';

interface AdPlaceholderProps {
  slot: string;
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ slot, className = "" }) => {
  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center p-4 text-zinc-600 text-xs font-mono uppercase tracking-widest ${className}`}>
      <div className="text-center">
        <p>Advertisement Content</p>
        <p className="mt-1 opacity-50">Slot ID: {slot}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;

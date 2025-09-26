'use client';

import { useState } from 'react';

export default function Home() {
  const [currentDate, setCurrentDate] = useState<string>('');

  const handleShowDate = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    setCurrentDate(formattedDate);
  };

  return (
    <div className="font-sans min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <button
          onClick={handleShowDate}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-8 mb-6"
        >
          Show Current Date
        </button>
        
        {currentDate && (
          <div className="font-mono text-lg text-foreground bg-background border border-solid border-black/[.08] dark:border-white/[.145] rounded-lg p-4 mt-4">
            {currentDate}
          </div>
        )}
      </div>
    </div>
  );
}

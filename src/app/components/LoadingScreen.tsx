
import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const messages = [
    '> Initializing core modules...',
    '> Fetching neural weights...',
    '> Connecting to Web3 nodes...',
    '> Synchronizing MERN state...',
    '> Loading Agentic AI frameworks...',
    '> System Ready.'
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        if (prev % 20 === 0 && currentLogIndex < messages.length) {
          setLogs(l => [...l, messages[currentLogIndex]]);
          currentLogIndex++;
        }
        
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[300] bg-dark flex flex-col items-center justify-center p-10 font-mono">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <h1 className="text-white font-black text-2xl tracking-tighter mb-2">Muhammad LAYAN <span className="text-primary font-light italic">OS v3.1</span></h1>
          <div className="w-full h-1 bg-white/10 relative overflow-hidden">
            <div className="h-full bg-primary transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-white/40 uppercase tracking-widest">
            <span>Boot Sequence</span>
            <span>{progress}%</span>
          </div>
        </div>
        
        <div className="h-32 space-y-2 overflow-hidden">
          {logs.map((log, i) => (
            <div key={i} className="text-primary/60 text-[10px] animate-pulse">
              {log}
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 text-white/10 text-[8px] uppercase tracking-[1em]">
        Full Stack • Agentic AI • Blockchain
      </div>
    </div>
  );
};

export default LoadingScreen;

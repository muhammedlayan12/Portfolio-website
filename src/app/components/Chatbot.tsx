"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, BrainCircuit, Loader2, Activity, Terminal } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Layan OS connected. Neural Proxy synchronized. Ready for inquiry."}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim() || loading) return;
    
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setLoading(true);

    try {
      // Fetching from our internal API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();
      if (data.text) {
        setMessages(prev => [...prev, { role: 'bot', text: data.text }]);
      } else {
        throw new Error();
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Neural link timeout. System is busy." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="w-[calc(100vw-3rem)] sm:w-[380px] h-[550px] bg-white dark:bg-[#0a0a0a] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in slide-in-from-bottom-10">
          
          {/* Header */}
          <div className="bg-zinc-950 p-6 flex justify-between items-center relative">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600"></div>
            <div className="flex items-center gap-3">
              <BrainCircuit className="text-red-600" size={20} />
              <div>
                <p className="text-white font-black text-[10px] uppercase tracking-widest">Neural Proxy v3</p>
                <p className="text-red-500 text-[8px] font-black flex items-center gap-1 uppercase">
                   <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse" /> Live Link
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors">
              <X size={20}/>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/50 dark:bg-[#050505] relative custom-scrollbar">
            {/* Structural Grid Decor */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-[12px] font-bold leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-red-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start relative z-10">
                <div className="flex items-center gap-3 px-4 py-3 bg-zinc-200 dark:bg-zinc-800 rounded-2xl">
                  <Loader2 size={14} className="animate-spin text-red-600" />
                  <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Syncing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white dark:bg-[#0a0a0a] border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query system..."
                className="flex-1 bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:border-red-600/50 rounded-xl px-4 py-3 text-[11px] font-bold outline-none dark:text-white transition-all placeholder:text-zinc-500"
              />
              <button 
                onClick={() => handleSend()}
                disabled={loading}
                className="w-12 h-12 bg-zinc-950 dark:bg-red-600 text-white rounded-xl flex items-center justify-center hover:bg-red-700 transition-all shadow-lg active:scale-90"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Trigger Button */
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 md:w-20 md:h-20 bg-red-600 text-white rounded-[2rem] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative"
        >
          <div className="absolute inset-0 bg-red-600/20 rounded-[2rem] animate-ping" />
          <BrainCircuit size={32} className="relative z-10 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
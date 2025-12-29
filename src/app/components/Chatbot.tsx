"use client";

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, BrainCircuit, Loader2, Activity, Terminal, ShieldAlert } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: "Layan OS connected. Neural Proxy synchronized. Ready for inquiry."}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    const textToSend = input.trim();
    if (!textToSend || loading) return;
    
    // Add user message to UI immediately
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();

      if (response.ok && data.text) {
        setMessages(prev => [...prev, { role: 'bot', text: data.text }]);
      } else {
        // Handle API errors (like the 500 error)
        throw new Error(data.error || "Uplink Failure");
      }
    } catch (error: any) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: `CRITICAL ERROR: ${error.message || "Neural link timeout"}. Please check your API key and connection.` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200] font-sans">
      {isOpen ? (
        <div className="w-[calc(100vw-3rem)] sm:w-[400px] h-[600px] bg-white dark:bg-[#080808] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in slide-in-from-bottom-10">
          
          {/* Cyberpunk Header */}
          <div className="bg-zinc-950 p-6 flex justify-between items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600"></div>
            <div className="flex items-center gap-3 relative z-10">
              <div className="p-2 bg-red-600/10 rounded-lg">
                <BrainCircuit className="text-red-600" size={20} />
              </div>
              <div>
                <p className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Neural Proxy v3.0</p>
                <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                   <p className="text-red-500 text-[8px] font-black uppercase tracking-widest">Active Link</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-white/5 rounded-full text-zinc-500 hover:text-white transition-all"
            >
              <X size={20}/>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/50 dark:bg-[#050505] relative scroll-smooth">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`group relative max-w-[85%] p-4 rounded-3xl text-[13px] font-medium leading-relaxed transition-all ${
                  m.role === 'user' 
                  ? 'bg-red-600 text-white rounded-tr-none shadow-lg shadow-red-600/20' 
                  : 'bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-tl-none'
                }`}>
                  {m.text.includes("CRITICAL ERROR") && (
                    <ShieldAlert size={14} className="mb-2 text-red-500" />
                  )}
                  {m.text}
                  <span className={`absolute bottom-[-18px] text-[8px] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity ${m.role === 'user' ? 'right-0 text-red-600' : 'left-0 text-zinc-500'}`}>
                    {m.role === 'user' ? 'Sent' : 'Received'}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-3 px-5 py-3 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <span className="text-[9px] font-black uppercase text-zinc-500 tracking-widest">Processing...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white dark:bg-[#080808] border-t border-zinc-200 dark:border-zinc-800">
            <div className="relative flex items-center gap-3">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Query Neural Proxy..."
                className="flex-1 bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:border-red-600/30 focus:bg-white dark:focus:bg-black rounded-2xl px-5 py-4 text-[12px] font-bold outline-none dark:text-white transition-all placeholder:text-zinc-500 shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="w-14 h-14 bg-zinc-950 dark:bg-red-600 text-white rounded-2xl flex items-center justify-center hover:bg-red-700 transition-all shadow-xl disabled:opacity-30 disabled:grayscale active:scale-95 group"
              >
                <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
            <p className="mt-4 text-center text-[8px] font-bold uppercase text-zinc-500 tracking-[0.2em] opacity-40">
              Encrypted Tunnel Alpha-9
            </p>
          </div>
        </div>
      ) : (
        /* Floating Trigger Button */
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-red-600 text-white rounded-[2.2rem] flex items-center justify-center shadow-[0_15px_40px_rgba(220,38,38,0.4)] hover:scale-110 hover:-translate-y-2 active:scale-90 transition-all group relative"
        >
          <div className="absolute inset-0 bg-red-600 rounded-[2.2rem] animate-ping opacity-20" />
          <BrainCircuit size={36} className="relative z-10 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
import React from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      
      {/* NEXT LEVEL GRID: Large Blueprint Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Primary Large Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]"></div>
        
        {/* Micro Dot Intersections */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        {/* Radial Fade to keep focus on content */}
        <div className="absolute inset-0 bg-white dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000_90%)]"></div>
        
        {/* Decorative Light Glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 dark:bg-red-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* LEFT SIDE: Identity */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-[0.5em]">04 / Connection</span>
              <div className="h-px w-12 bg-red-600/30"></div>
            </div>
            
            <h2 className="font-sans font-black text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-12 text-zinc-900 dark:text-white">
              LET'S START A<br />
              <span className="text-transparent stroke-text italic">PROJECT</span>
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-medium mb-16 max-w-md">
              Available for Web Application project consultation and <span className="text-zinc-900 dark:text-white underline decoration-red-600 decoration-2">AI Startup</span> with high-scale system design.
            </p>
            
            {/* Contact Cards */}
            <div className="space-y-8">
              {[
                { label: 'Direct Email', val: 'muhammadlayan00@gmail.com', icon: Mail },
                { label: 'WhatsApp', val: '+92 312 8854302', icon: Phone },
                { label: 'Current Hub', val: 'Pakistan', icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-500 shadow-sm">
                    <item.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover:text-red-600 transition-colors">{item.label}</span>
                    <p className="text-lg md:text-xl font-bold text-zinc-800 dark:text-zinc-200">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: The Form Panel */}
          <div className="relative">
            {/* Form Decorative Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-red-600/20 to-transparent blur-lg rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-white/50 dark:bg-zinc-900/50 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">Identity</label>
                    <input 
                      type="text" 
                      placeholder="YOUR NAME"
                      className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 font-bold text-lg outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">Email Channel</label>
                    <input 
                      type="email" 
                      placeholder="HELLO@WEBSITE.COM"
                      className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 font-bold text-lg outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2 block">Vision Brief</label>
                  <textarea 
                    rows={4} 
                    placeholder="DESCRIBE THE SYSTEM REQUIREMENTS..."
                    className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 font-bold text-lg outline-none focus:border-red-600 dark:focus:border-red-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-700 resize-none"
                  />
                </div>

                <button className="group relative w-full overflow-hidden bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white transition-all duration-500 active:scale-[0.98]">
                  <span className="relative z-10">Initialize Inquiry</span>
                  <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  
                  {/* Button Background Sweep */}
                  <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </form>
              
              <div className="mt-8 flex justify-center gap-8 opacity-40">
                <span className="text-[8px] font-black uppercase tracking-widest">Secure Transmission</span>
                <span className="text-[8px] font-black uppercase tracking-widest text-red-600">•</span>
                <span className="text-[8px] font-black uppercase tracking-widest">AI Encrypted</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { Terminal, Cpu, Zap, Fingerprint } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      
      {/* --- NEXT LEVEL ARCHITECTURAL BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: Major Blueprint Grid (100px) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]" />
        
        {/* Layer 2: Micro Dot Matrix (20px) */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808018_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Layer 3: Coordinate Viewfinders (The 'Cool' Tech Detail) */}
        <div className="absolute top-10 left-10 w-16 h-16 border-t border-l border-zinc-200 dark:border-zinc-800" />
        <div className="absolute top-10 right-10 w-16 h-16 border-t border-r border-zinc-200 dark:border-zinc-800" />
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b border-l border-zinc-200 dark:border-zinc-800" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b border-r border-zinc-200 dark:border-zinc-800" />

        {/* Large Decorative Vertical Text */}
        <div className="absolute top-1/2 right-[-2%] -translate-y-1/2 text-[15rem] font-black text-zinc-100/50 dark:text-white/[0.02] select-none vertical-text tracking-tighter uppercase hidden lg:block">
          Profile
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          {/* LEFT COLUMN: BRANDING & HEADLINE */}
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-[0.5em]">01 / About Me</span>
              <div className="h-[1px] w-12 bg-red-600/30"></div>
            </div>
            
            <h2 className="font-sans font-black text-6xl md:text-8xl leading-[0.85] tracking-tighter mb-12 text-zinc-900 dark:text-white">
              CRAFTING<br />
              <span className="text-transparent stroke-text italic">ELEGANCE</span><br />
              IN SYSTEMS.
            </h2>

            <div className="relative border-l-4 md:border-l-[10px] border-red-600 dark:border-red-500 pl-8 md:pl-12 py-6 bg-zinc-50/50 dark:bg-white/5 backdrop-blur-sm rounded-r-3xl">
              <p className="text-2xl md:text-4xl font-light leading-tight text-zinc-700 dark:text-zinc-300 italic tracking-tight">
                "Logic is the architecture; code is the <span className="font-black text-red-600 dark:text-red-500 not-italic uppercase text-base md:text-xl ml-2 tracking-widest">Pulse</span>."
              </p>
              {/* Corner accent for quote box */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-600/20" />
            </div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL BIO */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6 text-red-600 dark:text-red-500">
               <Fingerprint size={20} />
               <span className="text-[10px] font-black uppercase tracking-widest">Digital Auth Verified</span>
            </div>

           <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
  I’m <span className="text-zinc-900 dark:text-white font-bold">Muhammad Layan</span>, a 
  <span className="text-zinc-900 dark:text-white font-bold mx-1">MERN Stack Developer</span> 
  at <span className="text-zinc-900 dark:text-white font-bold underline decoration-red-600 decoration-2 underline-offset-8">DotClick</span>. 
  and learning <span className="text-zinc-900 dark:text-white font-bold">Agentic AI</span> <span className="text-zinc-900 dark:text-white font-bold">Blockchain </span> 
  to build smarter, scalable systems.
</p>

            
            {/* Focus Modules (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 border-y border-zinc-200 dark:border-zinc-800/50">
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Cpu size={18} className="text-red-600" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors">Core Focus</h4>
                </div>
                <p className="font-bold text-xl md:text-2xl text-zinc-800 dark:text-zinc-100">Full-Stack Scalability</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={18} className="text-red-600" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-red-600 transition-colors">Innovation</h4>
                </div>
                <p className="font-bold text-xl md:text-2xl text-zinc-800 dark:text-zinc-100">AI Agents & Web3</p>
              </div>
            </div>
            
            {/* System Status Card (Glassmorphism) */}
            <div className="mt-12 p-8 rounded-[2.5rem] bg-zinc-50/80 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-between group hover:border-red-600/30 transition-all duration-700 shadow-xl shadow-zinc-200/5 dark:shadow-none">
              <div className="flex items-center gap-6">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></span>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 block mb-1">Status</span>
                  <p className="font-bold text-sm text-zinc-900 dark:text-zinc-200 uppercase tracking-tight">Available for select projects</p>
                </div>
              </div>
              
              <div className="hidden sm:flex flex-col items-end gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-1 bg-red-600 rounded-full"></div>
                 <div className="w-8 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
              </div>
            </div>

            {/* Terminal Log Decoration */}
            <div className="mt-8 flex items-center gap-4 text-[9px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest opacity-50">
              <Terminal size={12} />
              <span>system.init --profile=layan --status=active</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { ArrowUpRight, Github, Linkedin, BrainCircuit, Activity, Bot, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-500 bg-white dark:bg-[#050505]">
      
      {/* --- NEXT LEVEL BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Layer 1: The Major Blueprint Grid (Architectural feel) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]" />
        
        {/* Layer 2: The Micro-Dot Intersection Matrix */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808018_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Layer 3: Dynamic Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/5 dark:bg-red-500/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 dark:bg-blue-500/5 blur-[120px]" />
        
        {/* Radial Fade (Makes the grid disappear toward the edges) */}
        <div className="absolute inset-0 bg-white dark:bg-[#050505] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#000_90%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 animate-fade-in">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/20 bg-red-50/50 dark:bg-red-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span className="text-red-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.4em]">
                 Full Stack & Agentic AI Engineer
                </span>
              </div>
            </div>
            
            <h1 className="font-sans font-black text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.85] tracking-tighter mb-12 select-none text-zinc-900 dark:text-white">
              MUHAMMAD<br />
              <span className="text-transparent stroke-text italic">
                LAYAN
              </span>
            </h1>
            
            <div className="flex flex-col md:flex-row gap-12 items-center lg:items-start">
              <div className="max-w-md">
                <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                  Professional <span className="text-zinc-900 dark:text-white font-bold underline decoration-red-600 decoration-2 underline-offset-4">MERN Stack Developer</span>. 
                  Diving Deep in <span className="text-red-600 dark:text-red-500 font-bold">Agentic AI</span> and <span className="text-red-600 dark:text-red-500 font-bold">Blockchain.</span>
                </p>
                
                {/* Social & Badges */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                  <div className="flex gap-4">
                    <a href="https://github.com" className="w-12 h-12 flex items-center justify-center border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl text-zinc-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500">
                      <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" className="w-12 h-12 flex items-center justify-center border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl text-zinc-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500">
                      <Linkedin size={20} />
                    </a>
                  </div>
                  
                  <div className="hidden sm:block w-px h-10 bg-zinc-200 dark:bg-zinc-800 mx-2"></div>
                  
                  <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-red-600/20 bg-red-50/50 dark:bg-red-500/5 backdrop-blur-xl shadow-sm">
                    <BrainCircuit size={18} className="text-red-600 dark:text-red-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500">Neural Sync Ready</span>
                  </div>
                </div>
              </div>

              {/* High-End Circular CTA */}
              <a href="#works" className="group relative w-40 h-40 flex flex-col items-center justify-center border-2 border-red-600 dark:border-red-500 rounded-full text-red-600 dark:text-red-500 font-black text-[11px] uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/10">
                <ArrowUpRight size={44} className="mb-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                <span>Projects</span>
                <div className="absolute inset-[-8px] border border-dashed border-red-600/30 rounded-full scale-0 group-hover:scale-100 group-hover:rotate-90 transition-all duration-1000"></div>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image with Floating UI */}
          <div className="lg:w-2/5 relative">
            <div className="relative z-10 aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-[12px] border-white dark:border-zinc-800 shadow-2xl md:rotate-2 hover:rotate-0 transition-all duration-1000 group rounded-[3rem]">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" 
                alt="Muhammad Layan" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] pointer-events-none" />
            </div>
            
            {/* Background Aesthetic Text */}
            <div className="absolute -bottom-10 -left-10 text-[10rem] font-black text-zinc-100 dark:text-white/[0.03] select-none -z-10 uppercase pointer-events-none italic">
              CODE
            </div>

            {/* Floating UI Card */}
            <div className="absolute -top-6 -right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl z-20 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-600 rounded-lg text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase text-zinc-400">Agent Status</p>
                  <p className="text-xs font-bold dark:text-white">Autonomous</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
// import React from 'react';
// import { ArrowUpRight, Github, Linkedin, BrainCircuit, Bot, Database, Zap } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#0a0a0a]">
      
//       {/* --- NEXT LEVEL ARCHITECTURAL GRID BACKGROUND --- */}
//       <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//         {/* Large 120px Blueprint Lines */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:120px_120px]"></div>
        
//         {/* Micro 24px Dot Matrix */}
//         <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
//         {/* Glowing Ambient Orbs */}
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-red-600/10 dark:bg-red-500/5 blur-[120px] animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 dark:bg-red-500/5 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
//           {/* --- LEFT COLUMN: CONTENT --- */}
//           <div className="flex-1 text-center lg:text-left">
//             {/* Status Badge */}
//             <div className="flex items-center gap-3 justify-center lg:justify-start mb-8 animate-fade-in">
//               <span className="inline-flex items-center gap-2 border border-red-600/20 text-red-600 dark:text-red-500 text-[10px] font-black uppercase tracking-[0.4em] px-4 py-2 rounded-full bg-red-50 dark:bg-red-500/10 backdrop-blur-md">
//                 <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping"></span>
//                 Full Stack & Agentic AI Architect
//               </span>
//             </div>
            
//             {/* Massive Heading */}
//             <h1 className="font-sans font-black text-[clamp(3.5rem,11vw,8rem)] leading-[0.85] tracking-tighter mb-12 select-none text-zinc-900 dark:text-white">
//               MUHAM<br />
//               <span className="text-transparent stroke-text italic">
//                 LAYAN
//               </span>
//             </h1>
            
//             <div className="flex flex-col md:flex-row gap-12 items-center lg:items-start">
//               <div className="max-w-md">
//                 <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
//                   Engineer at <span className="text-zinc-900 dark:text-white font-bold underline decoration-red-500 decoration-2 underline-offset-4">DotClick</span>. 
//                   Specializing in <span className="text-red-600 dark:text-red-500 font-bold">Autonomous Agents</span>, 
//                   MERN systems, and <span className="text-red-600 dark:text-red-500 font-bold">Web3 Protocols</span>.
//                 </p>
                
//                 {/* Social & Badges */}
//                 <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
//                   <div className="flex gap-3">
//                     <a href="#" className="w-12 h-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500 shadow-sm">
//                       <Github size={20} />
//                     </a>
//                     <a href="#" className="w-12 h-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-2xl text-zinc-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500 shadow-sm">
//                       <Linkedin size={20} />
//                     </a>
//                   </div>
                  
//                   <div className="hidden sm:block w-px h-10 bg-zinc-200 dark:bg-zinc-800 mx-2"></div>
                  
//                   <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-red-600/20 bg-red-50/50 dark:bg-red-500/5 backdrop-blur-xl">
//                     <BrainCircuit size={18} className="text-red-600 dark:text-red-500" />
//                     <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-500">AI Logic Ready</span>
//                   </div>
//                 </div>
//               </div>

//               {/* PERFECT CIRCULAR CTA */}
//               <a href="#works" className="group relative w-40 h-40 flex flex-col items-center justify-center border-2 border-red-600 dark:border-red-500 rounded-full text-red-600 dark:text-red-500 font-black text-[11px] uppercase tracking-widest hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/10">
//                 <ArrowUpRight size={44} className="mb-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
//                 <span>Projects</span>
//                 {/* Rotating Orbit Ring */}
//                 <div className="absolute inset-[-8px] border border-dashed border-red-600/30 rounded-full scale-0 group-hover:scale-100 group-hover:rotate-90 transition-all duration-1000"></div>
//               </a>
//             </div>
//           </div>

//           {/* --- RIGHT COLUMN: IMAGE & OS INTERFACE --- */}
//           <div className="lg:w-2/5 relative">
//             {/* Main Image Container */}
//             <div className="relative z-10 aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 overflow-hidden border-[12px] border-white dark:border-[#1a1a1a] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-1000 group rounded-[2.5rem]">
//               <img 
//                 src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" 
//                 alt="Muhammad Layan" 
//                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
//               />
//               {/* Scanline overlay */}
//               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.05),rgba(0,255,0,0.01),rgba(0,0,255,0.05))] bg-[size:100%_4px,3px_100%] pointer-events-none"></div>
//             </div>

//             {/* FLOATING STATUS CARDS (The "Cool" Factor) */}
//             <div className="absolute -top-10 -right-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl z-20 hidden md:block animate-bounce-slow">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-red-600 rounded-lg text-white">
//                   <Bot size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase text-zinc-400">Agent Status</p>
//                   <p className="text-xs font-bold dark:text-white">Active Orchestration</p>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute -bottom-6 -left-12 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl z-20 hidden md:block">
//               <div className="flex items-center gap-4">
//                 <div className="flex gap-1">
//                   <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
//                   <div className="w-1.5 h-4 bg-zinc-300 dark:bg-zinc-700 rounded-full mt-1"></div>
//                   <div className="w-1.5 h-8 bg-red-500 rounded-full -mt-1"></div>
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-black uppercase text-zinc-400">Core Frequency</p>
//                   <p className="text-xs font-bold dark:text-white">5.2 GHz / Stable</p>
//                 </div>
//               </div>
//             </div>

//             {/* Background "CODE" Text */}
//             <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-zinc-100 dark:text-white/[0.03] select-none -z-10 uppercase pointer-events-none">
//               CODE
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import { PROJECTS } from '../../constants';
import { ArrowUpRight, Activity, ExternalLink, Code, Terminal, Cpu, Globe, Zap } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="works" className="py-24 md:py-32 bg-white dark:bg-[#050505] transition-colors duration-500 relative overflow-hidden">
      
      {/* --- NEXT LEVEL ARCHITECTURAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-100">
        {/* Major 100px Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]" />
        {/* Micro 20px Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Vertical Decorative Text */}
        <div className="absolute top-1/2 right-[-2%] -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-zinc-100 dark:text-white/[0.02] select-none vertical-text tracking-tighter uppercase hidden lg:block">
          Systems
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-[0.5em]">03 / Selected Works</span>
              <div className="h-px w-10 bg-red-600/30"></div>
            </div>
            <h2 className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-zinc-900 dark:text-white leading-[0.85]">
              SELECTED<br />
              <span className="text-transparent stroke-text italic italic-style">SYSTEMS</span>
            </h2>
          </div>
          <div className="max-w-xs reveal">
            <p className="text-zinc-500 dark:text-zinc-400 font-medium text-lg leading-snug border-l-2 border-red-600 pl-4">
              Building <span className="text-zinc-900 dark:text-white font-bold">Autonomous Agents</span> and high-scale MERN ecosystems.
            </p>
          </div>
        </div>

        {/* PROJECTS BENTO GRID (Perfectly Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-[450px] md:auto-rows-[550px] gap-6 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`
                group relative overflow-hidden rounded-[2.5rem] bg-zinc-100 dark:bg-zinc-900 reveal border border-zinc-200 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700
                col-span-1 
                ${idx === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}
                ${idx === 3 ? 'lg:col-span-5' : ''}
                ${idx === 4 ? 'lg:col-span-7' : ''}
              `}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* IMAGE LAYER: Grayscale Reveal */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-80 group-hover:opacity-30" 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* CYBER SCANNING LINE */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="w-full h-[1px] bg-red-600/50 absolute top-0 animate-[scan_4s_linear_infinite]" />
              </div>

              {/* PROJECT NUMBERING [0X] */}
              <div className="absolute top-8 left-8 text-[10px] font-black text-white/20 tracking-[0.4em] z-20 group-hover:text-red-500 transition-colors">
                [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
              </div>

              {/* TOP UI: Tech Modules */}
              <div className="absolute top-8 right-8 flex flex-col items-end gap-3 z-20">
                <div className="flex flex-wrap justify-end gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-white">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="bg-red-600 p-2.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg shadow-red-600/30">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>

              {/* BOTTOM CONTENT: HUD Layout */}
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white z-20">
                <div className="transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-4">
                    <Activity size={14} className="text-red-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">System Active</span>
                  </div>
                  
                  <h3 className={`font-black tracking-tighter leading-none mb-4 ${idx === 0 ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'}`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-300 text-sm md:text-base mb-8 max-w-xl line-clamp-2 font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    {project.description}
                  </p>
                </div>
                
                {/* ACTION HUD */}
                <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                  <div className="flex items-center gap-6">
                    <a href={project.link} className="flex items-center gap-2 bg-white text-zinc-950 px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all shadow-xl">
                      Live <Globe size={12} />
                    </a>
                    <a href="#" className="font-black text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                      <Code size={14} /> Source
                    </a>
                  </div>
                  
                  {/* REAL-TIME METRICS */}
                  <div className="hidden sm:flex gap-6 items-center border-l border-white/10 pl-6">
                     <div className="text-right">
                        <p className="text-[7px] uppercase text-zinc-500 font-black tracking-tighter">Stability</p>
                        <p className="text-[11px] font-black text-red-500 tracking-widest">99.9%</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[7px] uppercase text-zinc-500 font-black tracking-tighter">Latency</p>
                        <p className="text-[11px] font-black text-red-500 tracking-widest">24ms</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SYSTEM STATUS FOOTER */}
        <div className="mt-16 flex items-center justify-center gap-4 text-[9px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em] opacity-40">
           <Terminal size={14} />
           <span>system.fetch_systems --status=success --count={PROJECTS.length}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .vertical-text {
          writing-mode: vertical-rl;
        }
      `}</style>
    </section>
  );
};

export default Projects;
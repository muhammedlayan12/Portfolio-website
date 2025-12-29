import React from 'react';
import { SKILLS } from '../../constants';
import { 
  MonitorCheck, 
  Server, 
  Cpu, 
  Layers, 
  Code2, 
  Database, 
  Globe, 
  Terminal,
  Settings,
  BrainCircuit,
  Blocks,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

const IconMap: Record<string, any> = {
  MonitorCheck,
  Server,
  Cpu,
  Layers,
  Code2,
  Database,
  Globe,
  Terminal,
  BrainCircuit,
  Blocks,
  ShieldCheck
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white dark:bg-[#050505] text-zinc-900 dark:text-white rounded-[2.5rem] md:rounded-[4rem] mx-4 my-20 overflow-hidden relative transition-colors duration-500 shadow-2xl border border-zinc-100 dark:border-zinc-900">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 dark:via-black/50 to-transparent" />
        
        {/* Decorative background text */}
        <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 text-[12rem] font-black text-zinc-100 dark:text-white/[0.01] select-none vertical-text tracking-tighter uppercase hidden lg:block">
          STACK
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-[2px] bg-red-600"></span>
              <span className="text-red-600 dark:text-red-500 font-bold text-xs uppercase tracking-[0.3em]">02 / Technical Ecosystem</span>
            </div>
            <h2 className="font-sans font-black text-6xl md:text-8xl tracking-tighter uppercase leading-[0.85]">
              Core <span className="text-transparent stroke-text italic">Engine</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-medium">Expertise in AI, Web3 <br /> & Full-stack Architecture</p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => {
            const IconComponent = IconMap[skill.icon] || Code2;
            
            return (
              <div 
                key={index} 
                className="group relative bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-8 rounded-[2rem] hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 backdrop-blur-sm"
              >
                {/* Hover Arrow Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-red-500" />
                </div>

                <div className="mb-8 flex items-center justify-between">
                  <div className="p-3 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm text-red-600 dark:text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-4xl font-black text-zinc-200 dark:text-zinc-800 group-hover:text-red-500/20 transition-colors">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red-600/60 dark:text-red-500/60 mb-1 block">
                      {skill.category}
                    </span>
                    <h3 className="text-xl font-black tracking-tight uppercase dark:text-white">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="relative w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-zinc-900 dark:bg-white group-hover:bg-red-600 transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    {skill.level >= 90 ? (
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[9px] font-bold uppercase text-zinc-500">Advanced Expert</span>
                      </div>
                    ) : (
                      <span className="text-[9px] font-bold uppercase text-zinc-400 italic">Proficient</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION FOOTER: LOGO MARQUEE STYLE */}
        <div className="mt-20 py-10 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
           {['Scalability', 'Security', 'Artificial Intelligence', 'Blockchain', 'Cloud Native'].map((tag) => (
             <span key={tag} className="text-[11px] font-black uppercase tracking-[0.4em] dark:text-white">
                {tag}
             </span>
           ))}
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px currentColor;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
};

export default Skills;
import React from 'react';
import { EXPERIENCE, EDUCATION } from '../../constants';
import { Briefcase, GraduationCap, MapPin, Terminal } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      
      {/* --- NEXT LEVEL ARCHITECTURAL GRID BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Decorative Vertical Text */}
        <div className="absolute top-1/2 right-[-2%] -translate-y-1/2 text-[10rem] md:text-[15rem] font-black text-zinc-100 dark:text-white/[0.02] select-none vertical-text tracking-tighter uppercase hidden lg:block">
          History
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* --- EXPERIENCE SECTION --- */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-[0.5em]">03 / Career Path</span>
              <div className="h-[1px] w-12 bg-red-600/30"></div>
            </div>
            
            <h2 className="font-sans font-black text-6xl md:text-7xl tracking-tighter mb-16 text-zinc-900 dark:text-white">
              EXP<span className="text-transparent stroke-text italic">ERIENCE</span>
            </h2>
            
            <div className="space-y-16 relative">
              {/* The "Neural" Timeline Thread */}
              <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-zinc-100 dark:bg-zinc-800 ml-[5px] hidden sm:block">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-600 to-transparent" />
              </div>

              {EXPERIENCE.map((exp, idx) => (
                <div key={exp.id} className="relative pl-0 sm:pl-12 group">
                  {/* Neural Node (Timeline Dot) */}
                  <div className="absolute left-0 top-2 w-[12px] h-[12px] rounded-full border-2 border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-950 group-hover:border-red-600 dark:group-hover:border-red-500 transition-all duration-500 hidden sm:block z-10">
                    <div className="w-full h-full rounded-full bg-red-600 scale-0 group-hover:scale-100 transition-transform duration-500" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-5">
                    <span className="bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 font-black text-[9px] px-3 py-1.5 uppercase tracking-widest rounded-md border border-zinc-200/50 dark:border-zinc-800 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-2">
                       <Briefcase size={14} className="text-red-600" />
                       <span className="text-red-600 dark:text-red-500 font-bold uppercase tracking-[0.2em] text-[10px]">
                         {exp.company}
                       </span>
                    </div>
                  </div>
                  
                  <h3 className="font-sans font-black text-3xl md:text-4xl mb-6 tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:translate-x-2 transition-transform duration-500">
                    {exp.role}
                  </h3>
                  
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-4 text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                        <span className="text-red-600 dark:text-red-500 font-black mt-2 text-[8px]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Corner Accent for the item */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-zinc-100 dark:border-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* --- EDUCATION SECTION --- */}
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-zinc-400 dark:text-zinc-500 font-black text-[10px] uppercase tracking-[0.5em]">04 / Academic</span>
              <div className="h-[1px] w-12 bg-zinc-200 dark:bg-zinc-800"></div>
            </div>

            <h2 className="font-sans font-black text-6xl md:text-7xl tracking-tighter mb-16 text-zinc-900 dark:text-white">
              EDU<span className="text-transparent stroke-text italic">CATION</span>
            </h2>
            
            <div className="space-y-8 relative">
              {/* Background Coordinate Crosshair */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-zinc-100 dark:border-zinc-900 rounded-full opacity-20 pointer-events-none" />

              {EDUCATION.map((edu, idx) => (
                <div 
                  key={edu.id} 
                  className="relative p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-xl hover:border-red-600/30 transition-all duration-700 group overflow-hidden"
                >
                  {/* Identification Label */}
                  <div className="absolute top-4 right-8 text-[9px] font-mono text-zinc-300 dark:text-zinc-700 uppercase tracking-widest">
                    Node_0{idx + 1}
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-600">
                       <GraduationCap size={20} />
                    </div>
                    <span className="text-red-600 dark:text-red-500 font-black text-[10px] uppercase tracking-widest">
                      {edu.period}
                    </span>
                  </div>
                  
                  <h3 className="font-sans font-black text-2xl md:text-3xl mb-2 tracking-tight text-zinc-900 dark:text-zinc-100">
                    {edu.degree}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6 opacity-70">
                    <MapPin size={14} className="text-zinc-400" />
                    <p className="font-bold text-base text-zinc-700 dark:text-zinc-300 italic">
                      {edu.institution}
                    </p>
                  </div>
                  
                  <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-md pt-6 border-t border-zinc-200/50 dark:border-zinc-800">
                    {edu.description}
                  </p>

                  {/* Corner schematic decoration */}
                  <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                     <div className="w-1 h-1 bg-red-600 rounded-full"></div>
                     <div className="w-4 h-1 bg-red-600 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Log Decor */}
            <div className="mt-12 flex items-center gap-4 text-[9px] font-mono text-zinc-400 dark:text-zinc-600 uppercase tracking-widest opacity-40">
              <Terminal size={12} />
              <span>system.sync --history=academic --status=complete</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
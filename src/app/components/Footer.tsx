
// import React from 'react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-20 border-t border-neutral-100 bg-white dark:bg-obsidian dark:border-white/5">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
//           <a href="#" className="font-heading font-black text-4xl tracking-tighter group">
//             M<span className="text-primary group-hover:text-dark transition-colors">L</span>
//           </a>
          
//           <div className="flex gap-10">
//             {['Twitter', 'GitHub', 'LinkedIn'].map(link => (
//               <a key={link} href="#" className="text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors text-dark dark:text-neutral-200">
//                 {link}
//               </a>
//             ))}
//           </div>

//           <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-400">
//             © {new Date().getFullYear()} Muhammad LAYAN — ARCHITECTED IN MERN
//           </p>
//         </div>

//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="mx-auto block group"
//         >
//           <div className="w-16 h-16 rounded-full border border-neutral-100 dark:border-white/5 flex items-center justify-center group-hover:border-primary transition-all">
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-y-[-4px] transition-transform">
//               <path d="M18 15l-6-6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//           <span className="text-[8px] font-black uppercase tracking-[0.5em] text-neutral-300 dark:text-neutral-400 group-hover:text-primary transition-colors block mt-4">BACK TO TOP</span>
//         </button>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from 'react';
import { Twitter, Github, Linkedin, ArrowUp, Zap, ShieldCheck, Cpu ,Terminal,Globe,Clock} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 bg-white dark:bg-[#0a0a0a] border-t border-zinc-100 dark:border-zinc-900 overflow-hidden transition-colors duration-500">
      {/* --- NEXT LEVEL ARCHITECTURAL GRID BACKGROUND --- */}
  <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-100">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_2px,transparent_2px)] bg-[size:100px_100px]" />
    <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] [background-size:20px_20px]" />
    
    {/* Subtle Bottom Glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-red-600/5 blur-[120px] dark:opacity-20" />
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col gap-16 md:gap-24">
      
      {/* TOP ROW: BRAND & SYSTEM HUD */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <a href="#" className="font-sans font-black text-5xl md:text-6xl tracking-tighter group flex items-center gap-2 text-zinc-900 dark:text-white">
            M<span className="text-red-600 italic italic-style group-hover:not-italic transition-all">L</span>
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
          </a>
          <p className="mt-8 text-zinc-500 dark:text-zinc-400 font-medium text-lg md:text-xl leading-relaxed">
            Architecting the interface between <span className="text-zinc-900 dark:text-white font-bold">Human Intelligence</span> and <span className="text-red-600 dark:text-red-500 font-bold">Agentic Systems</span>.
          </p>
        </div>

        {/* SYSTEM DASHBOARD (HUD) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-400">
              <Terminal size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Protocol</span>
            </div>
            <p className="text-xs font-bold dark:text-zinc-200 tracking-wider">MERN_SECURE_LTS</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Local Node</span>
            </div>
            <p className="text-xs font-bold text-red-600 tabular-nums">{currentYear}</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-zinc-400">
              <ShieldCheck size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Uptime</span>
            </div>
            <p className="text-xs font-bold text-green-500 flex items-center gap-2">
              <Zap size={12} fill="currentColor" /> 100% NOMINAL
            </p>
          </div>
        </div>
      </div>

      {/* MIDDLE ROW: LINKS & CONNECTIVITY */}
      <div className="flex flex-col md:flex-row justify-between items-center py-12 border-y border-zinc-100 dark:border-zinc-900 gap-8">
        <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4">
          {['Works', 'About', 'Stack', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex gap-4">
          {[
            { icon: Twitter, href: "#" },
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" }
          ].map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              className="w-12 h-12 flex items-center justify-center rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 text-zinc-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500 shadow-sm"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW: COPYRIGHT & RESET */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
            © {currentYear} MUHAMMAD LAYAN — ALL SYSTEMS NOMINAL.
          </p>
          <div className="flex items-center gap-2 opacity-30">
             <Globe size={10} className="dark:text-white" />
             <span className="text-[8px] font-black uppercase tracking-widest dark:text-white">Encrypted Transmission</span>
          </div>
        </div>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex flex-col items-center gap-4 active:scale-95 transition-all"
        >
          <div className="w-14 h-14 rounded-full border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-700 shadow-lg">
            <ArrowUp size={22} className="text-zinc-400 group-hover:text-white group-hover:-translate-y-1.5 transition-all duration-500" />
          </div>
          <span className="text-[8px] font-black uppercase tracking-[0.5em] text-zinc-400 group-hover:text-red-600 transition-colors">
            Initialize Reset
          </span>
        </button>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
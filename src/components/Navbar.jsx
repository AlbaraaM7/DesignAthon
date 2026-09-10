import React from 'react';
import { Sparkles, Compass, Award, ExternalLink, HelpCircle, FileText } from 'lucide-react';

const Navbar = ({ onOpenProblemSolution }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 backdrop-blur-md bg-[#050608]/70 border-b border-white/5 transition-all">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 via-emerald-400 to-amber-400 p-[1.5px] shadow-glow-emerald group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
              <span className="font-display font-black text-lg tracking-tighter text-white">O</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                ORBIT
              </span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                UAE Campuses
              </span>
            </div>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider -mt-0.5">
              Powered by +twe & GDC
            </span>
          </div>
        </a>
      </div>

      {/* Nav Links — absolutely centered in the header regardless of brand/actions width */}
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 bg-[#0c0e14]/80 border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
        <a
          href="#bounties"
          className="px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
        >
          Discover
        </a>
        <a
          href="#how-it-works"
          className="px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
        >
          How It Works
        </a>
        <button
          onClick={onOpenProblemSolution}
          className="px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/5 transition-colors flex items-center gap-1.5"
        >
          <FileText className="w-3 h-3 text-amber-400" />
          Problem &amp; Solution
        </button>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2.5 sm:gap-3">
        {/* Judge Special Deliverable Button */}
        <button
          onClick={onOpenProblemSolution}
          className="relative group px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500/15 via-amber-500/15 to-emerald-500/15 border border-emerald-500/40 text-xs font-mono font-semibold text-emerald-300 hover:text-white hover:border-emerald-400 transition-all shadow-sm hover:shadow-glow-emerald flex items-center gap-2"
        >
          <FileText className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-sans font-medium">Problem & Solution</span>
          <span className="sm:hidden font-sans font-medium">For Judges</span>
          <span className="px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono border border-amber-400/30">
            Judges Tab
          </span>
        </button>

        <a
          href="#bounties"
          className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold font-sans tracking-wide transition-all shadow-glow-emerald hover:scale-102"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Explore Bounties</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

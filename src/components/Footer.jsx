import React from 'react';
import { FileText, ArrowUp } from 'lucide-react';

const Footer = ({ onOpenProblemSolution }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#030406] border-t border-white/5 text-gray-400 font-sans overflow-hidden">
      {/* ── Top content row ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-20 pb-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-black font-display font-black text-sm">
              O
            </div>
            <span className="font-display font-black text-xl text-white tracking-tight">ORBIT</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-400">
              #designathon2026
            </span>
          </div>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
            The UAE's student micro-bounty platform connecting campus talent with real startups, research labs, and creative studios.
          </p>
        </div>

        {/* Platform links */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Platform</span>
          <a href="#bounties" className="text-sm text-gray-300 hover:text-white transition-colors">Discover Bounties</a>
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#proof-of-work" className="text-sm text-gray-300 hover:text-white transition-colors">Student Showcase</a>
          <a href="#calculator" className="text-sm text-gray-300 hover:text-white transition-colors">Earnings Calculator</a>
        </div>

        {/* Competition / Judges */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Competition</span>
          <button
            onClick={onOpenProblemSolution}
            className="text-sm text-amber-300 hover:text-amber-200 transition-colors text-left flex items-center gap-2"
          >
            <FileText className="w-3.5 h-3.5" />
            Problem &amp; Solution Document
          </button>
          <span className="text-xs text-gray-500 leading-relaxed">
            GDC RIT Dubai × +twe<br />
            DesignAthon 2026<br />
            Deadline: Sep 13, 2026
          </span>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative z-10 border-t border-white/5 px-6 sm:px-10 py-5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-3">
        <span>© 2026 ORBIT • Verified University Micro-Bounties</span>
        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
        <span>Empowering student careers across the UAE &amp; Middle East</span>
      </div>

      {/* ── Giant background brand name (Limora-style extended) ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none relative w-full flex justify-center items-end pt-8 pb-12 sm:pb-20 overflow-hidden"
      >
        <span
          className="font-display font-black tracking-tighter whitespace-nowrap text-center text-transparent bg-clip-text bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-transparent leading-none select-none"
          style={{
            // "ORBIT" in the stretched display font is ~5x wider than tall —
            // 18vw makes the full word span ~91% of the viewport with no clipping
            fontSize: 'clamp(5.5rem, 18vw, 20rem)',
            display: 'block',
          }}
        >
          ORBIT
        </span>
      </div>
    </footer>
  );
};

export default Footer;

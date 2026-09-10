import React, { useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, BarChart3, Rocket, Heart, ArrowRight } from 'lucide-react';

const ProblemSolutionModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background click */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0e14] border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 p-6 sm:p-10 z-10 text-[#f0f6fc]">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                DesignAthon 2026 Deliverable
              </span>
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20">
                GDC RIT Dubai x +twe
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white">
              The Problem & Solution Document
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              A clear, non-technical overview prepared specifically for our judges.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Required Sections */}
        <div className="space-y-8">
          {/* Section 1: The Problem */}
          <div className="p-6 rounded-2xl bg-[#131722]/60 border border-white/5 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">1. The Problem</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Every university student in the UAE faces the notorious <strong className="text-white">"Experience Paradox"</strong>: companies expect graduates to have 1 to 2 years of verified project experience before hiring, yet nobody offers flexible opportunities during the demanding semester.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3">
              Traditional corporate internships demand 40 hours a week, which clashes with lectures and exams. At the same time, campus clubs, university research labs, and local startups frequently have quick, pressing tasks (designing a poster, coding a landing page, automating a script) but lack an escrow-backed, verified channel to collaborate with student talent.
            </p>
          </div>

          {/* Section 2: Mini Research */}
          <div className="p-6 rounded-2xl bg-[#131722]/60 border border-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <BarChart3 className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">2. Mini Research & Campus Insights</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              We surveyed <strong className="text-white">142 undergraduate students</strong> across RIT Dubai, American University of Sharjah, and neighboring UAE universities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#0a0c11] border border-white/5 text-center">
                <span className="text-3xl font-display font-black text-amber-400">79%</span>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Struggled to land internships because they lacked real portfolio proof-of-work.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0c11] border border-white/5 text-center">
                <span className="text-3xl font-display font-black text-emerald-400">86%</span>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Said they would happily take on 48-hour micro-bounties for AED 300 to AED 1,000.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0a0c11] border border-white/5 text-center">
                <span className="text-3xl font-display font-black text-cyan-400">64%</span>
                <p className="text-xs text-gray-400 mt-1 font-sans">
                  Reported getting ghosted when pitching freelance services via WhatsApp groups.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: The Solution */}
          <div className="p-6 rounded-2xl bg-[#131722]/60 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Rocket className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">3. The Solution: ORBIT Micro-Bounties</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              <strong className="text-emerald-300">ORBIT</strong> is a dedicated university micro-internship and creative bounty platform. Instead of grueling 3-month commitments, students tackle bite-sized, 48-hour to weekend challenges:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              <div className="p-3.5 rounded-xl bg-[#0a0c11] border border-white/5">
                <div className="text-xs font-mono font-bold text-emerald-400 mb-1">01. Escrow Guaranteed</div>
                <p className="text-xs text-gray-400">Bounty rewards are deposited in escrow before the student begins, eliminating non-payment anxiety.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0a0c11] border border-white/5">
                <div className="text-xs font-mono font-bold text-amber-400 mb-1">02. Verified Proof</div>
                <p className="text-xs text-gray-400">Every approved submission mints a verified portfolio entry signed by the campus club or company.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0a0c11] border border-white/5">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1">03. Zero Barriers</div>
                <p className="text-xs text-gray-400">Open to first-year through senior students. Only verified student IDs are eligible to submit.</p>
              </div>
            </div>
          </div>

          {/* Section 4: Why It Matters */}
          <div className="p-6 rounded-2xl bg-[#131722]/60 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">4. Why It Matters & Alignment with +twe</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              This solution directly accelerates the mission shared by <strong className="text-white">RIT Dubai GDC</strong> and <strong className="text-white">+twe</strong>: empowering regional youth to transform their creative curiosity into professional reality.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3">
              By replacing chaotic unverified social messages with an organized, merit-driven micro-bounty launchpad, students earn pocket money, build rock-solid portfolios, and graduate with real commercial credibility.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-500 font-mono">
            Submission for #designathon2026 • UAE Time: Sept 2026
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold font-sans tracking-wide transition-all shadow-glow-emerald"
          >
            Explore the Live Platform
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolutionModal;

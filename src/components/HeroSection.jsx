import React from 'react';
import LightRays from './reactbits/LightRays';
import BlurText from './reactbits/BlurText';
import { Sparkles, Compass, ShieldCheck, Zap, FileText } from 'lucide-react';

const HeroSection = ({ onOpenProblemSolution }) => {
  return (
    <section className="relative w-full min-h-screen pt-24 sm:pt-28 pb-12 overflow-hidden flex flex-col items-center">
      {/* Background Volumetric Light Rays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#10b981"
          raysSpeed={0.9}
          lightSpread={0.9}
          rayLength={1.8}
          pulsating={true}
          followMouse={true}
          mouseInfluence={0.15}
        />
      </div>

      {/* Subtle cosmic vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050608]/40 to-[#050608] pointer-events-none z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center mt-4 sm:mt-8">
        {/* Campus & Competition Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121622]/80 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-glow-emerald">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="text-xs font-mono font-medium text-emerald-300">
            DesignAthon 2026 • GDC RIT Dubai × +twe
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white max-w-4xl leading-[1.08] mb-6">
          Where University Talent Collides With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400">
            Real Bounties.
          </span>
        </h1>

        {/* Subhead with BlurText */}
        <div className="max-w-2xl text-base sm:text-lg text-gray-300 font-sans leading-relaxed mb-8">
          <BlurText
            text="Skip the 500-application internship black hole. Tackle 48-hour student micro-bounties, earn AED 200 to AED 1,200, and graduate with verified commercial proof-of-work."
            delay={100}
            stepDuration={0.25}
          />
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#bounties"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black font-sans font-bold text-sm tracking-wide transition-all shadow-glow-emerald hover:scale-105 flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Browse Campus Bounties</span>
          </a>

          <button
            onClick={onOpenProblemSolution}
            className="px-6 py-3.5 rounded-xl bg-[#0c0e14] hover:bg-[#131722] border border-amber-400/40 hover:border-amber-400 text-amber-300 hover:text-white font-sans font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Problem &amp; Solution (Judges)</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-gray-400 font-mono py-2 border-t border-white/5 w-full max-w-xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>100% Escrow Backed</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>48h - 4-Day Sprints</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Verified Student IDs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

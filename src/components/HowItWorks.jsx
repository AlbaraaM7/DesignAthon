import React from 'react';
import ScrollFloat from './reactbits/ScrollFloat';
import { Target, Code2, Coins, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    num: "01",
    title: "Discover Campus Bounties",
    tag: "Milestone Scoped",
    icon: Target,
    color: "emerald",
    desc: "Browse vetted tasks posted by university clubs, research labs, and local startups. Every bounty has a strict deliverable checklist, clear timeline, and locked AED reward."
  },
  {
    num: "02",
    title: "Execute in a 48h Sprint",
    tag: "Flexible Scheduling",
    icon: Code2,
    color: "amber",
    desc: "No 40-hour rigid workweeks. Work over the weekend or between classes. Submit your Figma files, GitHub repos, or motion clips directly on the platform."
  },
  {
    num: "03",
    title: "Escrow Payout & Verified Proof",
    tag: "Guaranteed Reward",
    icon: Coins,
    color: "cyan",
    desc: "Upon sponsor review, funds release instantly to your student balance. A cryptographic proof-of-work badge is minted to your public Orbit profile, verified by +twe."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative w-full py-24 px-4 sm:px-8 border-t border-white/5 bg-[#07080c]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30 inline-block mb-4">
            A Proven 3-Step Engine
          </span>
          <div className="flex flex-col items-center justify-center gap-0 mb-4 text-center">
            <ScrollFloat
              animationDuration={0.8}
              textClassName="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-tight"
            >
              THE 48-HOUR
            </ScrollFloat>
            <ScrollFloat
              animationDuration={0.8}
              textClassName="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-emerald-400 leading-tight"
            >
              BOUNTY
            </ScrollFloat>
            <ScrollFloat
              animationDuration={0.8}
              textClassName="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-white leading-tight"
            >
              PROTOCOL
            </ScrollFloat>
          </div>
          <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
            Engineered around realistic university schedules. No recruiter bureaucracy, no ghosting.
          </p>
        </div>

        {/* 3 Step Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative group p-8 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-glow-emerald flex flex-col justify-between"
              >
                {/* Step Top */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-4xl text-white/15 group-hover:text-emerald-400/30 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-emerald-300 group-hover:border-emerald-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2 block">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-bold font-sans text-white mb-3 group-hover:text-emerald-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Bottom Status */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Step {idx + 1} of 3</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

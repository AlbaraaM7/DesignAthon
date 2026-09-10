import React, { useState, useEffect, useRef } from 'react';
import ScrollFloat from './reactbits/ScrollFloat';
import { Calculator, ArrowRight } from 'lucide-react';

/* ── Animated counter hook ── */
function useCountUp(target, duration = 600) {
  const [display, setDisplay] = useState(target);
  const prev = useRef(target);
  const rafRef = useRef(null);

  useEffect(() => {
    const from = prev.current;
    const to = target;
    prev.current = to;
    if (from === to) return;

    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      // ease out quart
      const e = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(from + (to - from) * e));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return display;
}

const EarningsCalculator = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [weeksPerSemester, setWeeksPerSemester] = useState(12);

  const hourlyRate = 75;
  const totalEarnings = hoursPerWeek * weeksPerSemester * hourlyRate;
  const estimatedBounties = Math.round((hoursPerWeek * weeksPerSemester) / 14);

  const animatedEarnings = useCountUp(totalEarnings, 550);
  const animatedBounties = useCountUp(estimatedBounties, 400);

  return (
    <section id="calculator" className="relative w-full py-20 px-4 sm:px-8 bg-[#050608] border-t border-white/5">
      <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c0e14] border border-emerald-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Calculator className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Student Value Calculator
            </span>
          </div>

          <ScrollFloat
            animationDuration={0.9}
            containerClassName="mb-2"
            textClassName="text-2xl sm:text-3xl font-display font-black text-white"
          >
            How Much Can You Earn This Semester?
          </ScrollFloat>
          <p className="text-sm text-gray-400 font-sans mb-8">
            Estimate your semester earnings without interfering with classes or exam preparations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gray-300">Dedicated Hours Per Week:</span>
                  <span className="text-emerald-400 font-bold">{hoursPerWeek} hrs / week</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="15"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <span className="text-[10px] text-gray-500 font-mono">
                  Recommended: 4–8 hours (weekend sprint friendly)
                </span>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-2">
                  <span className="text-gray-300">Weeks Active in Semester:</span>
                  <span className="text-amber-400 font-bold">{weeksPerSemester} weeks</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="16"
                  step="1"
                  value={weeksPerSemester}
                  onChange={(e) => setWeeksPerSemester(Number(e.target.value))}
                  className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            {/* Results Card */}
            <div className="p-6 rounded-2xl bg-[#131722] border border-white/10 flex flex-col justify-between text-center">
              <div>
                <span className="text-xs font-mono uppercase text-gray-400">Estimated Semester Earnings</span>
                <div className="text-4xl sm:text-5xl font-display font-black text-emerald-400 my-2 tabular-nums">
                  AED {animatedEarnings.toLocaleString()}
                </div>
                <p className="text-xs text-gray-400 font-sans">
                  Plus approximately{' '}
                  <strong className="text-amber-300 tabular-nums">{animatedBounties} verified portfolio pieces</strong>{' '}
                  for your graduate resume.
                </p>
              </div>

              <a
                href="#bounties"
                className="mt-6 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs transition-all shadow-glow-emerald flex items-center justify-center gap-2"
              >
                <span>Claim Your First Bounty</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningsCalculator;

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PortalSection = () => {
  const sectionRef = useRef(null);
  const portalCardRef = useRef(null);
  const portalImageRef = useRef(null);
  const initialTitleRef = useRef(null);
  const hintRef = useRef(null);
  const overlayRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = portalCardRef.current;
    const img = portalImageRef.current;
    const title = initialTitleRef.current;
    const hint = hintRef.current;
    const overlay = overlayRef.current;
    const glow = glowRef.current;

    if (!section || !card || !img) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // 1. Initial fade out of title and scroll hint
      tl.to([title, hint], {
        opacity: 0,
        y: -30,
        duration: 0.25,
        ease: 'power1.out',
      }, 0);

      // 2. Expand portal frame to full screen (freeze scroll effect)
      tl.to(card, {
        borderRadius: '0px',
        width: '100vw',
        height: '100vh',
        boxShadow: '0 0 0px rgba(16, 185, 129, 0)',
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      // 3. Subtle zoom on the stargate portal artwork
      tl.to(img, {
        scale: 1.05,
        duration: 1,
        ease: 'power2.inOut',
      }, 0);

      // 4. Fade down glowing aura as it expands into full view
      if (glow) {
        tl.to(glow, {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
        }, 0.2);
      }

      // 5. Reveal the Orbit Accelerator CTA card
      tl.fromTo(overlay, 
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power2.out' },
        0.55
      );

      // 6. Hold for a moment so the user can see and interact
      tl.to({}, { duration: 0.3 });

    }, section);

    // Recalculate trigger positions once layout/images settle. The portal JPEG
    // can finish loading after ScrollTrigger measures the page, leaving the
    // pin-spacer sized but the pin never engaging (broken freeze effect + a
    // large black void where the pinned section should be).
    const refreshTriggers = () => ScrollTrigger.refresh();
    window.addEventListener('load', refreshTriggers);
    if (img.complete) {
      // image already cached — remeasure on the next tick to be safe
      const t = setTimeout(refreshTriggers, 50);
      return () => {
        clearTimeout(t);
        window.removeEventListener('load', refreshTriggers);
        ctx.revert();
      };
    }
    img.addEventListener('load', refreshTriggers);

    return () => {
      window.removeEventListener('load', refreshTriggers);
      img.removeEventListener('load', refreshTriggers);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen bg-[#050608] flex items-center justify-center overflow-hidden z-20"
    >
      {/* Background ambient lighting */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-amber-500/15 blur-[120px] transform-gpu" />
      </div>

      {/* The Stargate Portal Card that expands on scroll */}
      <div
        ref={portalCardRef}
        className="relative w-[88vw] sm:w-[72vw] md:w-[60vw] h-[55vh] sm:h-[65vh] rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(16,185,129,0.35)] border border-emerald-500/30 flex items-center justify-center transition-shadow"
      >
        {/* Portal Image */}
        <img
          ref={portalImageRef}
          src={`${import.meta.env.BASE_URL}assets/orbit-portal.jpeg`}
          alt="Orbit Stargate Portal"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-125 transform-gpu"
        />

        {/* Ambient Portal Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/60 pointer-events-none" />

        {/* Floating Header (visible before expansion) */}
        <div
          ref={initialTitleRef}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 pointer-events-none"
        >
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 mb-3 backdrop-blur-md">
            The Cosmic Gateway
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] max-w-2xl">
            STEP BEYOND THE CLASSROOM
          </h2>
        </div>

        {/* Scroll down hint */}
        <div
          ref={hintRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-300 pointer-events-none z-10 animate-bounce"
        >
          <span>Scroll to expand portal</span>
          <ArrowDown className="w-3.5 h-3.5 text-emerald-400" />
        </div>

        {/* Content Card (revealed when expanded) */}
        <div
          ref={overlayRef}
          className="relative z-20 max-w-lg mx-auto p-6 sm:p-8 rounded-2xl bg-[#0c0e14]/90 backdrop-blur-xl border border-emerald-500/40 text-center shadow-2xl opacity-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>THE ORBIT ACCELERATOR</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-2 leading-tight">
            Your Campus Career Starts Here
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
            Real deliverables for real startups, university labs, and innovation hubs across Dubai Silicon Oasis, Internet City, and UAE campuses.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="#bounties"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs transition-all shadow-glow-emerald hover:scale-105"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Live Bounties</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-sans text-xs transition-all"
            >
              <span>See Protocol</span>
              <ArrowDown className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalSection;

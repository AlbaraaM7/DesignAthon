import React from 'react';
import DriftWall from './reactbits/DriftWall';
import ScrollFloat from './reactbits/ScrollFloat';
import { STUDENT_WORKS } from '../data/studentWork';
import { STUDENT_STATS } from '../data/bounties';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

const StudentProofSection = () => {
  return (
    <section id="proof-of-work" className="relative w-full py-24 px-4 sm:px-8 bg-[#07080c] border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 inline-block mb-3">
          Verifiable Student Credibility
        </span>
        <ScrollFloat
          animationDuration={0.9}
          containerClassName="mb-4"
          textClassName="text-3xl sm:text-5xl font-display font-black tracking-tight text-white"
        >
          Real Campus Proof-of-Work
        </ScrollFloat>
        <p className="text-sm sm:text-base text-gray-400 font-sans max-w-2xl mx-auto">
          Every tile below represents a completed student bounty signed off by a real startup, lab, or university club in the UAE.
        </p>

        {/* Real Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-white/5 text-center flex flex-col justify-center items-center">
            <span className="text-2xl sm:text-3xl font-display font-black text-emerald-400">
              {STUDENT_STATS.totalBountiesPaid}
            </span>
            <span className="text-[11px] font-mono text-gray-400 block mt-1 uppercase">Paid to Students</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-white/5 text-center flex flex-col justify-center items-center">
            <span className="text-2xl sm:text-3xl font-display font-black text-amber-400">
              {STUDENT_STATS.activeStudents}
            </span>
            <span className="text-[11px] font-mono text-gray-400 block mt-1 uppercase">Student Builders</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-white/5 text-center flex flex-col justify-center items-center">
            <span className="text-2xl sm:text-3xl font-display font-black text-cyan-400">
              {STUDENT_STATS.avgSprintTime}
            </span>
            <span className="text-[11px] font-mono text-gray-400 block mt-1 uppercase">Avg Sprint Time</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-white/5 text-center flex flex-col justify-center items-center">
            <span className="text-2xl sm:text-3xl font-display font-black text-white">
              {STUDENT_STATS.verifiedUniversities}
            </span>
            <span className="text-[11px] font-mono text-gray-400 block mt-1 uppercase">UAE Campuses</span>
          </div>
        </div>
      </div>

      {/* 3D Drifting Showcase Wall */}
      <div className="w-full h-[520px] max-w-6xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 bg-[#050608]">
        <DriftWall
          items={STUDENT_WORKS}
          columns={4}
          tileWidth={230}
          tileHeight={150}
          gap={18}
          tilt={12}
          turn={-10}
          speed={32}
          pauseOnHover={true}
          overlayColor="#050608"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono text-gray-400">
          Hover over any tile to inspect student project and verified reward
        </div>
      </div>
    </section>
  );
};

export default StudentProofSection;

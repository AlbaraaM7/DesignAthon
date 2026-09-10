import React, { useState, useMemo } from 'react';
import { BOUNTIES } from '../data/bounties';
import BorderGlow from './reactbits/BorderGlow';
import ScrollFloat from './reactbits/ScrollFloat';
import { Search, Filter, Clock, ChevronRight, Sparkles, Building2 } from 'lucide-react';

const CATEGORIES = [
  "All",
  "UI/UX Design",
  "Frontend Web",
  "3D & Motion",
  "AI & Python",
  "Branding"
];

const BountyExplorer = ({ onSelectBounty }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBounties = useMemo(() => {
    return BOUNTIES.filter((bounty) => {
      const matchesCategory = activeCategory === "All" || bounty.category === activeCategory;
      const matchesSearch =
        bounty.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bounty.sponsor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bounty.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="bounties" className="relative w-full py-20 px-4 sm:px-8 bg-[#050608]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Campus Escrow Active
            </div>
            <ScrollFloat
              animationDuration={0.9}
              containerClassName="mb-1"
              textClassName="text-3xl sm:text-4xl font-display font-black tracking-tight text-white"
            >
              Explore Open Micro-Bounties
            </ScrollFloat>
            <p className="text-sm text-gray-400 font-sans mt-1">
              Select any project to inspect the brief or simulate a student proof-of-work submission.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, sponsors, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0c0e14] border border-white/10 text-white placeholder:text-gray-500 text-xs focus:outline-none focus:border-emerald-400/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500 text-black font-bold shadow-glow-emerald"
                  : "bg-[#0c0e14] text-gray-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bounty Cards Grid using BorderGlow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <BorderGlow
              key={bounty.id}
              edgeSensitivity={35}
              glowColor="160 84 45"
              backgroundColor="#0c0e14"
              borderRadius={22}
              glowRadius={30}
              glowIntensity={1.0}
              colors={['#10b981', '#f59e0b', '#06b6d4']}
              className="cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
            >
              <div
                onClick={() => onSelectBounty(bounty)}
                className="p-6 flex flex-col justify-between h-full"
              >
                {/* Card Top */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 text-emerald-300 border border-emerald-500/20">
                      {bounty.category}
                    </span>
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {bounty.deadline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-sans text-white group-hover:text-emerald-300 transition-colors line-clamp-2 mb-2 leading-snug">
                    {bounty.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans mb-4">
                    <Building2 className="w-3.5 h-3.5 text-gray-500" />
                    <span className="truncate">{bounty.sponsor}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {bounty.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-gray-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block uppercase">Reward</span>
                    <span className="text-lg font-display font-black text-emerald-400">
                      {bounty.reward}
                    </span>
                  </div>

                  <button className="flex items-center gap-1 text-xs font-mono font-semibold text-emerald-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all">
                    <span>View Brief</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

        {filteredBounties.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#0c0e14] border border-white/5">
            <p className="text-gray-400 font-sans text-sm">
              No open bounties match your filter. Try clearing the search or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BountyExplorer;

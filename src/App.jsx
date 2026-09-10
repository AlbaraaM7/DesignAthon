import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortalSection from './components/PortalSection';
import HowItWorks from './components/HowItWorks';
import BountyExplorer from './components/BountyExplorer';
import StudentProofSection from './components/StudentProofSection';
import EarningsCalculator from './components/EarningsCalculator';
import Footer from './components/Footer';
import ProblemSolutionModal from './components/ProblemSolutionModal';
import BountyDetailModal from './components/BountyDetailModal';

function App() {
  const [isProblemSolutionOpen, setIsProblemSolutionOpen] = useState(false);
  const [selectedBounty, setSelectedBounty] = useState(null);

  return (
    <div className="min-h-screen bg-[#050608] text-[#f0f6fc] relative selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Top Navigation */}
      <Navbar onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />

      {/* Main Scrollytelling Hero Section */}
      <main>
        <HeroSection onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />

        {/* Freeze-scroll Portal expansion — page locks while image expands */}
        <PortalSection />

        {/* 3-Step Protocol with ScrollFloat */}
        <HowItWorks />

        {/* Live Filterable Bounty Explorer with BorderGlow */}
        <BountyExplorer onSelectBounty={(bounty) => setSelectedBounty(bounty)} />

        {/* 3D Student Showcase Wall with DriftWall */}
        <StudentProofSection />

        {/* Interactive Earnings Calculator */}
        <EarningsCalculator />
      </main>

      {/* Footer */}
      <Footer onOpenProblemSolution={() => setIsProblemSolutionOpen(true)} />

      {/* Deliverable: Problem & Solution Modal for Judges */}
      <ProblemSolutionModal
        isOpen={isProblemSolutionOpen}
        onClose={() => setIsProblemSolutionOpen(false)}
      />

      {/* Interactive Bounty Detail & Proof-of-Work Submission Modal */}
      <BountyDetailModal
        bounty={selectedBounty}
        isOpen={!!selectedBounty}
        onClose={() => setSelectedBounty(null)}
      />
    </div>
  );
}

export default App;

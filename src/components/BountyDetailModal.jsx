import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, DollarSign, UploadCloud, Check } from 'lucide-react';

const BountyDetailModal = ({ bounty, isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [linkInput, setLinkInput] = useState('');
  const [notesInput, setNotesInput] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setLinkInput('');
      setNotesInput('');
    }
  }, [isOpen]);

  if (!isOpen || !bounty) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Background click */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0e14] border border-emerald-500/30 p-6 sm:p-8 z-10 text-[#f0f6fc] shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {bounty.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/20">
                {bounty.duration}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white leading-snug">
              {bounty.title}
            </h3>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Sponsored by: <strong className="text-gray-200">{bounty.sponsor}</strong>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Reward & Timeline Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-[#131722]/70 border border-white/5 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-400 block">Reward</span>
            <span className="text-lg sm:text-xl font-display font-black text-emerald-400">
              {bounty.reward}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase text-gray-400 block">Deadline</span>
            <span className="text-sm sm:text-base font-sans font-semibold text-white flex items-center gap-1.5 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {bounty.deadline}
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[10px] font-mono uppercase text-gray-400 block">Status</span>
            <span className="text-sm font-sans font-semibold text-emerald-300 flex items-center gap-1.5 mt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Escrow Active
            </span>
          </div>
        </div>

        {/* Brief */}
        <div className="space-y-5 mb-8">
          <div>
            <h4 className="text-sm font-bold font-sans text-white uppercase tracking-wider mb-2">
              Project Description
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {bounty.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold font-sans text-white uppercase tracking-wider mb-2">
              Required Deliverables Checklist
            </h4>
            <ul className="space-y-2">
              {bounty.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interactive Submission Form */}
        <div className="pt-6 border-t border-white/10">
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-sans">
                Proof-of-Work Submitted!
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-1 max-w-md mx-auto">
                Your submission has been logged into the Orbit Escrow Review queue. The sponsor has 24 hours to review and trigger payout.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2 rounded-xl bg-emerald-500 text-black text-xs font-bold font-sans"
              >
                Close & Return to Bounties
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="text-sm font-bold font-sans text-white flex items-center gap-2">
                <UploadCloud className="w-4 h-4 text-emerald-400" />
                <span>Submit Solution / Proof of Work</span>
              </h4>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Deliverable Link (Figma, GitHub, Loom, Drive):
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://figma.com/file/... or https://github.com/..."
                  value={linkInput}
                  onChange={(e) => setLinkInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07090e] border border-white/10 text-white placeholder:text-gray-600 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1">
                  Student Verification Notes (University Email, Student ID, Notes):
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Student at RIT Dubai (ID: 9021...). Included responsive prototype and export assets."
                  value={notesInput}
                  onChange={(e) => setNotesInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07090e] border border-white/10 text-white placeholder:text-gray-600 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-gray-500">
                  ⚡ Instant student ID validation active
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs shadow-glow-emerald transition-all"
                >
                  Submit Solution for {bounty.reward}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BountyDetailModal;

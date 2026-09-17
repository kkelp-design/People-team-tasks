import React from 'react';
import { X, Globe, Briefcase, CheckSquare, Folder, Sparkles, ArrowRight } from 'lucide-react';
import { SYSTEM_ROUTING_INFO } from '../data/portalData';

interface DestinationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DestinationGuideModal: React.FC<DestinationGuideModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#e6e7e8] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-[#e6e7e8] flex items-center justify-between bg-[#f8f9fa]">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#fff5ee] text-[#f37321] flex items-center justify-center font-bold">
              📍
            </span>
            <div>
              <h2 className="text-lg font-bold text-[#1a1a1a] font-copse">
                Where Information Lives
              </h2>
              <p className="text-xs text-[#77787b]">
                Amplify People Knowledge Architecture & System Destinations
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#77787b] hover:text-[#1a1a1a] hover:bg-[#e6e7e8] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-4 text-xs">
          <p className="text-[#4d4d4f] leading-relaxed">
            To eliminate confusion and duplicate resources, every piece of People information is assigned to an authoritative destination based on the user&rsquo;s task:
          </p>

          <div className="grid grid-cols-1 gap-3">
            {SYSTEM_ROUTING_INFO.map((dest, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-[#e6e7e8] bg-[#f8f9fa] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-xs border mb-1.5 ${dest.badgeColor}`}>
                    {dest.destination}
                  </span>
                  <p className="text-xs text-[#1a1a1a] font-medium leading-relaxed">
                    {dest.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Glean Connection Note from Training Deck */}
          <div className="p-4 bg-[#fff5ee] rounded-xl border border-[#fcd5bc] text-xs">
            <div className="flex items-center gap-1.5 font-bold text-[#f37321] mb-1">
              <Sparkles className="w-4 h-4" />
              <span>How Glean Connects Everything</span>
            </div>
            <p className="text-[#4d4d4f] leading-relaxed">
              Glean indexes all 4 destinations simultaneously. If you search for an answer in Glean, verified badges indicate official sources of truth, while task pages direct you to the right system without manual guesswork.
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#f8f9fa] border-t border-[#e6e7e8] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
          >
            Got it, close guide
          </button>
        </div>
      </div>
    </div>
  );
};

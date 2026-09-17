import React from 'react';
import { Mail, MessageSquare, ShieldCheck, ExternalLink, HelpCircle, Code2 } from 'lucide-react';

interface TrustFooterProps {
  ownerName: string;
  ownerEmail: string;
  team: string;
  lastReviewed: string;
  onOpenContactDirectory?: () => void;
  onOpenDestinationGuide?: () => void;
  onOpenEmbedModal?: () => void;
}

export const TrustFooter: React.FC<TrustFooterProps> = ({
  ownerName,
  ownerEmail,
  team,
  lastReviewed,
  onOpenContactDirectory,
  onOpenDestinationGuide,
  onOpenEmbedModal
}) => {
  return (
    <footer className="mt-12 pt-6 pb-8 border-t border-[#e6e7e8] text-xs text-[#77787b]">
      <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Trust information */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-semibold text-[#1a1a1a]">People Team Intranet Standards</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] font-medium text-[11px]">
                <ShieldCheck className="w-3 h-3 text-[#16a34a]" />
                Official Source of Truth
              </span>
            </div>
            <p className="text-[#4d4d4f]">
              Page maintained by <span className="font-medium text-[#1a1a1a]">{ownerName}</span> ({team}) • Last reviewed <span className="font-medium text-[#1a1a1a]">{lastReviewed}</span>.
            </p>
          </div>

          {/* Quick Actions: Ask question or report broken link */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${ownerEmail}?subject=[People%20Portal]%20Question%20regarding%20this%20page`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f9fa] hover:bg-[#f1f2f2] text-[#4d4d4f] hover:text-[#1a1a1a] border border-[#e6e7e8] rounded-lg transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#f37321]" />
              <span>Email Page Owner</span>
            </a>

            {onOpenContactDirectory && (
              <button
                onClick={onOpenContactDirectory}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f9fa] hover:bg-[#f1f2f2] text-[#4d4d4f] hover:text-[#1a1a1a] border border-[#e6e7e8] rounded-lg transition-colors font-medium"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#2462a7]" />
                <span>Who to Ask Matrix</span>
              </button>
            )}

            {onOpenDestinationGuide && (
              <button
                onClick={onOpenDestinationGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f8f9fa] hover:bg-[#f1f2f2] text-[#4d4d4f] hover:text-[#1a1a1a] border border-[#e6e7e8] rounded-lg transition-colors font-medium"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#77787b]" />
                <span>System Destinations</span>
              </button>
            )}

            {onOpenEmbedModal && (
              <button
                onClick={onOpenEmbedModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fff5ee] hover:bg-[#ffe8d6] text-[#f37321] border border-[#fcd5bc] rounded-lg transition-colors font-semibold shadow-2xs"
                title="Get Google Sites embed code or export this page component"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Embed this Page</span>
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#f1f2f2] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#77787b] gap-2">
          <span>We are the Amplify People Team (formerly HR). Content adheres to AP style, sentence casing, and employee task-first navigation.</span>
          <span className="text-[#4d4d4f]">Amplify Education, Inc. © 2026</span>
        </div>
      </div>
    </footer>
  );
};

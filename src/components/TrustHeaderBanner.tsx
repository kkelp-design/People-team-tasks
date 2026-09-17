import React from 'react';
import { ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface TrustHeaderBannerProps {
  title: string;
  oneLinePurpose: string;
  owner: {
    name: string;
    email: string;
    title: string;
    team: string;
  };
  lastReviewed: string;
  gleanVerified?: boolean;
  startHereCallout?: string;
  actionText?: string;
  onActionClick?: () => void;
  systemLocation?: 'People Intranet' | "Manager's Hub" | 'Workday Help' | 'Shared Drive';
}

export const TrustHeaderBanner: React.FC<TrustHeaderBannerProps> = ({
  title,
  oneLinePurpose,
  owner,
  lastReviewed,
  gleanVerified = true,
  startHereCallout,
  actionText,
  onActionClick,
  systemLocation = 'People Intranet'
}) => {
  return (
    <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-xs mb-6">
      {/* Top Meta Bar: Breadcrumb + Owner & Verified Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-[#f1f2f2] text-xs text-[#77787b]">
        {/* System Location Badge */}
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full font-medium bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc]">
            {systemLocation}
          </span>
          <span className="text-[#b1b3b6]">•</span>
          <span>Employee Self-Service</span>
        </div>

        {/* Owner + Last Reviewed + Glean Verified Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[#4d4d4f] font-medium">Owner:</span>
            <a 
              href={`mailto:${owner.email}`}
              className="text-[#f37321] hover:underline flex items-center gap-1"
              title={`Email ${owner.name} (${owner.title})`}
            >
              <Mail className="w-3 h-3" />
              <span>{owner.name}</span>
            </a>
          </div>

          <span className="text-[#b1b3b6]">•</span>

          <div className="flex items-center gap-1">
            <span className="text-[#4d4d4f] font-medium">Last reviewed:</span>
            <span className="text-[#4d4d4f]">{lastReviewed}</span>
          </div>

          {gleanVerified && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] font-medium" title="Verified source of truth indexed by Glean">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" />
              Glean Verified
            </span>
          )}
        </div>
      </div>

      {/* Main Page Title & One-line Purpose */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] tracking-tight font-copse mb-2">
          {title}
        </h1>
        <p className="text-base text-[#4d4d4f] leading-relaxed max-w-4xl">
          {oneLinePurpose}
        </p>
      </div>

      {/* "Start Here" or "Most People Need..." callout block */}
      {startHereCallout && (
        <div className="mt-4 p-3.5 sm:p-4 bg-[#f8f9fa] border-l-4 border-[#f37321] rounded-r-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-xs uppercase tracking-wider text-[#f37321] bg-[#fff5ee] px-2 py-0.5 rounded">
              Start Here
            </span>
            <span className="text-sm font-medium text-[#1a1a1a]">
              {startHereCallout}
            </span>
          </div>

          {actionText && onActionClick && (
            <button
              onClick={onActionClick}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#f37321] hover:text-[#e06313] hover:underline shrink-0"
            >
              <span>{actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

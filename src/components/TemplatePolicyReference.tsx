import React from 'react';
import { 
  FileText, 
  Clock, 
  Check, 
  Mail, 
  Download, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  AlertTriangle
} from 'lucide-react';
import { PolicyReferenceData } from '../types';
import { TrustHeaderBanner } from './TrustHeaderBanner';
import { TrustFooter } from './TrustFooter';

interface TemplatePolicyReferenceProps {
  policy: PolicyReferenceData;
  onNavigate: (view: any, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

export const TemplatePolicyReference: React.FC<TemplatePolicyReferenceProps> = ({
  policy,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Standard Header Block (Template 4 Standard) */}
      <TrustHeaderBanner
        title={policy.title}
        oneLinePurpose={policy.oneLinePurpose}
        owner={policy.owner}
        lastReviewed={policy.lastReviewed}
        gleanVerified={policy.gleanVerified}
        startHereCallout={`Applies to: ${policy.whoThisAppliesTo}`}
        actionText="Read Plain-Language Summary"
        onActionClick={() => {
          const el = document.getElementById('plain-summary-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        systemLocation="People Intranet"
      />

      {/* Sub-tabs for quick policy switching */}
      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#e6e7e8] overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => onNavigate('policy_reference', 'business-travel')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            policy.id === 'business-travel'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Travel & Expenses
        </button>

        <button
          onClick={() => onNavigate('policy_reference', 'job-levels-pay')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            policy.id === 'job-levels-pay'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Job Levels & Compensation
        </button>

        <button
          onClick={() => onNavigate('policy_reference', 'remote-work-guidelines')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            policy.id === 'remote-work-guidelines'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Workplace Flexibility & Remote
        </button>
      </div>

      <div className="space-y-8">

        {/* Recent Changes Trust Banner (Template 4 Requirement) */}
        {policy.recentChangesNote && (
          <div className="p-4 bg-[#fff5ee] border border-[#fcd5bc] rounded-xl flex items-start gap-3 text-xs">
            <Sparkles className="w-4 h-4 text-[#f37321] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#f37321] uppercase tracking-wider block mb-0.5">
                Recent Updates & Changes:
              </span>
              <span className="text-[#1a1a1a]">{policy.recentChangesNote}</span>
            </div>
          </div>
        )}

        {/* 1. Plain-Language Summary of the Policy First (Template 4 Core Rule) */}
        <div id="plain-summary-section" className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
          <h2 className="text-lg font-bold text-[#1a1a1a] font-copse mb-3">
            Plain-language summary
          </h2>
          <p className="text-xs text-[#77787b] mb-4">
            Key takeaways without legal jargon so you can act with confidence:
          </p>

          <ul className="space-y-3">
            {policy.plainLanguageSummary.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#1a1a1a] leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-[#f1f2f2] text-[#f37321] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 2. Key Rules & Standards Grid */}
        <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
          <h2 className="text-base font-bold text-[#1a1a1a] font-copse mb-4">
            Core Standards & Limits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {policy.keyRules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-[#f8f9fa] rounded-xl border border-[#e6e7e8]">
                <h3 className="text-sm font-bold text-[#1a1a1a] mb-1 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#8dc63f]" />
                  {rule.rule}
                </h3>
                <p className="text-xs text-[#4d4d4f] leading-relaxed">
                  {rule.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Linked Official Documents Second with Effective Dates (Template 4 Core Rule) */}
        <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-[#1a1a1a] font-copse flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2462a7]" />
                Official Controlled Source Documents
              </h2>
              <p className="text-xs text-[#77787b]">
                Standard naming convention compliant: [People] _ [Doc Name] _ [MM.YYYY] _ [STATUS]
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#15803d] bg-[#f0fdf4] px-2 py-0.5 rounded border border-[#bbf7d0]">
              Glean Verified
            </span>
          </div>

          <div className="space-y-3">
            {policy.officialDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#f8f9fa] hover:bg-[#fff5ee]/30 border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-[#1a1a1a]">{doc.cleanName}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-[#f37321] border border-[#e6e7e8]">
                      {doc.status}
                    </span>
                    <span className="text-xs text-[#77787b]">Effective: {doc.lastUpdated}</span>
                  </div>
                  <p className="text-xs text-[#4d4d4f]">{doc.description}</p>
                  <p className="text-[11px] text-[#77787b] font-mono mt-1">
                    Stored in: People Team Drive &gt; {doc.driveFolder} &gt; {doc.name}
                  </p>
                </div>

                <button
                  onClick={() => alert(`Opening ${doc.name} (${doc.fileSize})`)}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-white hover:bg-[#fff5ee] text-[#f37321] border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-lg text-xs font-semibold shrink-0 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF ({doc.fileSize})</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Action Execution Callout */}
        <div className="p-4 bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#1a1a1a]">Where to execute:</span>
            <span className="text-[#4d4d4f]">{policy.whereToExecute}</span>
          </div>

          <button
            onClick={() => alert(`Navigating to Workday for ${policy.title}`)}
            className="px-3 py-1.5 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg font-semibold transition-colors shrink-0"
          >
            Launch in Workday →
          </button>
        </div>

      </div>

      {/* Trust Footer */}
      <TrustFooter
        ownerName={policy.owner.name}
        ownerEmail={policy.owner.email}
        team={policy.owner.team}
        lastReviewed={policy.lastReviewed}
        onOpenContactDirectory={onOpenContactDirectory}
        onOpenDestinationGuide={onOpenDestinationGuide}
      />
    </div>
  );
};

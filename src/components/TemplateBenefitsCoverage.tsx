import React, { useState } from 'react';
import { 
  HeartPulse, 
  FileText, 
  Video, 
  Mail, 
  Check, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { BenefitsCoverageData } from '../types';
import { TrustHeaderBanner } from './TrustHeaderBanner';
import { TrustFooter } from './TrustFooter';

interface TemplateBenefitsCoverageProps {
  benefit: BenefitsCoverageData;
  onNavigate: (view: any, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

export const TemplateBenefitsCoverage: React.FC<TemplateBenefitsCoverageProps> = ({
  benefit,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  const [selectedPlanIdx, setSelectedPlanIdx] = useState(0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Standard Header Block (Template 3 Standard) */}
      <TrustHeaderBanner
        title={benefit.title}
        oneLinePurpose={benefit.oneLinePurpose}
        owner={benefit.owner}
        lastReviewed={benefit.lastReviewed}
        gleanVerified={benefit.gleanVerified}
        startHereCallout={`Eligibility: ${benefit.eligibilitySnapshot}`}
        actionText="Compare Plans Below"
        onActionClick={() => {
          const el = document.getElementById('plans-comparison-table');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        systemLocation="People Intranet"
      />

      {/* Sub-tabs for Benefits category browsing */}
      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#e6e7e8] overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => onNavigate('benefits_coverage', 'medical-benefits')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            benefit.id === 'medical-benefits'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Medical & Prescription
        </button>

        <button
          onClick={() => onNavigate('benefits_coverage', 'dental-vision')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            benefit.id === 'dental-vision'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Dental & Vision Care
        </button>

        <button
          onClick={() => onNavigate('benefits_coverage', 'additional-benefits')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            benefit.id === 'additional-benefits'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Family Building, Perks & EAP
        </button>

        <button
          onClick={() => onNavigate('benefits_coverage', '401k-retirement')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            benefit.id === '401k-retirement'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          401(k) Retirement Savings
        </button>
      </div>

      <div className="space-y-8">

        {/* 1. Comparison Table of Plans / Options (Template 3 Requirement) */}
        {benefit.plans && benefit.plans.length > 0 && (
          <div id="plans-comparison-table" className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-lg font-bold text-[#1a1a1a] font-copse">
                  2026 Medical Plan Comparison
                </h2>
                <p className="text-xs text-[#77787b]">
                  Side-by-side view of deductibles, out-of-pocket maximums, and network options.
                </p>
              </div>

              <span className="text-xs font-semibold text-[#f37321] bg-[#fff5ee] px-2.5 py-1 rounded-md border border-[#fcd5bc] self-start sm:self-auto">
                Effective Jan 1, 2026
              </span>
            </div>

            {/* Responsive Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benefit.plans.map((plan, idx) => {
                const isSelected = selectedPlanIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedPlanIdx(idx)}
                    className={`rounded-xl border p-4 sm:p-5 flex flex-col justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#f37321] bg-[#fff5ee]/30 ring-2 ring-[#f37321]/20 shadow-xs'
                        : 'border-[#e6e7e8] bg-white hover:border-[#b1b3b6]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#77787b]">
                          {plan.carrier} • {plan.tier}
                        </span>
                        {plan.hsaEligible && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]">
                            HSA Eligible
                          </span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-[#1a1a1a] mb-2 font-copse">
                        {plan.name}
                      </h3>

                      <p className="text-xs text-[#4d4d4f] mb-4 bg-white/80 p-2.5 rounded-lg border border-[#e6e7e8]">
                        <strong>Best for:</strong> {plan.bestFor}
                      </p>

                      <div className="space-y-2 text-xs py-2 border-y border-[#f1f2f2]">
                        <div className="flex justify-between">
                          <span className="text-[#77787b]">Individual Deductible:</span>
                          <span className="font-bold text-[#1a1a1a]">{plan.deductibleIndividual}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#77787b]">Family Deductible:</span>
                          <span className="font-semibold text-[#1a1a1a]">{plan.deductibleFamily}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#77787b]">Out-of-Pocket Max:</span>
                          <span className="font-semibold text-[#1a1a1a]">{plan.outOfPocketMax}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#77787b]">PCP Copay / Coins:</span>
                          <span className="font-semibold text-[#1a1a1a]">{plan.pcpCopay}</span>
                        </div>
                        {plan.companyHsaContribution && (
                          <div className="p-2 bg-[#f0fdf4] rounded border border-[#bbf7d0] text-[#15803d] font-medium text-[11px]">
                            💰 {plan.companyHsaContribution}
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <span className="text-[11px] font-bold text-[#77787b] uppercase tracking-wider block mb-2">
                          Key Features
                        </span>
                        <ul className="space-y-1.5">
                          {plan.keyFeatures.map((feat, fIdx) => (
                            <li key={fIdx} className="text-xs text-[#4d4d4f] flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-[#8dc63f] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#f1f2f2] text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`In production, this opens Workday Benefits Enrollment for ${plan.name}.`);
                        }}
                        className={`w-full py-2 text-xs font-bold rounded-lg transition-colors ${
                          isSelected
                            ? 'bg-[#f37321] text-white shadow-2xs hover:bg-[#e06313]'
                            : 'bg-[#f1f2f2] text-[#4d4d4f] hover:bg-[#e6e7e8]'
                        }`}
                      >
                        Enroll / Select in Workday
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 1b. Dental Plan Table (if viewing dental) */}
        {benefit.dentalPlans && benefit.dentalPlans.length > 0 && (
          <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
            <h2 className="text-lg font-bold text-[#1a1a1a] font-copse mb-1">
              Dental Plan Options Comparison
            </h2>
            <p className="text-xs text-[#77787b] mb-4">
              All plans include 100% preventive coverage for semi-annual cleanings and check-ups.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#e6e7e8] bg-[#f8f9fa] text-[#4d4d4f]">
                    <th className="p-3 font-bold">Plan Name</th>
                    <th className="p-3 font-bold">Preventive</th>
                    <th className="p-3 font-bold">Basic Care</th>
                    <th className="p-3 font-bold">Major Services</th>
                    <th className="p-3 font-bold">Orthodontia</th>
                    <th className="p-3 font-bold">Annual Max</th>
                    <th className="p-3 font-bold">Best Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f2f2]">
                  {benefit.dentalPlans.map((dp, idx) => (
                    <tr key={idx} className="hover:bg-[#fff5ee]/30 transition-colors">
                      <td className="p-3 font-bold text-[#1a1a1a]">{dp.name}</td>
                      <td className="p-3 text-[#15803d] font-semibold">{dp.preventive}</td>
                      <td className="p-3 text-[#4d4d4f]">{dp.basicServices}</td>
                      <td className="p-3 text-[#4d4d4f]">{dp.majorServices}</td>
                      <td className="p-3 text-[#4d4d4f]">{dp.orthodontia}</td>
                      <td className="p-3 font-bold text-[#1a1a1a]">{dp.annualMax}</td>
                      <td className="p-3 text-[#77787b] max-w-xs">{dp.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 1c. Programs Grid (Family Building & Perks) */}
        {benefit.programs && benefit.programs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#1a1a1a] font-copse">
              Included Perks & Support Programs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefit.programs.map((prog, idx) => (
                <div key={idx} className="bg-white border border-[#e6e7e8] rounded-xl p-5 shadow-2xs hover:border-[#b1b3b6] transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#f37321] uppercase tracking-wider">{prog.name}</span>
                    <span className="text-[11px] text-[#77787b] font-medium">{prog.contact}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-[#1a1a1a] mb-2">{prog.tagline}</h3>
                  <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">{prog.coverage}</p>
                  <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e6e7e8] text-xs">
                    <strong className="text-[#1a1a1a]">How to access: </strong>
                    <span className="text-[#4d4d4f]">{prog.howToAccess}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Embedded Video Explainers (Template 3 Requirement) */}
        {benefit.videos && benefit.videos.length > 0 && (
          <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Video className="w-5 h-5 text-[#f37321]" />
              <h2 className="text-base font-bold text-[#1a1a1a] font-copse">
                Short Video Guides from Kwame Creamer
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefit.videos.map((vid, idx) => (
                <div key={idx} className="p-4 bg-[#f8f9fa] rounded-xl border border-[#e6e7e8] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#77787b] mb-1.5">
                      <span className="font-semibold text-[#2462a7]">Video Explainer</span>
                      <span>{vid.duration}</span>
                    </div>
                    <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">{vid.title}</h3>
                    <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">{vid.description}</p>
                  </div>
                  <button
                    onClick={() => alert(`Playing video: ${vid.title}`)}
                    className="inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-white hover:bg-[#fff5ee] hover:text-[#f37321] text-[#1a1a1a] border border-[#e6e7e8] rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Watch Video Walkthrough</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. "Documents & Summaries" Grouped, Not Dumped (Template 3 Core Rule) */}
        <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-bold text-[#1a1a1a] font-copse flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#2462a7]" />
                Official Documents & Summaries
              </h2>
              <p className="text-xs text-[#77787b]">
                Organized by category, not dumped as raw file links. All documents are indexed and verified in Glean.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#15803d] bg-[#f0fdf4] px-2 py-0.5 rounded border border-[#bbf7d0]">
              Glean Ready
            </span>
          </div>

          <div className="space-y-6">
            {benefit.groupedDocuments.map((group, gIdx) => (
              <div key={gIdx} className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#4d4d4f] border-b border-[#f1f2f2] pb-1.5">
                  {group.categoryName} ({group.docs.length})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {group.docs.map((doc, dIdx) => (
                    <div 
                      key={dIdx}
                      className="p-3.5 bg-[#f8f9fa] hover:bg-[#fff5ee]/30 border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-xl transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="font-semibold text-xs text-[#1a1a1a]">{doc.cleanName}</span>
                          <span className="px-1.5 py-0.2 rounded text-[10px] bg-white border border-[#e6e7e8] font-bold text-[#f37321]">
                            {doc.status}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#77787b] leading-relaxed mb-3">
                          {doc.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#e6e7e8] text-[11px]">
                        <span className="text-[#77787b] font-mono truncate max-w-[170px]">{doc.name}</span>
                        <button
                          onClick={() => alert(`Opening ${doc.cleanName} (${doc.fileSize}) from ${doc.driveFolder}`)}
                          className="text-[#f37321] hover:underline font-semibold flex items-center gap-1 shrink-0"
                        >
                          <Download className="w-3 h-3" />
                          <span>Download ({doc.fileSize})</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Questions & Escalation Contact Box */}
        <div className="bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">
              Have questions about your coverage or medical claims?
            </h3>
            <p className="text-xs text-[#4d4d4f] max-w-2xl">
              {benefit.escalationNote}
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={`mailto:${benefit.owner.email}?subject=[People%20Portal]%20Benefits%20Question`}
              className="px-3.5 py-2 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact {benefit.owner.name}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Trust Footer */}
      <TrustFooter
        ownerName={benefit.owner.name}
        ownerEmail={benefit.owner.email}
        team={benefit.owner.team}
        lastReviewed={benefit.lastReviewed}
        onOpenContactDirectory={onOpenContactDirectory}
        onOpenDestinationGuide={onOpenDestinationGuide}
      />
    </div>
  );
};

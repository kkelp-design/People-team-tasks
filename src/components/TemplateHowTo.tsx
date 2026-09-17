import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Mail, 
  FileText, 
  Clock, 
  ShieldCheck, 
  HelpCircle,
  AlertCircle,
  Download,
  ArrowRight
} from 'lucide-react';
import { HowToTaskData } from '../types';
import { TrustHeaderBanner } from './TrustHeaderBanner';
import { TrustFooter } from './TrustFooter';

interface TemplateHowToProps {
  task: HowToTaskData;
  onNavigate: (view: any, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

export const TemplateHowTo: React.FC<TemplateHowToProps> = ({
  task,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  // Interactive checklist for "What you'll need"
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  
  // Collapsible FAQ states
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Standard Header Block (Template 2 Standard) */}
      <TrustHeaderBanner
        title={task.title}
        oneLinePurpose={task.oneLinePurpose}
        owner={task.owner}
        lastReviewed={task.lastReviewed}
        gleanVerified={task.gleanVerified}
        startHereCallout={`Estimated time: ${task.estimatedCompletion}. Ensure you have your single sign-on credentials ready.`}
        actionText="Check What You Need"
        onActionClick={() => {
          const el = document.getElementById('what-you-need-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        systemLocation="People Intranet"
      />

      {/* Main Task Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Columns: Core How-To Steps & Workflow */}
        <div className="lg:col-span-2 space-y-8">

          {/* "What you'll need" checklist at the top */}
          <div id="what-you-need-section" className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-3">
              <h2 className="text-base font-bold text-[#1a1a1a] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f37321]"></span>
                What you&rsquo;ll need
              </h2>
              <span className="text-xs text-[#77787b]">
                {Object.values(checkedItems).filter(Boolean).length} of {task.whatYouWillNeed.length} prepared
              </span>
            </div>
            
            <p className="text-xs text-[#4d4d4f] mb-4">
              Review and check off these prerequisites before starting the workflow to ensure uninterrupted completion:
            </p>

            <ul className="space-y-2.5">
              {task.whatYouWillNeed.map((item, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <li 
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer select-none ${
                      isChecked 
                        ? 'bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]' 
                        : 'bg-[#f8f9fa] border-[#e6e7e8] hover:border-[#b1b3b6] text-[#1a1a1a]'
                    }`}
                  >
                    <button 
                      type="button" 
                      className="mt-0.5 shrink-0 focus:outline-none"
                      aria-label={isChecked ? "Mark item incomplete" : "Mark item ready"}
                    >
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#b1b3b6]" />
                      )}
                    </button>
                    <span className={`text-xs sm:text-sm ${isChecked ? 'line-through opacity-80' : ''}`}>
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Numbered step-by-step section */}
          <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
            <h2 className="text-lg font-bold text-[#1a1a1a] font-copse mb-4">
              Step-by-step instructions
            </h2>

            <div className="space-y-6">
              {task.steps.map((step) => (
                <div key={step.stepNumber} className="flex items-start gap-4">
                  {/* Number Badge */}
                  <div className="w-8 h-8 rounded-full bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc] flex items-center justify-center font-bold text-sm shrink-0">
                    {step.stepNumber}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#1a1a1a] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4d4d4f] leading-relaxed mb-3">
                      {step.instruction}
                    </p>

                    {/* Helpful Tip */}
                    {step.tip && (
                      <div className="p-3 bg-[#f8f9fa] border-l-2 border-[#13b5ea] rounded-r-md text-xs text-[#4d4d4f] mb-3 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-[#13b5ea] shrink-0 mt-0.5" />
                        <span><strong>Tip:</strong> {step.tip}</span>
                      </div>
                    )}

                    {/* Action link */}
                    {step.actionLinkText && (
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => {
                            alert(`In production, this launches ${step.actionDestination} directly to execute this step with single sign-on.`);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors"
                        >
                          <span>{step.actionLinkText}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[11px] text-[#77787b]">
                          Opens in {step.actionDestination}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Definition of Done (Template 2 requirement) */}
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2 text-[#15803d]">
              <CheckCircle2 className="w-5 h-5 text-[#16a34a]" />
              <h3 className="font-bold text-sm uppercase tracking-wider">
                Definition of done
              </h3>
            </div>
            <p className="text-sm text-[#14532d] leading-relaxed">
              {task.definitionOfDone}
            </p>
          </div>

          {/* Collapsible FAQ accordion */}
          {task.faqs.length > 0 && (
            <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs">
              <h2 className="text-base font-bold text-[#1a1a1a] mb-3 font-copse">
                Frequently asked questions
              </h2>

              <div className="divide-y divide-[#f1f2f2]">
                {task.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="py-3">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#1a1a1a] hover:text-[#f37321] transition-colors py-1"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#77787b] shrink-0 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#77787b] shrink-0 ml-2" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="mt-2 text-xs sm:text-sm text-[#4d4d4f] leading-relaxed pl-2 border-l-2 border-[#fcd5bc]">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Column: Sidebar with Contact Box, Source Documents & Escalation */}
        <div className="space-y-6">

          {/* "Who to Contact" Box (Template 2 requirement) */}
          <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-4 h-4 text-[#f37321]" />
              <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                Who to contact
              </h3>
            </div>

            <div className="p-3 bg-[#f8f9fa] rounded-lg border border-[#e6e7e8] mb-3">
              <div className="font-semibold text-sm text-[#1a1a1a]">{task.owner.name}</div>
              <div className="text-xs text-[#77787b]">{task.owner.title}</div>
              <div className="text-xs text-[#77787b] mt-0.5">{task.owner.team}</div>

              <a
                href={`mailto:${task.owner.email}?subject=[People%20Portal]%20Question%20about%20${encodeURIComponent(task.title)}`}
                className="mt-3 inline-flex items-center gap-1.5 w-full justify-center px-3 py-1.5 bg-white hover:bg-[#fff5ee] hover:text-[#f37321] text-[#1a1a1a] border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-lg text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{task.owner.email}</span>
              </a>
            </div>

            {/* Escalation Path */}
            <div className="text-xs text-[#4d4d4f] border-t border-[#f1f2f2] pt-3">
              <span className="font-semibold text-[#1a1a1a]">Escalation path: </span>
              {task.escalationPath}
            </div>
          </div>

          {/* Linked Official Documents (Standard Naming Format) */}
          {task.relatedDocuments.length > 0 && (
            <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#2462a7]" />
                  Official Documents
                </h3>
                <span className="text-[11px] text-[#15803d] font-semibold bg-[#f0fdf4] px-1.5 py-0.5 rounded border border-[#bbf7d0]">
                  Glean Verified
                </span>
              </div>

              <p className="text-xs text-[#77787b] mb-3">
                Current source-of-truth files stored in the People Team Drive:
              </p>

              <div className="space-y-2.5">
                {task.relatedDocuments.map((doc, idx) => (
                  <div key={idx} className="p-3 bg-[#f8f9fa] border border-[#e6e7e8] rounded-lg text-xs">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-semibold text-[#1a1a1a] truncate">{doc.cleanName}</span>
                      <span className="px-1.5 py-0.2 bg-white border border-[#e6e7e8] rounded text-[10px] font-bold text-[#f37321] uppercase">
                        {doc.status}
                      </span>
                    </div>

                    <p className="text-[#77787b] text-[11px] mb-2">{doc.description}</p>

                    <div className="flex items-center justify-between pt-2 border-t border-[#e6e7e8] text-[11px]">
                      <span className="text-[#77787b] font-mono truncate max-w-[150px]">{doc.name}</span>
                      <button
                        onClick={() => alert(`Accessing ${doc.name} in People Team Drive (${doc.driveFolder})`)}
                        className="text-[#f37321] hover:underline font-semibold flex items-center gap-1 shrink-0"
                      >
                        <Download className="w-3 h-3" />
                        <span>View ({doc.fileSize})</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quick Navigation Back to Hub */}
          <div className="p-4 bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl text-xs text-center">
            <p className="text-[#4d4d4f] mb-2">Looking for a different employee task?</p>
            <button
              onClick={() => onNavigate('home')}
              className="font-semibold text-[#f37321] hover:underline"
            >
              ← Back to All People Tasks
            </button>
          </div>

        </div>

      </div>

      {/* Trust Footer */}
      <TrustFooter
        ownerName={task.owner.name}
        ownerEmail={task.owner.email}
        team={task.owner.team}
        lastReviewed={task.lastReviewed}
        onOpenContactDirectory={onOpenContactDirectory}
        onOpenDestinationGuide={onOpenDestinationGuide}
      />
    </div>
  );
};

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Download, 
  FileText, 
  Clock, 
  ChevronRight, 
  Mail, 
  ShieldCheck, 
  Compass, 
  Briefcase, 
  User,
  ArrowRight
} from 'lucide-react';
import { JourneyGuideData, UserRole } from '../types';
import { TrustHeaderBanner } from './TrustHeaderBanner';
import { TrustFooter } from './TrustFooter';

interface TemplateJourneyGuideProps {
  journey: JourneyGuideData;
  userRole: UserRole;
  onNavigate: (view: any, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

export const TemplateJourneyGuide: React.FC<TemplateJourneyGuideProps> = ({
  journey,
  userRole,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  // Track checked milestones items
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});
  
  // Active role perspective tab (Employee vs Manager)
  const [activeTab, setActiveTab] = useState<'employee' | 'manager'>(
    userRole === 'manager' ? 'manager' : 'employee'
  );

  const toggleCheck = (id: string) => {
    setCompletedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Calculate total progress
  const allItems = journey.milestones.flatMap(m => 
    activeTab === 'manager' && m.managerChecklist && m.managerChecklist.length > 0
      ? m.managerChecklist
      : m.employeeChecklist
  );
  const completedCount = allItems.filter(item => completedItems[item.id]).length;
  const progressPercent = allItems.length > 0 ? Math.round((completedCount / allItems.length) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Standard Header Block (Template 5 Standard) */}
      <TrustHeaderBanner
        title={journey.title}
        oneLinePurpose={journey.oneLinePurpose}
        owner={journey.owner}
        lastReviewed={journey.lastReviewed}
        gleanVerified={journey.gleanVerified}
        startHereCallout={journey.whatToExpect}
        actionText="View Phased Milestones"
        onActionClick={() => {
          const el = document.getElementById('milestone-timeline');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        systemLocation="People Intranet"
      />

      {/* Sub-tabs for quick journey switching */}
      <div className="flex items-center gap-2 pb-4 mb-6 border-b border-[#e6e7e8] overflow-x-auto text-xs font-semibold">
        <button
          onClick={() => onNavigate('journey_guide', 'onboarding-journey')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            journey.id === 'onboarding-journey'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          New Hire 90-Day Journey
        </button>

        <button
          onClick={() => onNavigate('journey_guide', 'career-development-journey')}
          className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
            journey.id === 'career-development-journey'
              ? 'bg-[#f37321] text-white shadow-xs'
              : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
          }`}
        >
          Career Development & IDP Roadmap
        </button>
      </div>

      {/* Role-based Branches (New Hire vs Manager) - Template 5 Requirement */}
      <div className="bg-white border border-[#e6e7e8] rounded-xl p-4 sm:p-5 mb-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#77787b] uppercase tracking-wider block mb-1">
              Select Your Perspective
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('employee')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 ${
                  activeTab === 'employee'
                    ? 'bg-[#f37321] text-white border-[#f37321] shadow-2xs'
                    : 'bg-[#f8f9fa] text-[#4d4d4f] border-[#e6e7e8] hover:bg-[#f1f2f2]'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Employee Path</span>
              </button>

              <button
                onClick={() => setActiveTab('manager')}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-1.5 ${
                  activeTab === 'manager'
                    ? 'bg-[#2462a7] text-white border-[#2462a7] shadow-2xs'
                    : 'bg-[#f8f9fa] text-[#4d4d4f] border-[#e6e7e8] hover:bg-[#f1f2f2]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>People Manager Path</span>
              </button>
            </div>
          </div>

          {/* Interactive Progress Meter */}
          <div className="w-full sm:w-64 bg-[#f8f9fa] p-3 rounded-lg border border-[#e6e7e8]">
            <div className="flex justify-between text-xs font-semibold text-[#1a1a1a] mb-1.5">
              <span>{activeTab === 'employee' ? 'Your Journey Progress' : 'Manager Checkpoints'}</span>
              <span className="text-[#f37321]">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 bg-[#e6e7e8] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#f37321] transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-[#77787b] mt-1 block">
              {completedCount} of {allItems.length} completed
            </span>
          </div>
        </div>
      </div>

      {/* Phased Timeline Sections (Template 5 Requirement) */}
      <div id="milestone-timeline" className="space-y-8">
        {journey.milestones.map((milestone, mIdx) => {
          const checklist = activeTab === 'manager' && milestone.managerChecklist && milestone.managerChecklist.length > 0
            ? milestone.managerChecklist
            : milestone.employeeChecklist;

          return (
            <div key={mIdx} className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs relative">
              {/* Phase header & timing */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-[#f1f2f2]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc] flex items-center justify-center font-bold text-sm shrink-0">
                    {mIdx + 1}
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#1a1a1a] font-copse">
                      {milestone.phase}
                    </h2>
                    <span className="text-xs text-[#77787b] flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-[#f37321]" />
                      {milestone.timing}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#4d4d4f] sm:max-w-md italic">
                  {milestone.summary}
                </p>
              </div>

              {/* Actionable Checklists */}
              <div className="space-y-2.5 mb-5">
                {checklist.map((item) => {
                  const isDone = !!completedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isDone
                          ? 'bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]'
                          : 'bg-[#f8f9fa] border-[#e6e7e8] hover:border-[#b1b3b6] text-[#1a1a1a]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          type="button"
                          className="mt-0.5 shrink-0 focus:outline-none"
                          aria-label={isDone ? "Mark item incomplete" : "Mark item complete"}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                          ) : (
                            <Circle className="w-4 h-4 text-[#b1b3b6]" />
                          )}
                        </button>
                        <div>
                          <div className={`text-xs sm:text-sm font-semibold ${isDone ? 'line-through opacity-80' : ''}`}>
                            {item.label}
                          </div>
                          <div className="text-xs text-[#4d4d4f] mt-0.5">
                            {item.detail}
                          </div>
                        </div>
                      </div>

                      {item.destination && (
                        <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-white border border-[#e6e7e8] text-[#77787b] shrink-0 self-center">
                          {item.destination}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Linked Templates & Source Resources for this Phase */}
              {milestone.resources.length > 0 && (
                <div className="pt-4 border-t border-[#f1f2f2]">
                  <span className="text-xs font-bold text-[#77787b] uppercase tracking-wider block mb-2">
                    Phase Resources & Templates
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {milestone.resources.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 bg-[#f8f9fa] border border-[#e6e7e8] rounded-lg flex items-center justify-between text-xs"
                      >
                        <div className="truncate mr-2">
                          <div className="font-semibold text-[#1a1a1a] truncate">{res.cleanName}</div>
                          <div className="text-[11px] text-[#77787b]">{res.fileSize} • {res.format.toUpperCase()}</div>
                        </div>
                        <button
                          onClick={() => alert(`Opening template ${res.cleanName} in People Drive`)}
                          className="px-2 py-1 bg-white hover:bg-[#fff5ee] hover:text-[#f37321] text-[#1a1a1a] border border-[#e6e7e8] rounded font-medium shrink-0 flex items-center gap-1 transition-colors"
                        >
                          <Download className="w-3 h-3" />
                          <span>Get</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Escalation Contact */}
      <div className="mt-8 p-5 bg-white border border-[#e6e7e8] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        <div>
          <span className="font-bold text-[#1a1a1a] text-sm block mb-0.5">
            Need guidance along your journey?
          </span>
          <span className="text-[#4d4d4f]">{journey.contactEscalation}</span>
        </div>
        <a
          href={`mailto:${journey.owner.email}?subject=[People%20Portal]%20Journey%20Support`}
          className="px-3.5 py-2 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors shrink-0"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Email {journey.owner.name}</span>
        </a>
      </div>

      {/* Trust Footer */}
      <TrustFooter
        ownerName={journey.owner.name}
        ownerEmail={journey.owner.email}
        team={journey.owner.team}
        lastReviewed={journey.lastReviewed}
        onOpenContactDirectory={onOpenContactDirectory}
        onOpenDestinationGuide={onOpenDestinationGuide}
      />
    </div>
  );
};

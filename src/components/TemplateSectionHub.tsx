import React, { useState } from 'react';
import { 
  Search, 
  FileCheck, 
  HeartPulse, 
  Calendar, 
  UserPlus, 
  Compass, 
  Sparkles, 
  Layers, 
  PiggyBank, 
  Briefcase, 
  Flag, 
  Plane, 
  Baby, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  ExternalLink,
  MessageSquare,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { COMMON_TASKS } from '../data/portalData';
import { TaskCard, UserRole, ViewType } from '../types';
import { TrustFooter } from './TrustFooter';

interface TemplateSectionHubProps {
  userRole: UserRole;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenSearch: () => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck className="w-5 h-5 text-[#f37321]" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-[#f37321]" />,
  Calendar: <Calendar className="w-5 h-5 text-[#f37321]" />,
  UserPlus: <UserPlus className="w-5 h-5 text-[#f37321]" />,
  Baby: <Baby className="w-5 h-5 text-[#f37321]" />,
  Compass: <Compass className="w-5 h-5 text-[#f37321]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#f37321]" />,
  Layers: <Layers className="w-5 h-5 text-[#f37321]" />,
  PiggyBank: <PiggyBank className="w-5 h-5 text-[#f37321]" />,
  Briefcase: <Briefcase className="w-5 h-5 text-[#f37321]" />,
  Flag: <Flag className="w-5 h-5 text-[#f37321]" />,
  Plane: <Plane className="w-5 h-5 text-[#f37321]" />
};

export const TemplateSectionHub: React.FC<TemplateSectionHubProps> = ({
  userRole,
  onNavigate,
  onOpenSearch,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tasks' },
    { id: 'pay', label: 'Pay & Taxes' },
    { id: 'benefits', label: 'Health & Coverage' },
    { id: 'timeoff', label: 'Leaves & Time Off' },
    { id: 'career', label: 'Career & Growth' },
    { id: 'perks', label: 'Perks & Retirement' },
    ...(userRole === 'manager' ? [{ id: 'manager', label: "Manager's Hub" }] : [])
  ];

  const filteredTasks = COMMON_TASKS.filter(task => {
    if (task.roleRequired === 'manager' && userRole !== 'manager') {
      return false;
    }
    if (selectedCategory === 'all') return true;
    return task.category === selectedCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* 1. Header Block & Core Purpose (Template 1 Standard) */}
      <div className="bg-white border border-[#e6e7e8] rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
        
        {/* Top Trust & System Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#f1f2f2] text-xs text-[#77787b]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs px-2.5 py-0.5 rounded-full bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc]">
              Amplify People Intranet
            </span>
            <span className="text-[#b1b3b6]">•</span>
            <span className="text-[#4d4d4f]">Organized around your task, not our org chart</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803d] bg-[#f0fdf4] px-2 py-0.5 rounded-full border border-[#bbf7d0]">
              <ShieldCheck className="w-3 h-3 text-[#16a34a]" />
              Glean Search Ready
            </span>
          </div>
        </div>

        {/* Hero Headline & 2-3 Sentence Intro */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] tracking-tight font-copse mb-3">
            What would you like to get done today?
          </h1>
          <p className="text-base text-[#4d4d4f] leading-relaxed mb-6">
            Welcome to the Amplify People Portal. Everything here is organized around the actions you need to take as an employee or people manager — without needing to know our internal team structures.
          </p>
        </div>

        {/* Interactive Search Bar Trigger (Glean Powered) */}
        <div className="mb-6">
          <button
            onClick={onOpenSearch}
            className="w-full sm:max-w-2xl flex items-center justify-between px-4 py-3 bg-[#f8f9fa] hover:bg-[#f1f2f2] border border-[#b1b3b6] hover:border-[#f37321] rounded-xl text-sm text-[#4d4d4f] transition-all shadow-xs group cursor-text text-left"
          >
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-[#f37321]" />
              <span className="text-sm text-[#77787b]">
                Search for an action (e.g. &ldquo;proof of employment&rdquo;, &ldquo;dental&rdquo;, &ldquo;referral bonus&rdquo;)...
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1">
              <span className="px-2 py-0.5 text-xs bg-white border border-[#e6e7e8] rounded text-[#77787b]">
                Press ⌘K
              </span>
            </div>
          </button>
        </div>

        {/* "Start Here" / "Most People Need..." Callout (Template 1 Requirement) */}
        <div className="p-4 bg-[#fff5ee] border-l-4 border-[#f37321] rounded-r-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-start sm:items-center gap-2.5">
            <span className="px-2 py-0.5 rounded font-bold uppercase tracking-wider bg-[#f37321] text-white shrink-0">
              Most People Need
            </span>
            <span className="text-[#1a1a1a] font-medium text-xs sm:text-sm">
              Instant employment verification, 2026 pay dates, medical plan comparisons, or submitting an Ashby referral.
            </span>
          </div>

          <button
            onClick={() => onNavigate('task_howto', 'proof-of-employment')}
            className="font-bold text-[#f37321] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Get Verification Letter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* 2. Destination Guide Card ("Put Information in the Right Place") */}
      <div className="bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl p-4 sm:p-5 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-[#2462a7]" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]">
                Put information in the right place
              </h2>
            </div>
            <p className="text-xs text-[#4d4d4f]">
              Quickly route between employee summaries (here), Manager tools, Workday self-service, and Google Drive source docs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-2.5 py-1 bg-white border border-[#e6e7e8] rounded-md font-medium text-[#1a1a1a]"
            >
              Intranet (Summaries & FAQs)
            </button>
            <button
              onClick={() => onNavigate('task_howto', 'manager-hiring-request')}
              className="px-2.5 py-1 bg-white border border-[#e6e7e8] hover:border-[#2462a7] rounded-md font-medium text-[#2462a7]"
            >
              Manager&rsquo;s Hub
            </button>
            <button
              onClick={() => alert("Workday Help: For system self-service, timesheet approvals, and direct deposit transactions.")}
              className="px-2.5 py-1 bg-white border border-[#e6e7e8] hover:border-[#8dc63f] rounded-md font-medium text-[#15803d]"
            >
              Workday Help
            </button>
            <button
              onClick={onOpenDestinationGuide}
              className="px-2.5 py-1 bg-[#fff5ee] border border-[#fcd5bc] text-[#f37321] rounded-md font-semibold"
            >
              View Full Architecture Guide →
            </button>
          </div>
        </div>
      </div>

      {/* 3. Category Filter Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 pb-4 mb-6 border-b border-[#e6e7e8] overflow-x-auto scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#f37321] text-white shadow-2xs'
                : 'bg-white text-[#4d4d4f] border border-[#e6e7e8] hover:bg-[#f8f9fa]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* 4. Grid of Large Button-Cards (Template 1 Core Rule: Icon + Label + One-line description) */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#1a1a1a] font-copse">
            Employee Actions & Guides ({filteredTasks.length})
          </h2>
          <span className="text-xs text-[#77787b]">Click any card to open the dedicated task guide</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map(task => (
            <div
              key={task.id}
              onClick={() => onNavigate(task.targetView, task.targetId)}
              className="bg-white border border-[#e6e7e8] hover:border-[#f37321] hover:shadow-md rounded-xl p-5 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Top card bar: icon + badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fff5ee] group-hover:bg-[#f37321] flex items-center justify-center transition-colors">
                    <span className="group-hover:text-white transition-colors">
                      {ICON_MAP[task.icon] || <FileCheck className="w-5 h-5 text-[#f37321]" />}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {task.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f1f2f2] text-[#4d4d4f] group-hover:bg-[#fff5ee] group-hover:text-[#f37321] border border-[#e6e7e8] transition-colors">
                        {task.badge}
                      </span>
                    )}
                    {task.estimatedTime && (
                      <span className="text-[11px] text-[#77787b] flex items-center gap-0.5">
                        <Clock className="w-3 h-3" />
                        {task.estimatedTime}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Title & Description */}
                <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#f37321] font-copse mb-1.5 transition-colors">
                  {task.title}
                </h3>
                <p className="text-xs text-[#4d4d4f] leading-relaxed line-clamp-2">
                  {task.description}
                </p>
              </div>

              {/* Card Footer: Action link */}
              <div className="mt-4 pt-3 border-t border-[#f1f2f2] flex items-center justify-between text-xs font-semibold text-[#f37321]">
                <span>Start Task</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. "Most Common Questions" Quick Links (Template 1 Requirement: 3-5 items) */}
      <div className="bg-white border border-[#e6e7e8] rounded-xl p-5 sm:p-6 shadow-2xs mb-8">
        <h2 className="text-base font-bold text-[#1a1a1a] font-copse mb-1 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#f37321]" />
          Most Common Questions
        </h2>
        <p className="text-xs text-[#77787b] mb-4">
          Direct answers to top inquiries received by the People Team:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div 
            onClick={() => onNavigate('task_howto', 'proof-of-employment')}
            className="p-3.5 bg-[#f8f9fa] hover:bg-[#fff5ee] border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-lg transition-colors cursor-pointer"
          >
            <div className="font-semibold text-[#1a1a1a] mb-1">
              &ldquo;How do I get an employment and income letter for a lease or mortgage?&rdquo;
            </div>
            <span className="text-[#f37321] font-medium flex items-center gap-1">
              Workday Self-Service verification guide →
            </span>
          </div>

          <div 
            onClick={() => onNavigate('benefits_coverage', 'medical-benefits')}
            className="p-3.5 bg-[#f8f9fa] hover:bg-[#fff5ee] border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-lg transition-colors cursor-pointer"
          >
            <div className="font-semibold text-[#1a1a1a] mb-1">
              &ldquo;What is the company HSA match on the Aetna HDHP?&rdquo;
            </div>
            <span className="text-[#f37321] font-medium flex items-center gap-1">
              Amplify funds up to $1,200 for family coverage →
            </span>
          </div>

          <div 
            onClick={() => onNavigate('task_howto', 'submit-referral')}
            className="p-3.5 bg-[#f8f9fa] hover:bg-[#fff5ee] border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-lg transition-colors cursor-pointer"
          >
            <div className="font-semibold text-[#1a1a1a] mb-1">
              &ldquo;How does the $1,500 employee referral bonus work?&rdquo;
            </div>
            <span className="text-[#f37321] font-medium flex items-center gap-1">
              Refer candidate in Ashby guide →
            </span>
          </div>

          <div 
            onClick={() => onNavigate('policy_reference', 'business-travel')}
            className="p-3.5 bg-[#f8f9fa] hover:bg-[#fff5ee] border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-lg transition-colors cursor-pointer"
          >
            <div className="font-semibold text-[#1a1a1a] mb-1">
              &ldquo;What are the travel per diem meal and hotel caps?&rdquo;
            </div>
            <span className="text-[#f37321] font-medium flex items-center gap-1">
              Review $75/day per diem & expense rules →
            </span>
          </div>
        </div>
      </div>

      {/* 6. Standard Trust Footer */}
      <TrustFooter
        ownerName="Kirsten Kelp"
        ownerEmail="kkelp@amplify.com"
        team="People Operations & Office of CPO"
        lastReviewed="August 2026"
        onOpenContactDirectory={onOpenContactDirectory}
        onOpenDestinationGuide={onOpenDestinationGuide}
      />

    </div>
  );
};

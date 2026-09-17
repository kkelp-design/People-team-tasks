import React from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Calendar, 
  FileCheck, 
  HeartPulse, 
  Compass, 
  Briefcase, 
  Plane, 
  Layers, 
  UserCheck, 
  CheckCircle2, 
  HelpCircle, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Clock,
  Building2,
  Users,
  Award,
  BookOpen
} from 'lucide-react';
import { UserRole, ViewType } from '../types';
import { TrustFooter } from './TrustFooter';

interface HomePageProps {
  userRole: UserRole;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenSearch: () => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
  onOpenEmbedModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  userRole,
  onNavigate,
  onOpenSearch,
  onOpenContactDirectory,
  onOpenDestinationGuide,
  onOpenEmbedModal
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-10">

      {/* 1. Hero Welcome Section */}
      <section className="bg-white border border-[#e6e7e8] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        {/* Subtle decorative background accent */}
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#fff5ee] rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="relative z-10">
          {/* Top trust pill & badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#f1f2f2] text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold px-2.5 py-0.5 rounded-full bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc]">
                Amplify People Intranet
              </span>
              <span className="text-[#b1b3b6]">•</span>
              <span className="text-[#4d4d4f]">Official Employee Portal</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803d] bg-[#f0fdf4] px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16a34a]" />
                Glean Search Indexed
              </span>
              <span className="text-[11px] text-[#77787b]">
                Updated August 2026
              </span>
            </div>
          </div>

          {/* Main Headline & Description */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a1a] tracking-tight font-copse mb-4">
              Welcome to Amplify People
            </h1>
            <p className="text-base sm:text-lg text-[#4d4d4f] leading-relaxed">
              Your central home for benefits, compensation, career development, workplace policies, and team leadership. Everything here is organized around what you need to do — with plain-language answers and direct links to the right system.
            </p>
          </div>

          {/* Interactive Glean Search Bar */}
          <div className="mb-6">
            <button
              onClick={onOpenSearch}
              className="w-full sm:max-w-2xl flex items-center justify-between px-4 sm:px-5 py-3.5 bg-[#f8f9fa] hover:bg-[#f1f2f2] border-2 border-[#e6e7e8] hover:border-[#f37321] rounded-xl text-left transition-all shadow-xs group cursor-text"
            >
              <div className="flex items-center gap-3 text-[#77787b] group-hover:text-[#1a1a1a]">
                <Search className="w-5 h-5 text-[#f37321] shrink-0" />
                <span className="text-sm font-medium">
                  Search policies, health plans, 2026 pay dates, or &ldquo;who to ask&rdquo;...
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 shrink-0 ml-3">
                <span className="px-2 py-0.5 text-xs bg-white border border-[#e6e7e8] rounded-md text-[#77787b] font-mono">
                  ⌘K
                </span>
                <span className="text-[11px] text-[#009f93] font-semibold flex items-center gap-1 ml-1">
                  <Sparkles className="w-3 h-3" /> Glean
                </span>
              </div>
            </button>
          </div>

          {/* Quick Search Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#4d4d4f]">
            <span className="text-[#77787b] font-medium mr-1">Popular right now:</span>
            <button
              onClick={() => onNavigate('task_howto', 'proof-of-employment')}
              className="px-2.5 py-1 bg-[#f8f9fa] hover:bg-[#fff5ee] hover:text-[#f37321] hover:border-[#fcd5bc] border border-[#e6e7e8] rounded-lg transition-colors"
            >
              Employment Letter
            </button>
            <button
              onClick={() => onNavigate('benefits_coverage', 'medical-benefits')}
              className="px-2.5 py-1 bg-[#f8f9fa] hover:bg-[#fff5ee] hover:text-[#f37321] hover:border-[#fcd5bc] border border-[#e6e7e8] rounded-lg transition-colors"
            >
              Medical Plans & HSA
            </button>
            <button
              onClick={() => onNavigate('task_howto', 'pay-schedule-dates')}
              className="px-2.5 py-1 bg-[#f8f9fa] hover:bg-[#fff5ee] hover:text-[#f37321] hover:border-[#fcd5bc] border border-[#e6e7e8] rounded-lg transition-colors"
            >
              2026 Pay Calendar
            </button>
            <button
              onClick={() => onNavigate('task_howto', 'submit-referral')}
              className="px-2.5 py-1 bg-[#f8f9fa] hover:bg-[#fff5ee] hover:text-[#f37321] hover:border-[#fcd5bc] border border-[#e6e7e8] rounded-lg transition-colors"
            >
              $1,500 Referral Bonus
            </button>
            <button
              onClick={() => onNavigate('journey_guide', 'career-development-journey')}
              className="px-2.5 py-1 bg-[#f8f9fa] hover:bg-[#fff5ee] hover:text-[#f37321] hover:border-[#fcd5bc] border border-[#e6e7e8] rounded-lg transition-colors"
            >
              IDP Roadmap
            </button>
          </div>
        </div>
      </section>

      {/* 2. Timely Highlights & Current Season */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f37321] animate-pulse"></span>
            <h2 className="text-lg font-bold text-[#1a1a1a] font-copse">
              What&rsquo;s Happening Now
            </h2>
          </div>
          <span className="text-xs text-[#77787b]">Timely updates for Q3/Q4 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: IDP Season */}
          <div 
            onClick={() => onNavigate('journey_guide', 'career-development-journey')}
            className="p-5 bg-white hover:bg-[#fff5ee]/40 border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc]">
                  Active Cycle
                </span>
                <span className="text-xs text-[#77787b]">Career Growth</span>
              </div>
              <h3 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#f37321] transition-colors mb-1.5 font-copse">
                Individual Development Plans (IDPs)
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed">
                Managers and employees are encouraged to hold Q3/Q4 career conversations. Use our official IDP template to map 12-month goals.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f1f2f2] flex items-center justify-between text-xs font-semibold text-[#f37321]">
              <span>Open IDP Guide</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: 2026 Pay Calendar */}
          <div 
            onClick={() => onNavigate('task_howto', 'pay-schedule-dates')}
            className="p-5 bg-white hover:bg-[#fff5ee]/40 border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0]">
                  Official Calendar
                </span>
                <span className="text-xs text-[#77787b]">Payroll</span>
              </div>
              <h3 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#f37321] transition-colors mb-1.5 font-copse">
                2026 Pay Dates & Company Holidays
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed">
                Review the 24 semi-monthly pay dates and 12 official company holidays. Paydays landing on weekends deposit the prior business day.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f1f2f2] flex items-center justify-between text-xs font-semibold text-[#f37321]">
              <span>View Pay Calendar</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Ashby Referral Program */}
          <div 
            onClick={() => onNavigate('task_howto', 'submit-referral')}
            className="p-5 bg-white hover:bg-[#fff5ee]/40 border border-[#e6e7e8] hover:border-[#fcd5bc] rounded-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe]">
                  $1,500 Bonus
                </span>
                <span className="text-xs text-[#77787b]">Talent Acquisition</span>
              </div>
              <h3 className="font-bold text-sm text-[#1a1a1a] group-hover:text-[#f37321] transition-colors mb-1.5 font-copse">
                Refer Talent & Earn $1,500
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed">
                Know someone great for an open Amplify role? Submit their info in Ashby prior to their application to secure your referral bonus.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#f1f2f2] flex items-center justify-between text-xs font-semibold text-[#f37321]">
              <span>Submit Referral in Ashby</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 5 Core People Portals (Pillars) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-xl font-bold text-[#1a1a1a] font-copse">
              Explore by Knowledge Area
            </h2>
            <p className="text-xs text-[#77787b]">
              Browse the 5 core portals of the Amplify People intranet
            </p>
          </div>

          <button
            onClick={() => onNavigate('section_hub')}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#f37321] hover:underline"
          >
            <span>Browse All 12 Tasks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Pillar 1: Pay & Taxes */}
          <div className="bg-white border border-[#e6e7e8] hover:border-[#f37321] rounded-xl p-5 shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fff5ee] text-[#f37321] flex items-center justify-center mb-3">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-1.5">
                Pay, Taxes & Verification
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Official pay dates, automatic proof of employment letters in Workday, direct deposit setup, and W-2 year-end tax documents.
              </p>
              
              <ul className="space-y-2 text-xs text-[#4d4d4f] mb-4">
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'proof-of-employment')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Get employment verification letter</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'pay-schedule-dates')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>2026 semi-monthly pay calendar</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'direct-deposit-update')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Change direct deposit bank account</span>
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('task_howto', 'proof-of-employment')}
              className="pt-3 border-t border-[#f1f2f2] text-xs font-semibold text-[#f37321] flex items-center justify-between group"
            >
              <span>Go to Pay & Verification</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 2: Health & Benefits */}
          <div className="bg-white border border-[#e6e7e8] hover:border-[#f37321] rounded-xl p-5 shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fff5ee] text-[#f37321] flex items-center justify-center mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-1.5">
                Health, Family & Total Rewards
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Aetna POS II, HDHP with company HSA contribution, Kaiser Permanente, Dental DPPO, 16-week paid parental leave, and Care.com.
              </p>
              
              <ul className="space-y-2 text-xs text-[#4d4d4f] mb-4">
                <li>
                  <button 
                    onClick={() => onNavigate('benefits_coverage', 'medical-benefits')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Side-by-side medical plan comparison</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('benefits_coverage', 'dental-vision')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Dental DPPO & Vision coverage</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'parental-leave-guide')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>16-week paid parental bonding leave</span>
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('benefits_coverage', 'medical-benefits')}
              className="pt-3 border-t border-[#f1f2f2] text-xs font-semibold text-[#f37321] flex items-center justify-between group"
            >
              <span>Go to Health & Benefits</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 3: Career & Growth */}
          <div className="bg-white border border-[#e6e7e8] hover:border-[#f37321] rounded-xl p-5 shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fff5ee] text-[#f37321] flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-1.5">
                Career, IDP & Growth
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Individual Development Plans (IDPs), job leveling architecture (IC1–IC6, M1–M3), lateral pathways, and tuition reimbursement.
              </p>
              
              <ul className="space-y-2 text-xs text-[#4d4d4f] mb-4">
                <li>
                  <button 
                    onClick={() => onNavigate('journey_guide', 'career-development-journey')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Download IDP template & roadmap</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('policy_reference', 'job-levels-pay')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Job level rubrics & salary bands</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'submit-referral')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>$1,500 employee candidate referral</span>
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('journey_guide', 'career-development-journey')}
              className="pt-3 border-t border-[#f1f2f2] text-xs font-semibold text-[#f37321] flex items-center justify-between group"
            >
              <span>Go to Career Development</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 4: Policies & Travel */}
          <div className="bg-white border border-[#e6e7e8] hover:border-[#f37321] rounded-xl p-5 shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fff5ee] text-[#f37321] flex items-center justify-center mb-3">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-1.5">
                Workplace, Travel & Policies
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Plain-language policy summaries, travel & expense limits ($75/day meal per diem), remote work flexibility, and time off.
              </p>
              
              <ul className="space-y-2 text-xs text-[#4d4d4f] mb-4">
                <li>
                  <button 
                    onClick={() => onNavigate('policy_reference', 'business-travel')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Travel expense rules & hotel caps</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('policy_reference', 'remote-work-guidelines')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Remote work equipment & stipends</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'pto-time-off-request')}
                    className="hover:text-[#f37321] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#f37321]">›</span>
                    <span>Requesting vacation or personal leave</span>
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('policy_reference', 'business-travel')}
              className="pt-3 border-t border-[#f1f2f2] text-xs font-semibold text-[#f37321] flex items-center justify-between group"
            >
              <span>Go to Policies & Travel</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 5: Manager's Hub */}
          <div className="bg-white border border-[#e6e7e8] hover:border-[#2462a7] rounded-xl p-5 shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] text-[#2462a7] flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-base font-bold text-[#1a1a1a] font-copse">
                  People Manager&rsquo;s Hub
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe]">
                  Leadership
                </span>
              </div>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Confidential leadership workflows: opening headcount in Ashby, team member 90-day onboarding checklists, and 1:1 coaching frameworks.
              </p>
              
              <ul className="space-y-2 text-xs text-[#4d4d4f] mb-4">
                <li>
                  <button 
                    onClick={() => onNavigate('task_howto', 'manager-hiring-request')}
                    className="hover:text-[#2462a7] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#2462a7]">›</span>
                    <span>Open a new hiring requisition (Ashby)</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('journey_guide', 'onboarding-journey')}
                    className="hover:text-[#2462a7] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#2462a7]">›</span>
                    <span>Manager 90-day onboarding milestones</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => onNavigate('journey_guide', 'career-development-journey')}
                    className="hover:text-[#2462a7] hover:underline text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#2462a7]">›</span>
                    <span>Manager IDP career coaching guide</span>
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onNavigate('task_howto', 'manager-hiring-request')}
              className="pt-3 border-t border-[#f1f2f2] text-xs font-semibold text-[#2462a7] flex items-center justify-between group"
            >
              <span>Go to Manager&rsquo;s Hub</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 6: All Tasks & Quick Access */}
          <div className="bg-[#f8f9fa] border border-[#e6e7e8] hover:border-[#f37321] rounded-xl p-5 shadow-2xs transition-all flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#fff5ee] text-[#f37321] flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-1.5">
                Task Directory (12 Action Guides)
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Prefer to view all employee actions in one list? Access our complete library of step-by-step how-to guides and self-service tutorials.
              </p>
              
              <div className="text-xs text-[#77787b] space-y-1">
                <div>• Filter by Pay, Benefits, Time Off, or Career</div>
                <div>• Step-by-step instructions with prerequisites</div>
                <div>• Definitions of done & downloadable forms</div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('section_hub')}
              className="pt-3 border-t border-[#e6e7e8] text-xs font-semibold text-[#f37321] flex items-center justify-between group"
            >
              <span>View All 12 Action Cards</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. "Start Here" Guided Journeys (Key Milestones) */}
      <section className="bg-white border border-[#e6e7e8] rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-2xl mb-6">
          <span className="text-xs font-bold text-[#f37321] uppercase tracking-wider block mb-1">
            Personalized Milestones
          </span>
          <h2 className="text-2xl font-bold text-[#1a1a1a] font-copse mb-2">
            Guided Journeys for Key Life Moments
          </h2>
          <p className="text-xs sm:text-sm text-[#4d4d4f]">
            Whether you just joined Amplify or are expanding your family, these step-by-step roadmaps keep you on track without missing critical deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Journey 1: New Hire 90-Day Roadmap */}
          <div className="p-5 bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl hover:border-[#f37321] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#f37321] uppercase tracking-wider">
                  New Hire Roadmap
                </span>
                <span className="text-xs text-[#77787b]">Day 1 to Day 90</span>
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-2">
                Welcome to Amplify: Your 90-Day Journey
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Everything you need to complete during your first week, month, and quarter — including Workday I-9 verification, 30-day benefits election, IT equipment setup, and 90-day review.
              </p>
            </div>

            <button
              onClick={() => onNavigate('journey_guide', 'onboarding-journey')}
              className="px-4 py-2 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg text-xs font-semibold self-start transition-colors flex items-center gap-1.5"
            >
              <span>Start Your 90-Day Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Journey 2: Career Development IDP */}
          <div className="p-5 bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl hover:border-[#f37321] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#2462a7] uppercase tracking-wider">
                  Professional Growth
                </span>
                <span className="text-xs text-[#77787b]">Annual Roadmap</span>
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a] font-copse mb-2">
                Career Development & IDP Roadmap
              </h3>
              <p className="text-xs text-[#4d4d4f] leading-relaxed mb-4">
                Partner with your manager using the 70-20-10 growth model. Discover job leveling criteria, define quarterly skill targets, and unlock tuition or certification support.
              </p>
            </div>

            <button
              onClick={() => onNavigate('journey_guide', 'career-development-journey')}
              className="px-4 py-2 bg-[#2462a7] hover:bg-[#1d4ed8] text-white rounded-lg text-xs font-semibold self-start transition-colors flex items-center gap-1.5"
            >
              <span>Open Career & IDP Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. "Where Information Lives" Architecture Section */}
      <section className="bg-[#f8f9fa] border border-[#e6e7e8] rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-5 h-5 text-[#2462a7]" />
              <h2 className="text-lg font-bold text-[#1a1a1a] font-copse">
                Where Information Lives at Amplify
              </h2>
            </div>
            <p className="text-xs text-[#4d4d4f]">
              Amplify uses 4 authoritative destinations to keep information accurate, secure, and searchable.
            </p>
          </div>

          <button
            onClick={onOpenDestinationGuide}
            className="px-3.5 py-1.5 bg-white hover:bg-[#fff5ee] border border-[#e6e7e8] hover:border-[#fcd5bc] text-xs font-semibold text-[#f37321] rounded-lg transition-colors shrink-0 self-start sm:self-center"
          >
            Open Architecture Guide →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination 1 */}
          <div className="p-4 bg-white border border-[#e6e7e8] rounded-xl">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc] mb-2">
              People Intranet (Here)
            </span>
            <div className="font-bold text-xs text-[#1a1a1a] mb-1">Summaries & Guidance</div>
            <p className="text-[11px] text-[#77787b] leading-relaxed">
              Task-centered plain-language summaries, benefits comparisons, FAQs, and contact routings.
            </p>
          </div>

          {/* Destination 2 */}
          <div className="p-4 bg-white border border-[#e6e7e8] rounded-xl">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#eff6ff] text-[#1d4ed8] border border-[#bfdbfe] mb-2">
              Manager&rsquo;s Hub
            </span>
            <div className="font-bold text-xs text-[#1a1a1a] mb-1">Leadership Workflows</div>
            <p className="text-[11px] text-[#77787b] leading-relaxed">
              Confidential tools for hiring, performance reviews, team onboarding, and compensation planning.
            </p>
          </div>

          {/* Destination 3 */}
          <div className="p-4 bg-white border border-[#e6e7e8] rounded-xl">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] mb-2">
              Workday Self-Service
            </span>
            <div className="font-bold text-xs text-[#1a1a1a] mb-1">Transactions & Records</div>
            <p className="text-[11px] text-[#77787b] leading-relaxed">
              Pay stubs, direct deposit bank accounts, W-4 tax withholding, PTO requests, and verification letters.
            </p>
          </div>

          {/* Destination 4 */}
          <div className="p-4 bg-white border border-[#e6e7e8] rounded-xl">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#faf5ff] text-[#7e22ce] border border-[#e9d5ff] mb-2">
              Google Drive
            </span>
            <div className="font-bold text-xs text-[#1a1a1a] mb-1">Controlled Source Docs</div>
            <p className="text-[11px] text-[#77787b] leading-relaxed">
              Official legal policies, handbook PDFs, SBC medical summaries, and presentation decks.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Contact Routing & Office of CPO Banner */}
      <section className="bg-white border border-[#e6e7e8] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold text-[#77787b] uppercase tracking-wider mb-1">
            <Users className="w-4 h-4 text-[#f37321]" />
            <span>Authoritative People Support</span>
          </div>
          <h2 className="text-xl font-bold text-[#1a1a1a] font-copse mb-1.5">
            Can&rsquo;t find what you need? We&rsquo;re here to help.
          </h2>
          <p className="text-xs sm:text-sm text-[#4d4d4f] leading-relaxed">
            Avoid guessing who to message on Slack. Our Authoritative &ldquo;Who to Ask&rdquo; Routing Matrix matches every People question directly to the designated owner and system.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={onOpenContactDirectory}
            className="px-4 py-2.5 bg-[#f37321] hover:bg-[#e06313] text-white rounded-xl text-xs font-bold shadow-2xs transition-colors flex items-center gap-2"
          >
            <UserCheck className="w-4 h-4" />
            <span>Open Who to Ask Matrix</span>
          </button>

          <a
            href="mailto:kkelp@amplify.com?subject=[People%20Portal]%20Employee%20Inquiry"
            className="px-4 py-2.5 bg-white hover:bg-[#f8f9fa] border border-[#e6e7e8] text-[#1a1a1a] rounded-xl text-xs font-bold transition-colors"
          >
            Email People Operations
          </a>
        </div>
      </section>

      {/* 7. Standard Trust Footer */}
      <TrustFooter
        ownerName="Kirsten Kelp"
        ownerEmail="kkelp@amplify.com"
        team="People Operations & Office of CPO"
        lastReviewed="August 2026"
        onOpenContactDirectory={onOpenContactDirectory}
        onOpenDestinationGuide={onOpenDestinationGuide}
        onOpenEmbedModal={onOpenEmbedModal}
      />

    </div>
  );
};

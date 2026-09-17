import React from 'react';
import { 
  Search, 
  HelpCircle, 
  Briefcase, 
  Globe, 
  CheckCircle2, 
  Folder, 
  UserCheck, 
  Sparkles,
  Layers,
  Code2
} from 'lucide-react';
import { UserRole, ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, id?: string) => void;
  userRole: UserRole;
  onToggleRole: (role: UserRole) => void;
  onOpenSearch: () => void;
  onOpenDestinationGuide: () => void;
  onOpenEmbedModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  userRole,
  onToggleRole,
  onOpenSearch,
  onOpenDestinationGuide,
  onOpenEmbedModal
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#e6e7e8] shadow-xs">
      {/* Top Google Sites style bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group text-left focus:outline-none"
              title="Return to People Portal Homepage"
            >
              {/* Amplify Brand Wordmark: Orange #F37321 with clean spacing */}
              <div className="flex items-center">
                <span className="text-2xl font-bold tracking-tight text-[#f37321] font-copse">
                  Amplify<span className="text-[#f37321]">.</span>
                </span>
                <span className="ml-2.5 pl-2.5 border-l border-[#b1b3b6] text-sm font-semibold text-[#4d4d4f]">
                  People
                </span>
              </div>
            </button>

            {/* Sub-tag indicator */}
            <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#f1f2f2] text-[#4d4d4f] border border-[#e6e7e8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8dc63f]"></span>
              Task-Centered Portal
            </span>
          </div>

          {/* Quick Glean Search Bar trigger */}
          <div className="flex-1 max-w-xl mx-2">
            <button
              onClick={onOpenSearch}
              className="w-full flex items-center justify-between px-3.5 py-2 bg-[#f8f9fa] hover:bg-[#f1f2f2] border border-[#e6e7e8] hover:border-[#b1b3b6] rounded-lg text-sm text-[#77787b] transition-all shadow-2xs group cursor-text"
            >
              <div className="flex items-center gap-2.5 truncate">
                <Search className="w-4 h-4 text-[#f37321] shrink-0" />
                <span className="truncate">Search tasks, benefits, pay dates, or &ldquo;who to ask&rdquo;...</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 shrink-0 ml-2">
                <span className="px-1.5 py-0.5 text-[11px] bg-white border border-[#e6e7e8] rounded text-[#77787b] shadow-2xs">⌘K</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#009f93] font-medium ml-1">
                  <Sparkles className="w-3 h-3" /> Glean
                </span>
              </div>
            </button>
          </div>

          {/* Role switcher & utility actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Role switch toggle */}
            <div className="inline-flex p-0.5 bg-[#f1f2f2] rounded-lg border border-[#e6e7e8]">
              <button
                onClick={() => onToggleRole('employee')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                  userRole === 'employee'
                    ? 'bg-white text-[#1a1a1a] shadow-xs'
                    : 'text-[#77787b] hover:text-[#1a1a1a]'
                }`}
              >
                Employee
              </button>
              <button
                onClick={() => onToggleRole('manager')}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1 ${
                  userRole === 'manager'
                    ? 'bg-[#f37321] text-white shadow-xs'
                    : 'text-[#77787b] hover:text-[#1a1a1a]'
                }`}
              >
                <Briefcase className="w-3 h-3" />
                Manager
              </button>
            </div>

            {/* Who to Contact directory button */}
            <button
              onClick={() => onNavigate('who_to_contact')}
              className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                currentView === 'who_to_contact'
                  ? 'bg-[#fff5ee] text-[#f37321] border-[#fcd5bc]'
                  : 'bg-white text-[#4d4d4f] border-[#e6e7e8] hover:bg-[#f8f9fa]'
              }`}
              title="Official Who to Contact Routing Matrix"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#f37321]" />
              <span>Who to Ask</span>
            </button>

            {/* Destination Guide ("Where things live") */}
            <button
              onClick={onOpenDestinationGuide}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-[#4d4d4f] hover:text-[#1a1a1a] hover:bg-[#f1f2f2] rounded-lg transition-colors"
              title="Where does information live? (Intranet vs Manager's Hub vs Workday vs Drive)"
            >
              <HelpCircle className="w-4 h-4 text-[#77787b]" />
              <span className="hidden xl:inline">Where Things Live</span>
            </button>

            {/* Google Sites Embed Modal trigger */}
            {onOpenEmbedModal && (
              <button
                onClick={onOpenEmbedModal}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#f37321] bg-[#fff5ee] hover:bg-[#ffe8d6] border border-[#fcd5bc] rounded-lg transition-all shadow-2xs"
                title="Get Google Sites Embed Code or Standalone Page Code"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Embed in Google Sites</span>
              </button>
            )}
          </div>
        </div>

        {/* Sub-navigation bar mimicking Google Sites task-centered tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2 border-t border-[#f1f2f2] scrollbar-none text-xs font-medium text-[#4d4d4f]">
          <button
            onClick={() => onNavigate('home')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
              currentView === 'home'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => onNavigate('section_hub')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
              currentView === 'section_hub'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            All Tasks
          </button>
          
          <button
            onClick={() => onNavigate('benefits_coverage', 'medical-benefits')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
              currentView === 'benefits_coverage'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            Health & Family Benefits
          </button>

          <button
            onClick={() => onNavigate('task_howto', 'proof-of-employment')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
              currentView === 'task_howto'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            Pay, Taxes & Verification
          </button>

          <button
            onClick={() => onNavigate('journey_guide', 'career-development-journey')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
              currentView === 'journey_guide'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            Career, IDP & Ladders
          </button>

          <button
            onClick={() => onNavigate('policy_reference', 'business-travel')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors ${
              currentView === 'policy_reference'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            Policies & Everyday Work
          </button>

          <button
            onClick={() => onNavigate('journey_guide', 'onboarding-journey')}
            className="px-2.5 py-1.5 rounded-md whitespace-nowrap hover:text-[#1a1a1a] hover:bg-[#f1f2f2] transition-colors"
          >
            New Hire Journey
          </button>

          {userRole === 'manager' && (
            <button
              onClick={() => onNavigate('task_howto', 'manager-hiring-request')}
              className="px-2.5 py-1.5 rounded-md whitespace-nowrap text-[#2462a7] font-semibold bg-[#eff6ff] hover:bg-[#dbeafe] transition-colors flex items-center gap-1"
            >
              <Briefcase className="w-3 h-3" />
              <span>Manager&rsquo;s Hub</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('who_to_contact')}
            className={`px-2.5 py-1.5 rounded-md whitespace-nowrap transition-colors lg:hidden ${
              currentView === 'who_to_contact'
                ? 'bg-[#fff5ee] text-[#f37321] font-semibold'
                : 'hover:text-[#1a1a1a] hover:bg-[#f1f2f2]'
            }`}
          >
            Contact Routing
          </button>
        </nav>
      </div>
    </header>
  );
};

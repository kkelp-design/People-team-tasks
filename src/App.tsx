import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { 
  HomePageView,
  SectionHubPageView,
  TaskHowToPageView,
  BenefitsCoveragePageView,
  PolicyReferencePageView,
  JourneyGuidePageView,
  WhoToContactPageView 
} from './pages';
import { GleanSearchModal } from './components/GleanSearchModal';
import { DestinationGuideModal } from './components/DestinationGuideModal';
import { GoogleSitesEmbedModal } from './components/GoogleSitesEmbedModal';
import { 
  HOW_TO_TASKS, 
  BENEFITS_DATA, 
  POLICIES_DATA, 
  JOURNEYS_DATA 
} from './data/portalData';
import { ViewType, UserRole } from './types';
import { ChevronRight, Home, ArrowLeft, Code2, Eye, EyeOff } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedId, setSelectedId] = useState<string>('proof-of-employment');
  const [userRole, setUserRole] = useState<UserRole>('employee');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDestinationGuideOpen, setIsDestinationGuideOpen] = useState<boolean>(false);
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState<boolean>(false);
  const [isEmbedMode, setIsEmbedMode] = useState<boolean>(false);

  // Parse initial query params for Google Sites embed (?view=...&id=...&embed=true)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const viewParam = params.get('view') as ViewType;
      const idParam = params.get('id');
      const embedParam = params.get('embed');

      if (embedParam === 'true') {
        setIsEmbedMode(true);
      }
      if (viewParam) {
        setCurrentView(viewParam);
      }
      if (idParam) {
        setSelectedId(idParam);
      }
    } catch (e) {
      // Ignored for non-browser environments
    }
  }, []);

  // Global keyboard shortcut for Glean search (⌘K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsDestinationGuideOpen(false);
        setIsEmbedModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (view: ViewType, id?: string) => {
    setCurrentView(view);
    let resolvedId = id;
    if (!resolvedId) {
      // Default fallbacks for each view
      if (view === 'task_howto') resolvedId = 'proof-of-employment';
      if (view === 'benefits_coverage') resolvedId = 'medical-benefits';
      if (view === 'policy_reference') resolvedId = 'business-travel';
      if (view === 'journey_guide') resolvedId = 'onboarding-journey';
    }
    if (resolvedId) {
      setSelectedId(resolvedId);
    }

    // Keep URL in sync so it's always copyable for Google Sites embed
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('view', view);
      if (resolvedId) {
        url.searchParams.set('id', resolvedId);
      } else {
        url.searchParams.delete('id');
      }
      if (isEmbedMode) {
        url.searchParams.set('embed', 'true');
      }
      window.history.replaceState({}, '', url.toString());
    } catch (e) {
      // safe fallback
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render view router with separate modular pages
  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePageView
            userRole={userRole}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
            onOpenEmbedModal={() => setIsEmbedModalOpen(true)}
          />
        );

      case 'section_hub':
        return (
          <SectionHubPageView
            userRole={userRole}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );

      case 'task_howto':
        return (
          <TaskHowToPageView
            taskId={selectedId}
            onNavigate={handleNavigate}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );

      case 'benefits_coverage':
        return (
          <BenefitsCoveragePageView
            benefitId={selectedId}
            onNavigate={handleNavigate}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );

      case 'policy_reference':
        return (
          <PolicyReferencePageView
            policyId={selectedId}
            onNavigate={handleNavigate}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );

      case 'journey_guide':
        return (
          <JourneyGuidePageView
            journeyId={selectedId}
            userRole={userRole}
            onNavigate={handleNavigate}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );

      case 'who_to_contact':
        return (
          <WhoToContactPageView
            onNavigate={handleNavigate}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );

      default:
        return (
          <SectionHubPageView
            userRole={userRole}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenContactDirectory={() => setCurrentView('who_to_contact')}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
          />
        );
    }
  };

  // Compute friendly breadcrumb
  const getBreadcrumbLabel = () => {
    if (currentView === 'home') return null;
    if (currentView === 'section_hub') return 'All Tasks Directory';
    if (currentView === 'who_to_contact') return 'Who to Ask Matrix';
    if (currentView === 'task_howto') return HOW_TO_TASKS[selectedId]?.title || 'Task Guide';
    if (currentView === 'benefits_coverage') return BENEFITS_DATA[selectedId]?.title || 'Benefits Coverage';
    if (currentView === 'policy_reference') return POLICIES_DATA[selectedId]?.title || 'Policy Reference';
    if (currentView === 'journey_guide') return JOURNEYS_DATA[selectedId]?.title || 'Journey Roadmap';
    return null;
  };

  const breadcrumbLabel = getBreadcrumbLabel();

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans text-[#1a1a1a]">
      
      {/* If embed mode is active, render sleek Google Sites top utility bar */}
      {isEmbedMode ? (
        <div className="bg-[#fff5ee] border-b border-[#fcd5bc] px-4 py-2 text-xs flex items-center justify-between text-[#4d4d4f] shadow-2xs">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-[#16a34a] shrink-0"></span>
            <span className="font-bold text-[#f37321]">Google Sites Embed Mode</span>
            <span className="text-[#b1b3b6]">•</span>
            <span className="truncate">{breadcrumbLabel || 'Portal Homepage'}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsEmbedModalOpen(true)}
              className="text-xs font-bold text-[#f37321] hover:underline flex items-center gap-1"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Embed Code</span>
            </button>
            <span className="text-[#e6e7e8]">|</span>
            <button
              onClick={() => {
                setIsEmbedMode(false);
                try {
                  const url = new URL(window.location.href);
                  url.searchParams.delete('embed');
                  window.history.replaceState({}, '', url.toString());
                } catch (e) {}
              }}
              className="text-xs font-medium text-[#4d4d4f] hover:text-[#1a1a1a] flex items-center gap-1"
              title="Show standard portal header navigation"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Show Full Chrome</span>
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Google Sites Style Global Header */}
          <Header
            currentView={currentView}
            onNavigate={handleNavigate}
            userRole={userRole}
            onToggleRole={(role) => setUserRole(role)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenDestinationGuide={() => setIsDestinationGuideOpen(true)}
            onOpenEmbedModal={() => setIsEmbedModalOpen(true)}
          />

          {/* Breadcrumb Bar (if navigated beyond homepage) */}
          {breadcrumbLabel && (
            <div className="bg-white border-b border-[#f1f2f2] py-2 px-4 sm:px-8">
              <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-[#77787b]">
                <div className="flex items-center gap-1.5 truncate">
                  <button
                    onClick={() => handleNavigate('home')}
                    className="hover:text-[#f37321] flex items-center gap-1 transition-colors"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span>People Portal</span>
                  </button>
                  <ChevronRight className="w-3.5 h-3.5 text-[#b1b3b6]" />
                  <span className="font-semibold text-[#1a1a1a] truncate">{breadcrumbLabel}</span>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-4">
                  {currentView !== 'section_hub' && (
                    <button
                      onClick={() => handleNavigate('section_hub')}
                      className="text-[#4d4d4f] hover:text-[#f37321] transition-colors font-medium"
                    >
                      All Tasks
                    </button>
                  )}
                  <button
                    onClick={() => handleNavigate('home')}
                    className="text-[#f37321] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    <span>Back to Home</span>
                  </button>
                  
                  <span className="text-[#e6e7e8]">|</span>

                  {/* Toggle Preview in Google Sites Frame */}
                  <button
                    onClick={() => {
                      setIsEmbedMode(true);
                      try {
                        const url = new URL(window.location.href);
                        url.searchParams.set('embed', 'true');
                        window.history.replaceState({}, '', url.toString());
                      } catch (e) {}
                    }}
                    className="text-[#77787b] hover:text-[#f37321] flex items-center gap-1 font-medium transition-colors"
                    title="Simulate how this page looks embedded in Google Sites"
                  >
                    <EyeOff className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">Google Sites Preview</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Glean Search Dialog */}
      <GleanSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Destination Guide Modal ("Where does this live?") */}
      <DestinationGuideModal
        isOpen={isDestinationGuideOpen}
        onClose={() => setIsDestinationGuideOpen(false)}
      />

      {/* Google Sites Embed & Code Export Dialog */}
      <GoogleSitesEmbedModal
        isOpen={isEmbedModalOpen}
        onClose={() => setIsEmbedModalOpen(false)}
        currentView={currentView}
        selectedId={selectedId}
      />
    </div>
  );
}

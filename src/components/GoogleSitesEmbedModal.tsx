import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Globe, 
  Laptop, 
  FileCode, 
  Sparkles, 
  HelpCircle,
  Maximize2,
  Layers,
  ChevronDown,
  AlertTriangle
} from 'lucide-react';
import { ViewType } from '../types';
import { 
  EMBEDDABLE_PAGES, 
  EmbedPageOption, 
  getGoogleSitesEmbedUrl, 
  getGoogleSitesIframeSnippet,
  getStandaloneHtmlSnippet 
} from '../utils/googleSitesEmbedTemplates';

interface GoogleSitesEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: ViewType;
  selectedId: string;
}

export const GoogleSitesEmbedModal: React.FC<GoogleSitesEmbedModalProps> = ({
  isOpen,
  onClose,
  currentView,
  selectedId
}) => {
  if (!isOpen) return null;

  // Determine current matching page key
  const defaultPageKey = () => {
    if (currentView === 'home') return 'home';
    if (currentView === 'section_hub') return 'section_hub';
    if (currentView === 'who_to_contact') return 'who_to_contact';
    const match = EMBEDDABLE_PAGES.find(p => p.view === currentView && p.id === selectedId);
    return match ? match.key : 'home';
  };

  const [selectedPageKey, setSelectedPageKey] = useState<string>(defaultPageKey);
  const [activeTab, setActiveTab] = useState<'url' | 'iframe' | 'react' | 'html'>('url');
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [customHeight, setCustomHeight] = useState<number>(950);
  const [useSharedUrl, setUseSharedUrl] = useState<boolean>(true);

  const selectedPage = EMBEDDABLE_PAGES.find(p => p.key === selectedPageKey) || EMBEDDABLE_PAGES[0];

  // Detect if running on AI Studio dev container
  const isAisDev = typeof window !== 'undefined' && window.location.hostname.includes('ais-dev-');

  // Base URL calculation (use ais-pre by default if ais-dev to prevent "refused to connect" in external iframes)
  const getCalculatedBaseUrl = () => {
    if (typeof window === 'undefined') return 'https://amplify-people.intranet';
    const currentOrigin = window.location.origin + window.location.pathname;
    if (isAisDev && useSharedUrl) {
      // Replace ais-dev- with ais-pre- for public iframe embeddability
      return currentOrigin.replace('ais-dev-', 'ais-pre-');
    }
    return currentOrigin;
  };

  const baseUrl = getCalculatedBaseUrl();
  const embedUrl = getGoogleSitesEmbedUrl(baseUrl, selectedPage.view, selectedPage.id);
  const iframeSnippet = getGoogleSitesIframeSnippet(embedUrl, selectedPage.title, customHeight);
  const htmlSnippet = getStandaloneHtmlSnippet(selectedPage);

  // React component import code snippet
  const reactSnippet = `// Clean Standalone Page Component for "${selectedPage.title}"
// File Path: /src/pages/${selectedPage.view === 'home' ? 'HomePageView' : selectedPage.view === 'section_hub' ? 'SectionHubPageView' : selectedPage.view === 'task_howto' ? 'TaskHowToPageView' : selectedPage.view === 'benefits_coverage' ? 'BenefitsCoveragePageView' : selectedPage.view === 'policy_reference' ? 'PolicyReferencePageView' : selectedPage.view === 'journey_guide' ? 'JourneyGuidePageView' : 'WhoToContactPageView'}.tsx

import React from 'react';
import { ${selectedPage.view === 'home' ? 'HomePageView' : selectedPage.view === 'section_hub' ? 'SectionHubPageView' : selectedPage.view === 'task_howto' ? 'TaskHowToPageView' : selectedPage.view === 'benefits_coverage' ? 'BenefitsCoveragePageView' : selectedPage.view === 'policy_reference' ? 'PolicyReferencePageView' : selectedPage.view === 'journey_guide' ? 'JourneyGuidePageView' : 'WhoToContactPageView'} } from './pages';

export default function EmbeddedPage() {
  return (
    <${selectedPage.view === 'home' ? 'HomePageView' : selectedPage.view === 'section_hub' ? 'SectionHubPageView' : selectedPage.view === 'task_howto' ? 'TaskHowToPageView' : selectedPage.view === 'benefits_coverage' ? 'BenefitsCoveragePageView' : selectedPage.view === 'policy_reference' ? 'PolicyReferencePageView' : selectedPage.view === 'journey_guide' ? 'JourneyGuidePageView' : 'WhoToContactPageView'}
      ${selectedPage.id ? `taskId="${selectedPage.id}"` : ''}
      ${selectedPage.view === 'benefits_coverage' ? `benefitId="${selectedPage.id}"` : ''}
      ${selectedPage.view === 'policy_reference' ? `policyId="${selectedPage.id}"` : ''}
      ${selectedPage.view === 'journey_guide' ? `journeyId="${selectedPage.id}" userRole="employee"` : ''}
      ${selectedPage.view === 'home' || selectedPage.view === 'section_hub' ? 'userRole="employee"' : ''}
      onNavigate={(view, id) => console.log('Navigate to:', view, id)}
      onOpenContactDirectory={() => {}}
      onOpenDestinationGuide={() => {}}
    />
  );
}`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full border border-[#e6e7e8] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e6e7e8] bg-[#f8f9fa]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#fff5ee] text-[#f37321] flex items-center justify-center border border-[#fcd5bc]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-[#1a1a1a] font-copse">
                  Google Sites Embed & Code Export
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc]">
                  Per-Page Export
                </span>
              </div>
              <p className="text-xs text-[#77787b]">
                Break down any page or task into ready-to-paste embed codes for Google Sites
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#77787b] hover:text-[#1a1a1a] hover:bg-[#e6e7e8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Page Selector Dropdown */}
          <div className="bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl p-4">
            <label className="block text-xs font-bold text-[#4d4d4f] uppercase tracking-wider mb-2">
              Select Page to Embed:
            </label>
            <div className="relative">
              <select
                value={selectedPageKey}
                onChange={(e) => setSelectedPageKey(e.target.value)}
                className="w-full bg-white border border-[#d1d5db] rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-[#1a1a1a] appearance-none focus:outline-hidden focus:ring-2 focus:ring-[#f37321] pr-10 cursor-pointer"
              >
                <optgroup label="Core Portal Pages">
                  {EMBEDDABLE_PAGES.filter(p => p.category === 'General').map(p => (
                    <option key={p.key} value={p.key}>
                      {p.title} ({p.templateType})
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Template 2: Task Guides">
                  {EMBEDDABLE_PAGES.filter(p => p.category === 'Pay & Taxes' || p.category === 'Leaves & Benefits' || p.category === 'Career & Talent' || p.category === "Manager's Hub").map(p => (
                    <option key={p.key} value={p.key}>
                      {p.title}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Template 3: Benefits & Coverage">
                  {EMBEDDABLE_PAGES.filter(p => p.category === 'Health & Coverage').map(p => (
                    <option key={p.key} value={p.key}>
                      {p.title}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Template 4: Policy References">
                  {EMBEDDABLE_PAGES.filter(p => p.category === 'Policies').map(p => (
                    <option key={p.key} value={p.key}>
                      {p.title}
                    </option>
                  ))}
                </optgroup>

                <optgroup label="Template 5: Guided Journeys & Support">
                  {EMBEDDABLE_PAGES.filter(p => p.category === 'Journeys' || p.category === 'Support').map(p => (
                    <option key={p.key} value={p.key}>
                      {p.title}
                    </option>
                  ))}
                </optgroup>
              </select>
              <ChevronDown className="w-4 h-4 text-[#77787b] absolute right-3 top-3 pointer-events-none" />
            </div>

            <div className="flex items-center gap-3 mt-3 text-xs text-[#77787b]">
              <span className="font-medium text-[#f37321] bg-[#fff5ee] px-2 py-0.5 rounded border border-[#fcd5bc]">
                {selectedPage.templateType}
              </span>
              <span>•</span>
              <span>Category: <strong>{selectedPage.category}</strong></span>
              <span>•</span>
              <span>Recommended Frame Height: <strong>{selectedPage.recommendedHeight}px</strong></span>
            </div>
          </div>

          {/* Embed Method Tabs */}
          <div>
            <div className="flex items-center border-b border-[#e6e7e8] gap-2 mb-4">
              <button
                onClick={() => setActiveTab('url')}
                className={`pb-2.5 px-3 text-xs font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'url'
                    ? 'border-[#f37321] text-[#f37321]'
                    : 'border-transparent text-[#77787b] hover:text-[#1a1a1a]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Google Sites &ldquo;By URL&rdquo; (Recommended)</span>
              </button>

              <button
                onClick={() => setActiveTab('iframe')}
                className={`pb-2.5 px-3 text-xs font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'iframe'
                    ? 'border-[#f37321] text-[#f37321]'
                    : 'border-transparent text-[#77787b] hover:text-[#1a1a1a]'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Google Sites &ldquo;Embed Code&rdquo; (iFrame)</span>
              </button>

              <button
                onClick={() => setActiveTab('react')}
                className={`pb-2.5 px-3 text-xs font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'react'
                    ? 'border-[#f37321] text-[#f37321]'
                    : 'border-transparent text-[#77787b] hover:text-[#1a1a1a]'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>React Component File</span>
              </button>

              <button
                onClick={() => setActiveTab('html')}
                className={`pb-2.5 px-3 text-xs font-bold transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'html'
                    ? 'border-[#f37321] text-[#f37321]'
                    : 'border-transparent text-[#77787b] hover:text-[#1a1a1a]'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>Raw Standalone HTML</span>
              </button>
            </div>

            {/* TAB 1: Embed by URL */}
            {activeTab === 'url' && (
              <div className="space-y-4">
                {isAisDev && (
                  <div className="p-3.5 bg-[#fff8e6] border border-[#fde68a] rounded-xl text-xs text-[#92400e] flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="font-bold text-[#b45309]">
                        Fixing &ldquo;refused to connect&rdquo; in Google Sites:
                      </div>
                      <p className="leading-relaxed">
                        Google AI Studio&apos;s development URL (<code className="font-mono bg-white/80 px-1 py-0.5 rounded border border-[#fde68a]">ais-dev-...</code>) is a private, authenticated sandbox that blocks external embedding for security. We automatically switched your embed link to the public Shared URL (<code className="font-mono bg-white/80 px-1 py-0.5 rounded border border-[#fde68a]">ais-pre-...</code>) which Google Sites can display.
                      </p>
                      <div className="pt-1 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setUseSharedUrl(!useSharedUrl)}
                          className="font-bold text-[#b45309] hover:underline flex items-center gap-1"
                        >
                          <span>{useSharedUrl ? '✓ Using Shared URL (ais-pre)' : 'Using Dev Sandbox URL (ais-dev)'}</span>
                          <span className="text-[10px] text-[#92400e]/80">(Click to switch)</span>
                        </button>
                        <span className="text-[#fde68a]">|</span>
                        <button
                          type="button"
                          onClick={() => setActiveTab('html')}
                          className="font-bold text-[#d97706] hover:underline"
                        >
                          Or use 100% Offline Raw HTML →
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-4 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl text-xs text-[#15803d]">
                  <div className="font-bold mb-1 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#16a34a]" />
                    Easiest & Cleanest Way to Embed in Google Sites
                  </div>
                  <p className="text-[#166534] leading-relaxed">
                    This URL includes <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#bbf7d0]">&embed=true</code>, which automatically strips out the outer portal header and search bar so it embeds natively into your Google Sites page layout.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4d4d4f] mb-1.5">
                    Embed URL for Google Sites:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      readOnly
                      value={embedUrl}
                      className="w-full bg-[#f8f9fa] border border-[#d1d5db] rounded-lg px-3 py-2 text-xs font-mono text-[#1a1a1a]"
                    />
                    <button
                      onClick={() => handleCopy(embedUrl, 'url')}
                      className="px-4 py-2 bg-[#f37321] hover:bg-[#e06313] text-white rounded-lg text-xs font-bold shrink-0 transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      {copiedType === 'url' ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy URL</span>
                        </>
                      )}
                    </button>
                    <a
                      href={embedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-[#d1d5db] hover:bg-[#f8f9fa] rounded-lg text-[#4d4d4f] transition-colors"
                      title="Test view in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Step by step instructions */}
                <div className="bg-[#f8f9fa] border border-[#e6e7e8] rounded-xl p-4 space-y-2">
                  <div className="font-bold text-xs text-[#1a1a1a] uppercase tracking-wider mb-2">
                    How to insert into Google Sites:
                  </div>
                  <ol className="list-decimal list-inside space-y-1.5 text-xs text-[#4d4d4f]">
                    <li>In Google Sites editor, open your target page.</li>
                    <li>In the right-hand panel, click <strong>Insert &gt; Embed</strong>.</li>
                    <li>Choose the <strong>&ldquo;By URL&rdquo;</strong> tab.</li>
                    <li>Paste the copied URL above and click <strong>Insert</strong>.</li>
                    <li>Drag the handles to expand the embed block to full page width.</li>
                  </ol>
                </div>
              </div>
            )}

            {/* TAB 2: iFrame Snippet */}
            {activeTab === 'iframe' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#4d4d4f]">
                    Paste directly into Google Sites &ldquo;Insert &gt; Embed &gt; Embed code&rdquo;:
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#77787b]">Height:</span>
                    <select
                      value={customHeight}
                      onChange={(e) => setCustomHeight(Number(e.target.value))}
                      className="bg-white border border-[#d1d5db] rounded px-2 py-1 text-xs font-semibold"
                    >
                      <option value={750}>750 px</option>
                      <option value={900}>900 px (Standard)</option>
                      <option value={1100}>1,100 px (Tall)</option>
                      <option value={1400}>1,400 px (Full Journey)</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <pre className="p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded-xl text-xs font-mono overflow-x-auto max-h-48">
                    {iframeSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(iframeSnippet, 'iframe')}
                    className="absolute top-3 right-3 px-3 py-1.5 bg-[#f37321] hover:bg-[#e06313] text-white rounded-md text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                  >
                    {copiedType === 'iframe' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-xs text-[#77787b] leading-relaxed">
                  Tip: Google Sites isolates custom HTML in a sandbox frame. The iframe snippet is formatted with responsive styling and zero margin borders to blend into your template.
                </div>
              </div>
            )}

            {/* TAB 3: React Component Source */}
            {activeTab === 'react' && (
              <div className="space-y-4">
                <p className="text-xs text-[#4d4d4f] leading-relaxed">
                  Every page has been split into its own clean, modular component file in the <code className="font-mono bg-[#f1f2f2] px-1 py-0.5 rounded">/src/pages/</code> directory for zero-friction maintainability:
                </p>

                <div className="relative">
                  <pre className="p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded-xl text-xs font-mono overflow-x-auto max-h-56">
                    {reactSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(reactSnippet, 'react')}
                    className="absolute top-3 right-3 px-3 py-1.5 bg-[#f37321] hover:bg-[#e06313] text-white rounded-md text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                  >
                    {copiedType === 'react' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Component</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/HomePageView.tsx</div>
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/SectionHubPageView.tsx</div>
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/TaskHowToPageView.tsx</div>
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/BenefitsCoveragePageView.tsx</div>
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/PolicyReferencePageView.tsx</div>
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/JourneyGuidePageView.tsx</div>
                  <div className="p-2 bg-[#f8f9fa] border border-[#e6e7e8] rounded">/src/pages/WhoToContactPageView.tsx</div>
                </div>
              </div>
            )}

            {/* TAB 4: Standalone HTML */}
            {activeTab === 'html' && (
              <div className="space-y-4">
                <p className="text-xs text-[#4d4d4f] leading-relaxed">
                  Want to paste raw HTML directly into Google Sites without any external hosting dependencies? This standalone snippet includes inline Tailwind styling, Google Fonts, and Amplify brand design:
                </p>

                <div className="relative">
                  <pre className="p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded-xl text-xs font-mono overflow-x-auto max-h-56">
                    {htmlSnippet}
                  </pre>
                  <button
                    onClick={() => handleCopy(htmlSnippet, 'html')}
                    className="absolute top-3 right-3 px-3 py-1.5 bg-[#f37321] hover:bg-[#e06313] text-white rounded-md text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                  >
                    {copiedType === 'html' ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Standalone HTML</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#f8f9fa] border-t border-[#e6e7e8] flex items-center justify-between text-xs text-[#77787b]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]"></span>
            <span>Google Sites Ready • Verified August 2026</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-[#f1f2f2] border border-[#d1d5db] text-[#1a1a1a] rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

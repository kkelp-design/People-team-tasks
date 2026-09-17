import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  Mail, 
  ArrowRight, 
  ChevronRight,
  User,
  CheckCircle2
} from 'lucide-react';
import { COMMON_TASKS, HOW_TO_TASKS, BENEFITS_DATA, POLICIES_DATA, CONTACT_ROUTING_DIRECTORY } from '../data/portalData';
import { ViewType } from '../types';

interface GleanSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewType, id?: string) => void;
  initialQuery?: string;
}

export const GleanSearchModal: React.FC<GleanSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      return {
        matchedTasks: COMMON_TASKS.slice(0, 4),
        matchedContacts: CONTACT_ROUTING_DIRECTORY.slice(0, 3),
        aiSummary: null,
        matchedDocs: []
      };
    }

    const q = query.toLowerCase();

    // 1. Matched tasks
    const matchedTasks = COMMON_TASKS.filter(t => 
      t.title.toLowerCase().includes(q) || 
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );

    // 2. Matched contacts ("Who to ask")
    const matchedContacts = CONTACT_ROUTING_DIRECTORY.filter(c => 
      c.topic.toLowerCase().includes(q) || 
      c.employeeNeed.toLowerCase().includes(q) ||
      c.primaryContact.name.toLowerCase().includes(q) ||
      c.primaryContact.role.toLowerCase().includes(q)
    );

    // 3. Matched docs across all databases
    const docs: Array<{
      name: string;
      cleanName: string;
      format: string;
      size: string;
      verified: boolean;
      folder: string;
      description: string;
      targetView: ViewType;
      targetId: string;
    }> = [];

    // From how to tasks
    Object.values(HOW_TO_TASKS).forEach(task => {
      task.relatedDocuments.forEach(doc => {
        if (
          doc.cleanName.toLowerCase().includes(q) || 
          doc.description.toLowerCase().includes(q) ||
          task.title.toLowerCase().includes(q)
        ) {
          docs.push({
            name: doc.name,
            cleanName: doc.cleanName,
            format: doc.format,
            size: doc.fileSize || '300 KB',
            verified: doc.gleanVerified,
            folder: doc.driveFolder,
            description: doc.description,
            targetView: 'task_howto',
            targetId: task.id
          });
        }
      });
    });

    // From benefits data
    Object.values(BENEFITS_DATA).forEach(benefit => {
      benefit.groupedDocuments.forEach(group => {
        group.docs.forEach(doc => {
          if (
            doc.cleanName.toLowerCase().includes(q) || 
            doc.description.toLowerCase().includes(q) ||
            benefit.title.toLowerCase().includes(q)
          ) {
            docs.push({
              name: doc.name,
              cleanName: doc.cleanName,
              format: doc.format,
              size: doc.fileSize || '350 KB',
              verified: doc.gleanVerified,
              folder: doc.driveFolder,
              description: doc.description,
              targetView: 'benefits_coverage',
              targetId: benefit.id
            });
          }
        });
      });
    });

    // From policy data
    Object.values(POLICIES_DATA).forEach(pol => {
      pol.officialDocuments.forEach(doc => {
        if (
          doc.cleanName.toLowerCase().includes(q) || 
          doc.description.toLowerCase().includes(q) ||
          pol.title.toLowerCase().includes(q)
        ) {
          docs.push({
            name: doc.name,
            cleanName: doc.cleanName,
            format: doc.format,
            size: doc.fileSize || '350 KB',
            verified: doc.gleanVerified,
            folder: doc.driveFolder,
            description: doc.description,
            targetView: 'policy_reference',
            targetId: pol.id
          });
        }
      });
    });

    // 4. Generate AI summary based on keywords
    let aiSummary: {
      headline: string;
      answer: string;
      whoToAsk: string;
      email: string;
      systemDestination: string;
    } | null = null;

    if (q.includes('proof') || q.includes('mortgage') || q.includes('employment') || q.includes('letter')) {
      aiSummary = {
        headline: 'Instant Proof of Employment Letter',
        answer: 'You can generate a signed employment and salary verification letter directly in Workday Self-Service under "Generate Verification Letter" in less than 2 minutes. For automated third-party lender requests, Amplify’s company code is 19482.',
        whoToAsk: 'Matt Kudlacz',
        email: 'mkudlacz@amplify.com',
        systemDestination: 'Workday Self-Service'
      };
    } else if (q.includes('dental') || q.includes('teeth') || q.includes('ortho')) {
      aiSummary = {
        headline: 'Amplify Dental Options (DPPO vs DMO)',
        answer: 'Amplify offers Aetna Dental PPO Base ($1,500 annual max) and Enhanced ($2,500 annual max with adult ortho coverage). Preventive exams and cleanings are covered 100% on all plans.',
        whoToAsk: 'Kwame Creamer',
        email: 'kcreamer@amplify.com',
        systemDestination: 'People Intranet'
      };
    } else if (q.includes('referral') || q.includes('refer') || q.includes('ashby')) {
      aiSummary = {
        headline: '$1,500 Employee Referral Bonus in Ashby',
        answer: 'Refer external talent by clicking "Refer" on any active opening in Ashby. Bonuses ($1,500) are paid via payroll after the new hire completes 90 days of employment.',
        whoToAsk: 'Lauren Shortall',
        email: 'lshortall@amplify.com',
        systemDestination: 'Ashby Requisitions'
      };
    } else if (q.includes('leave') || q.includes('parental') || q.includes('maternity') || q.includes('paternity') || q.includes('fmla')) {
      aiSummary = {
        headline: 'Amplify Paid Parental & Bonding Leave',
        answer: 'Amplify provides up to 12 weeks of 100% paid parental bonding leave for eligible parents (running concurrently with FMLA and state disability benefits). Leaves are coordinated through Lincoln Financial.',
        whoToAsk: 'Kwame Creamer',
        email: 'kcreamer@amplify.com',
        systemDestination: 'Lincoln Financial / Intranet'
      };
    } else if (q.includes('pay') || q.includes('calendar') || q.includes('deposit') || q.includes('salary') || q.includes('tax')) {
      aiSummary = {
        headline: '2026 Payroll & Direct Deposit Cutoffs',
        answer: 'Amplify employees are paid bi-weekly on alternating Fridays. You can split direct deposits across up to 3 bank accounts in Workday. Deposit changes submitted by Tuesday 5 PM ET take effect that Friday.',
        whoToAsk: 'Matt Kudlacz',
        email: 'mkudlacz@amplify.com',
        systemDestination: 'Workday Pay App'
      };
    } else if (q.includes('idp') || q.includes('career') || q.includes('ladder') || q.includes('promotion')) {
      aiSummary = {
        headline: 'Individual Development Plans & Career Ladders',
        answer: 'Access the official Amplify IDP Google Doc template and career ladders across 9 departments (Design, Engineering, Product, Support, Finance, and more) to align on your growth goals with your manager.',
        whoToAsk: 'Maureen Bates',
        email: 'mbates@amplify.com',
        systemDestination: 'Shared People Drive / Intranet'
      };
    } else if (q.includes('travel') || q.includes('expense') || q.includes('per diem') || q.includes('flight')) {
      aiSummary = {
        headline: 'Business Travel & Per Diem Guidelines',
        answer: 'Amplify travel should be booked through Navan with economy airfare standard. Daily per diem meal limit is $75/day. Hotel rate cap is $250/night ($350 in high-cost tier 1 metros). Itemized receipts required for expenses > $25.',
        whoToAsk: 'Carmika Austin',
        email: 'caustin@amplify.com',
        systemDestination: 'Workday Expenses'
      };
    } else if (q.includes('401') || q.includes('fidelity') || q.includes('match') || q.includes('retirement')) {
      aiSummary = {
        headline: '401(k) Retirement Savings & Match',
        answer: 'Amplify matches 50% on the first 6% you contribute (up to 3% dollar-for-dollar company match) via Fidelity Investments. Auto-enrollment begins after 30 days at 3% unless customized.',
        whoToAsk: 'Kwame Creamer',
        email: 'kcreamer@amplify.com',
        systemDestination: 'Fidelity NetBenefits'
      };
    }

    return {
      matchedTasks,
      matchedContacts,
      aiSummary,
      matchedDocs: docs.slice(0, 5)
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 pt-12 sm:pt-20">
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#e6e7e8] overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="p-4 sm:p-5 border-b border-[#e6e7e8] bg-[#f8f9fa] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#fff5ee] text-[#f37321] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          
          <div className="flex-1 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything (e.g., 'how to get proof of employment', 'dental PPO', '401k match', 'Ashby referral')..."
              className="w-full bg-white border border-[#b1b3b6] focus:border-[#f37321] focus:ring-2 focus:ring-[#fcd5bc] rounded-lg px-4 py-2.5 text-sm text-[#1a1a1a] placeholder-[#77787b] focus:outline-none transition-all"
              autoFocus
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#77787b] hover:text-[#1a1a1a]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#77787b] hover:text-[#1a1a1a] hover:bg-[#e6e7e8] rounded-lg transition-colors"
            title="Close Search (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick query chips */}
        <div className="px-5 py-2.5 bg-white border-b border-[#f1f2f2] flex items-center gap-2 overflow-x-auto scrollbar-none text-xs text-[#77787b]">
          <span className="font-semibold text-[#4d4d4f] shrink-0">Try asking:</span>
          {['proof of employment', 'dental coverage', 'refer a friend', 'parental leave', '2026 pay dates', 'travel per diem', 'IDP template'].map((prompt) => (
            <button
              key={prompt}
              onClick={() => setQuery(prompt)}
              className="px-2.5 py-1 bg-[#f8f9fa] hover:bg-[#fff5ee] hover:text-[#f37321] hover:border-[#fcd5bc] border border-[#e6e7e8] rounded-full whitespace-nowrap transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="p-5 overflow-y-auto space-y-6">

          {/* Glean AI Instant Answer (if matching key topics) */}
          {searchResults.aiSummary && (
            <div className="bg-[#fff5ee] border border-[#fcd5bc] rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#f37321]">
                    <Sparkles className="w-3.5 h-3.5" />
                    Glean Verified Summary
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#f0fdf4] text-[#15803d] border border-[#bbf7d0] text-[11px] font-semibold">
                  <ShieldCheck className="w-3 h-3 text-[#16a34a]" />
                  Authoritative Source
                </span>
              </div>

              <h4 className="text-base font-bold text-[#1a1a1a] mb-1 font-copse">
                {searchResults.aiSummary.headline}
              </h4>
              <p className="text-sm text-[#4d4d4f] leading-relaxed mb-3">
                {searchResults.aiSummary.answer}
              </p>

              {/* Authoritative Who to Ask Callout */}
              <div className="pt-3 border-t border-[#fcd5bc]/60 flex flex-wrap items-center justify-between gap-2 text-xs text-[#4d4d4f]">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-[#1a1a1a]">Who to ask:</span>
                  <a
                    href={`mailto:${searchResults.aiSummary.email}`}
                    className="text-[#f37321] hover:underline font-medium flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    {searchResults.aiSummary.whoToAsk}
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[#77787b]">Recommended Action System:</span>
                  <span className="font-medium text-[#1a1a1a] bg-white px-2 py-0.5 rounded border border-[#e6e7e8]">
                    {searchResults.aiSummary.systemDestination}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Recommended Employee Tasks */}
          {searchResults.matchedTasks.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#77787b]">
                  Recommended Actions & Guides ({searchResults.matchedTasks.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {searchResults.matchedTasks.map(task => (
                  <button
                    key={task.id}
                    onClick={() => {
                      onNavigate(task.targetView, task.targetId);
                      onClose();
                    }}
                    className="flex items-start gap-3 p-3 text-left rounded-xl border border-[#e6e7e8] hover:border-[#f37321] hover:bg-[#fff5ee]/40 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f1f2f2] group-hover:bg-[#f37321] text-[#4d4d4f] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-semibold text-sm text-[#1a1a1a] group-hover:text-[#f37321] transition-colors truncate">
                          {task.title}
                        </span>
                        {task.estimatedTime && (
                          <span className="text-[11px] text-[#77787b] shrink-0">{task.estimatedTime}</span>
                        )}
                      </div>
                      <p className="text-xs text-[#77787b] line-clamp-2 mt-0.5">
                        {task.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Official Documents indexed in Glean */}
          {searchResults.matchedDocs.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#77787b]">
                  Verified Documents in People Drive ({searchResults.matchedDocs.length})
                </h3>
              </div>
              <div className="space-y-2">
                {searchResults.matchedDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      onNavigate(doc.targetView, doc.targetId);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-lg border border-[#e6e7e8] hover:border-[#b1b3b6] hover:bg-[#f8f9fa] transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold uppercase">
                        {doc.format}
                      </div>
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#f37321] truncate">
                            {doc.cleanName}
                          </span>
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded text-[10px] bg-[#f0fdf4] text-[#15803d] font-semibold border border-[#bbf7d0]">
                            <ShieldCheck className="w-2.5 h-2.5" /> Verified
                          </span>
                        </div>
                        <p className="text-xs text-[#77787b] truncate">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-3">
                      <span className="text-xs text-[#77787b]">{doc.size}</span>
                      <ChevronRight className="w-4 h-4 text-[#b1b3b6] group-hover:text-[#f37321]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Authoritative Who to Ask Routing Matrix results */}
          {searchResults.matchedContacts.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#77787b]">
                  Authoritative Contact Routing (Glean Trust Standard)
                </h3>
              </div>
              <div className="space-y-2">
                {searchResults.matchedContacts.map((contact, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-white border border-[#e6e7e8] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-semibold text-[#1a1a1a] text-sm">{contact.topic}</div>
                      <div className="text-[#77787b] mt-0.5">{contact.employeeNeed}</div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <div className="font-medium text-[#1a1a1a]">{contact.primaryContact.name}</div>
                        <div className="text-[11px] text-[#77787b]">{contact.primaryContact.role}</div>
                      </div>
                      <a
                        href={`mailto:${contact.primaryContact.email}`}
                        className="px-2.5 py-1.5 bg-[#fff5ee] hover:bg-[#fcd5bc] text-[#f37321] rounded-lg font-semibold flex items-center gap-1 transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No results empty state */}
          {searchResults.matchedTasks.length === 0 && searchResults.matchedDocs.length === 0 && (
            <div className="text-center py-10">
              <p className="text-sm text-[#77787b] mb-2">No matching resources found for &ldquo;{query}&rdquo;.</p>
              <p className="text-xs text-[#4d4d4f]">
                Need immediate help? Reach out directly to <a href="mailto:kkelp@amplify.com" className="text-[#f37321] underline">Kirsten Kelp</a> or check our full <button onClick={() => { onNavigate('who_to_contact'); onClose(); }} className="text-[#f37321] underline">Contact Routing Directory</button>.
              </p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-[#f8f9fa] border-t border-[#e6e7e8] flex items-center justify-between text-xs text-[#77787b]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8dc63f]"></span>
            <span>Glean Search Index • Live Synchronized to People Team Drive</span>
          </div>
          <button
            onClick={() => {
              onNavigate('who_to_contact');
              onClose();
            }}
            className="text-[#f37321] hover:underline font-medium"
          >
            View Full Routing Directory →
          </button>
        </div>
      </div>
    </div>
  );
};

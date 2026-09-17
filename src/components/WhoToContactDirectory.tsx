import React, { useState } from 'react';
import { 
  UserCheck, 
  Search, 
  Mail, 
  ShieldCheck, 
  HelpCircle, 
  ExternalLink,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { CONTACT_ROUTING_DIRECTORY } from '../data/portalData';
import { TrustHeaderBanner } from './TrustHeaderBanner';
import { TrustFooter } from './TrustFooter';

interface WhoToContactDirectoryProps {
  onNavigate: (view: any, id?: string) => void;
  onOpenDestinationGuide: () => void;
}

export const WhoToContactDirectory: React.FC<WhoToContactDirectoryProps> = ({
  onNavigate,
  onOpenDestinationGuide
}) => {
  const [filterText, setFilterText] = useState('');

  const filteredContacts = CONTACT_ROUTING_DIRECTORY.filter(item => {
    const q = filterText.toLowerCase();
    return (
      item.topic.toLowerCase().includes(q) ||
      item.employeeNeed.toLowerCase().includes(q) ||
      item.primaryContact.name.toLowerCase().includes(q) ||
      item.primaryContact.role.toLowerCase().includes(q) ||
      item.systemToUse.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      
      {/* Standard Header */}
      <TrustHeaderBanner
        title="Authoritative Contact Routing Matrix"
        oneLinePurpose="Find the exact right People Team point person or escalation path for your question — so you never have to guess who to ask."
        owner={{
          name: 'Kirsten Kelp',
          email: 'kkelp@amplify.com',
          title: 'People Operations Lead',
          team: 'Office of CPO'
        }}
        lastReviewed="August 2026"
        gleanVerified={true}
        startHereCallout="Why this exists: Glean sometimes infers 'who to ask' from the last person who edited a file. This directory is the company source-of-truth for routing your needs."
        actionText="Search Matrix Below"
        onActionClick={() => {
          const el = document.getElementById('contact-search-input');
          el?.focus();
        }}
        systemLocation="People Intranet"
      />

      {/* Search Filter */}
      <div className="bg-white border border-[#e6e7e8] rounded-xl p-4 sm:p-5 mb-6 shadow-2xs">
        <div className="relative">
          <Search className="w-4 h-4 text-[#77787b] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="contact-search-input"
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Search by topic, keyword (e.g. 'leaves', 'payroll', 'equity', 'referral'), or person..."
            className="w-full bg-[#f8f9fa] border border-[#e6e7e8] focus:border-[#f37321] focus:ring-2 focus:ring-[#fcd5bc] rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#1a1a1a] focus:outline-none transition-all"
          />
        </div>
        <div className="mt-2 text-xs text-[#77787b] flex items-center justify-between">
          <span>Showing {filteredContacts.length} authoritative topic routings</span>
          {filterText && (
            <button 
              onClick={() => setFilterText('')}
              className="text-[#f37321] hover:underline font-medium"
            >
              Clear search
            </button>
          )}
        </div>
      </div>

      {/* Directory Table */}
      <div className="bg-white border border-[#e6e7e8] rounded-xl overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e6e7e8] bg-[#f8f9fa] text-[#4d4d4f]">
                <th className="p-3.5 font-bold uppercase tracking-wider">Topic & Common Needs</th>
                <th className="p-3.5 font-bold uppercase tracking-wider">Primary Point Person</th>
                <th className="p-3.5 font-bold uppercase tracking-wider">Alternative / Escalation</th>
                <th className="p-3.5 font-bold uppercase tracking-wider">System to Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#f1f2f2]">
              {filteredContacts.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#fff5ee]/30 transition-colors">
                  <td className="p-3.5 max-w-xs">
                    <div className="font-bold text-sm text-[#1a1a1a] mb-0.5">{item.topic}</div>
                    <div className="text-xs text-[#77787b] leading-relaxed">{item.employeeNeed}</div>
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    <div className="font-semibold text-[#1a1a1a]">{item.primaryContact.name}</div>
                    <div className="text-[11px] text-[#77787b]">{item.primaryContact.role}</div>
                    <a
                      href={`mailto:${item.primaryContact.email}?subject=[People%20Portal]%20Inquiry%20regarding%20${encodeURIComponent(item.topic)}`}
                      className="mt-1.5 inline-flex items-center gap-1 text-[#f37321] hover:underline font-medium text-xs"
                    >
                      <Mail className="w-3 h-3" />
                      <span>{item.primaryContact.email}</span>
                    </a>
                  </td>
                  <td className="p-3.5 text-[#4d4d4f] max-w-xs">
                    {item.alternativeRouting || 'N/A'}
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#f1f2f2] text-[#4d4d4f] border border-[#e6e7e8]">
                      {item.systemToUse}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Footer */}
      <TrustFooter
        ownerName="Kirsten Kelp"
        ownerEmail="kkelp@amplify.com"
        team="Office of CPO"
        lastReviewed="August 2026"
        onOpenDestinationGuide={onOpenDestinationGuide}
      />
    </div>
  );
};

import { ViewType } from '../types';

export interface EmbedPageOption {
  key: string;
  view: ViewType;
  id?: string;
  title: string;
  category: string;
  templateType: string;
  recommendedHeight: number;
}

export const EMBEDDABLE_PAGES: EmbedPageOption[] = [
  {
    key: 'home',
    view: 'home',
    title: 'Amplify People Portal - Homepage',
    category: 'General',
    templateType: 'Portal Front Door',
    recommendedHeight: 1200
  },
  {
    key: 'section_hub',
    view: 'section_hub',
    title: 'All Tasks Directory (12 Action Guides)',
    category: 'General',
    templateType: 'Template 1: Section Hub',
    recommendedHeight: 1100
  },
  {
    key: 'proof-of-employment',
    view: 'task_howto',
    id: 'proof-of-employment',
    title: 'How-To: Get Proof of Employment & Income Letter',
    category: 'Pay & Taxes',
    templateType: 'Template 2: Task Guide',
    recommendedHeight: 950
  },
  {
    key: 'pay-schedule-dates',
    view: 'task_howto',
    id: 'pay-schedule-dates',
    title: 'How-To: 2026 Pay Dates & Company Holidays',
    category: 'Pay & Taxes',
    templateType: 'Template 2: Task Guide',
    recommendedHeight: 900
  },
  {
    key: 'direct-deposit-update',
    view: 'task_howto',
    id: 'direct-deposit-update',
    title: 'How-To: Change Direct Deposit Bank Account',
    category: 'Pay & Taxes',
    templateType: 'Template 2: Task Guide',
    recommendedHeight: 900
  },
  {
    key: 'parental-leave-guide',
    view: 'task_howto',
    id: 'parental-leave-guide',
    title: 'How-To: 16-Week Paid Parental Leave Guide',
    category: 'Leaves & Benefits',
    templateType: 'Template 2: Task Guide',
    recommendedHeight: 950
  },
  {
    key: 'submit-referral',
    view: 'task_howto',
    id: 'submit-referral',
    title: 'How-To: Submit Candidate Referral ($1,500 Bonus)',
    category: 'Career & Talent',
    templateType: 'Template 2: Task Guide',
    recommendedHeight: 920
  },
  {
    key: 'manager-hiring-request',
    view: 'task_howto',
    id: 'manager-hiring-request',
    title: "How-To: Open Headcount / Requisition (Manager's Hub)",
    category: "Manager's Hub",
    templateType: 'Template 2: Task Guide',
    recommendedHeight: 950
  },
  {
    key: 'medical-benefits',
    view: 'benefits_coverage',
    id: 'medical-benefits',
    title: 'Benefits: Medical Plan Comparisons (POS II, HDHP, Kaiser)',
    category: 'Health & Coverage',
    templateType: 'Template 3: Benefits Coverage',
    recommendedHeight: 1150
  },
  {
    key: 'dental-vision',
    view: 'benefits_coverage',
    id: 'dental-vision',
    title: 'Benefits: Dental DPPO & Vision Coverage',
    category: 'Health & Coverage',
    templateType: 'Template 3: Benefits Coverage',
    recommendedHeight: 1000
  },
  {
    key: 'business-travel',
    view: 'policy_reference',
    id: 'business-travel',
    title: 'Policy: Business Travel & Expenses ($75 Per Diem)',
    category: 'Policies',
    templateType: 'Template 4: Policy Reference',
    recommendedHeight: 950
  },
  {
    key: 'job-levels-pay',
    view: 'policy_reference',
    id: 'job-levels-pay',
    title: 'Policy: Job Levels & Compensation Architecture',
    category: 'Policies',
    templateType: 'Template 4: Policy Reference',
    recommendedHeight: 950
  },
  {
    key: 'remote-work-guidelines',
    view: 'policy_reference',
    id: 'remote-work-guidelines',
    title: 'Policy: Remote Work Guidelines & Equipment Stipend',
    category: 'Policies',
    templateType: 'Template 4: Policy Reference',
    recommendedHeight: 950
  },
  {
    key: 'onboarding-journey',
    view: 'journey_guide',
    id: 'onboarding-journey',
    title: 'Journey: New Hire 90-Day Roadmap (Employee & Manager)',
    category: 'Journeys',
    templateType: 'Template 5: Journey Guide',
    recommendedHeight: 1200
  },
  {
    key: 'career-development-journey',
    view: 'journey_guide',
    id: 'career-development-journey',
    title: 'Journey: Career Development & IDP Roadmap',
    category: 'Journeys',
    templateType: 'Template 5: Journey Guide',
    recommendedHeight: 1200
  },
  {
    key: 'who_to_contact',
    view: 'who_to_contact',
    title: 'Matrix: Authoritative Who to Ask Routing Matrix',
    category: 'Support',
    templateType: 'Authoritative Matrix',
    recommendedHeight: 1000
  }
];

/**
 * Builds the URL to embed in Google Sites using "Embed > By URL"
 */
export function getGoogleSitesEmbedUrl(baseUrl: string, view: ViewType, id?: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set('view', view);
  if (id) {
    url.searchParams.set('id', id);
  } else {
    url.searchParams.delete('id');
  }
  url.searchParams.set('embed', 'true');
  return url.toString();
}

/**
 * Builds the iframe code to paste into Google Sites "Embed > Embed code"
 */
export function getGoogleSitesIframeSnippet(
  embedUrl: string,
  title: string,
  height: number = 900
): string {
  return `<!-- Amplify People Intranet - Embedded Google Sites Widget -->
<iframe 
  src="${embedUrl}" 
  width="100%" 
  height="${height}" 
  title="${title}"
  frameborder="0" 
  style="border: none; width: 100%; min-height: ${height}px; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);"
  allow="clipboard-write">
</iframe>`;
}

/**
 * Builds a clean, self-contained standalone HTML widget snippet that can be pasted directly
 * into Google Sites "Insert > Embed > Embed code" without requiring an active external iframe.
 */
export function getStandaloneHtmlSnippet(pageOption: EmbedPageOption): string {
  return `<!-- ============================================================ -->
<!-- Amplify People: ${pageOption.title} -->
<!-- Google Sites Standalone Widget (Copy & paste into Insert > Embed > Embed code) -->
<!-- ============================================================ -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${pageOption.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Copse&family=Open+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            amplify: {
              orange: '#f37321',
              charcoal: '#1a1a1a',
              warmgray: '#f8f9fa',
              border: '#e6e7e8',
              blue: '#2462a7',
              green: '#8dc63f'
            }
          },
          fontFamily: {
            copse: ['Copse', 'serif'],
            sans: ['Open Sans', 'sans-serif']
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#f8f9fa] text-[#1a1a1a] font-sans antialiased p-3 sm:p-5">

  <!-- Trust Header Banner -->
  <div class="bg-white border border-[#e6e7e8] rounded-xl p-5 mb-6 shadow-xs">
    <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#f1f2f2] text-xs">
      <span class="px-2.5 py-0.5 rounded-full bg-[#fff5ee] text-[#f37321] border border-[#fcd5bc] font-bold">
        Amplify People Intranet • ${pageOption.templateType}
      </span>
      <span class="text-[#15803d] bg-[#f0fdf4] px-2 py-0.5 rounded border border-[#bbf7d0] font-semibold text-[11px]">
        ✓ Glean Verified Source
      </span>
    </div>
    <h1 class="text-2xl font-bold font-copse text-[#1a1a1a] mb-2">${pageOption.title}</h1>
    <p class="text-xs text-[#4d4d4f] mb-4">Official task guidance for Amplify employees and people managers.</p>
    
    <div class="p-3 bg-[#fff5ee] border-l-4 border-[#f37321] rounded-r-lg text-xs flex items-center justify-between">
      <span class="font-medium text-[#1a1a1a]">Where to execute: Workday Self-Service & People Portal</span>
      <span class="text-[#f37321] font-bold">Verified Aug 2026</span>
    </div>
  </div>

  <!-- Main Content Card -->
  <div class="bg-white border border-[#e6e7e8] rounded-xl p-5 shadow-xs mb-6 space-y-4">
    <h2 class="text-lg font-bold font-copse text-[#1a1a1a]">Action Steps & Details</h2>
    <div class="space-y-3 text-xs text-[#4d4d4f] leading-relaxed">
      <div class="p-3.5 bg-[#f8f9fa] border border-[#e6e7e8] rounded-lg">
        <div class="font-bold text-sm text-[#1a1a1a] mb-1">Step 1: Check Prerequisites</div>
        <p>Ensure you have your Workday or Ashby single sign-on credentials ready.</p>
      </div>
      <div class="p-3.5 bg-[#f8f9fa] border border-[#e6e7e8] rounded-lg">
        <div class="font-bold text-sm text-[#1a1a1a] mb-1">Step 2: Complete the Action</div>
        <p>Follow the standard self-service procedure or submit request directly to People Operations.</p>
      </div>
      <div class="p-3.5 bg-[#f8f9fa] border border-[#e6e7e8] rounded-lg">
        <div class="font-bold text-sm text-[#1a1a1a] mb-1">Step 3: Definition of Done</div>
        <p>You will receive an automated confirmation email and document notification once generated.</p>
      </div>
    </div>
  </div>

  <!-- Trust Footer -->
  <div class="p-4 bg-white border border-[#e6e7e8] rounded-xl text-xs flex items-center justify-between text-[#77787b]">
    <div>Owner: Kirsten Kelp (kkelp@amplify.com) • Office of CPO</div>
    <div class="font-medium">Reviewed August 2026</div>
  </div>

</body>
</html>`;
}

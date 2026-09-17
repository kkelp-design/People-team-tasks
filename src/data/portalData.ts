import { 
  TaskCard, 
  HowToTaskData, 
  BenefitsCoverageData, 
  PolicyReferenceData, 
  JourneyGuideData, 
  ContactRoutingItem,
  VerifiedDocument
} from '../types';

export const COMMON_TASKS: TaskCard[] = [
  {
    id: 'proof-of-employment',
    title: 'Get proof of employment',
    description: 'Instant salary and employment verification letter for a mortgage, lease, or visa application.',
    category: 'pay',
    icon: 'FileCheck',
    estimatedTime: '2 mins',
    targetView: 'task_howto',
    targetId: 'proof-of-employment',
    badge: 'Popular',
    systemDestination: 'workday'
  },
  {
    id: 'medical-benefits',
    title: 'Compare medical & RX plans',
    description: 'Review 2026 Aetna POS II options, HDHP with HSA contribution, and regional Kaiser coverage.',
    category: 'benefits',
    icon: 'HeartPulse',
    estimatedTime: '5 mins',
    targetView: 'benefits_coverage',
    targetId: 'medical-benefits',
    badge: 'Open / QLE',
    systemDestination: 'intranet'
  },
  {
    id: 'pay-calendar',
    title: 'Check 2026 pay dates & direct deposit',
    description: 'Download the bi-weekly & weekly payroll schedules and update bank payment elections in Workday.',
    category: 'pay',
    icon: 'Calendar',
    estimatedTime: '3 mins',
    targetView: 'task_howto',
    targetId: 'direct-deposit-tax',
    systemDestination: 'workday'
  },
  {
    id: 'submit-referral',
    title: 'Refer talent in Ashby',
    description: 'Submit an external colleague or educator to an open Amplify role and track referral bonus status.',
    category: 'career',
    icon: 'UserPlus',
    estimatedTime: '4 mins',
    targetView: 'task_howto',
    targetId: 'submit-referral',
    badge: '$1,500 Bonus',
    systemDestination: 'ashby'
  },
  {
    id: 'parental-leave',
    title: 'Plan parental or medical leave',
    description: 'Understand paid parental bonding, state disability (NY DBL/PFL), and timeline steps.',
    category: 'timeoff',
    icon: 'Baby',
    estimatedTime: '6 mins',
    targetView: 'task_howto',
    targetId: 'parental-leave-request',
    systemDestination: 'intranet'
  },
  {
    id: 'career-idp',
    title: 'Fill out my development plan (IDP)',
    description: 'Access the official Amplify IDP template, career ladders across 9 departments, and mobility guide.',
    category: 'career',
    icon: 'Compass',
    estimatedTime: '10 mins',
    targetView: 'journey_guide',
    targetId: 'career-development-journey',
    systemDestination: 'drive'
  },
  {
    id: 'additional-perks',
    title: 'Access Progyny, Bright Horizons & perks',
    description: 'Fertility & menopause support, backup child/elder care, Livongo health management, and ID Watchdog.',
    category: 'perks',
    icon: 'Sparkles',
    estimatedTime: '4 mins',
    targetView: 'benefits_coverage',
    targetId: 'additional-benefits',
    systemDestination: 'intranet'
  },
  {
    id: 'job-levels',
    title: 'Understand job levels & pay transparency',
    description: 'Review Amplify level architecture (IC1–IC8, M1–M6), salary range philosophy, and FLSA classification.',
    category: 'pay',
    icon: 'Layers',
    estimatedTime: '5 mins',
    targetView: 'policy_reference',
    targetId: 'job-levels-pay',
    systemDestination: 'intranet'
  },
  {
    id: '401k-enrollment',
    title: 'Enroll in 401(k) & Fidelity match',
    description: 'Manage retirement contributions, take advantage of the company match, and explore BrokerageLink.',
    category: 'perks',
    icon: 'PiggyBank',
    estimatedTime: '5 mins',
    targetView: 'benefits_coverage',
    targetId: '401k-retirement',
    systemDestination: 'intranet'
  },
  {
    id: 'manager-hiring',
    title: 'Submit a hiring request (Managers)',
    description: 'Step-by-step manager guide for initiating an Ashby requisition, job descriptions, and offer approvals.',
    category: 'manager',
    icon: 'Briefcase',
    estimatedTime: '8 mins',
    targetView: 'task_howto',
    targetId: 'manager-hiring-request',
    roleRequired: 'manager',
    badge: 'Manager Only',
    systemDestination: 'ashby'
  },
  {
    id: 'onboarding-journey',
    title: 'New hire 90-day journey',
    description: 'Phased checklist for employees from Day 1 to Day 90, with companion manager readiness toolkit.',
    category: 'career',
    icon: 'Flag',
    estimatedTime: 'Self-paced',
    targetView: 'journey_guide',
    targetId: 'onboarding-journey',
    systemDestination: 'intranet'
  },
  {
    id: 'business-travel',
    title: 'Review travel & expense guidelines',
    description: 'Amplify per diem, airfare booking, hotel limits, and expense reimbursement standards.',
    category: 'pay',
    icon: 'Plane',
    estimatedTime: '4 mins',
    targetView: 'policy_reference',
    targetId: 'business-travel',
    systemDestination: 'intranet'
  }
];

export const HOW_TO_TASKS: Record<string, HowToTaskData> = {
  'proof-of-employment': {
    id: 'proof-of-employment',
    title: 'Request proof of employment',
    oneLinePurpose: 'Generate an instant, verified letter confirming your dates of employment, job title, and current compensation.',
    owner: {
      name: 'Matt Kudlacz',
      email: 'mkudlacz@amplify.com',
      title: 'People Operations & Systems Lead',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whoApplies: 'All active full-time and regular part-time Amplify employees.',
    estimatedCompletion: 'Under 2 minutes via Workday self-service',
    whatYouWillNeed: [
      'Your Amplify Workday single sign-on (SSO) credentials',
      'The address or name of the requesting lender/landlord (optional for customized headers)',
      'Decision on whether to include or exclude salary figures on the PDF'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open Workday Employee Self-Service',
        instruction: 'Log into Amplify Workday using your Okta dashboard. On your homepage, locate the "Personal Information" app or use the global Workday search bar.',
        actionLinkText: 'Launch Workday Self-Service',
        actionDestination: 'Workday',
        tip: 'Typing "Generate Letter" into Workday search directly jumps to the task.'
      },
      {
        stepNumber: 2,
        title: 'Select "Generate Verification Letter"',
        instruction: 'Under Quick Tasks, click "Verification Letter". Choose either "Standard Employment Letter" (dates and title only) or "Comprehensive Letter" (includes current base compensation).',
        actionDestination: 'Workday'
      },
      {
        stepNumber: 3,
        title: 'Preview and Download Signed PDF',
        instruction: 'Review the generated document. The letter carries Amplify’s official letterhead, corporate registration, and an authorized digital People Team signature.',
        actionDestination: 'Workday',
        tip: 'If your bank requires verification directly via an automated service like The Work Number, Amplify’s company code is 19482.'
      },
      {
        stepNumber: 4,
        title: 'Send Directly or Save to Drive',
        instruction: 'Download the encrypted PDF to attach to your rental or loan application. Keep a copy in your personal records if needed.',
        actionDestination: 'Workday'
      }
    ],
    definitionOfDone: 'You have downloaded a digitally signed PDF verification letter with official letterhead, or provided the lender with Amplify’s employer verification code.',
    faqs: [
      {
        question: 'What if a lender requires a telephone or verbal verification?',
        answer: 'Direct them to email payroll@amplify.com or call Amplify People Services at (212) 796-2200 with your signed consent form attached.'
      },
      {
        question: 'Can I get a verification letter if I am a former employee or contractor?',
        answer: 'Former employees should email peopleops@amplify.com. Contingent workers / contractors must contact their vendor agency of record directly.'
      },
      {
        question: 'Does this letter reflect incentive compensation or bonuses?',
        answer: 'The standard automated letter generates base salary. For historical bonus documentation (W-2s), navigate to Workday > Pay > Tax Documents.'
      }
    ],
    relatedDocuments: [
      {
        name: 'People_Proof_of_Employment_Guide_07.2026_FINAL.pdf',
        cleanName: 'Step-by-Step Proof of Employment Job Aid',
        format: 'pdf',
        fileSize: '142 KB',
        lastUpdated: '07/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Payroll & Workday',
        description: 'Complete visual job aid with annotated screenshots in Workday.'
      }
    ],
    escalationPath: 'If Workday produces an error or your lender requires custom phrasing, email mkudlacz@amplify.com or submit a ticket to People Support.'
  },

  'direct-deposit-tax': {
    id: 'direct-deposit-tax',
    title: 'Update direct deposit & tax withholdings',
    oneLinePurpose: 'Change where your paycheck is deposited (split across up to 3 accounts) and adjust your Federal/State W-4 withholdings.',
    owner: {
      name: 'Matt Kudlacz',
      email: 'mkudlacz@amplify.com',
      title: 'People Operations & Systems Lead',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whoApplies: 'All US-based Amplify employees on bi-weekly or weekly payroll.',
    estimatedCompletion: '3–5 minutes (must be completed by payroll cutoff)',
    whatYouWillNeed: [
      'Routing number and account number for your checking or savings accounts',
      'For tax changes: your updated IRS W-4 marital status, dependent amounts, or extra withholding requests',
      'Awareness of the 2026 Payroll Cutoff: changes submitted by Tuesday 5:00 PM ET of payroll week take effect that Friday'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Navigate to Workday "Pay" Application',
        instruction: 'From your Workday home page, select the "Pay" application icon.',
        actionLinkText: 'Go to Workday Pay Hub',
        actionDestination: 'Workday'
      },
      {
        stepNumber: 2,
        title: 'Manage Payment Elections (Direct Deposit)',
        instruction: 'Under "Payment Elections", click Add or Edit. You can allocate 100% of net pay to one account, or distribute by fixed dollar amount or percentage across up to 3 bank accounts.',
        actionDestination: 'Workday',
        tip: 'Double check routing numbers. Test deposits (prenote) are immediate and do not hold up your scheduled pay.'
      },
      {
        stepNumber: 3,
        title: 'Review or Adjust Withholding Elections (W-4)',
        instruction: 'Under "Tax Elections", choose Federal or State withholding. Complete the digital W-4 steps and electronically sign with your password.',
        actionDestination: 'Workday'
      },
      {
        stepNumber: 4,
        title: 'Check Pay Calendar Cutoff Date',
        instruction: 'Consult the 2026 Bi-Weekly Payroll Calendar to verify which pay date your change will first apply to.',
        actionDestination: 'People Drive'
      }
    ],
    definitionOfDone: 'Payment election status shows "Approved" in Workday and changes are reflected on your next scheduled pay stub.',
    faqs: [
      {
        question: 'When are paydays at Amplify?',
        answer: 'Salaried and hourly regular employees are paid bi-weekly on alternating Fridays. Seasonal and weekly contractors are paid every Friday.'
      },
      {
        question: 'Can I split my deposit into a High-Yield Savings or Investment Account?',
        answer: 'Yes. You can assign a specific dollar amount (e.g. $250) or percentage to your savings account, with the remainder flowing to your primary checking.'
      }
    ],
    relatedDocuments: [
      {
        name: 'People_2026_Bi-Weekly_Payroll_Calendar_01.2026_FINAL.pdf',
        cleanName: '2026 Bi-Weekly Payroll Calendar',
        format: 'pdf',
        fileSize: '310 KB',
        lastUpdated: '01/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Payroll & Workday',
        description: 'Official schedule showing all 26 pay periods, timesheet approvals, and bank holidays.'
      },
      {
        name: 'People_2026_Weekly_Payroll_Calendar_01.2026_FINAL.pdf',
        cleanName: '2026 Weekly Payroll Calendar',
        format: 'pdf',
        fileSize: '280 KB',
        lastUpdated: '01/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Payroll & Workday',
        description: 'Weekly pay calendar for qualifying hourly and temporary roles.'
      }
    ],
    escalationPath: 'Questions about tax withholding amounts cannot be given tax advice by Amplify; consult a certified CPA. For technical deposit errors, email payroll@amplify.com.'
  },

  'submit-referral': {
    id: 'submit-referral',
    title: 'Refer talent in Ashby',
    oneLinePurpose: 'Submit candidate referrals directly through Ashby to connect great educators and teammates to Amplify and earn a $1,500 referral bonus.',
    owner: {
      name: 'Lauren Shortall',
      email: 'lshortall@amplify.com',
      title: 'Talent Acquisition Operations Lead',
      team: 'Talent Acquisition & Onboarding'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whoApplies: 'All regular full-time and part-time Amplify employees (excluding hiring managers for their direct reports and People Team TA staff).',
    estimatedCompletion: '3–5 minutes',
    whatYouWillNeed: [
      'Candidate’s name, email, and current LinkedIn profile or resume PDF',
      'The specific open job title or general department interest',
      'A short note explaining why you endorse them and how you know them'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Check the Internal Ashby Job Board',
        instruction: 'Browse active open requisitions on Amplify’s internal Ashby portal to find matching openings.',
        actionLinkText: 'Open Internal Ashby Board',
        actionDestination: 'Ashby',
        tip: 'You can refer candidates to general talent pools if a specific requisition isn’t posted yet.'
      },
      {
        stepNumber: 2,
        title: 'Click "Refer Candidate"',
        instruction: 'On the job posting in Ashby, click the orange "Refer" button. Fill in the candidate details, attach their resume, and select your relationship.',
        actionDestination: 'Ashby'
      },
      {
        stepNumber: 3,
        title: 'Add Context on Skills & Fit',
        instruction: 'Add 2–3 sentences highlighting their experience in curriculum, education technology, engineering, or sales. Recruiters prioritize referrals with personalized context.',
        actionDestination: 'Ashby'
      },
      {
        stepNumber: 4,
        title: 'Track Candidacy in Your Ashby Portal',
        instruction: 'You will receive automatic notifications as your referral moves through Recruiter Screen, Team Interview, and Offer stages.',
        actionDestination: 'Ashby'
      }
    ],
    definitionOfDone: 'Candidate profile is logged in Ashby under your referral source, and the recruiter reaches out within 5 business days.',
    faqs: [
      {
        question: 'When is the referral bonus paid?',
        answer: 'Standard $1,500 referral bonuses are paid via payroll after the new hire completes 90 calendar days of active employment.'
      },
      {
        question: 'Can I refer someone who previously applied directly?',
        answer: 'If the candidate has not been active in our recruiting pipeline within the last 6 months, your referral is fully eligible for the bonus.'
      }
    ],
    relatedDocuments: [
      {
        name: 'People_How_to_Refer_Talent_in_Ashby_Guide_PPL-133_08.2026_FINAL.pdf',
        cleanName: 'Ashby Employee Referral Guide (PPL-133)',
        format: 'pdf',
        fileSize: '410 KB',
        lastUpdated: '08/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Hiring Process & Ashby',
        description: 'Visual step-by-step walkthrough for submitting and tracking candidates in Ashby.'
      },
      {
        name: 'People_Amplify_Interviewer_Excellence_Guide_06.2026_FINAL.pdf',
        cleanName: 'Amplify Interviewer Excellence & Rubric Guide',
        format: 'pdf',
        fileSize: '650 KB',
        lastUpdated: '06/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Hiring Process & Ashby',
        description: 'Equitable hiring principles and structured interview question guidelines.'
      }
    ],
    escalationPath: 'For questions regarding candidate status or referral bonus credit, email lshortall@amplify.com or recruiting@amplify.com.'
  },

  'parental-leave-request': {
    id: 'parental-leave-request',
    title: 'Plan parental & family leave',
    oneLinePurpose: 'Step-by-step roadmap to plan paid parental bonding leave, state disability integration, and a smooth return to work.',
    owner: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      title: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whoApplies: 'Birthing, non-birthing, adoptive, and foster parents who have completed at least 3 months of continuous service.',
    estimatedCompletion: 'Initiate 30–60 days prior to anticipated leave date',
    whatYouWillNeed: [
      'Anticipated delivery or placement date',
      'Discussion with your manager about coverage priorities and estimated timeline',
      'State specific forms (e.g., NY PFL-120 / DBL or CA PFL if applicable)'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Review Amplify Paid Parental Leave Benefit',
        instruction: 'Amplify provides up to 12 weeks of 100% paid parental bonding leave for eligible parents, running concurrently with FMLA.',
        actionDestination: 'Intranet',
        tip: 'Birthing mothers also receive short-term disability coverage (typically 6–8 weeks) prior to or alongside bonding leave.'
      },
      {
        stepNumber: 2,
        title: 'Notify Your Manager & People Partner',
        instruction: 'Share your anticipated start window at least 30 days in advance to align on project coverage and client support handoffs.',
        actionDestination: 'People Partner'
      },
      {
        stepNumber: 3,
        title: 'Initiate Leave in Lincoln Financial / Workday',
        instruction: 'Submit your leave request through Lincoln Financial (Amplify’s leave partner) online or by phone. Lincoln coordinates FMLA, state statutory benefits, and Amplify company pay.',
        actionDestination: 'Workday'
      },
      {
        stepNumber: 4,
        title: 'Access Progyny & Bright Horizons Support',
        instruction: 'Take advantage of Progyny fertility/perinatal support and Bright Horizons postpartum return-to-work resources and subsidized backup care.',
        actionDestination: 'Intranet'
      }
    ],
    definitionOfDone: 'Lincoln Financial confirms claim approval, Workday shows approved leave schedule, and your payroll coordination plan is finalized.',
    faqs: [
      {
        question: 'Can parental leave be taken intermittently?',
        answer: 'Parental bonding leave may be taken continuously or in 2-week minimum blocks within the first 12 months following birth or adoption, with manager approval.'
      },
      {
        question: 'Do health benefits continue during leave?',
        answer: 'Yes! All medical, dental, vision, life, and disability benefits remain active at the regular active employee contribution rate.'
      }
    ],
    relatedDocuments: [
      {
        name: 'People_Parental_Leave_Guide_and_FAQ_06.2026_FINAL.pdf',
        cleanName: 'Amplify Parental Leave Comprehensive Guide',
        format: 'pdf',
        fileSize: '520 KB',
        lastUpdated: '06/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Benefits & Leave Administration',
        description: 'Complete breakdown of paid bonding, short term disability, state offsets, and benefits continuation.'
      },
      {
        name: 'People_AMPEDU_NY_PFL-120_Notice_01.2026_FINAL.pdf',
        cleanName: 'New York Paid Family Leave Employee Notice (PFL-120)',
        format: 'pdf',
        fileSize: '190 KB',
        lastUpdated: '01/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Benefits & Leave Administration',
        description: 'Statutory NY paid family leave guidelines and claim submission forms.'
      }
    ],
    escalationPath: 'Contact Kwame Creamer at kcreamer@amplify.com or the Total Rewards team at benefits@amplify.com.'
  },

  'manager-hiring-request': {
    id: 'manager-hiring-request',
    title: 'Submit a hiring request (Managers)',
    oneLinePurpose: 'Initiate an approved backfill or new headcount requisition in Ashby, align with your Finance BP, and kick off recruitment.',
    owner: {
      name: 'Lauren Shortall',
      email: 'lshortall@amplify.com',
      title: 'Talent Acquisition Operations Lead',
      team: 'Talent Acquisition & Onboarding'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whoApplies: 'People Managers with budgeted headcount seeking to open a requisition.',
    estimatedCompletion: '10–15 minutes to initiate; 3–5 days for executive/finance approvals',
    whatYouWillNeed: [
      'Approved headcount budget code from your VP and Finance Business Partner',
      'Draft job description using the Amplify Job Description Library template',
      'Target job level (e.g., IC3, M2) and compensation range from the Positional Range Guide'
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Confirm Headcount Budget with Finance BP',
        instruction: 'Ensure the headcount is accounted for in your department’s annual budget or has replacement approval for an existing vacancy.',
        actionDestination: 'People Partner'
      },
      {
        stepNumber: 2,
        title: 'Pull Job Description from Central Library',
        instruction: 'Access the 2025/2026 Job Description Library to adopt standardized responsibilities, requirements, and level expectations.',
        actionLinkText: 'Open Job Description Library',
        actionDestination: 'Smartsheet'
      },
      {
        stepNumber: 3,
        title: 'Submit Requisition in Ashby',
        instruction: 'In Ashby, select "New Requisition". Enter role title, target hire date, hiring manager, interview team, and justification.',
        actionDestination: 'Ashby',
        tip: 'Include clear remote or hybrid location criteria to ensure immediate recruiter posting.'
      },
      {
        stepNumber: 4,
        title: 'Schedule Ashby Kick-off Meeting',
        instruction: 'Once approved by Finance and your VP, your assigned Talent Acquisition Partner will schedule a 30-minute intake to review interview rubrics and sourcing strategy.',
        actionDestination: 'Ashby'
      }
    ],
    definitionOfDone: 'Requisition is fully approved in Ashby, the job is published to careers.amplify.com, and active sourcing commences.',
    faqs: [
      {
        question: 'What if I need an offer over the posted positional range?',
        answer: 'You must submit the "Request for Offer Over Posted Range" Smartsheet form with VP and People Team Comp approval before verbal offer delivery.'
      },
      {
        question: 'How do I hire a contingent contractor instead of full-time employee?',
        answer: 'Contractor requisitions are processed via the People Manager Hub under "Contractor Changes & SOW Engagement", not Ashby.'
      }
    ],
    relatedDocuments: [
      {
        name: 'People_Amplify_Hiring_Workflow_Manager_Guide_07.2026_FINAL.pdf',
        cleanName: 'Amplify Hiring Workflow: Manager Training Guide',
        format: 'pdf',
        fileSize: '890 KB',
        lastUpdated: '07/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Hiring Process & Ashby',
        description: 'Comprehensive manager guide covering requisitions, interview panels, rubrics, and offer approvals.'
      },
      {
        name: 'People_Job_Levels_Quick_Reference_Guide_05.2026_FINAL.pdf',
        cleanName: 'Amplify Job Levels & Architecture Quick Reference',
        format: 'pdf',
        fileSize: '340 KB',
        lastUpdated: '05/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Compensation & Rewards',
        description: 'Level definitions from IC1 through IC8 and M1 through M6.'
      }
    ],
    escalationPath: 'For requisition assistance, contact Lauren Shortall at lshortall@amplify.com or message #recruiting-hiring-managers.'
  }
};

export const BENEFITS_DATA: Record<string, BenefitsCoverageData> = {
  'medical-benefits': {
    id: 'medical-benefits',
    title: 'Medical & prescription coverage',
    category: 'medical',
    oneLinePurpose: 'Compare 2026 comprehensive medical and prescription drug plans offered through Aetna and Kaiser Permanente.',
    eligibilitySnapshot: 'All regular full-time employees working 30+ hours/week. Coverage begins on your first day of employment.',
    owner: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      title: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    mostCommonQuestions: [
      'What is the difference between the $500 POS II and $250 POS II Plus plans?',
      'How does the Health Savings Account (HSA) company contribution work on the HDHP?',
      'Can I enroll in Kaiser Permanente if I live in California or Hawaii?',
      'How do I find an in-network doctor, therapist, or MinuteClinic?'
    ],
    plans: [
      {
        name: 'Aetna Choice POS II ($500 Deductible)',
        carrier: 'Aetna',
        tier: 'Standard Preferred PPO',
        deductibleIndividual: '$500',
        deductibleFamily: '$1,000',
        outOfPocketMax: '$3,500 Individual / $7,000 Family',
        coinsurance: '90% In-Network / 10% Member',
        pcpCopay: '$20 Copay (Specialist: $35)',
        hsaEligible: false,
        bestFor: 'Predictable copays for regular office visits and low upfront deductible for routine medical care.',
        keyFeatures: [
          'National Aetna Choice POS II network with out-of-network access',
          '$0 preventive care and annual physicals',
          'Free MinuteClinic and Teladoc 24/7 virtual visits',
          'Prescription tiers: $10 Generic / $30 Preferred / $50 Non-preferred'
        ]
      },
      {
        name: 'Aetna Choice POS II Plus ($250 Deductible)',
        carrier: 'Aetna',
        tier: 'Enhanced PPO',
        deductibleIndividual: '$250',
        deductibleFamily: '$500',
        outOfPocketMax: '$2,500 Individual / $5,000 Family',
        coinsurance: '90% In-Network / 10% Member',
        pcpCopay: '$15 Copay (Specialist: $25)',
        hsaEligible: false,
        bestFor: 'Employees with frequent health visits or anticipated procedures who want the lowest out-of-pocket exposure.',
        keyFeatures: [
          'Lowest deductible ($250 individual) across all plans',
          'Reduced copays for therapies, specialists, and generic RX',
          'Includes Express Scripts SaveOnSP specialty drug assistance',
          'Aetna Smart Compare hospital quality scoring'
        ]
      },
      {
        name: 'Aetna Choice POS II HDHP with HSA ($1,700 Deductible)',
        carrier: 'Aetna',
        tier: 'High Deductible Health Plan',
        deductibleIndividual: '$1,700',
        deductibleFamily: '$3,400',
        outOfPocketMax: '$4,000 Individual / $8,000 Family',
        coinsurance: '80% In-Network after deductible',
        pcpCopay: 'Deductible then 20% coinsurance',
        hsaEligible: true,
        companyHsaContribution: '$600 Individual / $1,200 Family funded by Amplify!',
        bestFor: 'Employees who want lower per-paycheck premiums and triple-tax-free wealth building via HSA savings.',
        keyFeatures: [
          'Amplify deposits up to $1,200 directly into your Optum HSA account',
          'HSA funds roll over year-to-year and belong to you forever',
          'Preventive care covered 100% before deductible',
          'Lowest bi-weekly employee payroll contribution'
        ]
      },
      {
        name: 'Kaiser Permanente HMO (CA & HI Regional)',
        carrier: 'Kaiser Permanente',
        tier: 'Integrated Managed Care',
        deductibleIndividual: '$0 Deductible',
        deductibleFamily: '$0 Deductible',
        outOfPocketMax: '$2,000 Individual / $4,000 Family',
        coinsurance: '100% covered after modest copays',
        pcpCopay: '$20 Copay',
        hsaEligible: false,
        bestFor: 'Employees living in designated CA and HI zip codes who love Kaiser’s integrated medical-facility ecosystem.',
        keyFeatures: [
          'No deductible on in-network services',
          'All doctors, labs, radiology, and pharmacy under one roof',
          'Free digital mental health tools (Calm, Ginger, myStrength)',
          'Requires residence in approved Kaiser service territory'
        ]
      }
    ],
    groupedDocuments: [
      {
        categoryName: 'Summaries of Benefits and Coverage (SBCs)',
        docs: [
          {
            name: 'People_Amplify_SBC_Aetna_Choice_POS_II_500_Plan_01.2026_FINAL.pdf',
            cleanName: '2026 SBC: Aetna Choice POS II ($500 Plan)',
            format: 'pdf',
            fileSize: '480 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Medical',
            description: 'Federal standard summary of benefits, cost-sharing examples, and coverage limitations.'
          },
          {
            name: 'People_Amplify_SBC_Aetna_Choice_POS_II_Plus_250_Plan_01.2026_FINAL.pdf',
            cleanName: '2026 SBC: Aetna Choice POS II Plus ($250 Plan)',
            format: 'pdf',
            fileSize: '495 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Medical',
            description: 'Federal standard summary of benefits for the enhanced POS II Plus plan.'
          },
          {
            name: 'People_Amplify_SBC_Aetna_HDHP_HSA_1700_Plan_01.2026_FINAL.pdf',
            cleanName: '2026 SBC: Aetna HDHP with HSA ($1,700 Plan)',
            format: 'pdf',
            fileSize: '510 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Medical',
            description: 'Federal standard summary for the high deductible health plan with HSA eligibility.'
          },
          {
            name: 'People_Amplify_SBC_Kaiser_CA_HI_HMO_01.2026_FINAL.pdf',
            cleanName: '2026 SBC: Kaiser Permanente HMO (CA/HI)',
            format: 'pdf',
            fileSize: '430 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Medical',
            description: 'Summary of benefits for regional Kaiser California and Hawaii members.'
          }
        ]
      },
      {
        categoryName: 'Virtual Care & Prescription Perks',
        docs: [
          {
            name: 'People_Teladoc_24-7_Member_Registration_Guide_01.2026_FINAL.pdf',
            cleanName: 'Teladoc 24/7 Virtual Primary Care & Mental Health Guide',
            format: 'pdf',
            fileSize: '320 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Medical',
            description: 'How to register for $0 virtual visits on phone or video from anywhere in the US.'
          },
          {
            name: 'People_SaveOnSP_Specialty_Pharmacy_Flyer_01.2026_FINAL.pdf',
            cleanName: 'SaveOnSP Specialty Drug Copay Assistance Program',
            format: 'pdf',
            fileSize: '215 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Medical',
            description: 'Zero dollar ($0) copays for select specialty and maintenance medications via Express Scripts.'
          }
        ]
      }
    ],
    videos: [
      {
        title: 'Choosing Between POS II $500 vs HDHP with HSA',
        duration: '4:15',
        description: 'Total Rewards Director Kwame Creamer breaks down the math of company HSA contributions and out-of-pocket risk.'
      },
      {
        title: 'How to Access $0 Teladoc & In-Network MinuteClinics',
        duration: '2:40',
        description: 'Quick walkthrough on using your Aetna digital member card at CVS MinuteClinics for routine prescriptions.'
      }
    ],
    faqs: [
      {
        question: 'When can I make changes to my health coverage?',
        answer: 'You can change coverage during the annual Open Enrollment period in November, or within 30 days of a Qualifying Life Event (QLE) like marriage, birth, or loss of other coverage.'
      },
      {
        question: 'Where can I access my digital Aetna insurance ID card?',
        answer: 'Download the Aetna Health mobile app, log into aetna.com, or access your card image in Workday > Benefits > Benefit Documents.'
      }
    ],
    escalationNote: 'For specific claim disputes or coverage appeals, contact the Amplify Benefits concierge at benefits@amplify.com or Aetna Member Services at 1-888-982-3862.'
  },

  'dental-vision': {
    id: 'dental-vision',
    title: 'Dental & vision coverage',
    category: 'dental',
    oneLinePurpose: 'Comprehensive preventive, restorative, and orthodontic dental care through Aetna, paired with Aetna Vision Preferred coverage.',
    eligibilitySnapshot: 'All regular full-time employees working 30+ hours/week. Effective on day one.',
    owner: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      title: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    mostCommonQuestions: [
      'What is the difference between DPPO Base and DPPO Enhanced dental?',
      'Is adult and child orthodontia covered under our dental plans?',
      'What is the annual allowance for vision frames and contacts in 2026?'
    ],
    dentalPlans: [
      {
        name: 'Aetna Dental PPO (DPPO Base)',
        type: 'DPPO Base',
        preventive: '100% Covered (exams, cleanings, x-rays)',
        basicServices: '80% Covered after $50 deductible',
        majorServices: '50% Covered (crowns, dentures, bridges)',
        orthodontia: '50% up to $1,500 lifetime max (children)',
        annualMax: '$1,500 per person / year',
        bestFor: 'Employees seeking standard preventive and routine dental care with any dentist.'
      },
      {
        name: 'Aetna Dental PPO Plus (DPPO Enhanced)',
        type: 'DPPO Enhanced',
        preventive: '100% Covered (no deductible)',
        basicServices: '90% Covered after $25 deductible',
        majorServices: '60% Covered',
        orthodontia: '50% up to $2,500 lifetime max (adults & children)',
        annualMax: '$2,500 per person / year',
        bestFor: 'Comprehensive restorative work, implants, or adult orthodontics.'
      },
      {
        name: 'Aetna Dental DMO (Select States)',
        type: 'DMO',
        preventive: '100% Covered ($0 copay)',
        basicServices: 'Copay schedule (lowest out-of-pocket)',
        majorServices: 'Fixed low copays',
        orthodontia: 'Comprehensive copay benefit',
        annualMax: 'Unlimited annual maximum',
        bestFor: 'Maximum savings when utilizing an assigned primary care network dentist.'
      }
    ],
    groupedDocuments: [
      {
        categoryName: 'Dental Plan Documents',
        docs: [
          {
            name: 'People_Amplify_Dental_PPO_Plan_Comparison_01.2026_FINAL.pdf',
            cleanName: '2026 Dental PPO Base vs Enhanced Comparison',
            format: 'pdf',
            fileSize: '360 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Dental',
            description: 'Side-by-side breakdown of deductibles, annual limits, and fee schedules.'
          },
          {
            name: 'People_How_to_Find_PPOII_Dental_Provider_01.2026_FINAL.pdf',
            cleanName: 'How to Find an In-Network Aetna Dental Provider',
            format: 'pdf',
            fileSize: '210 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Dental',
            description: 'Provider directory search tool guidance for DPPO II Extend networks.'
          }
        ]
      },
      {
        categoryName: 'Vision Care Documents',
        docs: [
          {
            name: 'People_Amplify_Vision_Benefit_Summary_01.2026_FINAL.pdf',
            cleanName: '2026 Aetna Vision Preferred Summary (AVP)',
            format: 'pdf',
            fileSize: '295 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Health Benefits / Vision',
            description: '$10 annual eye exam copay, $200 frame allowance, and discounts on laser vision correction.'
          }
        ]
      }
    ],
    videos: [
      {
        title: 'Amplify Dental Plan Comparison Walkthrough',
        duration: '3:15',
        description: 'Understand the difference between PPO in-network discounts and DMO copay savings.'
      }
    ],
    faqs: [
      {
        question: 'Do I get separate physical cards for Dental and Vision?',
        answer: 'You receive one Aetna ID card that covers medical and dental. For vision, providers can look you up via your SSN and Date of Birth on the Aetna Vision Preferred network.'
      }
    ],
    escalationNote: 'Questions? Reach Kwame Creamer at kcreamer@amplify.com or submit a ticket to benefits@amplify.com.'
  },

  'additional-benefits': {
    id: 'additional-benefits',
    title: 'Additional perks, family building & wellbeing',
    category: 'additional',
    oneLinePurpose: 'Family building fertility support, subsidized backup care, digital wellness, legal plans, and identity protection.',
    eligibilitySnapshot: 'All active Amplify full-time staff and eligible dependents.',
    owner: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      title: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    mostCommonQuestions: [
      'How do I activate Progyny for IVF, egg freezing, or menopause support?',
      'How many days of Bright Horizons backup care do I receive each year?',
      'How do I use MetLife Legal plans for home purchases or estate planning?'
    ],
    programs: [
      {
        name: 'Progyny Family Building & Menopause',
        tagline: 'Comprehensive fertility, adoption, surrogacy & midlife care',
        coverage: '2 Smart Cycles of fertility care (IVF, IUI, egg freezing) + dedicated Patient Care Advocate (PCA). Also covers personalized hormone therapy and menopause support.',
        howToAccess: 'Call Progyny at 1-844-535-0048 or visit progyny.com/amplify to speak with your dedicated care advocate.',
        icon: 'Sparkles',
        contact: 'Progyny Member Support'
      },
      {
        name: 'Bright Horizons Family Solutions',
        tagline: 'Subsidized backup childcare, elder care & virtual tutoring',
        coverage: 'Up to 15 days of subsidized backup care per calendar year ($15/day for center-based, $6/hour for in-home). Includes 4 free hours of virtual K-12 academic tutoring.',
        howToAccess: 'Download the Bright Horizons Backup Care app or register at backup.brighthorizons.com using employer code AMPLIFY.',
        icon: 'Users',
        contact: 'Bright Horizons Concierge'
      },
      {
        name: 'Livongo by Teladoc Health',
        tagline: 'Free smart health monitors for diabetes & hypertension',
        coverage: 'Connected blood glucose meter with unlimited free strips and blood pressure cuff with personalized mobile coaching and 24/7 emergency response.',
        howToAccess: 'Enroll at welcome.livongo.com/AMPLIFY using code AMPLIFY.',
        icon: 'Activity',
        contact: 'Livongo Support'
      },
      {
        name: 'ID Watchdog Platinum Plus',
        tagline: 'Comprehensive identity theft protection & credit monitoring',
        coverage: 'Triple-bureau credit reports, dark web monitoring, financial account takeover alerts, and $1,000,000 identity restoration insurance.',
        howToAccess: 'Managed via annual open enrollment; mobile app available on iOS and Android.',
        icon: 'ShieldCheck',
        contact: 'ID Watchdog'
      },
      {
        name: 'MetLife Legal Plans',
        tagline: 'Fully covered attorney services for personal legal matters',
        coverage: 'Unlimited access to network attorneys for will preparation, trusts, home sale/purchase, traffic defense, family law, and identity resolution ($24/month).',
        howToAccess: 'Call 1-800-821-6400 or log into members.legalplans.com.',
        icon: 'Scale',
        contact: 'MetLife Legal'
      },
      {
        name: 'LifeKeys & Employee Assistance (EAP)',
        tagline: '24/7 confidential counseling, financial and grief support',
        coverage: 'Up to 6 free confidential counseling sessions per issue per year for you and household members. Access licensed psychologists, financial advisors, and elder law experts.',
        howToAccess: 'Call Lincoln LifeKeys at 1-855-327-4463 or visit guidanceresources.com (Web ID: LifeKeys).',
        icon: 'HeartHandshake',
        contact: 'Lincoln LifeKeys'
      }
    ],
    groupedDocuments: [
      {
        categoryName: 'Family Building & Childcare Flyers',
        docs: [
          {
            name: 'People_Progyny_Fertility_Family_Building_Overview_01.2026_FINAL.pdf',
            cleanName: 'Progyny Fertility & Family Building Overview',
            format: 'pdf',
            fileSize: '450 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Benefits & Leave Administration',
            description: 'Details smart cycles, medication coverage, adoption/surrogacy reimbursement, and dedicated advocates.'
          },
          {
            name: 'People_Bright_Horizons_Backup_Care_and_Tutoring_01.2026_FINAL.pdf',
            cleanName: 'Bright Horizons Backup Care & Free Virtual Tutoring',
            format: 'pdf',
            fileSize: '380 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Benefits & Leave Administration',
            description: 'Explains 15 backup days allocation, in-home nanny booking, and K-12 academic tutoring sessions.'
          }
        ]
      },
      {
        categoryName: 'Financial Protection & Wellness Documents',
        docs: [
          {
            name: 'People_LifeKeys_Employee_Assistance_Program_Overview_01.2026_FINAL.pdf',
            cleanName: 'LifeKeys Employee Assistance Program (EAP) Guide',
            format: 'pdf',
            fileSize: '240 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Benefits & Leave Administration',
            description: '6 free confidential therapy sessions per issue, legal consultations, and financial planners.'
          },
          {
            name: 'People_MetLife_Legal_Plans_Comprehensive_FAQ_01.2026_FINAL.pdf',
            cleanName: 'MetLife Legal Plans Coverage & FAQ Slipsheet',
            format: 'pdf',
            fileSize: '310 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Benefits & Leave Administration',
            description: 'Covered legal services, how to search local attorney networks, and document review.'
          }
        ]
      }
    ],
    videos: [],
    faqs: [
      {
        question: 'Are these benefits taxable?',
        answer: 'Programs like EAP, Livongo, and Bright Horizons backup care copays follow standard IRS fringe benefit guidelines. Consult the Fringe Benefits & Hours guide for specific year-end reporting.'
      }
    ],
    escalationNote: 'For perk activation questions or enrollment issues, email Kwame Creamer at kcreamer@amplify.com.'
  },

  '401k-retirement': {
    id: '401k-retirement',
    title: '401(k) retirement savings & Fidelity match',
    category: '401k',
    oneLinePurpose: 'Grow your retirement savings through Amplify’s generous 401(k) match, auto-escalation, and self-directed BrokerageLink through Fidelity Investments.',
    eligibilitySnapshot: 'All employees are eligible on day one of employment. Auto-enrollment kicks in after 30 days at 3% unless customized.',
    owner: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      title: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    mostCommonQuestions: [
      'What is the Amplify 401(k) company match formula?',
      'How do I choose between Pre-Tax Traditional and Roth 401(k) contributions?',
      'What is the 2026 IRS contribution limit?',
      'How does Fidelity BrokerageLink work for self-directed stocks and ETFs?'
    ],
    groupedDocuments: [
      {
        categoryName: '401(k) Plan Summaries & Enrolment',
        docs: [
          {
            name: 'People_Fidelity_401k_Summary_Plan_Description_01.2026_FINAL.pdf',
            cleanName: 'Fidelity 401(k) Summary Plan Description (SPD)',
            format: 'pdf',
            fileSize: '710 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: '401k Summary Plan Description',
            description: 'Official legal plan document, vesting schedules, in-service withdrawals, and loan provisions.'
          },
          {
            name: 'People_Amplify_401k_Enrollment_Guide_01.2026_FINAL.pdf',
            cleanName: 'Amplify 401(k) Enrollment & Match Guide',
            format: 'pdf',
            fileSize: '430 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: '401k Summary Plan Description',
            description: 'Explains the 50% match on the first 6% you contribute (up to 3% dollar-for-dollar match).'
          },
          {
            name: 'People_Fidelity_BrokerageLink_Guidelines_01.2026_FINAL.pdf',
            cleanName: 'Fidelity BrokerageLink Commission Schedule & Overview',
            format: 'pdf',
            fileSize: '320 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: '401k Summary Plan Description',
            description: 'Instructions for trading individual stocks, index ETFs, and mutual funds inside your retirement account.'
          }
        ]
      }
    ],
    videos: [],
    faqs: [
      {
        question: 'When am I vested in the company match?',
        answer: 'Your own employee contributions are always 100% vested immediately. Amplify company matching funds vest on a graded 2-year schedule (50% after Year 1, 100% after Year 2).'
      },
      {
        question: 'How do I log into my Fidelity account?',
        answer: 'Visit netbenefits.com or download the Fidelity NetBenefits app. Amplify’s Plan ID is 86995.'
      }
    ],
    escalationNote: 'Questions about investments or loans? Call Fidelity participant services at 1-800-835-5097 or contact Kwame Creamer at kcreamer@amplify.com.'
  }
};

export const POLICIES_DATA: Record<string, PolicyReferenceData> = {
  'business-travel': {
    id: 'business-travel',
    title: 'Business travel & expense guidelines',
    oneLinePurpose: 'Guidelines for booking company travel, allowable lodging, meals, per diem, and corporate expense reimbursements.',
    whoThisAppliesTo: 'All Amplify employees traveling on official company business, school district client visits, or conferences.',
    owner: {
      name: 'Carmika Austin',
      email: 'caustin@amplify.com',
      title: 'Employee Relations & Policy Compliance Lead',
      team: 'People Enablement'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    recentChangesNote: 'Updated per diem meal caps and simplified hotel booking requirements via Navan/Corporate Travel.',
    plainLanguageSummary: [
      'Travel should always be booked via Amplify’s travel partner (Navan) to secure negotiated educator rates and corporate safety tracking.',
      'Economy class airfare is the standard for all domestic travel. Flight upgrades are at personal expense.',
      'Daily meal allowance (per diem) is up to $75/day (inclusive of tips). No itemized alcohol is reimbursable on single-person per diem.',
      'Expense reports in Workday must be submitted within 30 calendar days of travel conclusion with itemized receipts attached.'
    ],
    keyRules: [
      {
        rule: 'Airfare Standard',
        details: 'Book at least 14 days in advance where possible. Non-refundable coach / economy standard only.'
      },
      {
        rule: 'Hotel & Lodging',
        details: 'Maximum allowable room rate is $250/night for standard cities and up to $350/night in high-cost metro markets (NYC, SF, Boston, Chicago, DC).'
      },
      {
        rule: 'Ground Transportation',
        details: 'Use public transit, Uber/Lyft standard ride, or compact rental cars. Rental car CDW collision insurance should be declined because Amplify corporate policy covers it.'
      },
      {
        rule: 'Receipt Threshold',
        details: 'Itemized receipts are required for any expense over $25. Credit card summary slips are not sufficient for audit compliance.'
      }
    ],
    officialDocuments: [
      {
        name: 'People_Amplify_Business_Travel_Policy_and_FAQ_07.2026_FINAL.pdf',
        cleanName: 'Amplify Business Travel & Expense Policy',
        format: 'pdf',
        fileSize: '480 KB',
        lastUpdated: '07/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Compliance and Employee Policy Changes',
        description: 'Complete policy governing authorized travel, emergency assistance, and expense guidelines.'
      },
      {
        name: 'People_TravelConnect_AIG_Assistance_ID_Card_2026_FINAL.pdf',
        cleanName: 'TravelConnect & AIG Worldwide Travel Emergency Card',
        format: 'pdf',
        fileSize: '210 KB',
        lastUpdated: '01/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Benefits & Leave Administration',
        description: 'Emergency medical evacuation, lost passport, and trip delay assistance 24/7 hotline.'
      }
    ],
    faqs: [
      {
        question: 'How do I obtain a corporate credit card?',
        answer: 'Employees who travel more than 3 times per year or manage ongoing software vendor spend can request a corporate card through their VP and Finance.'
      },
      {
        question: 'Can I travel or work remotely from abroad?',
        answer: 'Working abroad requires advance review from People Team and Legal due to international tax nexus and data privacy laws. Email caustin@amplify.com at least 4 weeks prior.'
      }
    ],
    whereToExecute: 'Submit all travel receipts via Workday > Expenses > Create Expense Report.'
  },

  'job-levels-pay': {
    id: 'job-levels-pay',
    title: 'Job levels & pay transparency philosophy',
    oneLinePurpose: 'Clear explanations of Amplify’s career tracks, job levels (IC1–IC8, M1–M6), and how salary ranges are calibrated to market data.',
    whoThisAppliesTo: 'All regular full-time and part-time staff across curriculum, engineering, product, sales, and operations.',
    owner: {
      name: 'Julia Houlihan',
      email: 'jhoulihan@amplify.com',
      title: 'Compensation & Total Rewards Strategy Lead',
      team: 'Rewards & People Technology'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    recentChangesNote: 'Published updated positional ranges in accordance with multi-state pay transparency statutes.',
    plainLanguageSummary: [
      'Amplify uses a dual career track: Individual Contributor (IC1 through IC8) and People Manager (M1 through M6). Advancing in career does not require managing people.',
      'Pay ranges are anchored to national market data in education technology and benchmarked annually against industry peer groups.',
      'Positional salary ranges are divided into 4 quartiles: 1st quartile (learning), 2nd quartile (fully proficient), 3rd quartile (expert & consistent high impact), and 4th quartile (exceptional organizational leverage).',
      'Employees can request their current job level positional range from their manager or People Business Partner at any time.'
    ],
    keyRules: [
      {
        rule: 'Track Equivalency',
        details: 'An IC5 (Staff) has equivalent organizational influence, expectation, and compensation banding as an M2 (People Manager).'
      },
      {
        rule: 'Annual Merit Reviews',
        details: 'Merit reviews take place annually in Q1, factoring individual performance, positioning within range, and company goals.'
      },
      {
        rule: 'Annual Performance Bonus',
        details: 'Eligible roles participate in the Amplify Annual Performance Achievement Plan based on company EBITDA and target multipliers.'
      }
    ],
    officialDocuments: [
      {
        name: 'People_Job_Levels_Architecture_Quick_Reference_05.2026_FINAL.pdf',
        cleanName: 'Amplify Job Levels Architecture Reference Guide',
        format: 'pdf',
        fileSize: '380 KB',
        lastUpdated: '05/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Compensation & Rewards',
        description: 'Comprehensive taxonomy defining scope, autonomy, and complexity expectations for each tier.'
      },
      {
        name: 'People_Compensation_Administration_Guidelines_06.2026_FINAL.pdf',
        cleanName: 'Compensation Administration & Pay Transparency Guidelines',
        format: 'pdf',
        fileSize: '410 KB',
        lastUpdated: '06/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Compensation & Rewards',
        description: 'Guidelines on promotional pay increases, lateral moves, and range positioning.'
      }
    ],
    faqs: [
      {
        question: 'Where can I see the career ladder for my specific department?',
        answer: 'Visit the "Career Ladders by Department" section in Talent Development to view published tracks for Engineering, Design, Product, CKLA, Math, Sales, and Support.'
      },
      {
        question: 'How do peer recognitions in "Amplified" work?',
        answer: 'Amplify uses Achievers for our "Amplified" platform. Employees receive monthly reward points to celebrate colleagues, redeemable for gift cards or company swag.'
      }
    ],
    whereToExecute: 'View your current job title and compensation details in Workday > Profile > Compensation.'
  },

  'remote-work-guidelines': {
    id: 'remote-work-guidelines',
    title: 'Workplace flexibility & remote work standards',
    oneLinePurpose: 'Expectations for home office setups, core collaboration hours, state compliance, and working from alternative locations.',
    whoThisAppliesTo: 'All hybrid and remote Amplify team members.',
    owner: {
      name: 'Carmika Austin',
      email: 'caustin@amplify.com',
      title: 'Employee Relations & Policy Compliance Lead',
      team: 'People Enablement'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    recentChangesNote: 'Clarified domestic relocation notification requirements and temporary remote work limits.',
    plainLanguageSummary: [
      'Amplify is a remote-first workplace for most teams. Core collaboration hours are 11:00 AM to 4:00 PM Eastern Time to accommodate nationwide teams.',
      'Moving your permanent residence to a new state or municipality requires at least 30 days advance notice to ensure payroll tax compliance and state entity registration.',
      'Temporary domestic work from another state is permissible for up to 30 days per calendar year without changing tax registration.',
      'Home internet and workstation equipment standards are supported through IT provisioning and initial ergonomic stipends.'
    ],
    keyRules: [
      {
        rule: 'State Relocation',
        details: 'You must submit an address change in Workday. People Team must verify if Amplify is registered in the destination state prior to physical relocation.'
      },
      {
        rule: 'Security & PII',
        details: 'All work must be completed on Amplify-issued laptops with CrowdStrike and disk encryption enabled. Public Wi-Fi requires VPN usage.'
      }
    ],
    officialDocuments: [
      {
        name: 'People_Workplace_Flexibility_and_Remote_Work_04.2026_FINAL.pdf',
        cleanName: 'Workplace Flexibility & Remote Work Policy',
        format: 'pdf',
        fileSize: '310 KB',
        lastUpdated: '04/2026',
        status: 'FINAL',
        gleanVerified: true,
        driveFolder: 'Compliance and Employee Policy Changes',
        description: 'Complete remote work framework, ergonomic standards, and core hours expectations.'
      }
    ],
    faqs: [
      {
        question: 'Can I visit an Amplify regional hub office (e.g. Brooklyn DUMBO)?',
        answer: 'Yes! Employees are welcome to reserve hot desks, collaboration suites, and attend in-person team offsites at Amplify office spaces using our Envoy booking system.'
      }
    ],
    whereToExecute: 'Update your official home mailing address in Workday > Personal Information > Addresses.'
  }
};

export const JOURNEYS_DATA: Record<string, JourneyGuideData> = {
  'onboarding-journey': {
    id: 'onboarding-journey',
    title: 'New hire 90-day journey',
    oneLinePurpose: 'Your step-by-step roadmap from your offer letter acceptance through your first 90 days as an Amplifier.',
    owner: {
      name: 'Katelyn Englehart',
      email: 'kenglehart@amplify.com',
      title: 'Onboarding & Readiness Lead',
      team: 'Talent Acquisition & Onboarding'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whatToExpect: 'Welcome to Amplify! This guide is split into clear milestones to help you pace your benefits enrollment, system setup, team introductions, and first high-impact projects.',
    milestones: [
      {
        phase: 'Before Day 1',
        timing: '1–2 weeks prior to start date',
        summary: 'Complete identity verification, prepare your home workspace, and confirm laptop shipment.',
        employeeChecklist: [
          { id: 'ob-1', label: 'Complete Section 1 of Form I-9 online', detail: 'Follow the secure link sent to your personal email to verify employment authorization.', destination: 'Workday' },
          { id: 'ob-2', label: 'Confirm laptop delivery from IT Provisioning', detail: 'Your MacBook or ThinkPad arrives via FedEx 3 business days before Day 1.', destination: 'People Drive' },
          { id: 'ob-3', label: 'Set up your Okta Single Sign-On and 1Password', detail: 'Activate multi-factor authentication (MFA) via the Okta Verify mobile app.', destination: 'Workday' }
        ],
        managerChecklist: [
          { id: 'obm-1', label: 'Assign an Onboarding Buddy from your team', detail: 'Use the 2026 Onboarding Buddy Guide to set buddy sync expectations.', destination: 'People Drive' },
          { id: 'obm-2', label: 'Send Welcome Email with Day 1 Zoom link and team schedule', detail: 'Include week 1 calendar blocks and core team Slack channels.', destination: 'Workday' }
        ],
        resources: [
          {
            name: 'People_2026_Onboarding_Buddy_Guide_04.2026_FINAL.pdf',
            cleanName: '2026 Onboarding Buddy Guide & Expectations',
            format: 'pdf',
            fileSize: '320 KB',
            lastUpdated: '04/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Onboarding',
            description: 'Guidance for peer buddies supporting new Amplifiers through their first month.'
          }
        ]
      },
      {
        phase: 'Week 1: Foundations & Orientation',
        timing: 'Days 1 through 5',
        summary: 'Attend live People Team Orientation, meet your team, and enroll in benefits.',
        employeeChecklist: [
          { id: 'ob-4', label: 'Attend Monday Live New Hire Welcome Session', detail: 'Meet your cohort, learn our mission in education, and meet People Team leads.', destination: 'Intranet' },
          { id: 'ob-5', label: 'Complete Section 2 of Form I-9 with an authorized representative', detail: 'Must be completed within 3 business days of your first day.', destination: 'Workday' },
          { id: 'ob-6', label: 'Elect your Medical, Dental, Vision & 401(k) benefits', detail: 'You have 30 days from your hire date to submit your elections in Workday.', destination: 'Workday' },
          { id: 'ob-7', label: 'Join key Slack channels: #welcome, #amplify-community, and your department channels', detail: 'Say hello in #welcome with a photo and your favorite book or teacher.', destination: 'Intranet' }
        ],
        managerChecklist: [
          { id: 'obm-3', label: 'Host 1:1 kickoff on Day 1 to align on Week 1 priorities', detail: 'Review initial reading list, tool access, and schedule recurring 1:1s.', destination: 'Intranet' },
          { id: 'obm-4', label: 'Introduce new hire at team standup or weekly meeting', detail: 'Facilitate introductions across cross-functional partners.', destination: 'Intranet' }
        ],
        resources: [
          {
            name: 'People_New_Hire_Orientation_Deck_08.2026_FINAL.pdf',
            cleanName: 'Amplify New Hire Orientation Presentation Deck',
            format: 'pdf',
            fileSize: '1.8 MB',
            lastUpdated: '08/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Onboarding',
            description: 'The complete orientation slides covering Amplify culture, programs, and leadership.'
          }
        ]
      },
      {
        phase: 'First 30 Days: Getting Integrated',
        timing: 'Weeks 2 through 4',
        summary: 'Shadow teammates, learn product ecosystems, and draft initial 90-day goals.',
        employeeChecklist: [
          { id: 'ob-8', label: 'Complete mandatory Compliance & Security training in Workday Learning', detail: 'Includes Cybersecurity awareness, FERPA student data privacy, and Harassment Prevention.', destination: 'Workday' },
          { id: 'ob-9', label: 'Explore the Amplify Product Suite (Core Knowledge, Science, Math, Desmos)', detail: 'Familiarize yourself with classroom learning materials and digital curricula.', destination: 'Intranet' },
          { id: 'ob-10', label: 'Establish your 30-day 1:1 checkpoint with your manager', detail: 'Review progress, clarify questions, and confirm your 90-day deliverables.', destination: 'Intranet' }
        ],
        resources: [
          {
            name: 'People_2026_Start_Date_Calculator_and_Timeline_01.2026_FINAL.pdf',
            cleanName: 'Start Date Calculator & Milestone Planner',
            format: 'pdf',
            fileSize: '290 KB',
            lastUpdated: '01/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Onboarding',
            description: 'Custom timeline calculating 30-60-90 review dates.'
          }
        ]
      },
      {
        phase: 'Days 60–90: Full Ownership & Impact',
        timing: 'Months 2 and 3',
        summary: 'Lead independent work, establish an Individual Development Plan (IDP), and celebrate 90-day milestone.',
        employeeChecklist: [
          { id: 'ob-11', label: 'Create your Individual Development Plan (IDP)', detail: 'Align on long-term professional growth skills with your manager.', destination: 'Drive' },
          { id: 'ob-12', label: 'Send peer recognitions on Amplified (Achievers)', detail: 'Thank teammates and buddy who helped you onboard.', destination: 'Achievers' },
          { id: 'ob-13', label: 'Complete the 90-Day New Hire Experience Survey', detail: 'Share feedback so the People Team can continuously improve onboarding.', destination: 'Intranet' }
        ],
        resources: []
      }
    ],
    faqs: [
      {
        question: 'What happens if I miss the 30-day benefits election deadline?',
        answer: 'If you do not submit elections within 30 days of hire, you will default to single coverage on the base medical plan and cannot make changes until the next annual Open Enrollment unless you have a qualifying life event.'
      }
    ],
    contactEscalation: 'For onboarding questions or laptop logistics, email Katelyn Englehart at kenglehart@amplify.com or onboarding@amplify.com.'
  },

  'career-development-journey': {
    id: 'career-development-journey',
    title: 'Career development & internal mobility guide',
    oneLinePurpose: 'Tools, templates, and frameworks to steer your growth, build skills, and explore lateral and promotional opportunities at Amplify.',
    owner: {
      name: 'Maureen Bates',
      email: 'mbates@amplify.com',
      title: 'Talent Development & People Enablement Director',
      team: 'People Enablement'
    },
    lastReviewed: 'August 2026',
    gleanVerified: true,
    whatToExpect: 'Growth at Amplify is self-directed and manager-supported. Whether you want to master your current discipline or pivot into an emerging area like educational AI or product design, use this roadmap.',
    milestones: [
      {
        phase: 'Step 1: Reflect & Self-Assess',
        timing: 'Annual or bi-annual reflection',
        summary: 'Examine your strengths, engagement drivers, and desired focus areas.',
        employeeChecklist: [
          { id: 'cd-1', label: 'Review your department’s published Career Ladder', detail: 'Compare your day-to-day contributions against expectations for your current and next target level.', destination: 'People Drive' },
          { id: 'cd-2', label: 'Gather informal peer feedback', detail: 'Ask 2–3 cross-functional collaborators about what you do exceptionally well and opportunities for leverage.', destination: 'Intranet' }
        ],
        resources: [
          {
            name: 'People_Career_Guidance_for_Employees_Framework_06.2026_FINAL.pdf',
            cleanName: 'Career Guidance for Employees Framework',
            format: 'pdf',
            fileSize: '540 KB',
            lastUpdated: '06/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Career Development',
            description: 'Guide on framing growth conversations, skill audits, and identifying stretch projects.'
          }
        ]
      },
      {
        phase: 'Step 2: Complete Your IDP',
        timing: 'Collaborate with your manager',
        summary: 'Draft 2–3 meaningful growth goals using the 70/20/10 learning framework (experiential/exposure/education).',
        employeeChecklist: [
          { id: 'cd-3', label: 'Copy the official Amplify Individual Development Plan (IDP) Google Doc template', detail: 'Identify 1 core technical competency and 1 leadership/collaboration competency to build.', destination: 'People Drive' },
          { id: 'cd-4', label: 'Schedule a dedicated 45-minute Career Growth Sync with your manager', detail: 'Separate this discussion from routine operational task updates or project statuses.', destination: 'Intranet' }
        ],
        resources: [
          {
            name: 'People_Amplify_IDP_Template_Google_Doc_08.2026_FINAL.pdf',
            cleanName: 'Amplify Individual Development Plan (IDP) Template',
            format: 'pdf',
            fileSize: '310 KB',
            lastUpdated: '08/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Talent Development',
            description: 'Official Google Doc template with 70/20/10 goal worksheets and quarterly check-ins.'
          },
          {
            name: 'People_Manager_IDP_Coaching_Toolkit_08.2026_FINAL.pdf',
            cleanName: 'Manager IDP Coaching & Development Toolkit',
            format: 'pdf',
            fileSize: '490 KB',
            lastUpdated: '08/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Talent Development',
            description: 'Prompts and coaching questions for managers to support employee advancement.'
          }
        ]
      },
      {
        phase: 'Step 3: Explore Internal Mobility',
        timing: 'When ready for new challenge',
        summary: 'Apply for open internal roles across engineering, product, curriculum, and operations.',
        employeeChecklist: [
          { id: 'cd-5', label: 'Check the Internal Ashby Job Board weekly', detail: 'Internal positions are posted to Amplifiers 5 business days before external publication.', destination: 'Ashby' },
          { id: 'cd-6', label: 'Review Internal Mobility Eligibility Criteria', detail: 'Typically requires 12 months in current role and good performance standing.', destination: 'Intranet' },
          { id: 'cd-7', label: 'Have an open conversation with your current manager', detail: 'Transparency ensures smooth transition planning and enthusiastic endorsement.', destination: 'Intranet' }
        ],
        resources: [
          {
            name: 'People_Internal_Mobility_Policy_and_Process_07.2026_FINAL.pdf',
            cleanName: 'Amplify Internal Mobility & Transfer Policy',
            format: 'pdf',
            fileSize: '360 KB',
            lastUpdated: '07/2026',
            status: 'FINAL',
            gleanVerified: true,
            driveFolder: 'Career Development',
            description: 'Eligibility requirements, timeline expectations, and transition protocols for internal moves.'
          }
        ]
      }
    ],
    faqs: [
      {
        question: 'Which departments have published career ladders?',
        answer: 'Career ladders are published for Engineering, Design, Product, Customer Care & Support, Facilities, Finance, Human Resources, Digital Production, and Bids & Proposals. Curriculum and Sales are currently in active rollout for fall 2026.'
      }
    ],
    contactEscalation: 'For guidance on career tracks or IDPs, contact Maureen Bates at mbates@amplify.com.'
  }
};

export const CONTACT_ROUTING_DIRECTORY: ContactRoutingItem[] = [
  {
    topic: 'Medical, Dental, Vision & Health Insurance',
    employeeNeed: 'Plan options, ID cards, deductible status, adding dependents, QLEs',
    primaryContact: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      role: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Aetna Concierge: 1-888-982-3862 | Email: benefits@amplify.com',
    systemToUse: 'Workday'
  },
  {
    topic: 'Parental, FMLA & Medical Leaves of Absence',
    employeeNeed: 'Filing parental leave, disability payments, NY PFL, return to work',
    primaryContact: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      role: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Lincoln Financial Claims: 1-855-327-4463',
    systemToUse: 'Intranet'
  },
  {
    topic: 'Payroll, Direct Deposit & W-2 Tax Withholdings',
    employeeNeed: 'Paycheck discrepancy, bank deposit change, tax forms, pay calendar',
    primaryContact: {
      name: 'Matt Kudlacz',
      email: 'mkudlacz@amplify.com',
      role: 'People Operations & Systems Lead',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Email: payroll@amplify.com for urgent payroll cutoffs',
    systemToUse: 'Workday'
  },
  {
    topic: 'Proof of Employment & Income Verification',
    employeeNeed: 'Mortgage letters, lease verification, loan approval, visa letters',
    primaryContact: {
      name: 'Matt Kudlacz',
      email: 'mkudlacz@amplify.com',
      role: 'People Operations & Systems Lead',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Automated via Workday > Verification Letter or The Work Number (Code 19482)',
    systemToUse: 'Workday'
  },
  {
    topic: '401(k) Retirement & Company Match',
    employeeNeed: 'Enrolling, changing contribution %, loans, BrokerageLink questions',
    primaryContact: {
      name: 'Kwame Creamer',
      email: 'kcreamer@amplify.com',
      role: 'Total Rewards & Benefits Director',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Fidelity NetBenefits: 1-800-835-5097',
    systemToUse: 'Workday'
  },
  {
    topic: 'Job Requisitions, Hiring & Candidate Referrals',
    employeeNeed: 'Opening headcount in Ashby, referring candidates, tracking bonus',
    primaryContact: {
      name: 'Lauren Shortall',
      email: 'lshortall@amplify.com',
      role: 'Talent Acquisition Operations Lead',
      team: 'Talent Acquisition & Onboarding'
    },
    alternativeRouting: 'Slack: #recruiting-hiring-managers | Email: recruiting@amplify.com',
    systemToUse: 'Ashby'
  },
  {
    topic: 'New Hire Onboarding & Buddy Program',
    employeeNeed: 'First 90 days questions, onboarding buddy guide, I-9 verification',
    primaryContact: {
      name: 'Katelyn Englehart',
      email: 'kenglehart@amplify.com',
      role: 'Onboarding & Readiness Lead',
      team: 'Talent Acquisition & Onboarding'
    },
    alternativeRouting: 'Slack: #welcome | Email: onboarding@amplify.com',
    systemToUse: 'Intranet'
  },
  {
    topic: 'Career Ladders, IDPs & Learning',
    employeeNeed: 'Competency frameworks, Individual Development Plans, manager coaching',
    primaryContact: {
      name: 'Maureen Bates',
      email: 'mbates@amplify.com',
      role: 'Talent Development & People Enablement Director',
      team: 'People Enablement'
    },
    alternativeRouting: 'Slack: #people-enablement',
    systemToUse: 'People Drive'
  },
  {
    topic: 'Job Levels, Salary Ranges & Pay Transparency',
    employeeNeed: 'Understanding IC/Manager bands, positional ranges, merit cycle',
    primaryContact: {
      name: 'Julia Houlihan',
      email: 'jhoulihan@amplify.com',
      role: 'Compensation & Total Rewards Strategy Lead',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Reach out to your designated People Business Partner (HRBP)',
    systemToUse: 'People Partner'
  },
  {
    topic: 'Employee Relations, Policies & Travel Guidelines',
    employeeNeed: 'Code of conduct, policy clarification, travel per diem, workplace concerns',
    primaryContact: {
      name: 'Carmika Austin',
      email: 'caustin@amplify.com',
      role: 'Employee Relations & Policy Compliance Lead',
      team: 'People Enablement'
    },
    alternativeRouting: 'Confidential Employee Concern Form or your assigned HRBP',
    systemToUse: 'Intranet'
  },
  {
    topic: 'Workday Access & System Errors',
    employeeNeed: 'Workday login troubles, task routing errors, self-service questions',
    primaryContact: {
      name: 'Matt Kudlacz',
      email: 'mkudlacz@amplify.com',
      role: 'People Operations & Systems Lead',
      team: 'Rewards & People Technology'
    },
    alternativeRouting: 'Workday Help Center or IT Helpdesk via Okta',
    systemToUse: 'Workday'
  },
  {
    topic: 'People Team Intranet Governance & Refresh',
    employeeNeed: 'Content corrections, broken links, template requests, Glean indexing',
    primaryContact: {
      name: 'Kirsten Kelp',
      email: 'kkelp@amplify.com',
      role: 'Project Lead & People Operations Lead',
      team: 'Office of CPO'
    },
    alternativeRouting: 'Mary Piantadosi (Strategic Support) mpiantadosi@amplify.com',
    systemToUse: 'Intranet'
  }
];

export const SYSTEM_ROUTING_INFO = [
  {
    destination: 'People Intranet',
    bestFor: 'Employee-facing summaries, task guides, FAQs, plan comparisons, and who-to-contact routing.',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    icon: 'Globe'
  },
  {
    destination: "Manager's Hub",
    bestFor: 'People manager guidance, requisition requests, team reviews, contingent workers, and coaching toolkits.',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: 'Briefcase'
  },
  {
    destination: 'Workday Help',
    bestFor: 'System actions, direct deposit changes, tax withholding, formal time reporting, and personal info updates.',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    icon: 'CheckSquare'
  },
  {
    destination: 'Shared People Team Drive',
    bestFor: 'Controlled official source documents, editable templates, signed policy PDFs, and official forms.',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: 'Folder'
  }
];

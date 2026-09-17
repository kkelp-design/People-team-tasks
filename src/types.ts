export type ViewType = 
  | 'home'
  | 'section_hub'
  | 'task_howto'
  | 'benefits_coverage'
  | 'policy_reference'
  | 'journey_guide'
  | 'who_to_contact'
  | 'managers_hub';

export type UserRole = 'employee' | 'manager';

export interface BreadcrumbItem {
  label: string;
  view?: ViewType;
  id?: string;
}

export interface TaskCard {
  id: string;
  title: string;
  description: string;
  category: 'pay' | 'benefits' | 'timeoff' | 'career' | 'perks' | 'manager';
  icon: string;
  estimatedTime?: string;
  targetView: ViewType;
  targetId?: string;
  badge?: string;
  roleRequired?: UserRole;
  systemDestination?: 'intranet' | 'workday' | 'ashby' | 'achievers' | 'drive';
}

export interface VerifiedDocument {
  name: string;
  cleanName: string;
  format: 'pdf' | 'docx' | 'pptx' | 'mp4' | 'link';
  fileSize?: string;
  lastUpdated: string;
  status: 'FINAL' | 'UPDATED 2026' | 'CURRENT' | 'DRAFT';
  gleanVerified: boolean;
  driveFolder: string;
  description: string;
  actionUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  verifiedBy?: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  instruction: string;
  actionLinkText?: string;
  actionDestination?: 'Workday' | 'Ashby' | 'Achievers' | 'Glean' | 'People Drive' | 'Smartsheet' | 'Intranet' | 'People Partner';
  tip?: string;
}

export interface HowToTaskData {
  id: string;
  title: string;
  oneLinePurpose: string;
  owner: {
    name: string;
    email: string;
    title: string;
    team: string;
  };
  lastReviewed: string;
  gleanVerified: boolean;
  whoApplies: string;
  estimatedCompletion: string;
  whatYouWillNeed: string[];
  steps: StepItem[];
  definitionOfDone: string;
  faqs: FAQItem[];
  relatedDocuments: VerifiedDocument[];
  escalationPath: string;
}

export interface MedicalPlanOption {
  name: string;
  carrier: string;
  tier: string;
  deductibleIndividual: string;
  deductibleFamily: string;
  outOfPocketMax: string;
  coinsurance: string;
  pcpCopay: string;
  hsaEligible: boolean;
  companyHsaContribution?: string;
  bestFor: string;
  keyFeatures: string[];
}

export interface BenefitsCoverageData {
  id: string;
  title: string;
  category: 'medical' | 'dental' | 'vision' | 'additional' | '401k';
  oneLinePurpose: string;
  eligibilitySnapshot: string;
  owner: {
    name: string;
    email: string;
    title: string;
    team: string;
  };
  lastReviewed: string;
  gleanVerified: boolean;
  mostCommonQuestions: string[];
  plans?: MedicalPlanOption[];
  dentalPlans?: Array<{
    name: string;
    type: 'DPPO Base' | 'DPPO Enhanced' | 'DMO';
    preventive: string;
    basicServices: string;
    majorServices: string;
    orthodontia: string;
    annualMax: string;
    bestFor: string;
  }>;
  programs?: Array<{
    name: string;
    tagline: string;
    coverage: string;
    howToAccess: string;
    icon: string;
    contact: string;
  }>;
  groupedDocuments: {
    categoryName: string;
    docs: VerifiedDocument[];
  }[];
  videos: Array<{
    title: string;
    duration: string;
    description: string;
  }>;
  faqs: FAQItem[];
  escalationNote: string;
}

export interface PolicyReferenceData {
  id: string;
  title: string;
  oneLinePurpose: string;
  whoThisAppliesTo: string;
  owner: {
    name: string;
    email: string;
    title: string;
    team: string;
  };
  lastReviewed: string;
  gleanVerified: boolean;
  recentChangesNote: string;
  plainLanguageSummary: string[];
  keyRules: {
    rule: string;
    details: string;
  }[];
  officialDocuments: VerifiedDocument[];
  faqs: FAQItem[];
  whereToExecute: string;
}

export interface JourneyMilestone {
  phase: string;
  timing: string;
  summary: string;
  employeeChecklist: { id: string; label: string; detail: string; destination?: string }[];
  managerChecklist?: { id: string; label: string; detail: string; destination?: string }[];
  resources: VerifiedDocument[];
}

export interface JourneyGuideData {
  id: string;
  title: string;
  oneLinePurpose: string;
  owner: {
    name: string;
    email: string;
    title: string;
    team: string;
  };
  lastReviewed: string;
  gleanVerified: boolean;
  whatToExpect: string;
  milestones: JourneyMilestone[];
  faqs: FAQItem[];
  contactEscalation: string;
}

export interface ContactRoutingItem {
  topic: string;
  employeeNeed: string;
  primaryContact: {
    name: string;
    email: string;
    role: string;
    team: string;
  };
  alternativeRouting?: string;
  systemToUse: 'Workday' | 'Ashby' | 'Achievers' | 'Intranet' | 'People Partner' | 'People Drive';
}

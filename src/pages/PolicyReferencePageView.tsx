import React from 'react';
import { TemplatePolicyReference } from '../components/TemplatePolicyReference';
import { POLICIES_DATA } from '../data/portalData';
import { ViewType } from '../types';

interface PolicyReferencePageViewProps {
  policyId: string;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

/**
 * Standalone Page: Policy Reference
 * Google Sites Template 4: Plain-language summary first, recent updates banner, core standards, and controlled PDFs
 */
export const PolicyReferencePageView: React.FC<PolicyReferencePageViewProps> = ({
  policyId,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  const policyData = POLICIES_DATA[policyId] || POLICIES_DATA['business-travel'];

  return (
    <TemplatePolicyReference
      policy={policyData}
      onNavigate={onNavigate}
      onOpenContactDirectory={onOpenContactDirectory}
      onOpenDestinationGuide={onOpenDestinationGuide}
    />
  );
};

export default PolicyReferencePageView;

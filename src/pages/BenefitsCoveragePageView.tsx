import React from 'react';
import { TemplateBenefitsCoverage } from '../components/TemplateBenefitsCoverage';
import { BENEFITS_DATA } from '../data/portalData';
import { ViewType } from '../types';

interface BenefitsCoveragePageViewProps {
  benefitId: string;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

/**
 * Standalone Page: Benefits & Coverage
 * Google Sites Template 3: Side-by-side comparison tables, video tutorials, and plan documents
 */
export const BenefitsCoveragePageView: React.FC<BenefitsCoveragePageViewProps> = ({
  benefitId,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  const benefitData = BENEFITS_DATA[benefitId] || BENEFITS_DATA['medical-benefits'];

  return (
    <TemplateBenefitsCoverage
      benefit={benefitData}
      onNavigate={onNavigate}
      onOpenContactDirectory={onOpenContactDirectory}
      onOpenDestinationGuide={onOpenDestinationGuide}
    />
  );
};

export default BenefitsCoveragePageView;

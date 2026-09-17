import React from 'react';
import { TemplateJourneyGuide } from '../components/TemplateJourneyGuide';
import { JOURNEYS_DATA } from '../data/portalData';
import { UserRole, ViewType } from '../types';

interface JourneyGuidePageViewProps {
  journeyId: string;
  userRole: UserRole;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

/**
 * Standalone Page: Journey Guide & Milestones
 * Google Sites Template 5: Phased timeline, role-based branches (Employee vs Manager), and downloadable phase templates
 */
export const JourneyGuidePageView: React.FC<JourneyGuidePageViewProps> = ({
  journeyId,
  userRole,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  const journeyData = JOURNEYS_DATA[journeyId] || JOURNEYS_DATA['onboarding-journey'];

  return (
    <TemplateJourneyGuide
      journey={journeyData}
      userRole={userRole}
      onNavigate={onNavigate}
      onOpenContactDirectory={onOpenContactDirectory}
      onOpenDestinationGuide={onOpenDestinationGuide}
    />
  );
};

export default JourneyGuidePageView;

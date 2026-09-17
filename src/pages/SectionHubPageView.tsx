import React from 'react';
import { TemplateSectionHub } from '../components/TemplateSectionHub';
import { UserRole, ViewType } from '../types';

interface SectionHubPageViewProps {
  userRole: UserRole;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenSearch: () => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

/**
 * Standalone Page: All Tasks Directory & Section Hub
 * Google Sites Template 1: Action-first Section Hub with large button cards
 */
export const SectionHubPageView: React.FC<SectionHubPageViewProps> = (props) => {
  return <TemplateSectionHub {...props} />;
};

export default SectionHubPageView;

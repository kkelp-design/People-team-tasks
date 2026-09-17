import React from 'react';
import { HomePage } from '../components/HomePage';
import { UserRole, ViewType } from '../types';

interface HomePageViewProps {
  userRole: UserRole;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenSearch: () => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
  onOpenEmbedModal?: () => void;
}

/**
 * Standalone Page: Portal Homepage
 * Google Sites Template: Portal Front Door & Timely Highlights
 */
export const HomePageView: React.FC<HomePageViewProps> = (props) => {
  return <HomePage {...props} />;
};

export default HomePageView;

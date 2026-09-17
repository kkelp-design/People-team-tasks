import React from 'react';
import { WhoToContactDirectory } from '../components/WhoToContactDirectory';
import { ViewType } from '../types';

interface WhoToContactPageViewProps {
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenDestinationGuide: () => void;
}

/**
 * Standalone Page: Who To Contact Matrix
 * Google Sites Page: Authoritative routing table mapping employee needs directly to owner and system
 */
export const WhoToContactPageView: React.FC<WhoToContactPageViewProps> = ({
  onNavigate,
  onOpenDestinationGuide
}) => {
  return (
    <WhoToContactDirectory
      onNavigate={onNavigate}
      onOpenDestinationGuide={onOpenDestinationGuide}
    />
  );
};

export default WhoToContactPageView;

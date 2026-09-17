import React from 'react';
import { TemplateHowTo } from '../components/TemplateHowTo';
import { HOW_TO_TASKS } from '../data/portalData';
import { ViewType } from '../types';

interface TaskHowToPageViewProps {
  taskId: string;
  onNavigate: (view: ViewType, id?: string) => void;
  onOpenContactDirectory: () => void;
  onOpenDestinationGuide: () => void;
}

/**
 * Standalone Page: Task / How-To Guide
 * Google Sites Template 2: Step-by-Step Task with interactive checklist and definition of done
 */
export const TaskHowToPageView: React.FC<TaskHowToPageViewProps> = ({
  taskId,
  onNavigate,
  onOpenContactDirectory,
  onOpenDestinationGuide
}) => {
  const taskData = HOW_TO_TASKS[taskId] || HOW_TO_TASKS['proof-of-employment'];

  return (
    <TemplateHowTo
      task={taskData}
      onNavigate={onNavigate}
      onOpenContactDirectory={onOpenContactDirectory}
      onOpenDestinationGuide={onOpenDestinationGuide}
    />
  );
};

export default TaskHowToPageView;

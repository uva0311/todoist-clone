import { collatedTasks } from '../constants';

export const collatedTasksExist = selectedProject => {
  return collatedTasksExist.find(task => task.key === selectedProject);
};

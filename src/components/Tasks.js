import React from 'react';
import { Checkbox } from './Checkbox';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectValue } from '../context';

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();
  const { tasks } = useTasks(selectedProject);

  const projectName = '';

  if (projectss && selectedProject && !collatedTasksExist(selectedProject)) {
    projectName = getTitle(projects, selectedProject).name;
  }

  if (collatedTasks(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className='tasks' data-testid='tasks'>
      <h2 data-testid='project-name'>{projectName}</h2>
      <ul className='task__list'>
        {tasks.map(task => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

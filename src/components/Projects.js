import React, { useState } from 'react';
import { useSelectedProjectValue, useProjectValue } from '../context';
import { IndividualProject } from './individualProject';

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProject } = useSelectedProjectValue();
  const { projects } = useProjectValue();

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-doc-id={project.docId}
        data-testid='project-action'
        className={
          active === project.projectId
            ? 'active sidebar__project'
            : 'sidebar__project'
        }
      >
        <div
          role='button'
          tabIndex={0}
          onKeyDown={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
          onClick={() => {
            setActive(project.projectId);
            setSelectedProject(project.projectId);
          }}
        >
          <IndividualProject project={project} />
        </div>
      </li>
    ))
  );
};

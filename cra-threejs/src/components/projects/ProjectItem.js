import { useEffect, useState } from "react";
import './ProjectItem.css'
import Collapsible from 'react-collapsible';
import ProjectItemHeader from "./ProjectItemHeader";

function ProjectItem(projectItem, key) {
    const [project, setProject] = useState([]);

    useEffect(() => {
        setProject(projectItem.project);
    }, [projectItem, key, project]);

    return (
        <div className="project-item">
            <Collapsible containerElementProps={<ProjectItemHeader projectItem={project} />}>
                <div className="project-item-content">
                    {project.description}
                </div>
            </Collapsible>
        </div>
    );
}
export default ProjectItem;
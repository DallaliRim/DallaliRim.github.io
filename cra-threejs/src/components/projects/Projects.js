import projectsData from "../../data/projects.json"
import ProjectItem from "./ProjectItem";
import './Projects.css';
import React, { useState } from "react";

function ProjectPage() {
    const [projects] = useState(projectsData);

    return (
        <div className="projects">
            {
                projects.map((project, id) => {
                    return <ProjectItem project={project} key={id} />
                })
            }
        </div>
    );
}
export default ProjectPage;
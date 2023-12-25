import projectsData from "../../data/projects.json"
import ProjectItem from "./ProjectItem";
import './Projects.css';
import React, { useEffect, useState } from "react";

function ProjectPage() {
    const [projects] = useState(projectsData);

    useEffect(() => {
        console.log(projects);
    }, [projects])

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
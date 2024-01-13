import { useEffect, useState } from "react";

function ProjectItemHeader(projectItem) {
    const [project, setProject] = useState(projectItem);

    useEffect(() => {
        setProject(projectItem.project);
    }, [projectItem]);

    return (
        <div className="project-item-header">
            <div> image </div>
            <div>
                <p> {project.date} </p>
                <p> {project.title} </p>
            </div>
        </div>
    );
}
export default ProjectItemHeader;
//TODO not used?
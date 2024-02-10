import { useState } from "react";
import { FiPlus, FiMinus, FiMousePointer } from "react-icons/fi";
import ProjectItemContent from "./ProjectItemContent";
import { SiGithub } from "react-icons/si";

const ProjectItem = (projectItem, key) => {
    const [expanded, setExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const ToggleExpand = () => {
        setIsActive(!isActive);
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="temp-holder">
                <div className="project-item" onClick={ToggleExpand}>
                    <div className="project-item-header-main">
                        <img className="project-item-header-img" src={projectItem.project.logo || "cra-threejs/src/images/projects/monke/monke-home-page.png"} alt={projectItem.project.title} />
                        <h3 className="project-item-header-title">{projectItem.project.title} | {projectItem.project.date}</h3>
                    </div>
                    <div>{expanded ? <FiMinus className="expand-project-btn" color="white" /> : <FiPlus className="expand-project-btn" color="white" />}</div>
                </div >
                <div className="project-links">
                    <a className="repo-link" href={projectItem.project.repo}>
                        <SiGithub className="social-logo" />
                        Visit the Repo
                    </a>
                    {projectItem.project.link && <a className="site-link" href={projectItem.project.link}>
                        <FiMousePointer className="social-logo" />
                        Take a look at the project
                    </a>}
                </div>
            </div>
            {expanded && <ProjectItemContent projectItem={projectItem.project} key={key} />}
        </>
    );
};

export default ProjectItem;
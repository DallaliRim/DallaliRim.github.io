import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import './ProjectItem.css'
import ProjectItemContent from "./ProjectItemContent";

const ProjectItem = (projectItem, key) => {
    const [expanded, setExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const ToggleExpand = () => {
        setIsActive(!isActive);
        setExpanded(!expanded);
    };

    return (
        <>
            <div className="project-item" onClick={ToggleExpand}>
                <div className="project-item-header-main">
                    <img className="project-item-header-img" src={projectItem.project.logo || "https://cdn.pixabay.com/photo/2020/10/01/11/41/cat-5618328_1280.jpg"} alt={projectItem.project.title} />
                    <h3 className="project-item-header-title">{projectItem.project.title}</h3>
                </div>
                <div>{expanded ? <FiMinus className="expand-project-btn" color="white" /> : <FiPlus className="expand-project-btn" color="white" />}</div>
            </div >
            {expanded && <ProjectItemContent projectItem={projectItem.project} key={key} />}
        </>
    );
};

export default ProjectItem;
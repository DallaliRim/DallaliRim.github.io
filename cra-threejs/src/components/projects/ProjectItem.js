import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import './ProjectItem.css'

const ProjectItem = (projectItem, key) => {
    const [expanded, setExpanded] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive(!isActive);
    };
    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <div className="project-item-header">
                <div className="project-item-header-main">
                    <img className="project-item-header-img" src={"https://cdn.pixabay.com/photo/2020/10/01/11/41/cat-5618328_1280.jpg"} alt={projectItem.project.title} />
                    <h3>{projectItem.project.title}</h3>
                </div>
                <button className={isActive ? 'active' : ''} onClick={handleButtonClick}>
                    <span className="plus"><i className="fa fa-plus"></i></span>
                    <span className="minus"><i className="fa fa-minus"></i></span>
                </button>
                <div onClick={toggleExpand}>{expanded ? <FiMinus color="white" /> : <FiPlus color="white" />}</div>
            </div>

            {expanded && <p>{projectItem.project.description}</p>}
            {/* TODO replace top with component for project content */}

        </div >
    );
};

export default ProjectItem;
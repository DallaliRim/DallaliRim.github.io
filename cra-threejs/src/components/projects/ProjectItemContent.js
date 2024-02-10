import { ImageSlider } from './ImageSlider';

const ProjectItemContent = (projectItem, key) => {
    return (
        <div className="project-item-content">
            <div className="project-info-section">
                <div className="project-images">
                    <ImageSlider slides={projectItem.projectItem.images} />
                </div>
                <div className="project-description">
                    {projectItem.projectItem.description}
                </div>
            </div>
            <div className="project-stack-section">
                <p> STACK </p>
                {projectItem.projectItem.stack.map((item, key) => {
                    return <li key={key}> {item} </li>
                })}
            </div>
        </div >
    );
};

export default ProjectItemContent;
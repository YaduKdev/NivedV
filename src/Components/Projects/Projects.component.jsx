import ProjectsDescriptionContainer from '../ProjectsDescriptionContainer/ProjectsDescriptionContainer.component';

import projectsImage from '../../Assets/projects.png';

import './Projects.styles.scss';

const Projects = ({ ProjectsData }) => (
    <div className='projects section' id='projects'>
        <div className="projects-image-container section-image">
            <img className="projects-image sticker" src={projectsImage} alt="skills-sticker" />
        </div>
        <div className='projects-content-container section-content'>
            <h2 className='projects-content-header'>I've previously worked on...</h2>
            {
                ProjectsData.map((project, idx) => {
                    return (
                        <ProjectsDescriptionContainer key={idx} Project={project} />
                    )
                })
            }
        </div>
    </div>
);


export default Projects;
import projectsImage from '../../Assets/projects.png';

import './Projects.styles.scss';

const Projects = ({ ProjectsData }) => (
    <div className='projects section' id='projects'>
        <div className="projects-image-container section-image">
            <img class="projects-image sticker" src={projectsImage} alt="skills-sticker" />
        </div>
        <div className='projects-content-container section-content'>
            <h2 className='projects-content-header'>I've previously worked on...</h2>
            {
                ProjectsData.map(project => {
                    return (
                        <div className='project-description-container'>
                            <h3>
                                {project.projectName}<br/>
                                <span className='project-duration'>{project.projectDuration}</span>
                            </h3>
                            {
                                project.projectsDetailsList?
                                <ul>
                                    {
                                        project.projectDetails.map(detail => {
                                            return (
                                                <li>{detail}</li>
                                            )
                                        })
                                    }
                                </ul>
                                :project.projectLink?
                                        <p>
                                            {project.projectDetails}
                                            <br />
                                            <span>
                                            <a className='git-project' href={project.projectLink} rel='noreferrer' target="_blank">See Project</a>
                                            </span>
                                        </p>
                                    :<p>{project.projectDetails}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    </div>
);


export default Projects;
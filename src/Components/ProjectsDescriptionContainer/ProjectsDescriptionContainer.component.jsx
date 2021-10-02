import './ProjectsDescriptionContainer.styles.scss';

const ProjectsDescriptionContainer = ({ Project }) => (
    <div className='project-description-container'>
    <h3>
        {Project.projectName}<br/>
        <span className='project-duration'>{Project.projectDuration}</span>
    </h3>
    {
        Project.projectsDetailsList?
        <ul>
            {
                Project.projectDetails.map((detail, idx) => {
                    return (
                        <li key={idx}>{detail}</li>
                    )
                })
            }
        </ul>
        :Project.projectLink?
                <p>
                    {Project.projectDetails}
                    <br />
                    <span>
                        <a className='git-project' href={Project.projectLink} rel='noreferrer' target="_blank">
                            See Project
                        </a>
                    </span>
                </p>
            :<p>{Project.projectDetails}</p>
    }
</div>
);

export default ProjectsDescriptionContainer;
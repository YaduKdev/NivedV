import skillsImage from '../../Assets/skills.png';

import './Skills.styles.scss';

const Skills = ({ SkillsData }) => (
    <div className='skills section' id='skills'>
        <div className="skills-image-container">
            <img className='skills-image sticker' src={skillsImage} alt="skills-sticker" />
        </div>
        <div className='skills-content-container section-content'>
            <h2 className='skills-content-header'>What i can do...</h2>
            {
                SkillsData.map(para => {
                    return (
                        <p className='skills-content-description'>
                            {para}
                        </p>
                    )
                })
            }
        </div>
    </div>
);

export default Skills;
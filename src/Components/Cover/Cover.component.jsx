import { useState } from 'react';
import { Link } from 'react-scroll';

import coverImageBackground from '../../Assets/coverbg.png';
import coverImage from '../../Assets/cover.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './Cover.styles.scss';

const Cover = ({ CoverData }) => {
    const [socialButtonsColor, setSocialButtonsColor] = useState({linkedIn: '#0077b5', fb: '#4267B2', twitter: '#1DA1F2'});

    const {jobTitle, jobLocation, introLine, socialMediaLinks} = CoverData;

    return (
        <div className='cover' id='cover'>
            <div className='cover-header-container'>
                <h1 className='cover-header'>Hi, I'm <span className='cover-header-name'>Nived</span></h1>
            </div>
            <div className='cover-image-container'>
                <img className="cover-image-background" src={coverImageBackground} alt="cover profile background" />
                <img className="cover-image" src={coverImage} alt="cover profile" />
            </div>
            <div className='intro-description-section'>
                <div className='job-description'>
                    <p className='job-description-content'>
                        <span className="job-title">{jobTitle}</span> <br />
                        <span className="job-location">{jobLocation}</span> <br />
                        {introLine}
                    </p>
                </div>
                <div className="social-media-links-cover">
                    <a className='cover-social-media-link' href={socialMediaLinks.linkedIn} rel='noreferrer' target="_blank">
                        <LinkedInIcon 
                            className='linked-in-icon-cover'
                            onMouseEnter={() => setSocialButtonsColor({linkedIn: '#01669B'})} 
                            onMouseLeave={() => setSocialButtonsColor({linkedIn: '#0077b5'})} 
                            style={{fill: `${socialButtonsColor.linkedIn}`, fontSize: '40px'}}
                        />
                    </a>
                    <a className='cover-social-media-link' href={socialMediaLinks.fb} rel='noreferrer' target="_blank">
                        <FacebookIcon 
                            className='facebook-icon-cover' 
                            onMouseEnter={() => setSocialButtonsColor({fb: '#3A5A99'})} 
                            onMouseLeave={() => setSocialButtonsColor({fb: '#4267B2'})}
                            style={{fill: `${socialButtonsColor.fb}`, fontSize: '40px'}} 
                        />
                    </a>
                    <a className='cover-social-media-link' href={socialMediaLinks.twitter} rel='noreferrer' target="_blank">
                        <TwitterIcon 
                            className='twitter-icon-cover' 
                            onMouseEnter={() => setSocialButtonsColor({twitter: '#1C8BCF'})} 
                            onMouseLeave={() => setSocialButtonsColor({twitter: '#1DA1F2'})}
                            style={{fill: `${socialButtonsColor.twitter}`, fontSize: '40px'}}
                        />
                    </a>
                </div>
                <div className="links">
                    <Link className='section-link' to='skills' smooth={true} duration={300}>
                        <button className="skills-section-link">
                            Skills
                        </button>
                    </Link>
                    <Link className='section-link' to='certification' smooth={true} duration={300}>
                        <button className="certifications-section-link">
                            Certifications
                        </button>
                    </Link>
                    <Link className='section-link' to='projects' smooth={true} duration={300}>
                        <button className="projects-section-link">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Cover;
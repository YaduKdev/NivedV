import { useState } from 'react';

import socialsImage from '../../Assets/socials.png';
import mediumLogo from '../../Assets/mediumlogo.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import './SocialMedia.styles.scss';

const SocialMedia = ({ SocialMediaData }) => {
  const [socialButtonsColor, setSocialButtonsColor] = useState({linkedIn: '#0077b5', fb: '#4267B2', twitter: '#1DA1F2'});

  return (
    <div className='social-media section'>
        <div className="projects-image-container section-image">
            <img className="social-media-image sticker" src={socialsImage} alt="skills-sticker" />
        </div>
      <div className='social-media-content-container section-content'>
        <h2 className='social-media-content-header'>Follow me on..</h2>
        <div className="social-media-social-links">
          <a className="social-media-social-links-tag" href={SocialMediaData.linkedIn} rel='noreferrer' target="_blank">
            <LinkedInIcon 
              className='linked-in-icon-cover' 
              onMouseEnter={() => setSocialButtonsColor({linkedIn: '#01669B'})} 
              onMouseLeave={() => setSocialButtonsColor({linkedIn: '#0077b5'})} 
              style={{fill: `${socialButtonsColor.linkedIn}`, fontSize: '60px'}}
            />
          </a>
          <a className="social-media-social-links-tag" href={SocialMediaData.fb} rel='noreferrer' target="_blank">
            <FacebookIcon 
              className='facebook-icon-cover' 
              onMouseEnter={() => setSocialButtonsColor({fb: '#3A5A99'})} 
              onMouseLeave={() => setSocialButtonsColor({fb: '#4267B2'})}
              style={{fill: `${socialButtonsColor.fb}`, fontSize: '60px'}}
            />
          </a>
          <a className="social-media-social-links-tag" href={SocialMediaData.twitter} rel='noreferrer' target="_blank">
            <TwitterIcon 
              className='twitter-icon-cover' 
              onMouseEnter={() => setSocialButtonsColor({twitter: '#1C8BCF'})} 
              onMouseLeave={() => setSocialButtonsColor({twitter: '#1DA1F2'})}
              style={{fill: `${socialButtonsColor.twitter}`, fontSize: '60px'}}
            />
          </a>
        </div>
        <div className='medium-link-container'>
          <p className='medium-link-header'>You can read all my blog posts on</p>
          <a href={SocialMediaData.medium} rel='noreferrer' target="_blank">
            <img className="medium-link-logo" src={mediumLogo} alt="medium-link" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia;
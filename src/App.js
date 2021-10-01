import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import Cover from './Components/Cover/Cover.component';
import Skills from './Components/Skills/Skills.component';
import Certification from './Components/Certification/Certification.component';
import Projects from './Components/Projects/Projects.component';
import SocialMedia from './Components/SocialMedia/SocialMedia.component';
import Footer from './Components/Footer/Footer.component';

import topImage1 from './Assets/topimage1.gif';
import topImage2 from './Assets/topimage2.gif';

import { data } from './Data/data';

import './App.css';

function App() {

  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [arrowVisibility, setArrowVisibility] = useState(false);
  const [topImageToggle, setTopImageToggle] = useState(false);

  const handleArrowVisibility = () => {
    window.scrollY > 1000? setArrowVisibility(true): setArrowVisibility(false);
  }
  
  const changeBackground = (a, b, c, d, e) => {
      if (window.scrollY <= a) {
        return setBackgroundColor('#ffffff');
      } else if (window.scrollY >= a && window.scrollY < b) {
        return setBackgroundColor('#2F8FED');
      } else if (window.scrollY >= b && window.scrollY < c) {
        return setBackgroundColor('#F2293A');
      } else if (window.scrollY >= c && window.scrollY < d) {
        return setBackgroundColor('#F19031');
      } else if (window.scrollY >= d && window.scrollY < e) {
        return setBackgroundColor('#FAEB33');
      } else if (window.scrollY > e) {
        return setBackgroundColor('#ffffff');
      }
    }

  useEffect(() => {
    const setResolution = () => {
      if (window.innerWidth < 800) {
        changeBackground(750, 1600, 2800, 4500, 5250);
      } else if (window.innerWidth < 1200) {
        changeBackground(750, 1600, 2500, 3500, 4200);
      } else if (window.innerWidth > 1200) {
        changeBackground(1100, 1800, 2700, 3900, 4420);
      }
    }
    window.addEventListener('resize', setResolution);
    window.addEventListener('scroll', () => {setResolution(); handleArrowVisibility()});
    return () => {
      window.removeEventListener('resize', setResolution);
      window.removeEventListener('scroll', () => {setResolution(); handleArrowVisibility()});
    }
  }, []);

  const toggleTopImage = () => {
    setTopImageToggle(!topImageToggle);
  }

  return (
    <div className="app" style={{backgroundColor: `${backgroundColor}`}}>
      { 
        arrowVisibility?
          <Link onMouseEnter={toggleTopImage} onMouseLeave={toggleTopImage} className='section-link-app' to='cover' smooth={true} duration={300}>
            <img className='scroll-to-top-image' src={!topImageToggle? topImage1:topImage2} alt='scroll to top' />
          </Link>
        : ''
      }
      <Cover CoverData = {data.cover} />
      <Skills SkillsData = {data.skills} />
      <Certification CertificationData = {data.certifications} />
      <Projects ProjectsData = {data.projects} />
      <SocialMedia SocialMediaData = {data.socialMedia} />
      <Footer />
    </div>
  );
}

export default App;

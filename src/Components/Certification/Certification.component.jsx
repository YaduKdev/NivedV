import certificationsImage from '../../Assets/certifications.png';

import './Certification.styles.scss';

const Certification = ({ CertificationData }) => (
    <div className='certification section' id='certification'>
        <div className="certification-image-container section-image">
            <img className="certification-image sticker" src={certificationsImage} alt="certifications-sticker" />
        </div>
        <div className='certification-content-container section-content'>
          <h2 className='certification-content-header'>My Certifications include...</h2>
          {
            CertificationData.map(certification => {
              return (
                <div className='certification-list'>
                  <h3 className='certification-list-header'>{certification.certificationName}</h3>
                  <a className='certification-list-link' href={certification.certificationLink} rel='noreferrer' target="_blank">View Certificate</a>
                </div>
              )
            })
          }
        </div>
    </div>
);


export default Certification;
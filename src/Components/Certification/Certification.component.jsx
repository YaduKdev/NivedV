import CertificationsContainer from '../CertificationsContainer/CertificationsContainer.component';

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
            CertificationData.map((certification, idx) => <CertificationsContainer key={idx} Certification={certification} />)
          }
        </div>
    </div>
);


export default Certification;
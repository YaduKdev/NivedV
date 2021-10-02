import './CertificationsContainer.styles.scss';

const CertificationsContainer = ({ Certification }) => (
    <div className='certification-list'>
        <div className='certificate-header-container'>
            <img className='certificate-icon' src={process.env.PUBLIC_URL+`${Certification.certificateIcon}`} alt='certificate icon' />
            <h3 className='certification-list-header'>{Certification.certificationName}</h3>
        </div>
        <a className='certification-list-link' href={Certification.certificationLink} rel='noreferrer' target="_blank">
            View Certificate
        </a>
    </div>
);

export default CertificationsContainer;
import './CertificationsContainer.styles.scss';

const CertificationsContainer = ({ Certification }) => (
    <div className='certification-list'>
        <h3 className='certification-list-header'>{Certification.certificationName}</h3>
        <a className='certification-list-link' href={Certification.certificationLink} rel='noreferrer' target="_blank">
            View Certificate
        </a>
    </div>
);

export default CertificationsContainer;
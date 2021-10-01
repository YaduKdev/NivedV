import footerImage from '../../Assets/footer2.png';

import './Footer.styles.scss';

const Footer = () => (
    <div className='footer section'>
        <h1 className='footer-header'>Bye!</h1>
        <img className='footer-image' src={footerImage} alt='footer-sticker' />
    </div>
);

export default Footer;
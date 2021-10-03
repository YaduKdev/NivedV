import footerImage from '../../Assets/footer.png';

import './Footer.styles.scss';

const Footer = () => (
    <div className='footer section'>
        <h1 className='footer-header'>Bye!</h1>
        <img className='footer-image' src={footerImage} alt='footer-sticker' />
        <h3>TEST git config</h3>
    </div>
);

export default Footer;
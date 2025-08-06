import '../styles/Header.scss';
import images from '../images/images';

const companyName = 'Yritysasiakas';

function Header() {
  return (
    <div className="header">
      <div className='header-top'>
          <img src={images.ikeaLogoSmall} />
      </div>
      <h1 className="header-title">5 % alennus liittymällä IKEA Business Networkiin</h1>
        <a  href="https://www.ikea.com/fi/fi/ikea-business/" target="_blank">
         <img className='office-image' src={images.defaultOffice} />
       </a>
      <p className='img-text'>Viestin vastaanottaja: {companyName}</p>
    </div>
  );
}

export default Header;

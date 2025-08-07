import "../styles/Header.scss";
import images from "../images/images";
import { t } from "../i18n";

function Header() {
  const companyName = "Yritysasiakas";

  return (
    <div className="header">
      <div className="header-top">
        <img src={images.ikeaLogoSmall} alt="ikea-logo" />
      </div>
      <h1 className="header-title">{t("HeaderComponent.header")}</h1>
      <a
        rel="noreferrer"
        href="https://www.ikea.com/fi/fi/ikea-business/"
        target="_blank"
      >
        <img
          className="office-image"
          src={images.defaultOffice}
          alt="ikea-office-image"
        />
      </a>
      <p className="img-text">
        {t("HeaderComponent.caption", { companyName })}
      </p>
    </div>
  );
}

export default Header;

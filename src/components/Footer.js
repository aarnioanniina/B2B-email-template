import "../styles/Footer.scss";
import { t } from "../i18n";
import Icon from "./Icon";
import images from "../images/images";

function Footer() {
  const companyId = "123456"; // Replace with actual company ID if needed
  return (
    <div className="footer-container">
      <div className="data-source">
        <p>{t("Footer.dataSourceText")}</p>
      </div>
      <a rel="noreferrer" href="https://www.ikea.com/fi/fi/" target="_blank">
        <img src={images.ikeaLogoSmall} alt="ikea-logo" />
      </a>
      <div className="sosical-media">
        <a
          href="https://www.facebook.com/ikeasuomi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon height="40px" src={images.iconFacebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/ikeasuomi/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon height="40px" src={images.iconInstagram} alt="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/ikeasuomi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon height="40px" src={images.iconYoutube} alt="YouTube" />
        </a>
      </div>
      <div className="privacy-policy">
        <a
          target="_blank"
          href="https://www.ikea.com/fi/fi/ikea-business/contact-us/"
          rel="noreferrer"
        >
          {t("Footer.contactUsText")}
        </a>
        <a
          target="_blank"
          href="https://www.ikea.com/fi/fi/customer-service/terms-conditions/"
          rel="noreferrer"
        >
          {t("Footer.termsText")}
        </a>
        <a
          target="_blank"
          href="https://www.ikea.com/fi/fi/customer-service/privacy-security/"
          rel="noreferrer"
        >
          {t("Footer.privacyText")}
        </a>
        <a
          target="_blank"
          href={`https://survey.alchemer.eu/s3/90872184/IKEA-B2B-Marketing-Email-Unsubscribe-Link?id=${companyId}`}
          rel="noreferrer"
        >
          {t("Footer.unsubscribeText")}
        </a>
      </div>
      <div className="info">
        <p>{t("Footer.sentBy")}</p>
      </div>
    </div>
  );
}

export default Footer;

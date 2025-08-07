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
      <a rel="noreferrer" href={t("Links.Ikea")} target="_blank">
        <img src={images.ikeaLogoSmall} alt="ikea-logo" />
      </a>
      <div className="sosical-media">
        <a
          href={t("Links.IkeaFacebook")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon height="40px" src={images.iconFacebook} alt="Facebook" />
        </a>
        <a
          href={t("Links.IkeaInstagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon height="40px" src={images.iconInstagram} alt="Instagram" />
        </a>
        <a
          href={t("Links.IkeaYoutube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon height="40px" src={images.iconYoutube} alt="YouTube" />
        </a>
      </div>
      <div className="privacy-policy">
        <a target="_blank" href={t("Links.IkeaContactUs")} rel="noreferrer">
          {t("Footer.contactUsText")}
        </a>
        <a target="_blank" href={t("Links.IkeaTerms")} rel="noreferrer">
          {t("Footer.termsText")}
        </a>
        <a target="_blank" href={t("Links.IkeaPrivacy")} rel="noreferrer">
          {t("Footer.privacyText")}
        </a>
        <a
          target="_blank"
          href={t("Links.IkeaUnsubscribe", { companyId: companyId })}
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

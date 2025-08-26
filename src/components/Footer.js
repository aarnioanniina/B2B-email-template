import React from "react";
import { t } from "../i18n";
import {
  LinkedIdIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon
} from "../images/images";

const Footer = () => {
  const companyId = "{companyId}"; // Replace with actual company ID if needed
  return (
    <div className="footer-container">
      <div className="data-source">
        <p>{t("Footer.dataSourceText")}</p>
      </div>
      <a rel="noreferrer" href={t("Links.Ikea")} target="_blank">
        <img
          src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/2a27b449-60e5-4c88-bddf-7f7286f2df68.png"
          alt="ikea-logo"
        />
      </a>
      <div className="sosical-media">
        <a
          href={t("Links.IkeaLinkedIn")}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <LinkedIdIcon width={24} height={24} />
        </a>
        <a
          href={t("Links.IkeaFacebook")}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FacebookIcon width={24} height={24} />
        </a>
        <a
          href={t("Links.IkeaInstagram")}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <InstagramIcon width={24} height={24} />
        </a>
        <a
          href={t("Links.IkeaYoutube")}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <YoutubeIcon width={24} height={24} />
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
};

export default Footer;

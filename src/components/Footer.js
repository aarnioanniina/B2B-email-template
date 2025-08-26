import React from "react";
import { t } from "../i18n";
import Icon from "./Icon";

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
          href={t("Links.IkeaFacebook")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            height="40px"
            src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/e771c26c-acb2-41f1-886e-5c5afeefac45.png"
            alt="Facebook"
          />
        </a>
        <a
          href={t("Links.IkeaInstagram")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            height="40px"
            src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/11893e1a-cdee-4701-a66e-93b9297b9640.png"
            alt="Instagram"
          />
        </a>
        <a
          href={t("Links.IkeaYoutube")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            height="40px"
            src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/cd61d3f3-37a3-4d28-a0d1-6e70017fd670.png"
            alt="YouTube"
          />
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

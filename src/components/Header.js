import React from "react";
import { t } from "../i18n";

const Header = () => {
  const companyName = "Yritysasiakas";

  return (
    <div className="header">
      <div className="header-top">
        <a rel="noreferrer" href={t("Links.Ikea")} target="_blank">
          <img
            src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/2a27b449-60e5-4c88-bddf-7f7286f2df68.png"
            alt="ikea-logo"
          />
        </a>
      </div>
      <h1 className="header-title">{t("HeaderComponent.header")}</h1>
      <a rel="noreferrer" href={t("Links.ikeaBusiness")} target="_blank">
        <img
          className="office-image"
          src="https://image.news.email.ikea.com/lib/fe2b117075640475721379/m/1/2ab2acec-fd00-4b2c-891a-8c7d9f911f84.jpg"
          alt="ikea-office-image"
        />
      </a>
      <p className="img-text">
        {t("HeaderComponent.caption", { companyName })}
      </p>
    </div>
  );
};

export default Header;

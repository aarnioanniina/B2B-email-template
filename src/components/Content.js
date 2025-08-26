import React from "react";
import Button from "./Button";
import { t } from "../i18n";
import InfoContainer from "./infoContainer";

const Content = () => {
  const list = t("Content.list");
  const date = "16.9.2025";
  const companyId = "{companyId}"; // Example company ID, replace with actual logic to get the ID

  return (
    <div className="content">
      <h2>{t("Content.header")}</h2>
      <p>{t("Content.greeting")}</p>
      <p dangerouslySetInnerHTML={{ __html: t("Content.text1") }} />
      <p>
        <strong> {t("Content.list.heading")}</strong>
      </p>
      <ul className="list">
        {list.items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <div className="button-content">
        <Button
          label={t("Content.buttonLabel")}
          onClick={() => {
            const url = t("Links.BusinessContactForm", {
              companyId: companyId
            });

            window.open(url, "_blank", "noopener,noreferrer");
          }}
        />
      </div>
      <p>
        {t("Content.text2")} <strong>{date}.</strong>
      </p>
      <p> {t("Content.text3")}</p>
      <InfoContainer />
    </div>
  );
};

export default Content;

import React from "react";
import Button from "./Button";
import { t } from "../i18n";
import InfoContainer from "./infoContainer";

const Content = () => {
  const list = t("Content.list");
  const date = " 29.9.–26.10.2025";

  return (
    <div className="content">
      {/* <h2>{t("Content.header")}</h2> */}
      <p>{t("Content.greeting")}</p>
      <p dangerouslySetInnerHTML={{ __html: t("Content.text4") }} />
      <p className="subheader">
        <strong> {t("Content.list.heading")}</strong>
      </p>
      <ul className="list">
        {list.items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
      <div className="button-content">
        <a
          rel="noreferrer"
          target="_blank"
          href={t("Links.BusinessContactForm")}
        >
          <Button label={t("Content.buttonLabel")} />
        </a>
      </div>
      {/* <p>
        {t("Content.text2")} <strong>{date}.</strong>
      </p> */}
      {/* <p  dangerouslySetInnerHTML={{ __html: t("Content.text2") }}/> */}
      {/* <p> {t("Content.text3")}</p> */}
      <InfoContainer />
    </div>
  );
};

export default Content;

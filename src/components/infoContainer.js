import React from "react";
import { t } from "../i18n";
import Icon from "./Icon";

const InfoContainer = ({ label, onClick }) => {
  return (
    <div className="info-container">
      <div className="grid-container">
        <div className="grid-item1">
          <div>
            <h3>{t("InfoContainer.header1")}</h3>
            <p>{t("InfoContainer.Section1.text1")}</p>
          </div>
          <div>
            <a href={t("Links.ikeaBusiness")} target="_blank" rel="noreferrer">
              <img
                src="https://image.news.email.ikea.com/lib/fe2b117075640475721379/m/1/1382da05-5f8d-4273-bf91-8bc61354eec1.jpg"
                alt="ikea-office-image"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <div className="grid-header">
              <Icon
                className="icon"
                src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/d38f2d2a-353f-4b6a-81f6-9e94d0ff4286.png"
              />
              <h3>{t("InfoContainer.header2")}</h3>
            </div>
            <p>{t("InfoContainer.Section2.text1")}</p>
            <a
              rel="noreferrer"
              href={t("Links.BusinessCustomerJoin")}
              target="_blank"
            >
              <p>{t("InfoContainer.Section2.link")}</p>
              <Icon
                src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/2e551988-5986-4852-905b-3f1da2fcae86.png"
                alt="icon-arrow"
                height="12px"
              />
            </a>
          </div>
          <div className="grid-item">
            <div className="grid-header">
              <Icon
                className="icon"
                src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/28c820cd-2eea-4da6-8258-9c133b42b36a.png"
              />
              <h3>{t("InfoContainer.header3")}</h3>
            </div>
            <p>{t("InfoContainer.Section3.text1")}</p>
            <a
              className="link"
              rel="noreferrer"
              href={t("Links.ikeaBusinessNetwork")}
              target="_blank"
            >
              <p>{t("InfoContainer.Section3.link")}</p>
              <Icon
                src="https://image.news.email.ikea.com/lib/fe30117075640475711d75/m/2/2e551988-5986-4852-905b-3f1da2fcae86.png"
                alt="icon-arrow"
                height="12px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;

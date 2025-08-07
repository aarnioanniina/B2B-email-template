import "../styles/Content.scss";
import images from "../images/images";
import { t } from "../i18n";
import Icon from "./Icon";

function InfoContainer({ label, onClick }) {
  return (
    <div className="info-container">
      <div className="grid-container">
        <div className="grid-item1">
          <div>
            <h3>{t("InfoContainer.header1")}</h3>
            <p>{t("InfoContainer.Section1.text1")}</p>
          </div>
          <div>
            <a
              href="https://www.ikea.com/fi/fi/ikea-business/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={images.office1} alt="ikea-office-image" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="grid-item">
            <div className="grid-header">
              <Icon className="icon" src={images.iconThumb} />
              <h3>{t("InfoContainer.header2")}</h3>
            </div>
            <p>{t("InfoContainer.Section2.text1")}</p>
            <a
              rel="noreferrer"
              href="https://www.ikea.com/fi/fi/ikea-business/"
              target="_blank"
            >
              <p>{t("InfoContainer.Section2.link")}</p>
              <Icon src={images.iconArrow} alt="icon-arrow" height="12px" />
            </a>
          </div>
          <div className="grid-item">
            <div className="grid-header">
              <Icon className="icon" src={images.iconPen} />
              <h3>{t("InfoContainer.header3")}</h3>
            </div>
            <p>{t("InfoContainer.Section3.text1")}</p>
            <a
              className="link"
              rel="noreferrer"
              href="https://www.ikea.com/fi/fi/ikea-business/"
              target="_blank"
            >
              <p>{t("InfoContainer.Section3.link")}</p>
              <Icon src={images.iconArrow} alt="icon-arrow" height="12px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;

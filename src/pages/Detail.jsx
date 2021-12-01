// NPM package
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Project files
import ParcelInformation from '../components/ParcelInformation';
import ButtonGoBack from '../components/ButtonGoBack';

export default function Detail({ data }) {
    const { t } = useTranslation();

    const { sku} = useParams()

    const selectedItem = data.find((item) => item.sku === sku)

    const {
        name,
        imageURLs
    } = selectedItem ?? {};
    
    return (
      <section id="parcel-detail">
        {selectedItem !== null && selectedItem !== undefined ? (
          <>
            <header>
              <h1>
                {name}
              </h1>
              <p>{t("detailView:heading2")}</p>
            </header>

            <div className="columns">
              <img src={imageURLs[0].src} alt="accessory product" className = "product-image" />
              <ParcelInformation parcel={selectedItem} />
            </div>
          </>
        ) : (
          <div>
            <h2> {t("common:not-found")} </h2>
            <h4>{t("common:not-found-description")}</h4>
          </div>
        )}

        <footer className="footer">
          <ButtonGoBack />
        </footer>
      </section>
    );
}

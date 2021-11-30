// NPM package
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Project files
import ParcelInformation from '../components/ParcelInformation';
import ButtonGoBack from '../components/ButtonGoBack';

export default function ParcelDetail({ data }) {
    const { t } = useTranslation();

    const { parcel_id} = useParams()

    const selectedParcel = data.find((item) => item.parcel_id === parcel_id)

    const {
        location_coordinate_latitude: latitude,
        location_coordinate_longitude: longitude,
        sender,
    } = selectedParcel ?? {};
    
    return (
      <section id="parcel-detail">
        {selectedParcel !== null && selectedParcel !== undefined ? (
          <>
            <header>
              <h1>
                {t("detailView:heading1")} {sender}
              </h1>
              <p>{t("detailView:heading2")}</p>
            </header>

            <div className="columns">
              <ParcelInformation parcel={selectedParcel} />
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

// NPM packages
import {useState} from 'react'
import {Map as LeafletMap, Marker, Popup, TileLayer} from "react-leaflet"
import {icon} from "leaflet"
import { useTranslation } from "react-i18next";

// Project files
import mapPin from "../assets/images/map-pin.png"
import FormattedTime from '../components/FormattedTime'
import ButtonGoBack from '../components/ButtonGoBack'

export default function TrackMap({ data }) {
  const { t } = useTranslation();

  // Properties
  const [activePop, setActivePop] = useState(null);
  const zoomLevel = 1;
  const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`;
  const myIcon = icon({ iconUrl: mapPin, iconSize: [36, 36] });
  
  return (
    <section id="track-map">
      <header>
        <h1>{t("trackMap:heading1")}</h1>
        <p>{t("trackMap:heading2")}</p>
      </header>

      <div>
        <LeafletMap className="map" center={[0, 0]} zoom={zoomLevel}>
          <TileLayer url={mapURL} attribution={attribution} />
          {data.map((parcel) => (
            <Marker
              key={parcel.location_id}
              position={[
                parcel.location_coordinate_latitude,
                parcel.location_coordinate_longitude,
              ]}
              icon={myIcon}
              onClick={() => {
                setActivePop(parcel);
              }}
            />
          ))}

          {activePop && (
            <Popup
              position={[
                activePop.location_coordinate_latitude,
                activePop.location_coordinate_longitude,
              ]}
              onClose={() => {
                setActivePop(null);
              }}
            >
              <div>
                <h2>Located at {activePop.location_name}</h2>
                <p className="description">
                  {t("detailView:heading1")} {activePop.sender}
                </p>
                <p className="description-small">{activePop.status}</p>
                <p className="description-small">
                  {t("trackMap:arriving")}{" "}
                  {<FormattedTime dateString={activePop.eta} />}
                </p>
              </div>
            </Popup>
          )}
        </LeafletMap>
      </div>

      <footer className="footer">
        <ButtonGoBack />
      </footer>
    </section>
  );
}

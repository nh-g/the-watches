// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import DataField from './DataField';

export default function ParcelInformation({parcel}) {
    const { t } = useTranslation();

    const {
        size,
        description,
        price, color
    } = parcel ?? {};

    return (
      <div className="content-box">
        <DataField label={t("detailView:labels:location")} text={size} />
        {description && (
          <DataField label={t("detailView:labels:note")} text={description} />
        )}

        <DataField
          label={t("detailView:labels:location")}
          text={`${price.symbol}${price.amount}`}
        />
        <button className="cta">
          Add to Cart
        </button>
      </div>
    );
}


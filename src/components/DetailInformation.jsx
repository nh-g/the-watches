// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import DataField from './DataField';

export default function DetailedInformation({parcel}) {
    const { t } = useTranslation();

    const {
        size,
        description,
        price
    } = parcel ?? {};

    return (
      <div className="content-box">
        {description && (
          <DataField
            label={t("detailView:labels:description")}
            text={description}
          />
        )}
        <DataField label={t("detailView:labels:size")} text={size} />

        <DataField
          label={t("detailView:labels:price")}
          text={`${price.symbol}${price.amount}`}
        />
        <button className="cta">Add to Cart</button>
      </div>
    );
}


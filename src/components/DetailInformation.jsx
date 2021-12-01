// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import DataField from './DataField';
import AddToCart from "./AddToCart";

export default function DetailedInformation({item}) {
    const { t } = useTranslation();

    const {
        size,
        description,
        price
    } = item ?? {};

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
        <AddToCart item={item} />
      </div>
    );
}


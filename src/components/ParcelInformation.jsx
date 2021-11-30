// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import DataField from './DataField';
import FormattedTime from './FormattedTime';

export default function ParcelInformation({parcel}) {
    const { t } = useTranslation();

    const {
        eta,
        last_updated,
        location_name,
        notes,
        verification_required: verify
    } = parcel ?? {};

    return (
      <div className="content-box">
        <DataField label={t("detailView:labels:location")} text={location_name} />
        <DataField
          label={t("detailView:labels:eta")}
          text={<FormattedTime dateString={eta} />}
        />
        <DataField
          label={t("detailView:labels:last_update")}
          text={<FormattedTime dateString={last_updated} />}
        />
        {notes && <DataField label={t("detailView:labels:note")} text={notes} />}
        {verify && (
          <DataField
            label={t("detailView:labels:verification-title")}
            text={t("detailView:labels:verification-description")}
          />
        )}
      </div>
    );
}


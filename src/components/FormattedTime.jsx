import { useTranslation } from "react-i18next";

export default function FormattedTime({ dateString }) {
  const { t } = useTranslation();

  const date = dateString.split("T")[0];
  const time = dateString.split("T")[1].split("Z");
  return (
    <span>
      {date} {t("common:date-time")} {time}
    </span>
  );
}

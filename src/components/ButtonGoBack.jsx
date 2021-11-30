import { Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ButtonGoBack() {
  const { t } = useTranslation();

  return (
    <Link className="button" to="/">
      {t("common:button-label")}
    </Link>
  );
}

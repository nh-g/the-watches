// NPM packages
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import Card from "../components/Card";
import ButtonGoBack from "../components/ButtonGoBack";
import { filterList } from "../scripts/filterList";

export default function SearchResult({ data }) {
  const { t } = useTranslation();

  const { query } = useParams();

  const filterBySender = filterList(data, "sender", query);

  const filterById = filterList(data, "parcel_id", query);

  const filterByStatus = data.filter((item) =>
    item.status.toUpperCase().replace(/-/g, "").includes(query.toUpperCase().replace(/\s/g, ""))
  );

  const searchResults = [...filterBySender, ...filterById, ...filterByStatus];

  const Parcels = searchResults.map((item, index) => (
    <Card key={index} parcel={item} />
  ));

  return (
    <div id="results" className="container">
      <header>
        <h2>
          {t("search:search-result:heading")} {searchResults.length}{" "}
          {t("search:search-result:succeeded")} "{query}"
        </h2>
      </header>

      <div className="list">
        {searchResults.length > 0 ? (
          Parcels
        ) : (
          <p>{t("search:search-result:failed")}</p>
        )}
      </div>

      <footer className="footer">
        <ButtonGoBack />
      </footer>
    </div>
  );
}

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

  const filterByName = filterList(data, "name", "", query);
  const filterBySize = filterList(data, "size", "", query);
  const filterByColor = filterList(data, "color", "id", query);
  const searchResults = [...filterBySize, ...filterByName, ...filterByColor];

  const Products = searchResults.map((item, index) => (
    <Card key={index} item={item} />
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
          Products
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

import {useState} from 'react'
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SearchBar() {
  const { t } = useTranslation();

  // Local state
  const [query, setQuery] = useState("");

  // Properties
  const history = useHistory();
  
  // Methods
  function search(event) {
    event.preventDefault();
    history.push(`/results/${query}`);
  }

  return (
    <div>
      <form onSubmit={search} className="search-bar">
        <input
          type="text"
          id="sender-search"
          placeholder={t("search:search-bar")}
          value={query}
          onChange={(event) => setQuery(event.target.value.replace(/\s/g, ""))}
          className="search-box"
          required
        />
      </form>
    </div>
  );
}

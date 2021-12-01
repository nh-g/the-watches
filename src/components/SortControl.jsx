// NPM Packages
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Project files
import {
  sortByNumberDescending,
  sortByNumberAscending,
  sortByString,
} from "../scripts/sortList";

export default function SortControls({ list, setList }) {
  const { t } = useTranslation();

  // Local state
  const [activeButton, setActiveButton] = useState("");

  // Methods
  function sortListByName(list, key) {
    const sortedList = sortByString(list, key);

    setActiveButton(key);
    setList(sortedList);
  }

  function sortListByPriceAscending(list, key1, key2) {
    const sortedList = sortByNumberAscending(list, key1, key2);
    setActiveButton("lowest-price");
    setList(sortedList);
  }

  function sortListByPriceDescending(list, key1, key2) {
    const sortedList = sortByNumberDescending(list, key1, key2);
    setActiveButton("highest-price");
    setList(sortedList);
  }

  return (
    <section className="sort-controls">
      <span> {t("sorter:sortBy")}:</span>
      <button
        className={`sort-toggler ${activeButton === "name" ? "active" : ""}`}
        onClick={() => sortListByName(list, "name")}
      >
        {t("sorter:name")}
      </button>
      <button
        className={`sort-toggler ${
          activeButton === "lowest-price" ? "active" : ""
        }`}
        onClick={() => sortListByPriceAscending(list, "price", "amount")}
      >
        {t("sorter:lowest")}
      </button>
      <button
        className={`sort-toggler ${
          activeButton === "highest-price" ? "active" : ""
        }`}
        onClick={() => sortListByPriceDescending(list, "price", "amount")}
      >
        {t("sorter:highest")}
      </button>
    </section>
  );
}

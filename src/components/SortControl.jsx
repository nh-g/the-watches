// NPM Packages
import { useState } from "react";
// Project files
import { sortByDate, sortByString } from "../scripts/sortList";

export default function SortControls({ list, setList }) {
  // Local state
  const [activeButton, setActiveButton] = useState("");

  // Methods
  function sortListByName(list, key) {
    const sortedList = sortByString(list, key);

    setActiveButton(key);
    setList(sortedList);
  }

  function sortListByArrivingDate(list, key) {
    const sortedList = sortByDate(list, key);

    setActiveButton(key);
    setList(sortedList);
  }

  return (
    <section className="sort-controls">
      <span>Sort by:</span>
      <button
        className={`sort-toggler ${activeButton === "sender" ? "active" : ""}`}
        onClick={() => sortListByName(list, "sender")}
      >
        Name
      </button>
      <button
        className={`sort-toggler ${activeButton === "eta" ? "active" : ""}`}
        onClick={() => sortListByArrivingDate(list, "eta")}
      >
        ETA
      </button>
    </section>
  );
}

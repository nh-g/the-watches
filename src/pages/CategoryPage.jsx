// NPM Packages
import { useState, useEffect } from "react";

// Project files
import Card from "../components/Card";
import SortControls from "../components/SortControl";

export default function CategoryPage({ data, category }) {
  const [list, setList] = useState(data);
  const selectedData = data.filter((item) =>
    item.type.toLowerCase().includes(category)
  );

  useEffect(() => {
    setList(selectedData);
  }, [selectedData]);

  const CardArray = list.map((item) => {
    return <Card key={item.sku} item={item} />;
  });

  return (
    <section id="list-view-page">
      <div className="heading">
        <SortControls list={list} setList={setList} />
      </div>
      <div className="list">{CardArray}</div>
    </section>
  );
}

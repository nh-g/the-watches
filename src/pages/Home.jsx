// NPM Packages
import { useState, useEffect } from "react";

// Project files
import Card from "../components/Card";
import SortControls from "../components/SortControl";
export default function Home({ data }) {
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  const CardArray = list.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <section id="list-view-page">
      <header>
      </header>
      <div className="heading">
        <SortControls list={list} setList={setList} />
      </div>
      <div className="list">{CardArray}</div>
    </section>
  );
}

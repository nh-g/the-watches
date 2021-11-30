// NPM Packages
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// Project files
import Card from "../components/Card";
import SortControls from "../components/SortControl";
import SearchBar from "../components/SearchBar";
export default function Home({ data }) {

  const [list, setList] = useState(data);
  useEffect(() => {
    setList(data)
  }, [data])

  const {t} = useTranslation();


  const CardArray = list.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <section id="home">
      <header>
        <h1> {data.length} products</h1>
      </header>
      <div className="heading">
        <SortControls list={list} setList={setList} />
        <SearchBar />
      </div>
      <div className="list">{CardArray}</div>
    </section>
  );
}

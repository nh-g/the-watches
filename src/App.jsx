//NPM Packages
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

//Project files
import "./style/style.sass";
import BackupData from "./data/products.json";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import StatusLoading from "./status/StatusLoading";
import StatusError from "./status/StatusError";
import StatusLoaded from "./status/StatusLoaded";
import { fetchProducts } from "./scripts/fetchProducts";

// Constants
const STATUS_LOADING = "loading";
const STATUS_LOADED = "loaded";
const STATUS_ERROR = "error";

export default function App() {
  // Local states
  const [status, setStatus] = useState(STATUS_LOADING);
  const [data, setData] = useState([]);
  // Constants
  const DEBUG_MODE = false;

  // Methods
  useEffect(() => {
    fetchProducts()
      .then((response) => onSuccess(response))
      .catch((error) => onFail(error));
  }, [setData, setStatus]);

  function onSuccess(products) {
    console.log("App.jsx", products);
    setData(products);
    setStatus(STATUS_LOADED);
  }

  function onFail() {
    if (DEBUG_MODE) {
      setData(BackupData);
      setStatus(STATUS_LOADED);
    } else {
      setStatus(STATUS_ERROR);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar /> {status === STATUS_LOADING && <StatusLoading />}{" "}
        {status === STATUS_LOADED && <StatusLoaded data={data} />}{" "}
        {status === STATUS_ERROR && <StatusError />} <Footer />
      </BrowserRouter>{" "}
    </div>
  );
}

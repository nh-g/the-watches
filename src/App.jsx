//NPM Packages
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

//Project files
import "./style/style.sass";
import NavigationBar from "./components/NavigationBar";
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

  // Methods
  useEffect(() => {
    fetchProducts()
      .then((response) => onSuccess(response))
      .catch((error) => onFail(error));
  }, [setData, setStatus]);

  function onSuccess(products) {
    setData(products);
    setStatus(STATUS_LOADED);
  }

  function onFail() {
    setStatus(STATUS_ERROR);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar /> 
        {status === STATUS_LOADING && <StatusLoading />}
        {status === STATUS_LOADED && <StatusLoaded data={data} />}
        {status === STATUS_ERROR && <StatusError />} 
      </BrowserRouter>
    </div>
  );
}

//NPM Packages
import {Link} from "react-router-dom";

//Project files
import SearchBar from './SearchBar';
import mapLogo from "../assets/images/map.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      <Link to="/">
        <h1>Ptracker</h1>
      </Link>
      <div className="flexbox-expand-space" />

      <SearchBar />

      <div className="flexbox-expand-space" />

      <div className="right-items">
        <Link to="/track">
          <img
            className="map-logo"
            src={mapLogo}
            alt="map"
            title="Track Map"
            style={{ height: "30px" }}
          />
        </Link>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}


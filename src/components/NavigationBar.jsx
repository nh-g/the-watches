//NPM Packages
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useTranslation } from "react-i18next";

//Project files
import BrandLogo from "../assets/images/logo.jpg";
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import { useStateValue } from "../state/StateProvider";

export default function NavigationBar() {
  const { t } = useTranslation();

  const [{ cart }] = useStateValue();


  return (
    <nav id="navigation-bar">
      <Link to="/">
        <img src={BrandLogo} alt="brand logo" style={{ height: "30px" }} />
      </Link>
      <div className="flexbox-expand-space" />

      <div className="nav-list">
        <ul>
          <li>
            <Link to="watches">{t("nav:watches")}</Link>
          </li>
          <li>
            <Link to="jewelry">{t("nav:jewelry")}</Link>
          </li>
          <li>
            <Link to="watch-straps">{t("nav:strap")}</Link>
          </li>
        </ul>
      </div>

      <div className="right-items">
        <SearchBar />
        <div className="flexbox-expand-space" />
        <LanguageSwitcher />
        <Link to="/checkout">
          <span style={{ display: "flex", color: "gray"}}>
            <ShoppingCartIcon style={{ fill: "white" }} />
            {cart?.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

//NPM Packages
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//Project files
import BrandLogo from '../assets/images/logo.jpg'
// import SearchBar from './SearchBar';
import LanguageSwitcher from "./LanguageSwitcher";


const navLinks = [
  {
    title: "Watches",
    path: "/",
  },
  {
    title: "JEWELERY",
    path: "/jewelry",
  },
  {
    title: "Watch Strap",
    path: "/watch-straps",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function NavigationBar() {
  return (
    <nav id="navigation-bar">
      <Link to="/">
        <img src={BrandLogo} alt="brand logo" style={{ height: "30px" }} />
      </Link>
      <div className="flexbox-expand-space" />

      {/* <SearchBar /> */}

      <div className="flexbox-expand-space" />

      <div className="right-items">
        <LanguageSwitcher />
        <Link to="/checkout">
          <ShoppingCartIcon style={{ fill: "white" }} />
        </Link>
      </div>
    </nav>
  );
}


//NPM Packages
import {Link} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//Project files
import BrandLogo from '../assets/images/logo.jpg'
import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from './SearchBar';

const navLinks = [
  {
    title: "Watches",
    path: "/",
  },
  {
    title: "Jewelry",
    path: "/jewelry",
  },
  {
    title: "Watch Strap",
    path: "/watch-straps",
  },
  {
    title: "Gift Cards",
    path: "/",
  },
];

export default function NavigationBar() {

  return (
    <nav id="navigation-bar">
      <Link to="/">
        <img src={BrandLogo} alt="brand logo" style={{ height: "30px" }} />
      </Link>
      <div className="flexbox-expand-space" />

      <div className="nav-list">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flexbox-expand-space" />

      <div className="right-items">
        <SearchBar />
        <div className="flexbox-expand-space" />
        <LanguageSwitcher />
        <Link to="/checkout">
          <ShoppingCartIcon style={{ fill: "white", marginTop: "10px" }} />
        </Link>
      </div>
    </nav>
  );
}


// NPM package
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { sku, name, price, color, imageURLs } = item;

  const itemColor = color.id;
  const shortenName = name.replace(itemColor, "").replace(/[0-9]/g, "");
  return (
    <Link className="card" to={`/products/${sku}`}>
      <div className="image-container">
        <img src={imageURLs[0].src} alt="accessory product" />
      </div>
      <div className="title">
        <h4>{shortenName}</h4>
      </div>
      <div className="color"></div>

      <div className={`color-dot ${itemColor}`}></div>

      <div className="color-name">
        {itemColor.toUpperCase() !== "N/A" && <span>{itemColor}</span>}
      </div>

      <div className="price">
        <span>
          {price.symbol}
          {price.amount}
        </span>
      </div>
    </Link>
  );
}

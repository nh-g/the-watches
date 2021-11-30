export default function Card({ item }) {
  const { sku, name, price, color, imageURLs} = item;

  const itemColor = color.id;
  const shortenName = name.replace(itemColor, "").replace(/[0-9]/g, "")
;


  return (
    <div className="card">
      <div className="image-container">
        <img src={imageURLs[0].src} />
      </div>
      <div className="title">
        <h4>{shortenName}</h4>
      </div>
      <div className="color"></div>
      <div className="color-name">
        <span>{itemColor}</span>
      </div>

      <div className="price">
        <span>
          {price.symbol}
          {price.amount}
        </span>
      </div>
    </div>
  );
}

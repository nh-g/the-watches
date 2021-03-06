// NPM packages
import { useStateValue } from "../state/StateProvider";

export default function AddToCart({ item }) {
  // Properties
  const { id, title, imageURL, price } = item;
  // Global State
  const [, dispatch] = useStateValue();

  // Methods
  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        imageURL: imageURL,
        price: price,
      },
    });
  };

  return (
    <button className="cta" onClick={addToCart}>
      Add to Cart
    </button>
  );
}

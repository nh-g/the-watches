const PRODUCTS_API_URL = "https://assignment.dwbt.tech/products";
const IMAGES_API_URL = "https://assignment.dwbt.tech/images";

export const fetchProducts = async () => {
  return Promise.all([
    fetch(PRODUCTS_API_URL).then((response) => response.json()),
    fetch(IMAGES_API_URL).then((response) => response.json()),
  ]).then((result) => {
    const { products } = result[0];
    const { images } = result[1];
    return products.map((product) => {
      const { sku } = product;
      delete product._links;
      product.imageURLs = images[sku];
      return product;
    });
  });
};

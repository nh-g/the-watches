// Constants
const PRODUCTS_API_URL = "https://assignment.dwbt.tech/products";
const IMAGES_API_URL = "https://assignment.dwbt.tech/images";
const DEBUG_MODE = false;

export const fetchProducts = async () => {
  if (DEBUG_MODE) {
    return require("../data/backupData.json");
  }

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

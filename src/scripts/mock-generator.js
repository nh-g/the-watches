const axios = require("axios");
fs = require("fs");

const FILE_PATH = "./products.json";
const writeFile = (product) => {
  fs.writeFile(FILE_PATH, JSON.stringify(product), (error) => {
    if (error) {
      console.error(error);
    }
  });
};

 const generateMockData = (async () => {
  const result = await Promise.all([
    axios.get("https://assignment.dwbt.tech/products"),
    axios.get(`https://assignment.dwbt.tech/images`),
  ]).then((result) => {
    const { products } = result[0].data;
    const { images } = result[1].data;
    console.log("products", { products: JSON.stringify(products, null, 2) });
    console.log("images", { products: JSON.stringify(images, null, 2) });
    return products.map((product) => {
      const { sku } = product;
      delete product._links;
      product.imageURLs = images[sku];
      return product;
    });
  });
  console.log("result", { products: JSON.stringify(result, null, 2) });
  writeFile(result);
})();

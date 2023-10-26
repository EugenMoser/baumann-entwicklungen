function findProductName(products) {
  const maxLength = 60; // Set the maximum length for the hint text

  const product = products.map((product) => {
    const name = product.product_name;
    const description1 = product.product_description1;
    const description2 = product.product_description2;

    const articleFullName =
      `${name} ${description1} ${description2}`.trim();

    return articleFullName.length > maxLength
      ? articleFullName.slice(0, maxLength) + "..."
      : articleFullName;
  });
  return product;
}

//filter all products or searched products by category
function productsByCategory(products, category) {
  const filteredProduct = products.filter(
    (product) => product.category === category
  );
  return filteredProduct;
}

export { findProductName, productsByCategory };

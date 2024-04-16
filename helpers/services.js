//find article and return name with description
// function findProductName(products) {
//   const maxLength = 60; // Set the maximum length for the hint text

//   const product = products.map((product) => {
//     const name = product.product_name;
//     const description1 = product.product_description1;
//     const description2 = product.product_description2;

//     const productFullName =
//       `${name} ${description1} ${description2}`.trim();

//     return productFullName.length > maxLength
//       ? productFullName.slice(0, maxLength) + "..."
//       : productFullName;
//   });
//   return product;
// }

//find id and return name with id
function findArtikleId(products) {
  const product = products.map((product) => {
    const name = product.product_name;

    const articleFullName = `${articleId} ${name}`.trim();

    return articleFullName;
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

function findProducts(searchInputText, products) {
  const searchInput = searchInputText.toLowerCase().trim();

  const filterProducts = products?.filter((product) => {
    const maxLength = 60; // Set the maximum length for the hint text
    const name = product?.product_name;
    const description1 = product?.product_description1;
    const description2 = product?.product_description2;

    const articleNumber = product?.articles?.find((article) =>
      article.article_number.startsWith(searchInput)
    );
    const productFullName = `${name} ${description1} ${description2}`
      .toLowerCase()
      .trim();

    return (
      (productFullName.length > maxLength
        ? productFullName.slice(0, maxLength) + "..."
        : productFullName
      ).includes(searchInput) || articleNumber
    );
  });

  //if search input is empty, set filteredProducts to empty string
  return searchInputText.length === 0 ? "" : filterProducts;
}
export { findArtikleId, findProducts, productsByCategory };

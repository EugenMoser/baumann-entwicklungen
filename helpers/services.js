/**
 * Filtert Produkte nach Kategorie.
 */
function getProductsByCategory(products, category) {
  return (
    products?.filter((product) => product.category === category) ?? []
  );
}

/**
 * Durchsucht Produkte nach Name, Beschreibung oder Artikelnummer.
 * Gibt ein leeres Array zurück, wenn kein Suchtext vorhanden ist.
 */
function findProducts(searchInputText, products) {
  if (!searchInputText?.length) return [];

  const searchInput = searchInputText.toLowerCase().trim();

  return (
    products?.filter((product) => {
      const name = product?.product_name ?? "";
      const description1 = product?.product_description1 ?? "";
      const description2 = product?.product_description2 ?? "";

      const matchesArticleNumber = product?.articles?.some(
        (article) =>
          article.article_number?.startsWith(searchInput) ||
          searchInput.includes(article.article_number),
      );

      const productFullName = `${name} ${description1} ${description2}`
        .toLowerCase()
        .trim();

      return productFullName.includes(searchInput) || matchesArticleNumber;
    }) ?? []
  );
}

export { findProducts, getProductsByCategory };

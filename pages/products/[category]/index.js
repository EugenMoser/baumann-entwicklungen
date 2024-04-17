//products by category
import {
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';
import styled from 'styled-components';

import ProductList from '../../../components/ProductList';
import { sections } from '../../../helpers/constants';
import {
  findProducts,
  getProductsByCategory,
} from '../../../helpers/services';

//**************** für static website */

const getProducts = async () => {
  const res = await fetch('http://localhost:3000/api/getdata');
  const data = await res.json();
  return data.products;
};

export async function getStaticPaths() {
  const products = await getProducts();
  const paths = products.map((product) => {
    return { params: { category: product.category } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const category = context.params.category;
  const products = await getProducts();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  return { props: { staticProducts: filteredProducts } };
}

//****************** */

function ProductCategory({
  //******** für static website */
  staticProducts,
  // allProducts,
  // filteredProducts,
  searchInputText,
  setSearchInputText,
}) {
  //**************** für static website */
  const allProducts = staticProducts;
  const category = staticProducts[0].category;
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(findProducts(searchInputText, staticProducts));
  }, [searchInputText]);
  // useEffect(() => {
  //   setSearchInputText('');
  // }, []);
  // const router = useRouter();
  // const { category } = router.query;

  //****************** */

  const searchgetProductsByCategory =
    searchInputText.length && filteredProducts
      ? getProductsByCategory(filteredProducts, category)
      : getProductsByCategory(staticProducts, category);

  return (
    <>
      {sections.map((section) => {
        category === section.category && (
          <StyledH1>{section.name}</StyledH1>
        );
      })}

      {searchgetProductsByCategory.length ? (
        <ProductList
          products={searchgetProductsByCategory}
          category={category}
          setSearchInputText={setSearchInputText}
        />
      ) : (
        <StyledParagraph>kein Produkt gefunden</StyledParagraph>
      )}
    </>
  );
}
export default ProductCategory;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;
const StyledParagraph = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;

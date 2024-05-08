import {
  useEffect,
  useState,
} from 'react';

import Layout from '../components/Layout';
import GlobalStyles from '../components/Style/GlobalStyles';
import { findProducts } from '../helpers/services';

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  //search text input
  const [searchInputText, setSearchInputText] = useState('');

  //filtered products for search text input
  const [filteredProducts, setFilteredProducts] = useState([]);

  const apiURL = `http://localhost:3000/api/getdata`;

  useEffect(() => {
    try {
      fetchAllProducts();
    } catch (error) {
      console.error('Fehler beim Abruf der Produkte' + error.message);
    }
  }, []);

  useEffect(() => {
    setFilteredProducts(findProducts(searchInputText, products));
  }, [searchInputText]);

  async function fetchAllProducts() {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log('Products', data);
    setProducts(data.products);
  }

  function setSearchInputTextHandler(value) {
    setSearchInputText(value);
  }

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component
          {...pageProps}
          allProducts={products}
          filteredProducts={filteredProducts}
          searchInputText={searchInputText}
          setSearchInputText={setSearchInputTextHandler}
        />
      </Layout>{' '}
    </>
  );
}

export default MyApp;

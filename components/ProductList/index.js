import { useEffect, useState } from 'react';

import styled from 'styled-components';

import Product from '../Product';

function ProductList(props) {
  const products = props.products;
  const category = props?.category;
  const setSearchInputText = props?.setSearchInputText;
  const hrefProduct = props.hrefProduct ? props.hrefProduct : '';

  //sort the products by column prio
  const sortedProducts = products.sort((a, b) => a.prio - b.prio);
  const [scrollValue, setScrollValue] = useState(0);

  //trigger scroll position
  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);

  //get saved scroll position or delete it if page is reloaded
  useEffect(() => {
    window.scrollTo({
      top: JSON.parse(
        sessionStorage.getItem('TILO_scrollPosition') ?? '0'
      ),
      behavior: 'smooth',
    });
  }, []);

  //save scroll position in session storage
  function saveScrollPosition() {
    sessionStorage.setItem(
      'TILO_scrollPosition',
      JSON.stringify(scrollValue)
    );
  }
  return (
    <ul>
      {sortedProducts.map((product, index) => (
        <StyledListItem
          key={index}
          onClick={saveScrollPosition}
        >
          <Product
            product={product}
            category={category}
            hrefProduct={hrefProduct}
            scrollValue={scrollValue}
            setSearchInputText={setSearchInputText}
          />
        </StyledListItem>
      ))}
    </ul>
  );
}

export default ProductList;

const StyledListItem = styled.li`
  width: 100%;
  height: 125px;
  background-color: var(--background-category-color);
  border: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: var(--background-category-hover-color);
  }
  @media (max-width: 1400px) {
    height: 100px;
  }
`;

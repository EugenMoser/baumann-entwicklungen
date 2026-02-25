import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Product from "../Product";

function ProductList({ products, setSearchInputText, hrefProduct = "" }) {
  const sortedProducts = [...products].sort((a, b) => a.prio - b.prio);

  const scrollValueRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollValueRef.current = document.documentElement.scrollTop;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedPosition = JSON.parse(
      sessionStorage.getItem("TILO_scrollPosition") ?? "0",
    );
    window.scrollTo({ top: savedPosition, behavior: "smooth" });
  }, []);

  function saveScrollPosition() {
    sessionStorage.setItem(
      "TILO_scrollPosition",
      JSON.stringify(scrollValueRef.current),
    );
  }

  return (
    <ul>
      {sortedProducts.map((product) => (
        <StyledListItem
          key={product.product_id}
          onClick={saveScrollPosition}
        >
          <Product
            product={product}
            hrefProduct={hrefProduct}
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

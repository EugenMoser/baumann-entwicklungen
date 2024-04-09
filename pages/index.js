import Link from "next/link";
import styled from "styled-components";

import Icon from "@mdi/react";

import ProductList from "../components/ProductList";
import { sections } from "../helpers/constants";
import { strings } from "../helpers/strings";

function Home({ allProducts, searchInputText, filteredProducts }) {
  function deleteSessionStorage() {
    sessionStorage.removeItem("TILO_scrollPosition");
  }

  function createSection() {
    const returnSection = sections.map((section, index) => {
      return (
        <li key={index}>
          <StyledLink href={`/products/${section.label}`}>
            <button onClick={deleteSessionStorage()}>
              <StyledIcon
                path={section.icon}
                size={1.5}
              />
              {section.name}
            </button>
          </StyledLink>
        </li>
      );
    });
    return returnSection;
  }

  return (
    <>
      {allProducts.length ? (
        filteredProducts.length && searchInputText.length ? (
          <ProductList
            products={filteredProducts}
            hrefProduct={"/products"}
          />
        ) : !filteredProducts.length && searchInputText.length ? (
          <StyledMessage>Kein Produkt gefunden.</StyledMessage>
        ) : (
          <>
            <StyledH1>{strings.companyWelcome}</StyledH1>
            <StyledParagraph>{strings.companyDescription}</StyledParagraph>
            <StyledH3>{strings.companyOurAreas}</StyledH3>
            <StyledSection>{createSection()}</StyledSection>
          </>
        )
      ) : (
        <StyledMessage>{strings.errorMsgSiteLoading}</StyledMessage>
      )}
    </>
  );
}
export default Home;

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
`;
const StyledH3 = styled.h3`
  display: flex;
  font-size: 1.75rem;
  margin: 2rem 0 1.25rem;
`;

const StyledIcon = styled(Icon)`
  margin: auto 1rem auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    width: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100px;
      background-color: var(--background-category-color);
      border: none;
      border-radius: 5px;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover,
      &:focus {
        background-color: var(--background-category-hover-color);
      }
    }
  }

  li {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledParagraph = styled.p`
  line-height: 1.5;

  @media (max-width: var( --breakpoint-small)) {
  }
`;

const StyledMessage = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;

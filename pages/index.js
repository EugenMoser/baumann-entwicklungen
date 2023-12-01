import Link from "next/link";
import styled from "styled-components";

import {
  mdiAirFilter,
  mdiFlashOutline,
  mdiTableFurniture,
  mdiTournament,
  mdiWaterOutline,
} from "@mdi/js";
import Icon from "@mdi/react";

import ProductList from "../components/ProductList";
import { strings } from "../helpers/strings";

function Home({ allProducts, searchInputText, filteredProducts }) {
  const sections = [
    { label: "moebel", name: "Möbelbereich" },
    { label: "halterung", name: "Halterungsbereich" },
    { label: "wasser", name: "Wasserbereich" },
    { label: "lueftung", name: "Lüftungsbereich" },
    { label: "elektro", name: "Elektrobereich" },
  ];

  function createSection() {
    const returnSection = sections.map((section) => {
      return (
        <li>
          <StyledLink href={`/products/${section.label}`}>
            <StyledButton>
              <StyledIcon
                path={mdiTableFurniture}
                size={1.5}
              />
              {section.name}
            </StyledButton>
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
        <StyledMessage>
          Seite konnte nicht geladen werden. Bitte versuchen Sie es später
          nochmal.
        </StyledMessage>
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
  margin: 2rem 0 0.5rem;
`;

const StyledIcon = styled(Icon)`
  margin: auto 1rem auto;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    flex: 1 1 48%;

    button {
      height: 300px;
    }
  }

  li:first-child {
    min-width: 100%;
    min-height: 40%;

    button {
      height: 150px;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
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
`;

const StyledParagraph = styled.p`
  line-height: 1.5;
`;

const StyledMessage = styled.p`
  font-size: 1.5rem;
  color: var(--red);
  margin: 3rem 0;
  text-align: center;
`;

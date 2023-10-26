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
  return (
    <>
      {allProducts.length ? (
        filteredProducts.length && searchInputText.length ? (
          <>
            <h1>test</h1>
            <ProductList
              products={filteredProducts}
              hrefProduct={"/products"}
            />
          </>
        ) : !filteredProducts.length && searchInputText.length ? (
          <StyledMessage>Kein Produkt gefunden.</StyledMessage>
        ) : (
          <StyledSection>
            <StyledH1>{strings.companyWelcome}</StyledH1>
            <StyledParagraph>{strings.companyDescription}</StyledParagraph>
            <StyledH3>{strings.companyOurAreas}</StyledH3>
            <StyledLink href="/products/moebel">
              <StyledButton>
                <StyledIcon
                  path={mdiTableFurniture}
                  size={1.5}
                />
                Möbelbereich{" "}
              </StyledButton>
            </StyledLink>
            <StyledLink href="/products/halterung">
              <StyledButton>
                <StyledIcon
                  path={mdiTournament}
                  size={1.5}
                />
                Halterungen
              </StyledButton>
            </StyledLink>
            <StyledLink href="/products/wasser">
              <StyledButton>
                {" "}
                <StyledIcon
                  path={mdiWaterOutline}
                  size={1.5}
                />
                Wasserbereich
              </StyledButton>
            </StyledLink>{" "}
            <StyledLink href="/products/lueftung">
              <StyledButton>
                <StyledIcon
                  path={mdiAirFilter}
                  size={1.5}
                />
                Lüftungsbereich
              </StyledButton>
            </StyledLink>
            <StyledLink href="/products/elektro">
              <StyledButton>
                <StyledIcon
                  path={mdiFlashOutline}
                  size={1.5}
                />
                Elektrobereich
              </StyledButton>
            </StyledLink>
          </StyledSection>
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
  margin-bottom: 1rem;
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

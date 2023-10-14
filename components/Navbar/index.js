import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const router = useRouter();
  const path = router.asPath;

  useEffect(() => {
    if (path === "/") {
      setIsDisplayed(false);
    } else setIsDisplayed(true);
  }, [path]);

  return (
    <StyledNav>
      {isDisplayed && (
        <StyledList>
          <li>
            <StyledLink
              variant={
                path.startsWith("/products/moebel") ? "active" : "inactive"
              }
              href="/products/moebel"
            >
              Möbelbereich
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={
                path.startsWith("/products/halterung")
                  ? "active"
                  : "inactive"
              }
              href="/products/halterung"
            >
              Halterungen
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={
                path.startsWith("/products/wasser") ? "active" : "inactive"
              }
              href="/products/wasser"
            >
              Wasserbereich
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={
                path.startsWith("/products/lueftung")
                  ? "active"
                  : "inactive"
              }
              href="/products/lueftung"
            >
              Lüftungsbereich
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={
                path === "/products/elektro" ? "active" : "inactive"
              }
              href="/products/elektro"
            >
              Elektrobereich
            </StyledLink>
          </li>
        </StyledList>
      )}
    </StyledNav>
  );
}

export default Navbar;

const StyledNav = styled.nav`
  background-color: var(--white);
  position: sticky;
  top: 0;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);

  ${({ variant }) =>
    variant === "active" &&
    css`
      /* text-decoration: underline; */
      border-bottom: 2px solid black;

      &:hover,
      :active {
        color: var(--font-color-hover);
        border-bottom: 2px solid var(--font-color-hover);
      }
    `}

  &:hover,
  :active {
    color: var(--font-color-hover);
  }
`;

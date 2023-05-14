import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const router = useRouter();
  const path = router.asPath;
  console.log("router", path);

  useEffect(() => {
    if (path === "/") {
      setIsDisplayed(false);
    } else setIsDisplayed(true);
  }, [path]);

  return (
    <nav>
      {isDisplayed && (
        <StyledList>
          <li>
            <StyledLink
              variant={path === "/products/moebel" ? "active" : "inactive"}
              href="/products/moebel"
            >
              Möbelbereich
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={
                path === "/products/halterung" ? "active" : "inactive"
              }
              href="/products/halterung"
            >
              Halterungen
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={path === "/products/wasser" ? "active" : "inactive"}
              href="/products/wasser"
            >
              Wasserbereich
            </StyledLink>
          </li>
          <li>
            <StyledLink
              variant={
                path === "/products/lueftung" ? "active" : "inactive"
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
    </nav>
  );
}

export default Navbar;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color);

  ${({ variant }) =>
    variant === "active" &&
    css`
      text-decoration: underline;
    `}

  &:hover,
  :active {
    color: var(--font-color-hover);
    text-decoration: underline;
  }
`;

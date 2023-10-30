import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

function Navbar() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const router = useRouter();
  const path = router.asPath;
  const sections = [
    "moebel",
    "halterung",
    "wasser",
    "lueftung",
    "elektro",
  ];

  useEffect(() => {
    if (path === "/") {
      setIsDisplayed(false);
    } else setIsDisplayed(true);
  }, [path]);

  function createSections(sections) {
    const list = sections.map((section) => {
      let category = "";
      switch (section) {
        case "moebel":
          category = "Möbelbereich";
          break;
        case "halterung":
          category = "Halterung";
          break;
        case "wasser":
          category = "Wasserbereich";
          break;
        case "elektro":
          category = "Elektronikbereich";
          break;
        case "lueftung":
          category = "Lüftungbereich";
          break;
      }

      return (
        <li>
          <StyledLink
            variant={
              path.startsWith(`/products/${section}`)
                ? "active"
                : "inactive"
            }
            href={`/products/${section}`}
          >
            {category}
          </StyledLink>
        </li>
      );
    });
    return list;
  }

  return (
    <StyledNav>
      {isDisplayed && <StyledList>{createSections(sections)}</StyledList>}
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

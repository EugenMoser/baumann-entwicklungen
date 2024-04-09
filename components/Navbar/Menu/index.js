import Link from "next/link";
import styled, { css } from "styled-components";

import { createSections } from "../../../helpers/services";

function Menu({ sections, path }) {
  return (
    <StyledList>
      {sections.map((section, index) => {
        return (
          <li key={index}>
            <StyledLink
              variant={
                path.startsWith(`/products/${section.label}`)
                  ? "active"
                  : "inactive"
              }
              href={`/products/${section.label}`}
            >
              {section.name}
            </StyledLink>
          </li>
        );
      })}
    </StyledList>
  );
}

export default Menu;
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
      /* text-decoration: underline; */
      border-bottom: 2px solid var(--font-color-hover);
      color: var(--font-color-hover);

      &:hover,
      :focus,
      :active {
        border-bottom: 2px solid var(--font-color-hover);
      }
    `}

  &:hover,:focus,
  :active {
    color: var(--font-color-hover);
  }
`;

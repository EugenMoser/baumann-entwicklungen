import Link from "next/link";
import styled, { css } from "styled-components";

function Menu({ sections, path }) {
  return (
    <StyledList>
      {sections.map((section, index) => {
        return (
          <li key={index}>
            <StyledLink
              variant={
                path.startsWith(`/products/${section.category}`)
                  ? "active"
                  : "inactive"
              }
              href={`/products/${section.category}`}
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
  align-items: center;
  height: 2rem;
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
      &:focus,
      &:active {
        border-bottom: 2px solid var(--font-color-hover);
      }
    `}

  &:hover,
  &:focus,
  &:active {
    color: var(--font-color-hover);
  }
`;

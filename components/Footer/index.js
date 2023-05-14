import Link from "next/link";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <StyledList>
        <StyledLink href="../../privacy">Impressum</StyledLink>
        <StyledLink href="../../privacy">Datenschutz</StyledLink>
      </StyledList>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--background-footer-color);
  height: 2em;
`;

const StyledList = styled.ul`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--font-color-footer);
  &:hover,
  :active {
    color: var(--font-color-hover);
    text-decoration: underline;
  }
`;

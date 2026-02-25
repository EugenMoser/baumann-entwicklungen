import Link from "next/link";
import styled from "styled-components";

function Footer({ openContact, setOpenContact }) {
  return (
    <StyledFooter>
      <StyledList>
        <li>
          <StyledButton onClick={() => setOpenContact(!openContact)}>
            Tilo Baumann
          </StyledButton>
        </li>
        <li>
          <StyledLink href="/imprint">Impressum</StyledLink>
        </li>
        <li>
          <StyledLink href="/privacy">Datenschutz</StyledLink>
        </li>
        <li>
          <StyledLink href="/quality">
            Qualitäts- und Umweltpolitik
          </StyledLink>
        </li>
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
  border-top: 1px solid var(--font-color);
  color: var(--font-color);
  justify-content: center;
  height: auto;
  padding: 1rem 0;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 50px;
  align-items: center;

  @media (max-width: 1024px) {
    display: grid;
    flex-direction: row;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;

  &:hover,
  &:active {
    color: var(--font-color-hover);
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:active {
    color: var(--font-color-hover);
    text-decoration: underline;
  }
`;

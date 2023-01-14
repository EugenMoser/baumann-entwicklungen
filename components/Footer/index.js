import Link from "next/link";
import styled from "styled-components";

function Footer() {
  return (
    <footer>
      <StyledList>
        <li>
          <Link href="#">Kontakt</Link>
        </li>
        <li>
          <Link href="#">Impressum</Link>
        </li>
        <li>
          <Link href="#">Datenschutz</Link>
        </li>
      </StyledList>
    </footer>
  );
}

export default Footer;

const StyledList = styled.ul`
  position: fixed;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

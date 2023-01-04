import Link from "next/link";
import Searchbar from "../Searchbar";
import styled from "styled-components";
import Image from "next/image";
//import { useEffect } from "react";

function Header() {
  return (
    <StyledHeader>
      <StyledLogo
        alt="Logo-Baumann-Entwicklungen"
        src="/images/logo-baumann.webp"
        width={749}
        height={103}
        sizes="60vw"
      />

      <Searchbar />
      <StyledContact>
        <Link href="mailto: baumann-gestratz@t-online.de">
          mail: baumann-gestratz@t-online.de
        </Link>
        <Link href="tel: +4983837754">Tel: +49 (0) 8383 7754</Link>
      </StyledContact>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled(Image)`
  align-self: center;
  height: auto;
  max-width: 500px;
`;

const StyledContact = styled.address`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
`;

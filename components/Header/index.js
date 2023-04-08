import Searchbar from "../Searchbar";
import styled from "styled-components";
import Image from "next/image";
import ContactModal from "../ContactModal";

function Header(showContact, openContact) {
  return (
    <StyledHeader>
      <StyledLogo
        alt="Logo-Baumann-Entwicklungen"
        src="/images/logo-baumann.webp"
        width={749}
        height={103}
        sizes="60vw"
      />

      {/* <Searchbar /> */}
      <ContactModal />
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

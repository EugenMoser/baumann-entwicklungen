import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";

import ContactModal from "../ContactModal";
import Searchbar from "../Searchbar";

function Header({
  openContact,
  setOpenContact,
  allProducts,
  setSearchInputText,
  searchInputText,
}) {
  const router = useRouter();

  function navHome() {
    router.push("/");
    // setSearchInputText("");
  }

  return (
    <StyledHeader>
      <StyledLogo
        alt="Logo-Baumann-Entwicklungen"
        src="/images/logo-baumann.webp"
        width={749}
        height={103}
        onClick={() => navHome()}
      />

      <Searchbar
        allProducts={allProducts}
        setSearchInputText={setSearchInputText}
        searchInputText={searchInputText}
      />
      <ContactModal
        openContact={openContact}
        setOpenContact={setOpenContact}
      />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  margin: 1rem 0;
`;

const StyledLogo = styled(Image)`
  align-self: center;
  height: auto;
  max-width: 500px;
  max-height: 128px;
  cursor: pointer;
`;

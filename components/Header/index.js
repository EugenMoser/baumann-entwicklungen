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
    setSearchInputText("");
  }

  return (
    <StyledHeader>
      <LogoWrapper onClick={() => navHome()}>
        <StyledLogo
          alt="Logo-Baumann-Entwicklungen"
          src="/images/baumann_logo_optimiert.png"
          width={2004}
          height={397}
          sizes="(max-width: 550px) 300px, (max-width: 1200px) 30vw, 500px"
          priority={true}
        />
      </LogoWrapper>

      <MobileContainer>
        <Searchbar
          setSearchInputText={setSearchInputText}
          searchInputText={searchInputText}
        />
        <ContactModal
          openContact={openContact}
          setOpenContact={setOpenContact}
        />
      </MobileContainer>
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
  animation: fadein 0.5s;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0 0.5rem;
  }
`;

const LogoWrapper = styled.div`
  width: 30vw;
  max-width: 500px;
  min-width: 300px;
  cursor: pointer;
`;
const StyledLogo = styled(Image)`
  width: 100%;
  height: auto;
  height: auto;
`;

const MobileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

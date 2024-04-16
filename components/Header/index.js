import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import ContactModal from '../ContactModal';
import Searchbar from '../Searchbar';

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
        priority={true}
      />

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

const StyledLogo = styled(Image)`
  align-self: center;
  width: 30vw;
  height: auto;
  min-width: 300px;
  min-height: auto;

  max-width: 500px;
  max-height: auto;
  cursor: pointer;
  @media (max-width: 550px) {
    min-width: 200px;
  }
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

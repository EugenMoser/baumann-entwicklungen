// import Searchbar from "../Searchbar";
import styled from "styled-components";
import Image from "next/image";
import ContactModal from "../ContactModal";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  function navHome() {
    router.push("/");
  }

  return (
    <StyledHeader>
      <StyledLogo
        alt="Logo-Baumann-Entwicklungen"
        src="/images/baumann_logo_optimiert.png"
        width={749}
        height={103}
        onClick={() => navHome()}
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
  gap: 2rem;
  align-items: center;
  margin: 1rem 2rem;
`;

const StyledLogo = styled(Image)`
  align-self: center;
  height: auto;
  max-width: 500px;
  max-height: 128px;

  cursor: pointer;
`;

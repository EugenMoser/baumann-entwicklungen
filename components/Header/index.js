// import Searchbar from "../Searchbar";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import ContactModal from "../ContactModal";

function Header({ openContact, setOpenContact }) {
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

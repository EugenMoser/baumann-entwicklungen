import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";
import { useState } from "react";

function Layout({ children }) {
  const [openContact, setOpenContact] = useState(false);

  function openContactModal() {
    setOpenContact(!openContact);
  }
  return (
    <StyledWrapper>
      <Header
        openContact={openContact}
        setOpenContact={openContactModal}
      />
      <Navbar />
      <main>{children}</main>
      <Footer
        openContact={openContact}
        setOpenContact={openContactModal}
      />
    </StyledWrapper>
  );
}

export default Layout;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  position: relative;
  padding-bottom: 3rem;
`;

import { useState } from "react";

import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

function Layout({ children }) {
  const [openContact, setOpenContact] = useState(false);
  const allProducts = children.props.allProducts;
  const setSearchInputText = children.props.setSearchInputText;
  const searchInputText = children.props.searchInputText;

  function openContactModal() {
    setOpenContact(!openContact);
  }
  return (
    <StyledWrapper>
      <Header
        openContact={openContact}
        setOpenContact={openContactModal}
        allProducts={allProducts}
        setSearchInputText={setSearchInputText}
        searchInputText={searchInputText}
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

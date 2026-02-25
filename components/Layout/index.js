import { useEffect, useState } from "react";

import styled from "styled-components";

import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar";

function Layout({ children }) {
  const [openContact, setOpenContact] = useState(false);
  const { setSearchInputText, searchInputText } = children.props;

  function toggleContact() {
    setOpenContact((prev) => !prev);
  }

  useEffect(() => {
    function clearScrollPosition() {
      sessionStorage.removeItem("TILO_scrollPosition");
    }
    window.addEventListener("beforeunload", clearScrollPosition);
    return () => {
      window.removeEventListener("beforeunload", clearScrollPosition);
    };
  }, []);

  return (
    <StyledWrapper>
      <Header
        openContact={openContact}
        setOpenContact={toggleContact}
        setSearchInputText={setSearchInputText}
        searchInputText={searchInputText}
      />
      <Navbar />
      <main>{children}</main>
      <Footer
        openContact={openContact}
        setOpenContact={toggleContact}
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
`;

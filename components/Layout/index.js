import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <StyledWrapper>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
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

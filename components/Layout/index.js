import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <StyledDiv>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </StyledDiv>
  );
}

export default Layout;

const StyledDiv = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 2rem;
`;

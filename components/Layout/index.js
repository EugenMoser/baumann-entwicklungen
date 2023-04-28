import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styled from "styled-components";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

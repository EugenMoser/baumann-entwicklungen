import Header from "../Header";
import Navbar from "../Navbar";
import Footer from "../Footer";

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

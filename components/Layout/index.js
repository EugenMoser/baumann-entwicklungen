import Header from "../Header";
import Navbar from "../Navbar";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
    </>
  );
}

export default Layout;

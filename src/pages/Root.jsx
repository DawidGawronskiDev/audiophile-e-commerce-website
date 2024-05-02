import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="grid gap-32">
        <Outlet />
        <Footer />
      </main>
      <Cart />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;

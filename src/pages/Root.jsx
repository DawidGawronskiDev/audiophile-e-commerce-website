import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import Cart from "../components/Cart/Cart";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="grid gap-32">
        <Outlet />
      </main>
      <Cart />
      <ScrollToTop />
    </>
  );
};

export default RootLayout;

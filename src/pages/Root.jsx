import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="grid gap-32">
        <Outlet />
      </main>
      <Cart />
    </>
  );
};

export default RootLayout;

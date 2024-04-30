import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="grid gap-32">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

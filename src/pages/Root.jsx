import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <main className="grid gap-32">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

import { Outlet, ScrollRestoration } from "react-router-dom"; // 1. Import ScrollRestoration
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";

const MainLayouts = () => {
  return (
    <>
      <ScrollRestoration />

      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;

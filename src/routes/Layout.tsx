import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Expanded/Navbar";
import CompactNavbar from "../components/Navbar/Compact/CompactNavbar";

export default function Layout() {
  return (
    <section className="flex flex-row">
      <Navbar />
      <CompactNavbar />
      <div className="absolute top-0 left-[72px] z-0">
        <Outlet />
        {/* Footer */}
      </div>
    </section>
  );
}
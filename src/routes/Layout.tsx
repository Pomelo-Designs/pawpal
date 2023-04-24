import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav/NavBar";

export default function Layout() {
  return (
    <section className="flex flex-row">
      <NavBar />
      <div className="absolute top-0 left-[72px] z-0">
        <Outlet />
        {/* Footer */}
      </div>
    </section>
  );
}
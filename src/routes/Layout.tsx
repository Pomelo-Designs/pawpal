import Navigation from "../components/Nav/Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <section className="flex flex-row">
      <Navigation />
      <div className="absolute top-0 left-[72px] z-0">
        <Outlet />
        {/* Footer */}
      </div>
    </section>
  );
}
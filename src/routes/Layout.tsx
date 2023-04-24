import Navigation from "../components/Nav/Navigation";
import { Outlet } from "react-router-dom";
import { SubNav } from "../components/Nav/SubNav";
import { useState } from "react";

export default function Layout() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  return (
    <section className="flex flex-row">
      <div
        className="fixed top-0 left-0 h-screen w-fit z-10 flex flex-row"
        onMouseLeave={() => setShow(false)}
      >
        <Navigation
          setShow={setShow}
          setData={setData}
        />
        {show ? <SubNav data={data} /> : null}
      </div>
      <div className="absolute top-0 left-[72px] z-0">
        <Outlet />
        {/* Footer */}
      </div>
    </section>
  );
}
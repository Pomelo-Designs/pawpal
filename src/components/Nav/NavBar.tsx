import { useState } from "react";
import { MainNav } from "./MainNav";
import { SubNav } from "./SubNav";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div
      className="fixed top-0 left-0 h-screen w-fit z-10 flex flex-row"
      onMouseLeave={() => setShow(false)}
    >
      <MainNav
        setShow={setShow}
        setData={setData}
      />
      {show ? <SubNav data={data} /> : null}
    </div>
  )
}
import { useState } from "react";
import { MainNav } from "./MainNav";
import { SubNav } from "./SubNav";
import { SubNavBar } from "./SubNavBar";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 h-screen w-fit z-10 flex flex-row"
      onMouseLeave={() => setShow(false)}
    >
      <MainNav
        setShow={setShow}
        setData={setData}
        setRender={setRender}
      />
      <Nav
        show={show}
        data={data}
        render={render}
      />
    </div>
  )
}

const Nav = ({ show, data, render }: any) => {

  if (show === true && data.length !== 0) return (
    <SubNavBar>
      { render ? <SubNav data={data} /> : null }
    </SubNavBar>
  ); else return null;
}
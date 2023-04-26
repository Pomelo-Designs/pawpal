import { useState } from "react";
import { MainNav } from "./MainNav";
import { SubNav } from "./SubNav";
import { AnimatePresence, motion } from "framer-motion";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);

  window.onresize = function () {
    const width = window.innerWidth;

    if (width < 840) {
      setShow(false);
      setRender(false);
    }
  }

  return (
    <div
      className="compact:hidden medium:hidden expanded:flex 
        fixed top-0 left-0 h-screen w-fit z-20 flex flex-row"
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

  if (show === true && data.length !== 0 && render === true) return (
    <AnimatePresence initial={false}>
      <motion.nav
        key="subnavbar"
        className="z-0 p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]"
        initial={{ opacity: 0, x: 0 }}
        
        animate={{ opacity: 1, x: [-244, 0] }}
        transition={{ ease: "linear", duration: 0.2 }}
        exit={{ opacity: 0, x: [0, -244] }}
      >
        <SubNav data={data} />
      </motion.nav>
    </AnimatePresence>
  ); else return null;
}
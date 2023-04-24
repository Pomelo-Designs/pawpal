import { useState } from "react";
import { MainNav } from "./MainNav";
import { SubNav } from "./SubNav";

export default function MobileNav() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);

  window.onresize = function () {
    const width = window.innerWidth;

    if (width > 840) {
      setShow(false);
      setRender(false);
    }
  }

  return (
    <div className="compact:w-screen medium:w-fit h-14 expanded:hidden 
      fixed top-0 left-0 z-10">
      <div className="p-2">
        <Button
          show={show}
          setShow={setShow}
        />
      </div>
      {show &&
        <Menu
          show={show}
          data={data}
          render={render}
          setShow={setShow}
          setData={setData}
          setRender={setRender}
        />
      }
    </div>
  )
}

const Button = ({ show, setShow }: any) => (
  <button
    className="h-12 w-12 mb-2 flex items-center justify-center"
    onClick={() => setShow(!show)}>
    {show ?
      <span className="material-symbols-rounded">menu_open</span> :
      <span className="material-symbols-rounded">menu</span>
    }
  </button>
)

const Menu = ({ show, setShow, render, data, setData, setRender }: any) => {
  return (
    <div className="fixed p-2 top-0 left-0 flex flex-col z-20 h-screen rounded-r-xl
    bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]
      compact:w-screen medium:w-80">
      <Button
        show={show}
        setShow={setShow}
      />
      {render ?
        <MainNav
          setShow={setShow}
          setData={setData}
          setRender={setRender}
        />
        : <SubNav data={data} />
      }
    </div>
  )
}
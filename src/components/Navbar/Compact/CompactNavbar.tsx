import { useState } from "react";
import { Drawer } from "./Drawer";
import { SubDrawer } from "./SubDrawer";
import { Icon } from "../Icon";
import { Background } from "../Background";
import { Slide } from "../../Animations/Slide";

export default function CompactNavbar() {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);

  window.onresize = function () {
    const width = window.innerWidth;

    if (width > 840) {
      setShow(false);
      setRender(false);
    }
  }

  return (
    <div className="compact:w-screen medium:w-fit h-14 expanded:hidden 
      fixed top-0 left-0 z-10 pt-2">
      <Button
        show={show}
        setShow={setShow}
      />
      <Menu
        show={show}
        data={data}
        render={render}
        setShow={setShow}
        setData={setData}
        setRender={setRender}
      />
    </div>
  )
}

const Button = ({ show, setShow }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="relative h-12 w-12 mb-2 ml-3 flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={() => setShow(!show)}
    >
      <Background
        hover={hover}
        clicked={clicked}
        styles="w-full h-12 rounded-full"
      />
      {show ?
        <Icon
          icon="menu_open"
          hover={hover}
          clicked={clicked}
        /> :
        <Icon
          icon="menu"
          hover={hover}
          clicked={clicked}
        />
      }
    </button>
  )
}

const Menu = ({ show, setShow, render, data, setData, setRender }: any) => {
  return (
    <Slide
      key="compact"
      classes="fixed pt-2 pb-6 top-0 left-0
      flex flex-col z-20 h-screen w-[320px] 
      bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]
      compact:rounded-none medium:rounded-r-xl
      compact:w-screen compact:min-w-[320px] medium:w-80"
      x={-320}
      show={show}
    >
      <Button
        show={show}
        setShow={setShow}
      />
      <div className="relative px-2">
        {render && data ?
          <SubDrawer
            data={data}
            setData={setData}
            setShow={setShow}
            setRender={setRender}
          /> :
          <Drawer
            setShow={setShow}
            setData={setData}
            setRender={setRender}
          />
        }
      </div>
    </Slide>
  )
}
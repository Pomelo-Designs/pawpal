import { useState } from "react";
import { Rail } from "./Rail";
import { Drawer } from "./Drawer";
import { Slide } from "../../Animations/Slide";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);
  const [data, setData] = useState([]);

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
      <Rail
        setShow={setShow}
        setData={setData}
        setRender={setRender}
      />
      {data.length !== 0 &&
        <Slide
          key="expanded"
          classes="z-0 p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]"
          x={-243}
          show={show}
        >
          {render && <Drawer data={data} />}
        </Slide>
      }
    </div>
  )
}

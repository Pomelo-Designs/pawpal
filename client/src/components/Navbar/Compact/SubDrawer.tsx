import { useState } from "react";
import { Background } from "../Background";
import { Icon } from "../Icon";
import { Ease } from "../../Animations/Ease";
import { NDrawer } from "../Drawer";

export const SubDrawer = ({ data, setData, setRender, setShow }: any) => {
  return (
    <Ease key="compact-subdrawer">
      <nav>
        <Button
          setData={setData}
          setRender={setRender}
        />
        <ul className="ml-10">
          {data.map((item: any, index: number) => {
            return (
              <NDrawer
                item={item}
                index={index}
                setShow={setShow}
                type="compact"
              />
            );
          })}
        </ul>
      </nav>
    </Ease>
  )
}

const Button = ({ setData, setRender }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="relative w-full flex flex-row items-center h-12"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={() => {
        setData([]);
        setRender(false);
      }}>
      <Background
        hover={hover}
        clicked={clicked}
        styles="w-full h-12 rounded-full"
      />
      <div className="flex px-4">
        <Icon
          icon="arrow_back"
          styles="mr-4"
          hover={hover}
          clicked={clicked}
        />
        Main menu
      </div>
    </button>
  )
}
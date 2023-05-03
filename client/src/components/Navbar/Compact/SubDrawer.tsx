import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Background } from "../Background";
import { Icon } from "../Icon";
import { Ease } from "../../Animations/Ease";

export const SubDrawer = ({ data, setData, setRender, setShow }: any) => {
  return (
    <Ease
      key="compact-subdrawer"
      // x={20}
    >
    <nav>
      <Button
        setData={setData}
        setRender={setRender}
      />
      <ul className="ml-10">
        {data.map((item: any, index: number) => {
          return (
            <li key={index} className="w-full flex flex-col">
              <Item
                item={item}
                index={index}
                setShow={setShow}
              />
            </li>
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

const Item = ({ item, index, setShow }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <NavLink
      to={item.route}
      tabIndex={index}
      className="relative flex flex-col
        hover:bg-pink-100 active:bg-pink-200 rounded-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={() => {
        setShow(false);
      }}
      end
    >
      {({ isActive }) => (
        <>
          <Background
            hover={hover}
            clicked={clicked}
            isActive={isActive}
            styles="w-full h-12 rounded-full"
          />
          <div className="flex items-center w-full h-12 px-4">
            <span className="text-start">
              {item.label}
            </span>
          </div>
        </>
      )}
    </NavLink>
  )
}
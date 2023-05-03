import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/Routes";
import { LinkAnimation } from "../../Animations/LinkAnimation";
import { Background } from "../Background";
import { Icon } from "../Icon";

export const Rail = ({ setShow, setData, setRender }: any) => {
  return (
    <nav className="z-20 p-2 bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]">
      <ul className="flex flex-col items-center gap-7">
        {routes.map((item: any, index: number) => {
          return (
            <li key={index}>
              <Item
                item={item}
                index={index}
                setData={setData}
                setShow={setShow}
                setRender={setRender}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Item = ({ index, item, setData, setShow, setRender }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleRender = () => {
    setTimeout(() => setRender(true), 200)
  }

  const handleMouseEnter = () => {
    if (item.route !== '/') {
      setRender(false);
      setData(item.subnav);
      setShow(true);
      handleRender();
    } else {
      setShow(false);
    }
  }

  return (
    <NavLink
      to={item.route}
      className="relative flex flex-col w-14 h-fit items-center text-[#201A18] capitalize text-xs break-normal"
      onMouseEnter={() => {
        setHover(true);
        handleMouseEnter();
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      tabIndex={index}
    >
      {({ isActive }) => (
        <div className="flex flex-col items-center">
          <div className="h-11 w-11 flex flex-col items-center justify-center">
            <Background
              hover={hover}
              clicked={clicked}
              isActive={isActive}
              styles="w-11 h-11 rounded-2xl"
            />
            <Icon
              icon={item.icon}
              hover={hover}
              clicked={clicked}
              isActive={isActive}
            />
            <LinkAnimation
              isActive={isActive}
              index={index}
              hover={hover}
              clicked={clicked}
              style="w-11 h-11 rounded-2xl"
              minWidth="11px"
              maxWidth="44px"
            />
          </div>
          <span className={`
            ${hover ? "text-black" : 'text-[#201A18]'} 
            font-medium text-xs z-10
          `}>
            {item.label}
          </span>
        </div>
      )}
    </NavLink>
  )
}
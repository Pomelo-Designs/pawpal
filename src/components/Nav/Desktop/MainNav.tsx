import { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routes/Routes";
import { LinkAnimation } from "./LinkAnimation";

export const MainNav = ({ setShow, setData, setRender }: any) => {
  return (
    <nav className="p-2 bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]">
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

  return (
    <NavLink
      to={item.route}
      className="relative flex flex-col w-14 h-fit items-center text-[#201A18] capitalize text-xs break-normal"
      onMouseEnter={() => {
        setRender(false);
        setHover(true);
        setData(item.subnav);
        setShow(true);
        handleRender();
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      tabIndex={index}
    >
      {({ isActive }) => (
        <div className="flex flex-col items-center">
          <div className="h-11 w-11 flex flex-col items-center justify-center">
            <Bg
              hover={hover}
              clicked={clicked}
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

const Icon = ({ icon, hover, clicked, isActive }: any) => {

  const style = () => {
    switch (true) {
      case (isActive && clicked): return "material-active-clicked";
      case (isActive && hover): return "material-active-hover";
      case (isActive): return "material-active";
      case (clicked): return "material-hover-clicked";
      case (hover): return "material-hover";
      default: return "material-passive";
    }
  }

  return (
    <span className={`flex material-symbols-rounded z-10 ${style()}`}>
      {icon}
    </span>
  )
}

const Bg = ({ hover, clicked }: any) => {

  const background = () => {
    switch (true) {
      case (clicked): return "bg-pink:200";
      case (hover): return "bg-pink-100";
      default: return "bg-transparent";
    }
  }

  return (
    <div className={`w-11 h-11 absolute rounded-2xl ${background()}`} />
  )
}
import { useState } from "react"
import { routes } from "../../../routes/Routes"
import { NavLink } from "react-router-dom"

export const MainNav = ({ setData, setShow, setRender }: any) => {
  return (
    <nav>
      <ul className="flex flex-col w-full items-center">
        {routes.map((item: any, index: number) => {
          return (
            <li key={index} className="w-full">
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

const Item = ({ item, index, setData, setShow, setRender }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleRender = () => {
    setTimeout(() => setRender(true), 200)
  }

  return (
    <NavLink
      to={item.route}
      className="relative text-[#201A18] capitalize text-xs break-normal"
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
        <>
          <Bg
            isActive={isActive}
          />
          <div className="flex flex-row items-center w-full h-12 
          py-0.5 px-4">
            <Icon
              icon={item.icon}
              hover={hover}
              clicked={clicked}
              isActive={isActive}
            />
            <span className="flex w-full h-full items-center 
              tracking-[0.15px] text-base font-medium text-[#201A18]
              z-10 whitespace-nowrap"
            >
              {item.label}
            </span>
            {item.subnav.length !== 0 &&
              <span className="material-symbols-rounded ml-auto">arrow_right_alt</span>
            }

          </div>
        </>
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
    <span className={`flex material-symbols-rounded mr-4 z-10 ${style()}`}>
      {icon}
    </span>
  )
}

const Bg = ({ isActive }: any) => {

  const background = () => {
    switch (true) {
      case (isActive): return "bg-pink-200";
      default: return "bg-transparent";
    }
  }

  return (
    <div className={`w-full h-12 absolute rounded-full ${background()}`} />
  )
}
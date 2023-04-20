import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SubNav } from "./SubNav";
import { routes } from "../../routes/Routes";

export default function Navigation() {
  const [hover, setHover] = useState(false);

  return (
    <nav className="fixed z-10 h-screen w-fit p-2 bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]">
      <ul className="flex flex-col items-center gap-7">
        {routes.map((item: any, index: number) => {
          return (
            <li
              key={index}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Item
                item={item}
                index={index}
                hover={hover}
              />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const Item = ({ index, item, hover }: any) => {
  // const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <NavLink
      to={item.route}
      className="relative flex flex-col w-14 h-fit items-center text-[#201A18] capitalize text-xs break-normal"
      // onMouseOver={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
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
            <Animation
              isActive={isActive}
              index={index}
              hover={hover}
              clicked={clicked}
              item={item}
            />
          </div>
          <span className={`${hover ? "text-black" : 'text-[#201A18]'} font-medium text-xs z-10`}>
            {item.label}
          </span>
          {/* {hover && <SubNav routes={item.subnav} /> } */}
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

const Animation = ({ isActive, index, hover, clicked, item }: any) => (
  <AnimatePresence>
    {isActive &&
      <>
        <motion.div
          key={index}
          className={`
            w-11 h-11 absolute z-0 rounded-2xl bg-pink-300
            ${hover ? 'bg-pink-300' : ''} 
            ${clicked ? 'bg-pink-300' : ''} 
          `}
          initial={{ opacity: 0, width: '11px' }}
          animate={{ opacity: 1, width: ['11px', '44px'] }}
          // transition={{ ease: "linear", duration: 0.3 }}
          exit={{ opacity: 0, width: ['44px', '11px'] }}
        />
        {hover && <SubNav routes={item.subnav} />}
      </>
    }
  </AnimatePresence>
)

// if page is on route, show subnav
// if page is on route, and hover on another icon, hide subnav and show subnav for other icon routes

import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SubNav } from "./SubNav";

export default function Navigation({ routes }: any) {
  return (
    <section className="flex flex-row">
      <nav className="fixed z-10 h-screen w-fit p-2 bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]">
        <ul className="flex flex-col items-center gap-7">
          {routes.map((item: any, index: number) => {
            return (
              <Item
                route={item.route}
                label={item.label}
                icon={item.icon}
                item={item}
                index={index}
              />
            )
          })}
        </ul>
      </nav>
      <div className="absolute top-0 left-[72px] z-0">
        <Outlet />
      </div>
    </section>
  )
}


const Item = ({ index, item }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const Icon = ({ icon, classes }: any) => (
    <span className={`flex material-symbols-rounded z-10 ${classes}`}>
      {icon}
    </span>
  )

  const getIconStyles = ({ isActive, hover, clicked }: any) => {
    switch (true) {
      case (isActive && hover): {
        return "material-active-hover"
      }
      case (isActive && clicked): {
        return "material-active-clicked"
      }
      case (isActive): {
        return "material-active";
      }
      case (clicked): {
        return "material-hover-clicked"
      }
      case (hover): {
        return "material-hover";
      }
      default: return "material-passive"
    }
  }

  const showSubNav = ({ hover, isActive }: any) => {
    switch (true) {
      case (item.subnav.length !== 0): {
        if (hover) return <SubNav routes={item.subnav} />;
        if (isActive) {
          return <SubNav routes={item.subnav} />;
        }
      }

    }
  }

  return (
    <li key={index}>
      <NavLink
        to={item.route}
        className="relative flex flex-col w-14 h-fit items-center text-[#201A18] capitalize text-xs break-normal"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        tabIndex={index}
      >
        {({ isActive }) => (
          <AnimatePresence>
            {showSubNav({ hover, isActive })}
            <div
              className="h-11 w-11 flex flex-col items-center justify-center">
              <div className={`
                flex items-center justify-center w-11 h-11 absolute rounded-2xl
                ${hover && 'bg-pink-100'} 
                ${clicked && 'bg-pink-200'} 
                `} />
              <Icon
                icon={item.icon}
                classes={getIconStyles({ hover, isActive, clicked })}
              />
              {isActive &&
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
              }
            </div>
            <span className={`${hover ? "text-black" : ''} text-[#201A18] font-medium text-xs z-10`}>
              {item.label}
            </span>
          </AnimatePresence>
        )}
      </NavLink>
    </li>
  )
}
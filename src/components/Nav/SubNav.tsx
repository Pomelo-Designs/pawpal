import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LinkAnimation } from "./LinkAnimation";

export const SubNav = ({ routes, hover }: any) => {

  switch (true) {
    case (routes.length === 0): return null;
    case (hover === true): {
      return (
        <NavAnimation>
          <ul className="flex flex-col">
            {routes.map((item: any, index: number) => {
              return (
                <li key={index} className="w-full flex flex-col">
                  <Item
                    item={item}
                    index={index}
                  />
                </li>
              );
            })}
          </ul>
        </NavAnimation>
      )
    }
    default: return null;
  }
}

const NavAnimation = ({ children }: any) => (
  <AnimatePresence initial={false}>
    <motion.nav
      key="subnav"
      className="fixed top-0 left-[72px] z-20 p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]"
      initial={{ opacity: 0, width: '0px' }}
      animate={{ opacity: 1, width: ['0px', '244px'] }}
      transition={{ ease: "linear", duration: 0.3 }}
      exit={{ opacity: 0, width: ['244px', '0px'] }}
    >
      {children}
    </motion.nav>
  </AnimatePresence>
);

const Item = ({ index, item }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={item.route}
      tabIndex={index}
      className="relative flex flex-col items-center h-[56px] w-full 
        hover:bg-pink-100 active:bg-pink-200 rounded-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      end
    >
      {({ isActive }) => (
        <div className="flex flex-col items-center absolute h-full w-full">
          <span className="flex w-full h-full 
            items-center self-start 
            tracking-[0.15px] text-base font-medium text-[#201A18]
            absolute z-10 
            pl-5 whitespace-nowrap"
          >
            {item.label}
          </span>
          <LinkAnimation
            isActive={isActive}
            index={index}
            hover={hover}
            style="h-full w-full rounded-full"
            minWidth="25%"
            maxWidth="100%"
          />
        </div>
      )}
    </NavLink>
  )
}
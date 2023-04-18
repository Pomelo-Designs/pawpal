import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const SubNav = (routes: any) => {
  console.log(routes)

  return (
    <AnimatePresence initial={false}>
      <motion.nav
        key="subnav"
        className="fixed top-0 left-[72px] p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]"
        initial={{ opacity: 0, width: '0px' }}
        animate={{ opacity: 1, width: ['0px', '244px'] }}
        transition={{ ease: "linear" }}
        exit={{ opacity: 0, width: ['244px', '0px'] }}
      >
        <ul className="flex flex-col">
          {routes.routes.map((item: any, index: number) => {
            return (
              <Item
                item={item}
                index={index}
              />
            );
          })}
        </ul>
      </motion.nav>
    </AnimatePresence>
  )
}

const Item = ({ index, item }: any) => {
  const [hover, setHover] = useState(false);

  const getClasses = ({ isActive }: any) => {
    const baseClasses = "relative flex flex-col items-center text-[22px] leading-7 w-full p-2 text-center rounded-full"

    switch (true) {
      case (isActive && hover): {
        return "bg-green-400";
      }
      case (isActive): {
        return "bg-green-300";
      }
      case (hover): {
        return "bg-gray-200"
      }
    }
  }

  return (
    <li key={index} className="w-full flex flex-col">
      <NavLink
        to={item.route}
        tabIndex={index}
        className="relative flex flex-col items-center h-[56px] w-full hover:bg-pink-100 active:bg-pink-200 rounded-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        end
      >
        {({ isActive }) => (
          <AnimatePresence>
            <span className="flex w-full h-full items-center self-start pl-5 tracking-[0.15px] text-base font-medium z-10 text-[#201A18] whitespace-nowrap">
              {item.label}
            </span>
            {isActive &&
              <motion.div
                key={index}
                className={`${hover ? 'bg-pink-300' : ''} active:bg-pink-300 absolute bg-pink-300 h-full w-14 rounded-full`}
                initial={{ opacity: 0, width: '10%' }}
                animate={{ opacity: 1, width: ['25%', '100%'] }}
                // transition={{ ease: "linear", duration: 0.3 }}
                exit={{ opacity: 0, width: ['100%', '25%'] }}
              />
            }
          </AnimatePresence>
        )}
      </NavLink>
    </li>
  )
}
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const SubNav = ({ routes, hover, setHover }: any) => {
  console.log(routes)

  if (routes.length !== 0) return (
    <AnimatePresence initial={false}>
      <motion.nav
        key="subnav"
        className="fixed top-0 left-[72px] z-20 p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]"
        initial={{ opacity: 0, width: '0px' }}
        animate={{ opacity: 1, width: ['0px', '244px'] }}
        transition={{ ease: "linear", duration: 0.3 }}
        exit={{ opacity: 0, width: ['244px', '0px'] }}
      >
        <ul className="flex flex-col">
          {routes.map((item: any, index: number) => {
            console.log(item);

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
      </motion.nav>
    </AnimatePresence>
  ); else return null;
}

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
          <Animation
            isActive={isActive}
            index={index}
            hover={hover}
          />
        </div>
      )}
    </NavLink>
  )
}

const Animation = ({ isActive, index, hover }: any) => {

  const background = () => {
    switch (true) {
      case (hover): return "bg-pink-300";
      default: return "bg-pink-300 active:bg-pink-300";
    }
  }

  return (
    <AnimatePresence>
      {isActive &&
        <motion.div
          key={index}
          className={`${background()} flex self-center absolute h-full w-full rounded-full`}
          initial={{ opacity: 0, width: '10%' }}
          animate={{ opacity: 1, width: ['25%', '100%'] }}
          // transition={{ ease: "linear", duration: 0.3 }}
          exit={{ opacity: 0, width: ['100%', '25%'] }}
        />
      }
    </AnimatePresence>
  )
}
import { NavLink, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const SubNav = (routes: { routes: any[] }) => {

  return (
    <section className="flex flex-row">
      <nav className="h-screen w-[245px] border-r-[1px] rounded-r-2xl border-black">
        <ul className="flex flex-col mt-4">
          {routes.routes.map((item: any, index: number) => {
            return (
              <Item
                item={item}
                index={index}
              />
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </section>
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
    <li key={index} className="px-2 w-full flex flex-col">
      <NavLink
        to={item.route}
        tabIndex={index}
        className="relative flex flex-col items-center h-[44px] w-full p-2 hover:bg-pink-100 active:bg-pink-200 rounded-full"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        end
      >
        {({ isActive }) => (
          <AnimatePresence initial={false}>
            <span className="absolute text-xl text-center z-10">
              {item.label}
            </span>
            {isActive &&
              <motion.div
                key={index}
                className={`${hover ? 'bg-pink-300' : ''} active:bg-pink-300 absolute mt-[-8px] bg-pink-300 h-full w-14 rounded-full`}
                initial={{ opacity: 0, width: '20px' }}
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

// hover
// on press
// active transition [expand]
// active hover
// active

// when click another link active transition on past active link transitions [shrink]
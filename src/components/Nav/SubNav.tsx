import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export const SubNav = (routes: { routes: any[] }) => {

  return (
    <section className="flex flex-row">
      <nav className="h-screen w-[245px] border-r-[1px] border-black">
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

  // const getClasses = ({ isActive }: any) => {
  //   const baseClasses = "relative flex flex-col items-center text-[22px] leading-7 w-full p-2 text-center rounded-full"

  //   switch (true) {
  //     case (isActive && hover): {
  //       return "bg-green-400";
  //     }
  //     case (isActive): {
  //       return "bg-green-300";
  //     }
  //     case (hover): {
  //       return "bg-gray-200"
  //     }
  //   }
  // }

  return (
    <li key={index} className="p-1 w-full flex flex-col">
      <NavLink
        to={item.route}
        tabIndex={index}
        className="relative flex flex-col items-center h-[44px] w-full p-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        end
      >
        {({ isActive }) => (
          <>
            <span className="absolute text-[22px] leading-7 text-center z-10">{item.label}</span>
            {isActive &&
              <motion.div
                className={`${hover ? 'bg-green-300' : ''} absolute mt-[-8px] bg-green-100 h-full w-14 rounded-full`}
                initial={{ height: 'h-7', width: '20px' }}
                animate={{ width: ['100px', '236px'] }}
                transition={{ ease: "easeOut", duration: 0.3 }}
              />}
          </>
        )}
      </NavLink>
    </li>
  )
}
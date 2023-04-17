import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Root() {

  const routes = [
    { route: '/', label: 'home', icon: 'home' },
    { route: '/pets', label: 'pets', icon: 'sound_detection_dog_barking' },
    { route: 'services', label: 'services', icon: 'medical_services' },
    { route: 'about', label: 'about us', icon: 'help_clinic' },
    { route: 'support', label: 'support', icon: 'volunteer_activism' },
    { route: 'help', label: 'help', icon: 'help' },
  ]

  return (
    <section className="flex flex-row">
      <nav className="h-screen w-fit p-3 border-r-[1px] border-black">
        <ul className="flex flex-col gap-6 items-center">
          {routes.map((item: any, index: any) => {
            return (
              <Item
                route={item.route}
                label={item.label}
                icon={item.icon}
                index={index}
              />
            )
          })}
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}

const Item = (props: any) => {
  const [hover, setHover] = useState(false);

  const Icon = (props: any) => (
    <span className="material-symbols-outlined z-10"
      style={{ fontSize: '32px', color: "#1C1B1F", fontWeight: "400" }}>
      {props.icon}
    </span>
  )

  const getClasses = ({ isActive, hover }: any) => {
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
    <li key={props.index}>
      <NavLink
        to={props.route}
        className="flex flex-col w-14 items-center capitalize text-xs gap-1 break-normal"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        tabIndex={props.index}
      >
        {({ isActive }) => (
          <AnimatePresence initial={false}>
            <Icon
              icon={props.icon}
            />
            <span className={hover ? "text-black z-10 mt-2" : "z-10 mt-2"}>
              {props.label}
            </span>
            <div className="w-12 relative flex flex-col m-0">
              <div className={`w-12 h-12 absolute mt-[-70px] ${hover ? 'bg-pink-100' : ''} rounded-2xl`} />
              {isActive &&
                <motion.div
                  key={props.index}
                  className={`${hover ? 'bg-pink-300' : ''} active:bg-pink-300 h-12 w-12 mt-[-70px] absolute bg-pink-300 rounded-2xl`}
                  initial={{ opacity: 0, width: '20px' }}
                  animate={{ opacity: 1, width: ['25%', '100%'] }}
                  // transition={{ ease: "linear", duration: 0.3 }}
                  exit={{ opacity: 0, width: ['100%', '25%'] }}
                />
              }
            </div>
          </AnimatePresence>
        )}
      </NavLink>
    </li>
  )
}
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
      <nav className="h-screen w-fit p-3 bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]">
        <ul className="flex flex-col items-center gap-5 mt-1">
          {routes.map((item: any, index: number) => {
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

const Item = ({ index, route, label, icon }: any) => {
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

  return (
    <li key={index}>
      <NavLink
        to={route}
        className="relative flex flex-col w-14 h-fit items-center text-[#201A18] capitalize text-xs break-normal"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        tabIndex={index}

      >
        {({ isActive }) => (
          <AnimatePresence>
            <div
              className="h-11 w-11 flex flex-col items-center justify-center">
              <div className={`
                flex items-center justify-center w-11 h-11 absolute rounded-2xl
                ${hover && 'bg-pink-100'} 
                ${clicked && 'bg-pink-200'} 
                `} />
              <Icon
                icon={icon}
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
              {label}
            </span>

          </AnimatePresence>
        )}
      </NavLink>
    </li>
  )
}
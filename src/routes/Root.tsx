import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

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
    <span className={`material-symbols-outlined p-1 rounded-full ${props.className}`}
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
    <li>
      <NavLink
        to={props.route}
        className="flex flex-col items-center capitalize text-xs gap-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        tabIndex={props.index}
      >
        {({ isActive }) => (
          <>
            <Icon
              className={getClasses({ isActive, hover })}
              icon={props.icon}
            />
            <span className={hover ? "text-black": ""}>
              {props.label}
            </span>
          </>
        )}
      </NavLink>
    </li>
  )
}
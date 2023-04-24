import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SubNav = ({ data }: any) => {
  return (
    <div>
      {data.map((item: any, index: number) => {
        return (
          <li key={index} className="w-full flex flex-col">
            <Item
              item={item}
              index={index}
            />
          </li>
        );
      })}
    </div>
  )
}

const Item = ({ item, index }: any) => {
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

        <div>
          {item.label}
        </div>
      )}
    </NavLink>
  )
}
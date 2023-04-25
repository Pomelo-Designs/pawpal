import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SubNav = ({ data, setData, setRender }: any) => {
  return (
    <div className="px-2">
      <button
        className="w-full flex flex-row items-center h-12 px-4"
        onClick={() => {
          setData([]);
          setRender(false);
        }}>
        <span className="material-symbols-rounded mr-4">arrow_back</span>
        Main menu
      </button>
      <ul className="ml-10">
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
      </ul>
    </div>
  )
}

const Item = ({ item, index }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <NavLink
      to={item.route}
      tabIndex={index}
      className="relative flex flex-col
        hover:bg-pink-100 active:bg-pink-200 rounded-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      end
    >
      {({ isActive }) => (
        <div className="flex items-center w-full h-12 px-4">
          <span className="text-start">
            {item.label}
          </span>
        </div>
      )}
    </NavLink>
  )
}
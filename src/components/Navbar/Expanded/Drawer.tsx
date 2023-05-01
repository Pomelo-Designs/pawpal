import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LinkAnimation } from "../../Animations/LinkAnimation";
import { Ease } from "../../Animations/Ease";

export const Drawer = ({ data }: any) => {
  return (
    <Ease
      key="ExpandedDrawer"
    >
      <nav>
        <ul>
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
      </nav>
    </Ease>
  )
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
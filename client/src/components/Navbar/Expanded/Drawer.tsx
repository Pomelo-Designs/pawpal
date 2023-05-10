import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LinkAnimation } from "../../Animations/LinkAnimation";
import { Ease } from "../../Animations/Ease";

export const Drawer = ({ data }: any) => {
  const [show, setShow] = useState(false);

  const [subnavActive, setSubnavActive] = useState(false);
  const location = useLocation();

  const getActive = () => {
    switch(true) {
      case (location.pathname === "/pets/requirements/step-by-step"):
      case (location.pathname === "/pets/requirements/general"): {
        setSubnavActive(true);
        break;
      }
      default: setSubnavActive(false);
    }
  }

  useEffect(() => {
    getActive();
  }, [location])

  return (
    <Ease key="ExpandedDrawer">
      <nav>
        <ul>
          {data.map((item: any, index: number) => {
            return (
              <li key={index} className="w-full flex flex-col">
                {item.route ?
                  <Item
                    item={item}
                    index={index}
                  />
                  :
                  <DivItem
                    item={item}
                    index={index}
                    show={show}
                    setShow={setShow}
                    subnavActive={subnavActive}
                  />
                }
                <SubNav
                  item={item}
                  show={show}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </Ease>
  )
}

const SubNav = ({ show, item }: any) => {
  if (show && !item.route) return (
    <div className="flex flex-row w-full justify-end">
      <div className="flex flex-col w-44 self-end">
        {item.subnav.map((item: any, index: number) => {
          return (
            <Item
              key={index}
              item={item}
              index={index}
            />
          )
        })}
      </div>
    </div>
  ); else return null;
}

const DivItem = ({ index, item, show, setShow, subnavActive }: any) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      tabIndex={index}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setShow(!show)}
      className={`relative flex flex-row justify-between items-center h-[56px] w-full 
        hover:bg-pink-100 active:bg-pink-200 rounded-full ${subnavActive ? "bg-pink-100" : ""}`}
    >
      <span className="flex w-full h-full 
        items-center self-start 
        tracking-[0.15px] text-base font-medium text-[#201A18]
        pl-5 whitespace-nowrap"
      >
        {item.label}
      </span>
      <span
        style={{ color: "#3F001A", fontSize: "28px", transform: show && "rotate(180deg)" }}
        className="material-symbols-rounded mr-5"
      >
        arrow_drop_down
      </span>
    </button>
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
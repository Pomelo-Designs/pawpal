import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LinkAnimation } from "../Animations/LinkAnimation";
import { Background } from "./Background";

export const NDrawer = ({ index, item, type, setShow }: any) => {
  const [dropdown, setDropdown] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const location = useLocation();

  const getActive = () => {
    switch (true) {
      case (location.pathname === "/pets/requirements/step-by-step"):
      case (location.pathname === "/pets/requirements/general"): {
        setActiveLink(true);
        break;
      }
      default: setActiveLink(false);
    }
  }

  useEffect(() => {
    getActive();
  }, [location])

  return (
    <li key={index} className="w-full flex flex-col">
      <Link
        item={item}
        index={index}
        type={type}
        setShow={setShow}
      />
      <Button
        item={item}
        index={index}
        dropdown={dropdown}
        setDropdown={setDropdown}
        activeLink={activeLink}
      />
      <DropDown
        item={item}
        setShow={setShow}
        dropdown={dropdown}
        type={type}
      />
    </li>
  )
}

const DropDown = ({ dropdown, item, setShow, type }: any) => {
  if (dropdown && !item.route) return (
    <div className="flex flex-row w-full justify-end">
      <div className="flex flex-col w-11/12 self-end">
        {item.subnav.map((item: any, index: number) => {
          return (
            <Link
              key={index}
              item={item}
              index={index}
              setShow={setShow}
              type={type}
            />
          )
        })}
      </div>
    </div>
  ); else return null;
}

const Button = ({ item, index, dropdown, setDropdown, activeLink }: any) => {
  const [hover, setHover] = useState(false);

  if (!item.route) return (
    <button
      tabIndex={index}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setDropdown(!dropdown)}
      className={`relative flex flex-row justify-between items-center h-[56px] w-full 
        hover:bg-pink-100 active:bg-pink-200 rounded-full ${activeLink ? "bg-pink-100" : ""}`}
    >
      <span className="flex w-full h-full 
        items-center self-start 
        expanded:tracking-[0.15px] expanded:text-base expanded:font-medium expanded:text-[#201A18]
        expanded:pl-5 compact:pl-4 whitespace-nowrap"
      >
        {item.label}
      </span>
      <span
        style={{ color: "#3F001A", fontSize: "28px", transform: dropdown && "rotate(180deg)" }}
        className="material-symbols-rounded mr-5"
      >
        arrow_drop_down
      </span>
    </button>
  ); else return null;
}

const Link = ({ index, item, setShow, type }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (item.route) return (
    <NavLink
      to={item.route}
      tabIndex={index}
      className="relative flex flex-col items-center expanded:h-[56px] w-full
        hover:bg-pink-100 active:bg-pink-200 rounded-full"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={() => setShow(false)}
      end
    >
      {({ isActive }) => (
        <LinkChild
          type={type}
          hover={hover}
          clicked={clicked}
          isActive={isActive}
          item={item}
          index={index}
        />
      )}
    </NavLink>
  ); else return null;
}

const LinkChild = ({ type, hover, clicked, isActive, item, index }: any) => {
  if (type === "compact") return (
    <>
      <Background
        hover={hover}
        clicked={clicked}
        isActive={isActive}
        styles="w-full h-12 rounded-full"
      />
      <div className="flex items-center w-full h-12 px-4">
        <span className="text-start">
          {item.label}
        </span>
      </div>
    </>
  ); else if (type === "expanded") return (
    <div className="flex flex-col items-center absolute h-full w-full">
      <span className="flex w-full h-full 
        items-center self-start 
        tracking-[0.15px] text-base font-medium text-[#201A18]
        expanded:absolute expanded:z-10 
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
  ); else return null;
}
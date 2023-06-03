import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../routes/Routes";
import { Background } from "./Background";
import { Icon } from "./Icon";
import { Slide } from "../../animations/Animations";
import OutsideClickHandler from "react-outside-click-handler";
import { LinkAnimation } from "./Link";
import { Drawer } from "./Drawer";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [render, setRender] = useState(false);

  return (
    <>
      <Compact show={show} setShow={setShow} data={data} setData={setData} render={render} setRender={setRender} />
      <Expanded show={show} setShow={setShow} data={data} setData={setData} render={render} setRender={setRender} />
    </>
  );
}

const Compact = ({ show, setShow, data, setData, render, setRender }: any) => {
  const handleButtonClick = () => {
    setShow(!show);
  };

  return (
    <div className="compact:w-screen medium:w-fit h-14 expanded:hidden 
      fixed top-0 left-0 z-10 pt-2">
      <Button show={show} onClick={handleButtonClick} />
      <OutsideClickHandler onOutsideClick={() => setShow(false)}>
        <Slide
          key="compact"
          classes="fixed pt-2 pb-6 top-0 left-0
          flex flex-col z-20 h-screen w-[320px] 
          bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]
          compact:rounded-none medium:rounded-r-xl
          compact:w-screen compact:min-w-[320px] medium:w-80"
          x={-320}
          show={show}
        >
          <Button
            show={show}
            onClick={handleButtonClick}
          />
          <div className="relative px-2">
            {data.length > 0 && render ?
              <Drawer
                setShow={setShow}
                setData={setData}
                setRender={setRender}
                type="compact"
                style="ml-10"
                button={true}
              >
                <Map array={data}>
                  {(injectedProps: { index: number, item: any }) => (
                    <NDrawer {...injectedProps} setShow={setShow} type="compact" />
                  )}
                </Map>
              </Drawer>
              :
              <Drawer
                setShow={setShow}
                setData={setData}
                setRender={setRender}
                type="compact"
                style="flex flex-col w-full items-center"
              >
                <Map array={routes}>
                  {(injectedProps: { index: number, item: any }) => (
                    <DivItem
                      {...injectedProps}
                      setData={setData}
                      setShow={setShow}
                      setRender={setRender}
                    />
                  )}
                </Map>
              </Drawer>
            }
          </div>
        </Slide>
      </OutsideClickHandler>
    </div>
  );
};

const Expanded = ({ show, setShow, data, setData, render, setRender }: any) => {
  return (
    <div
      className="compact:hidden medium:hidden expanded:flex 
        fixed top-0 left-0 h-screen w-fit z-20 flex flex-row"
      onMouseLeave={() => setShow(false)}
    >
      <Rail
        setShow={setShow}
        setData={setData}
        setRender={setRender}
      />
      <Slide
        key="expanded"
        classes="z-0 p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]
          rounded-r-xl shadow-sm drop-shadow-sm"
        x={-243}
        show={show && data.length !== 0}
      >
        {render &&
          <Drawer
            setShow={setShow}
            type="expanded"
          >
            <Map array={data}>
              {(injectedProps: { index: number, item: any }) => (
                <NDrawer {...injectedProps} type="expanded" setShow={setShow} />
              )}
            </Map>
          </Drawer>
        }
      </Slide>
    </div>
  )
}

const Map = ({ array, children }: any) => array.map((item: any, index: number) => {
  return <>
    {children({
      item: item,
      index: index
    })}
  </>
});

const Rail = ({ setShow, setData, setRender }: any) => {
  return (
    <nav className="z-20 p-2 bg-[#FFF8F6] border-r-[1px] border-[#D8C2C0]">
      <ul className="flex flex-col items-center gap-7">
        {routes.map((item: any, index: number) => {
          return (
            <RailItem
              item={item}
              index={index}
              setData={setData}
              setShow={setShow}
              setRender={setRender}
            />
          )
        })}
      </ul>
    </nav>
  )
}

const RailItem = ({ index, item, setData, setShow, setRender }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleRender = () => {
    setTimeout(() => setRender(true), 200)
  }

  const handleMouseEnter = () => {
    if (item.route !== '/') {
      setRender(false);
      setData(item.subnav);
      setShow(true);
      handleRender();
    } else {
      setShow(false);
    }
  }

  return (
    <NavLink
      to={item.route}
      className="relative flex flex-col w-14 h-fit items-center text-[#201A18] capitalize text-xs break-normal"
      onMouseEnter={() => {
        setHover(true);
        handleMouseEnter();
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      tabIndex={index}
    >
      {({ isActive }) => (
        <div className="flex flex-col items-center">
          <div className="h-11 w-11 flex flex-col items-center justify-center">
            <Background
              hover={hover}
              clicked={clicked}
              isActive={isActive}
              styles="w-11 h-11 rounded-2xl"
            />
            <Icon
              icon={item.icon}
              hover={hover}
              clicked={clicked}
              isActive={isActive}
            />
            <LinkAnimation
              isActive={isActive}
              index={index}
              hover={hover}
              clicked={clicked}
              style="w-11 h-11 rounded-2xl"
              minWidth="11px"
              maxWidth="44px"
            />
          </div>
          <span className={`
            ${hover ? "text-black" : 'text-[#201A18]'} 
            font-medium text-xs z-10
          `}>
            {item.label}
          </span>
        </div>
      )}
    </NavLink>
  )
}

const Button = ({ show, onClick }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="relative h-12 w-12 mb-2 ml-3 flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={onClick}
    >
      <Background
        hover={hover}
        clicked={clicked}
        styles="w-full h-12 rounded-full"
      />
      <Icon icon={show ? "menu_open" : "menu"} hover={hover} clicked={clicked} />
    </button>
  );
};

const Item = ({ isActive, hover, clicked, item }: any) => (
  <>
    <Background
      isActive={isActive}
      hover={hover}
      clicked={clicked}
      styles="w-full h-12 rounded-full"
    />
    <div className="flex flex-row items-center w-full h-12 
      py-0.5 px-4">
      <Icon
        styles="mr-4"
        icon={item.icon}
        hover={hover}
        clicked={clicked}
        isActive={isActive}
      />
      <span className="flex w-full h-full items-center 
          tracking-[0.15px] text-base font-medium text-[#201A18]
          z-10 whitespace-nowrap"
      >
        {item.label}
      </span>
      {item.subnav.length !== 0 &&
        <Icon
          icon="arrow_forward"
          styles="ml-auto"
          hover={hover}
          clicked={clicked}
          isActive={isActive}
        />
      }
    </div>
  </>
);

const DivItem = ({ setRender, setData, setShow, item, index }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRender = () => setTimeout(() => setRender(true), 200);
  const handleNavigate = () => item.route === "/" && navigate(item.route);

  const getActive = () => {
    if (item.route !== "/" && location.pathname.includes(item.route)) setIsActive(true);
    else if (location.pathname === item.route) setIsActive(true);
    else setIsActive(false);
  }

  useEffect(() => getActive(), [location.pathname]);

  return (
    <div
      className="relative text-[#201A18] capitalize text-xs break-normal cursor-pointer w-full"
      onMouseEnter={() => {
        setHover(true)
        setData(item.subnav)
        setShow(true)
      }}
      onClick={() => {
        setRender(false);
        handleRender();
        handleNavigate();
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      tabIndex={index}
    >
      <Item isActive={isActive} hover={hover} clicked={clicked} item={item} />
    </div>
  )
}

const NDrawer = ({ index, item, type, setShow }: any) => {
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
      <NButton
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

const NButton = ({ item, index, dropdown, setDropdown, activeLink }: any) => {
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
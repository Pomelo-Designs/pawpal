import { useEffect, useState } from "react"
import { routes } from "../../../routes/Routes"
import { NavLink, useLocation } from "react-router-dom";
import { Background } from "../Background";
import { Icon } from "../Icon";

export const Drawer = ({ setData, setShow, setRender }: any) => {
  return (
    <nav>
      <ul className="flex flex-col w-full items-center">
        {routes.map((item: any, index: number) => {
          return (
            <li key={index} className="w-full">
              {item.subnav.length === 0 ?
                <LinkItem
                  item={item}
                  index={index}
                  setData={setData}
                  setShow={setShow}
                /> :
                <DivItem
                  item={item}
                  index={index}
                  setData={setData}
                  setShow={setShow}
                  setRender={setRender}
                />
              }
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const DivItem = ({ setRender, setData, setShow, item, index }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isActive, setIsActive] = useState(false);


  const location = useLocation();
  const path = location.pathname;
  console.log(path);

  const handleRender = () => {
    setTimeout(() => setRender(true), 200)
  }

  const getActive = () => {
    if (location.pathname.includes(item.route)) setIsActive(true);
    else setIsActive(false);
  }

  useEffect(() => {
    getActive();

  }, [path])

  return (
    <div
      className="relative text-[#201A18] capitalize text-xs break-normal cursor-pointer"
      onMouseEnter={() => {
        setHover(true)
        setData(item.subnav)
        setShow(true)
      }}
      onClick={() => {
        setRender(false)
        handleRender()
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      tabIndex={index}
    >
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
    </div>
  )
}

const LinkItem = ({ item, index, setData, setShow }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <NavLink
      to={item.route}
      className="relative text-[#201A18] capitalize text-xs break-normal"
      onMouseEnter={() => {
        setHover(true)
        setData(item.subnav)
        setShow(true)
      }}
      onClick={() => {
        setShow(false);
      }}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      tabIndex={index}
    >
      {({ isActive }) => (
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
      )}
    </NavLink>
  )
}
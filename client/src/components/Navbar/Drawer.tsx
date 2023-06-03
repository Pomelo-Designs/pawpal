import { Ease } from "../../animations/Animations";
import { useState } from "react";
import { Background } from "./Background";
import { Icon } from "./Icon";
import React from "react";

type DrawerProps = {
  array?: any,
  button?: boolean,
  style?: string,
  children: any,
  type: string,
  setShow: any,
  setData?: any,
  setRender?: any,
}

export const Drawer = ({ array, button, style, children, type, setData, setRender }: DrawerProps) => {
  return (
    <Ease key={type}>
      <nav>
        {button &&
          <ReturnButton
            setData={setData}
            setRender={setRender}
          />
        }
        <ul className={style}>
          {/* <Map array={array}>
            {(injectedProps: { index: number, item: any }) => (
              children({...injectedProps})
            )}
          </Map> */}
          {children}
          {/* {array.map((item: any, index: number) => {
            return (
              <>{
                React.Children.map(children, el => {
                  return React.cloneElement(el, { item: item, index: index })
                })}
              </>
            )
          })} */}
        </ul>
      </nav>
    </Ease>
  )
}

const ReturnButton = ({ setData, setRender }: any) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className="relative w-full flex flex-row items-center h-12"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={() => {
        setData([]);
        setRender(false);
      }}>
      <Background
        hover={hover}
        clicked={clicked}
        styles="w-full h-12 rounded-full"
      />
      <div className="flex px-4">
        <Icon
          icon="arrow_back"
          styles="mr-4"
          hover={hover}
          clicked={clicked}
        />
        Main menu
      </div>
    </button>
  )
}
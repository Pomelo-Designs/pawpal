import { useState } from "react";
import { Ease } from "../../Animations/Ease";
import { NDrawer } from "../Drawer";

export const Drawer = ({ data }: any) => {
  const [show, setShow] = useState(false);

  return (
    <Ease key="ExpandedDrawer">
      <nav>
        <ul>
          {data.map((item: any, index: number) => {
            return (
              <NDrawer
                item={item}
                index={index}
                type="expanded"
                setShow={setShow}
              />
            );
          })}
        </ul>
      </nav>
    </Ease>
  )
}
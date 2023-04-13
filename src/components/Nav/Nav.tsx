import { Link, Outlet } from "react-router-dom";

export const Nav = (props: any) => {

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-4 w-[200px] h-screen border-r-[1px] border-black items-center">
        <nav>
          <ul>
            {props.links.map((prop: any, index: number) => {
              return (
                <li key={index}>
                  <Link to={prop.link}>{prop.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
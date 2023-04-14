import { NavLink, Outlet } from "react-router-dom";

export const SubNav = (routes: { routes: any[] }) => {

  return (
    <section className="flex flex-row">
      <nav className="h-screen w-[245px] border-r-[1px] border-black">
        <ul className="flex flex-col mt-4">
          {routes.routes.map((item: any, index: number) => {
            return (
              <Item
                item={item}
                index={index}
              />
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </section>
  )
}

const Item = ({ index, item }: any) => {

  const baseClasses = "text-[22px] leading-7 w-full p-2 text-center rounded-full"

  const getClasses = ({ isActive }: any) => {
    switch (true) {
      case (isActive): {
        return `${baseClasses} bg-green-400 hover:bg-green-500`;
      }
      default: {
        return `${baseClasses} hover:bg-gray-200`;
      }
    }
  }

  return (
    <li key={index} className="p-1 w-full flex flex-col">
      <NavLink
        to={item.route}
        tabIndex={index}
        className={({ isActive }) => getClasses({isActive})}
        end
      >
        {item.label}
      </NavLink>
    </li>
  )
}
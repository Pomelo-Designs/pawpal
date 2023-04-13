import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-4 w-[100px] border-r-[1px] border-black h-screen items-center">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <Item
              route="pets"
              label="pets"
              icon="sound_detection_dog_barking"
            />
            <Item
              route="services"
              label="services"
              icon="medical_services"
            />
            <Item
              route="about"
              label="about us"
              icon="help_clinic"
            />
            <Item
              route="support"
              label="support"
              icon="volunteer_activism"
            />
            <Item
              route="help"
              label="help"
              icon="help"
            />
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

const Item = (props: any) => {
  return (
    <li>
      <Link
        to={props.route}
        className="flex flex-col items-center capitalize p-4"
      >
        <span className="material-symbols-outlined text-lg">
          {props.icon}
        </span>
        {props.label}
      </Link>
    </li>
  )
}
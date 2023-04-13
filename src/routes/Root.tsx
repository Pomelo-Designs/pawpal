import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-4 w-[100px] border-r-[1px] border-black h-screen items-center">
        <nav>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`pets`}>Pets</Link>
            </li>
            <li>
              <Link to={`services`}>Services</Link>
            </li>
            <li>
              <Link to={`about`}>About</Link>
            </li>
            <li>
              <Link to={`support`}>Support</Link>
            </li>
            <li>
              <Link to={`help`}>Help</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
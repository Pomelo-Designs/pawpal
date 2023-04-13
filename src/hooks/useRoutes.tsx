import { Nav } from "../components/Nav/Nav";
import { useLocation } from "react-router-dom";

const useRoutes = (routes: any, children: any) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-row">
      <Nav routes={routes} />
      {path === routes[0].route && children}
    </div>
  )
}

export { useRoutes }
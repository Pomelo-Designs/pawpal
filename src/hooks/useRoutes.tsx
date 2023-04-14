import { SubNav } from "../components/Nav/SubNav";
import { useLocation } from "react-router-dom";

const useRoutes = (routes: any, children: any) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="flex flex-row">
      <SubNav routes={routes} />
      {path === routes[0].route && children}
    </div>
  )
}

export { useRoutes }
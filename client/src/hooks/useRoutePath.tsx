import { Outlet, useLocation } from "react-router-dom";

export const useRoutePath = ({ children, path }: any) => {
  const location = useLocation();

  if (location.pathname === path) return (
    <>{children}</>
  );
  else return <Outlet />;
}
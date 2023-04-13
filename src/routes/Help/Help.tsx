import { useRoutes } from "../../hooks/useRoutes";

export default function Help() {
  const routes = [
    { route: '/help', label: 'Help' },
    { route: 'report', label: 'Report' }
  ];

  return useRoutes(routes, (
    <>
      Help Overview
    </>
  ));
}
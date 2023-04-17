import { useRoutes } from "../../hooks/useRoutes";

export default function Support() {
  const routes = [
    { route: '/support', label: 'Support overview' },
    { route: 'donate', label: 'Donate' },
    { route: 'volunteer', label: 'Volunteer' }
  ];

  return useRoutes(routes, (
    <>
      Support Overview
    </>
  ));
}
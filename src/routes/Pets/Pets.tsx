import { useRoutes } from "../../hooks/useRoutes";

export default function Pets() {
  const routes = [
    { route: '/pets', label: 'Pets overview' },
    { route: 'adoption', label: 'Adoption' },
    { route: 'foster-care', label: 'Foster care' },
    { route: 'working-cats', label: 'Working cats' },
    { route: 'requirements', label: 'Requirements' }
  ];

  return useRoutes(routes, (
    <>
      Pets Overview
    </>
  ));
}


import { useRoutes } from "../../hooks/useRoutes";

export default function Pets() {
  const routes = [
    { route: '/pets', label: 'Pets Overview' },
    { route: 'adoption', label: 'Adoption' },
    { route: 'foster-care', label: 'Foster Care' },
    { route: 'working-cats', label: 'Working Cats' },
    { route: 'requirements', label: 'Requirements' }
  ];

  return useRoutes(routes, (
    <>
      Pets Overview
    </>
  ));
}


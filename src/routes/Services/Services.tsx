import { useRoutes } from "../../hooks/useRoutes";

export default function Services() {
  const routes = [
    { route: '/services', label: 'Services overview' },
    { route: 'vet-care', label: 'Vet care' },
    { route: 'grooming', label: 'Grooming' },
    { route: 'chipping', label: 'Chipping' },
    { route: 'licensing', label: 'Licensing' }
  ];

  return useRoutes(routes, (
    <>
      Services Overview
    </>
  ));
}

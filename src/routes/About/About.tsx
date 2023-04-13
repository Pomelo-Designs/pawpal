import { useRoutes } from "../../hooks/useRoutes";

export default function About() {
  const routes = [
    { route: '/about', label: 'About' },
    { route: 'education', label: 'Education' },
    { route: 'programs', label: 'Programs' },
    { route: 'employment', label: 'Employment' },
    { route: 'news', label: 'News' },
    { route: 'shop', label: 'Gift Shop' }
  ];

  return useRoutes(routes, (
    <>
      About
    </>
  ));
}
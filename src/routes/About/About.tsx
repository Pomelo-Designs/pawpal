import { Nav } from "../../components/Nav/Nav";

export default function About() {

  const links = [
    { link: '/about', label: 'About' },
    { link: 'education', label: 'Education' },
    { link: 'programs', label: 'Programs' },
    { link: 'employment', label: 'Employment' },
    { link: 'news', label: 'News' },
    { link: 'shop', label: 'Gift Shop' }
  ];

  return (
    <>
      <Nav links={links} />
    </>
  );
}
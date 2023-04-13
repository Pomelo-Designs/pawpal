import { Nav } from "../../components/Nav/Nav";

export default function Pets() {

  const links = [
    { link: '/pets', label: 'Pets Overview' },
    { link: 'adoption', label: 'Adoption' },
    { link: 'foster-care', label: 'Foster Care' },
    { link: 'working-cats', label: 'Working Cats' },
    { link: 'requirements', label: 'Requirements' }
  ];

  return (
    <>
      <Nav links={links} />
    </>
  );
}


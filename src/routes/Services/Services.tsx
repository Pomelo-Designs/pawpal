import { Nav } from "../../components/Nav/Nav";

export default function Services() {

  const links = [
    { link: '/services', label: 'Services' },
    { link: 'vet-care', label: 'Vet Care' },
    { link: 'grooming', label: 'Grooming' },
    { link: 'chipping', label: 'Chipping' },
    { link: 'licensing', label: 'Licensing' }
  ];

  return (
    <>
      <Nav links={links} />
    </>
  );
}
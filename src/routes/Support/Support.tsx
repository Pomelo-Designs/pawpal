import { Nav } from "../../components/Nav/Nav";

export default function Support() {

  const links = [
    { link: '/support', label: 'Support' },
    { link: 'donate', label: 'Donate' },
    { link: 'volunteer', label: 'Volunteer' }
  ];

  return (
    <>
      <Nav links={links} />
    </>
  );
}
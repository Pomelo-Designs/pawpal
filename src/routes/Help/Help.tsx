import { Nav } from "../../components/Nav/Nav";

export default function Help() {

  const links = [
    { link: '/help', label: 'Help' },
    { link: 'report', label: 'Report' }
  ];

  return (
    <>
      <Nav links={links} />
    </>
  );
}
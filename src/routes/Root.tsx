import Navigation from "../components/Nav/Navigation";

export default function Root() {
  const routes = [
    {
      route: '/',
      label: 'home',
      icon: 'home',
      subnav: []
    },
    {
      route: '/pets',
      label: 'pets',
      icon: 'sound_detection_dog_barking',
      subnav: [
        { route: '/pets', label: 'Pets overview' },
        { route: 'adoption', label: 'Adoption' },
        { route: 'foster-care', label: 'Foster care' },
        { route: 'working-cats', label: 'Working cats' },
        { route: 'requirements', label: 'Requirements' }
      ]
    },
    {
      route: 'services',
      label: 'services',
      icon: 'medical_services',
      subnav: [
        { route: '/services', label: 'Services overview' },
        { route: 'vet-care', label: 'Vet care' },
        { route: 'grooming', label: 'Grooming' },
        { route: 'chipping', label: 'Chipping' },
        { route: 'licensing', label: 'Licensing' }
      ]
    },
    {
      route: 'about',
      label: 'about us',
      icon: 'help_clinic',
      subnav: [
        { route: '/about', label: 'About overview' },
        { route: 'education', label: 'Education' },
        { route: 'programs', label: 'Programs' },
        { route: 'employment', label: 'Employment' },
        { route: 'news', label: 'News' },
        { route: 'shop', label: 'Gift shop' }
      ]
    },
    {
      route: 'support',
      label: 'support',
      icon: 'volunteer_activism',
      subnav: [
        { route: '/support', label: 'Support overview' },
        { route: 'donate', label: 'Donate' },
        { route: 'volunteer', label: 'Volunteer' }
      ]
    },
    {
      route: 'help',
      label: 'help',
      icon: 'help',
      subnav: [
        { route: '/help', label: 'Help overview' },
        { route: 'report', label: 'Report' }
      ]
    },
  ]

  return (
    <Navigation routes={routes} />
  );
}

export const routes = [
  {
    route: '/',
    label: 'home',
    icon: 'home',
    heading: `PawPal\nAdoption Center`,
    description: `Welcome to our Adoption Center!\n We are dedicated to providing a safe and loving environment for animals in need and finding them their forever homes.`,
    button: { label: 'See our pets', path: '/pets' },
    subnav: []
  },
  {
    route: '/pets',
    label: 'pets',
    icon: 'sound_detection_dog_barking',
    heading: `Our pets`,
    description: `At PawPal Adoption Center, we have a variety of pets available for adoption and foster, including dogs, cats, rabbits, and more. Each pet has their own unique personality and needs, so we work closely with potential adopters to find the perfect match.`,
    button: { label: 'Get a pet', path: '/pets/adoption' },
    subnav: [
      { route: '/pets', label: 'Pets overview' },
      { route: '/pets/adoption', label: 'Adoption' },
      { route: '/pets/foster-care', label: 'Foster care' },
      { route: '/pets/working-cats', label: 'Working cats' },
      { route: '/pets/requirements', label: 'Requirements' }
    ]
  },
  {
    route: '/services',
    label: 'services',
    icon: 'medical_services',
    heading: `Our services`,
    description: `We provide various services to ensure the health and wellbeing of pets, including vet care, microchipping to identify lost pets, licensing to comply with local regulations, and grooming to keep pets clean and healthy.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/services', label: 'Services overview' },
      { route: '/services/vet-care', label: 'Vet care' },
      { route: '/services/grooming', label: 'Grooming' },
      { route: '/services/chipping', label: 'Chipping' },
      { route: '/services/licensing', label: 'Licensing' }
    ]
  },
  {
    route: '/about',
    label: 'about us',
    icon: 'help_clinic',
    heading: `About us`,
    description: `Pawpal Adoption Center is dedicated to providing a safe and loving environment for abandoned and neglected animals, while also educating and encouraging the community to adopt and care for pets in need.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/about', label: 'About overview' },
      { route: '/about/education', label: 'Education' },
      { route: '/about/programs', label: 'Programs' },
      { route: '/about/employment', label: 'Employment' },
      { route: '/about/news', label: 'News' },
      { route: '/about/shop', label: 'Gift shop' }
    ]
  },
  {
    route: '/support',
    label: 'support',
    icon: 'volunteer_activism',
    heading: `Support us`,
    description: `We are committed to promoting responsible pet ownership through education and outreach programs, and we work closely with our community to raise awareness about animal welfare issues. Together, we can create a more compassionate and just world for animals.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/support', label: 'Support overview' },
      { route: '/support/donate', label: 'Donate' },
      { route: '/support/volunteer', label: 'Volunteer' }
    ]
  },
  {
    route: '/help',
    label: 'help',
    icon: 'help',
    heading: `Help`,
    description: `We are committed to promoting responsible pet ownership through education and outreach programs, and we work with our community to raise awareness about animal welfare issues. We believe that together, we can create a more compassionate and just world for animals.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/help', label: 'Help overview' },
      { route: '/help/report', label: 'Report' }
    ]
  },
]
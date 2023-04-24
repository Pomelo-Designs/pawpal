export const routes = [
  {
    route: '/',
    label: 'home',
    icon: 'home',
    subnav: []
  },
  {
    route: 'pets',
    label: 'pets',
    icon: 'sound_detection_dog_barking',
    subnav: [
      { route: 'pets', label: 'Pets overview' },
      { route: '/pets/adoption', label: 'Adoption' },
      { route: '/pets/foster-care', label: 'Foster care' },
      { route: '/pets/working-cats', label: 'Working cats' },
      { route: '/pets/requirements', label: 'Requirements' }
    ]
  },
  {
    route: 'services',
    label: 'services',
    icon: 'medical_services',
    subnav: [
      { route: '/services', label: 'Services overview' },
      { route: '/services/vet-care', label: 'Vet care' },
      { route: '/services/grooming', label: 'Grooming' },
      { route: '/services/chipping', label: 'Chipping' },
      { route: '/services/licensing', label: 'Licensing' }
    ]
  },
  {
    route: 'about',
    label: 'about us',
    icon: 'help_clinic',
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
    route: 'support',
    label: 'support',
    icon: 'volunteer_activism',
    subnav: [
      { route: '/support', label: 'Support overview' },
      { route: '/support/donate', label: 'Donate' },
      { route: '/support/volunteer', label: 'Volunteer' }
    ]
  },
  {
    route: 'help',
    label: 'help',
    icon: 'help',
    subnav: [
      { route: '/help', label: 'Help overview' },
      { route: '/help/report', label: 'Report' }
    ]
  },
]
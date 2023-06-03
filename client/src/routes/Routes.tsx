// gradients
import GradientPink from "../assets/gradients/pink.png";
import GradientBlue from "../assets/gradients/blue.png";
import GradientOrange from "../assets/gradients/orange.png";
import GradientWhite from "../assets/gradients/white.png";
import GradientLightBlue from "../assets/gradients/light-blue.png";
import GradientLightPink from "../assets/gradients/light-pink.png";

// heros
import HeroHome from "../assets/heros/home.png";
import HeroPets from "../assets/heros/pets.png";
import HeroAdoption from "../assets/heros/adoption.png";
import HeroFoster from "../assets/heros/foster.png";
import HeroWorkingCats from "../assets/heros/working-cats.png";
import HeroRequirements from "../assets/heros/requirements.png";
import HeroHelp from "../assets/heros/help.png";
import HeroSupport from "../assets/heros/support.png";
import HeroAbout from "../assets/heros/about.png";
import HeroEducation from "../assets/heros/education.png";
import HeroServices from "../assets/heros/services.png";


// new heros
import HeroHome2 from "../assets/new-heros/home.svg";
import HeroPets2 from "../assets/new-heros/pets.svg";

export const routes = [
  {
    route: '/',
    label: 'home',
    icon: 'home',
    // gradient: GradientPink,
    image: HeroHome2,
    heading: `PawPal\nAdoption Center`,
    description: `Welcome to our Adoption Center!\n We are dedicated to providing a safe and loving environment for animals in need and finding them their forever homes.`,
    button: { label: 'See our pets', path: '/pets' },
    subnav: []
  },
  {
    route: '/pets',
    label: 'pets',
    icon: 'sound_detection_dog_barking',
    // gradient: GradientOrange,
    image: HeroPets2,
    heading: `Our pets`,
    description: `At PawPal Adoption Center, we have a variety of pets available for adoption and foster, including dogs, cats, rabbits, and more. Each pet has their own unique personality and needs, so we work closely with potential adopters to find the perfect match.`,
    button: { label: 'Get a pet', path: '/pets/adoption' },
    subnav: [
      {
        route: '/pets',
        label: 'Pets overview',
      },
      {
        route: '/pets/adoption',
        label: 'Adoption',
        gradient: GradientOrange,
        image: HeroAdoption,
        heading: 'Adoption',
        description: `Our pets are up-to-date on their vaccinations and receive regular veterinarian care to ensure they are healthy and happy. Additionally, our pet training and grooming services help prepare pets for their new homes. Come visit us and find your new furry friend today!`,
        button: {
          label: 'Schedule a visit',
          path: '/pets/adoption',
        }
      },
      {
        route: '/pets/foster-care',
        label: 'Foster care',
        gradient: GradientOrange,
        image: HeroFoster,
        heading: 'Foster care',
        description: `We offer a foster program to help pets who may not be ready for adoption. Our foster families provide a safe and loving environment, while we cover all medical expenses and necessary supplies. Our foster program is a great way to make a difference in a pet's life without the long-term commitment of adoption.`,
        button: {
          label: 'Schedule a visit',
          path: '/pets/adoption',
        }
      },
      {
        route: '/pets/working-cats',
        label: 'Working cats',
        gradient: GradientOrange,
        image: HeroWorkingCats,
        heading: 'Working cats',
        description: `Our Working Cat Program is designed to find homes at barns, warehouses, farms and other safe locations for cats that have traditionally been deemed unadoptable, but make excellent working cats and thrive in that environment as pest control specialists.`,
        button: {
          label: 'Schedule a visit',
          path: '/pets/adoption',
        }
      },
      {
        label: 'Requirements',
        subnav: [
          {
            route: '/pets/requirements/general',
            label: 'General',
            gradient: GradientOrange,
            image: HeroRequirements,
            heading: `General\nRequirements`,
            description: `Pet adoption and fostering can be incredibly rewarding experiences for both animals and humans alike. We collected useful resources to help potential caregivers and pet owners meet the requirements and get informed.`,
            button: {
              label: 'Schedule a visit',
              path: '/pets/adoption',
            },
          },
          {
            route: '/pets/requirements/step-by-step',
            label: 'Step by step',
            gradient: GradientOrange,
            image: HeroRequirements,
            heading: `Step by step\nRequirements`,
            description: `Pet adoption and fostering can be incredibly rewarding experiences for both animals and humans alike. We collected useful resources to help potential caregivers and pet owners meet the requirements and get informed.`,
            button: {
              label: 'Schedule a visit',
              path: '/pets/adoption',
            },
          }
        ]
      }
    ]
  },
  {
    route: '/services',
    label: 'services',
    icon: 'medical_services',
    gradient: GradientBlue,
    image: HeroServices,
    heading: `Our services`,
    description: `We provide various services to ensure the health and wellbeing of pets, including vet care, microchipping to identify lost pets, licensing to comply with local regulations, and grooming to keep pets clean and healthy.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/services', label: 'Services overview' },
      { route: '/services/vet-care', label: 'Vet care', complete: false  },
      { route: '/services/grooming', label: 'Grooming', complete: false  },
      { route: '/services/chipping', label: 'Chipping', complete: false  },
      { route: '/services/licensing', label: 'Licensing', complete: false  }
    ]
  },
  {
    route: '/about',
    label: 'about us',
    icon: 'help_clinic',
    gradient: GradientWhite,
    image: HeroAbout,
    heading: `About us`,
    description: `Pawpal Adoption Center is dedicated to providing a safe and loving environment for abandoned and neglected animals, while also educating and encouraging the community to adopt and care for pets in need.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      {
        route: '/about',
        label: 'About overview'
      },
      {
        route: '/about/education',
        label: 'Education',
        gradient: GradientWhite,
        image: HeroEducation,
        heading: `Education`,
        description: `We are committed to promoting responsible pet ownership through education and outreach programs, and we work closely with our community to raise awareness about animal welfare issues. Together, we can create a more compassionate and just world for animals.`,
        button: {
          label: 'Contact us',
          path: '/pets/adoption'
        }
      },
      { route: '/about/programs', label: 'Programs', complete: false  },
      { route: '/about/employment', label: 'Employment', complete: false  },
      { route: '/about/news', label: 'News', complete: false  },
      { route: '/about/shop', label: 'Gift shop', complete: false  }
    ]
  },
  {
    route: '/support',
    label: 'support',
    icon: 'volunteer_activism',
    gradient: GradientLightPink,
    image: HeroSupport,
    heading: `Support us`,
    description: `We are committed to promoting responsible pet ownership through education and outreach programs, and we work closely with our community to raise awareness about animal welfare issues. Together, we can create a more compassionate and just world for animals.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/support', label: 'Support overview' },
      { route: '/support/donate', label: 'Donate', complete: false  },
      { route: '/support/volunteer', label: 'Volunteer', complete: false  }
    ]
  },
  {
    route: '/help',
    label: 'help',
    icon: 'help',
    gradient: GradientLightBlue,
    image: HeroHelp,
    heading: `Help`,
    description: `We are committed to promoting responsible pet ownership through education and outreach programs, and we work with our community to raise awareness about animal welfare issues. We believe that together, we can create a more compassionate and just world for animals.`,
    button: { label: 'Contact us', path: '/pets/adoption' },
    subnav: [
      { route: '/help', label: 'Help overview' },
      { route: '/help/resources', label: 'Resources', complete: false }
    ]
  },
]

export { default as Home } from "./Home";
export { default as Layout } from "./Layout";
export { default as Incomplete } from "./Incomplete";
export { default as Error } from "./Error";

export { default as About } from "./About";
export { default as Education } from "./Education";
export { default as Services } from "./Services";
export { default as Support } from "./Support";
export { default as Help } from "./Help";

export { default as Pets } from "./Pets/Pets";
export { default as Adoption } from "./Pets/Adoption";
export { default as FosterCare } from "./Pets/FosterCare";
export { default as WorkingCats } from "./Pets/WorkingCats";
export { default as GeneralRequirements } from "./Pets/GeneralRequirements";
export { default as StepByStepRequirements } from "./Pets/StepByStepRequirements";
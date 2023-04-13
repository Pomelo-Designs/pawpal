import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from './App';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';

// Pets
import Pets from './routes/Pets/Pets';
import Adoption from './routes/Pets/Adoption';
import FosterCare from './routes/Pets/FosterCare';
import WorkingCats from './routes/Pets/WorkingCats';
import Requirements from './routes/Pets/Requirements';

// Services
import Services from './routes/Services/Services';
import VetCare from './routes/Services/VetCare';
import Grooming from './routes/Services/Grooming';
import Chipping from './routes/Services/Chipping';
import Licensing from './routes/Services/Licensing';

// About
import About from './routes/About/About';
import Education from './routes/About/Education';
import Programs from './routes/About/Programs';
import Employment from './routes/About/Employment';
import News from './routes/About/News';
import Shop from './routes/About/Shop';

// Support
import Support from './routes/Support/Support';
import Donate from './routes/Support/Donate';
import Volunteer from './routes/Support/Volunteer';

// Help
import Help from './routes/Help/Help';
import Report from './routes/Help/Report';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "pets",
        element: <Pets />,
        children: [
          {
            path: "adoption",
            element: <Adoption />,
          },
          {
            path: "foster-care",
            element: <FosterCare />,
          },
          {
            path: "working-cats",
            element: <WorkingCats />,
          },
          {
            path: "requirements",
            element: <Requirements />,
          },
        ]
      },
      {
        path: "services",
        element: <Services />,
        children: [
          {
            path: "vet-care",
            element: <VetCare />,
          },
          {
            path: "grooming",
            element: <Grooming />,
          },
          {
            path: "chipping",
            element: <Chipping />,
          },
          {
            path: "licensing",
            element: <Licensing />,
          },
        ]
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "education",
            element: <Education />,
          },
          {
            path: "programs",
            element: <Programs />,
          },
          {
            path: "employment",
            element: <Employment />,
          },
          {
            path: "news",
            element: <News />,
          },
          {
            path: "shop",
            element: <Shop />,
          },
        ]
      },
      {
        path: "support",
        element: <Support />,
        children: [
          {
            path: "donate",
            element: <Donate />,
          },
          {
            path: "volunteer",
            element: <Volunteer />,
          },
        ]
      },
      {
        path: "help",
        element: <Help />,
        children: [
          {
            path: "report",
            element: <Report />,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


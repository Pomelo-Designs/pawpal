import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Routes
import Layout from './routes/Layout';
import ErrorPage from './routes/ErrorPage';
import Home from './routes/Home';
// // Pets
import { Pets, Adoption, FosterCare, WorkingCats, Requirements } from './routes/Pets/Pets';
// // Services
import { Services, VetCare, Grooming, Chipping, Licensing } from './routes/Services/Services';
// // About
import { About, Education, Programs, Employment, News, Shop } from './routes/About/About';
// // Support
import { Support, Donate, Volunteer } from './routes/Support/Support';
// // Help
import { Help, Report } from './routes/Help/Help';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pets",
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
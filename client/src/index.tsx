import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import * as Route from './routes/Routes';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000"
});

const router = createBrowserRouter([
  {
    element: <Route.Layout />,
    errorElement: <Route.Error />,
    path: "pawpals",
    children: [
      {
        path: "/",
        element: <Route.Home />,
      },
      {
        path: "pets",
        element: <Route.Pets />,
        children: [
          {
            path: "adoption",
            element: <Route.Adoption />,
          },
          {
            path: "foster-care",
            element: <Route.FosterCare />,
          },
          {
            path: "working-cats",
            element: <Route.WorkingCats />,
          },
          {
            path: "requirements",
            children: [
              {
                path: "general",
                element: <Route.GeneralRequirements />,
              },
              {
                path: "step-by-step",
                element: <Route.StepByStepRequirements />,
              },
            ]
          },
        ]
      },
      {
        path: "services",
        element: <Route.Services />,
        children: [
          {
            path: "vet-care",
            element: <Route.Incomplete />,
          },
          {
            path: "grooming",
            element: <Route.Incomplete />,
          },
          {
            path: "chipping",
            element: <Route.Incomplete />,
          },
          {
            path: "licensing",
            element: <Route.Incomplete />,
          },
        ]
      },
      {
        path: "about",
        element: <Route.About />,
        children: [
          {
            path: "education",
            element: <Route.Education />,
          },
          {
            path: "programs",
            element: <Route.Incomplete />,
          },
          {
            path: "employment",
            element: <Route.Incomplete />,
          },
          {
            path: "news",
            element: <Route.Incomplete />,
          },
          {
            path: "shop",
            element: <Route.Incomplete />,
          },
        ]
      },
      {
        path: "support",
        element: <Route.Support />,
        children: [
          {
            path: "donate",
            element: <Route.Incomplete />,
          },
          {
            path: "volunteer",
            element: <Route.Incomplete />,
          },
        ]
      },
      {
        path: "help",
        element: <Route.Help />,
        children: [
          {
            path: "resources",
            element: <Route.Incomplete />,
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
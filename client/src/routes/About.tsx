import { useRoutePath } from "../hooks/useRoutePath";

export default function About() {
  return useRoutePath({
    path: "/about",
    children: (
      <>
        About overview
      </>
    )
  })
};
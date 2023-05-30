import { useRoutePath } from "../hooks/useRoutePath";
// export { default as Education } from "./Education";

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
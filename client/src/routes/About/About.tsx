import { useRoutePath } from "../../hooks/useRoutePath";
export { default as Education } from "./Education";
export { default as Employment } from "./Employment";
export { default as News } from "./News";
export { default as Programs } from "./Programs";
export { default as Shop } from "./Shop";

export const About = () => useRoutePath({
  path: "/about",
  children: (
    <>
      About overview
    </>
  )
})
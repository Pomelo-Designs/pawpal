import { useRoutePath } from "../../hooks/useRoutePath";
export { default as Donate } from "./Donate";
export { default as Volunteer } from "./Volunteer";

export const Support = () => useRoutePath({
  path: "/support",
  children: (
    <>
      Support overview
    </>
  )
});
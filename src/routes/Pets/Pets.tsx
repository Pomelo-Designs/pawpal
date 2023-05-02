import { useRoutePath } from "../../hooks/useRoutePath";
export { default as Adoption } from "./Adoption";
export { default as FosterCare } from "./FosterCare";
export { default as Requirements } from "./Requirements";
export { default as WorkingCats } from "./WorkingCats";

export const Pets = () => useRoutePath({
  path: "/pets",
  children: (
    <>
      Pets
    </>
  )
});
import { useRoutePath } from "../../hooks/useRoutePath";
export { default as Chipping } from "./Chipping";
export { default as Grooming } from "./Grooming";
export { default as Licensing } from "./Licensing";
export { default as VetCare } from "./VetCare";

export const Services = () => useRoutePath({
  path: "/services",
  children: (
    <>
      Services overview
    </>
  )
});
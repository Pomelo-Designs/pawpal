import { useRoutePath } from "../../hooks/useRoutePath";
export { default as Report } from "./Report";

export const Help = () => useRoutePath({
  path: "/help",
  children: (
    <>
      Help overview
    </>
  )
});
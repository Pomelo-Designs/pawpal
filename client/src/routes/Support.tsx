import { useRoutePath } from "../hooks/useRoutePath";

export default function Support() {
  return useRoutePath({
    path: "/support",
    children: (
      <>
        Support overview
      </>
    )
  })
};
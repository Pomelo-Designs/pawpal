import { useRoutePath } from "../../hooks/useRoutePath";

export default function Requirements() {
  return useRoutePath({
    path: "/requirements",
    children: (
      <>
        Requirements
      </>
    )
  })
};

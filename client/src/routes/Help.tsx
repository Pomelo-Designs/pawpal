import { useRoutePath } from "../hooks/useRoutePath";

export default function Help() {
  return useRoutePath({
    path: "/help",
    children: (
      <>
        Help overview
      </>
    )
  })
};
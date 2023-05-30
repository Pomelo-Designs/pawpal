import { useMemo } from "react";

interface ButtonProps {
  label: string;
  primary: boolean;
  size: "small" | "medium" | "large";
  handleClick: () => void | undefined;
}

const getSizeClasses = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small": return "px-4 py-2.5";
    case "large": return "px-8 py-4";
    default: return "px-5 py-2.5";
  }
};

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-[56px] font-medium text-sm border-1 leading-none inline-block";

export const Button = ({ primary, size, label, handleClick, ...props }: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = "drop-shadow-fab-default hover:drop-shadow-fab-hover text-[#AD295C] bg-grey-600 hover:bg-grey-650 focus:bg-grey-700 active:bg-grey-700";
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  );
};
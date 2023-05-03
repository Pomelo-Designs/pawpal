import { useMemo } from "react";

interface ButtonProps {
  label: string | undefined;
  primary: boolean;
  size: "small" | "medium" | "large";
  handleClick: () => void | undefined;
}

const getSizeClasses = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-8 py-4";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? "text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700"
    : "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white";

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-[56px] font-medium text-sm border-1 leading-none inline-block";



export const Button = ({ primary, size, label, handleClick, ...props }: ButtonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
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
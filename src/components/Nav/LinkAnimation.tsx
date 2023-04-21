import { motion, AnimatePresence } from "framer-motion";

interface LinkAnimationProps {
  isActive: boolean;
  index: number;
  hover: boolean;
  clicked?: boolean;
  style: string;
  minWidth: string;
  maxWidth: string;
}

export const LinkAnimation = ({ isActive, index, hover, clicked, style, minWidth, maxWidth }: LinkAnimationProps) => {

  const BASE_BUTTON_CLASSES = "absolute";

  const getBackgroundClass = () => {
    switch (true) {
      case (hover): return "bg-pink-300";
      case (clicked): return "bg-pink-300";
      default: return "bg-pink-300 active:bg-pink-300";
    }
  }

  const classes = () => {
    return [getBackgroundClass(), style, BASE_BUTTON_CLASSES].join(" ");
  }

  return (
    <AnimatePresence>
      {isActive &&
        <motion.div
          key={index}
          className={classes()}
          initial={{ opacity: 0, width: minWidth }}
          animate={{ opacity: 1, width: [minWidth, maxWidth] }}
          // transition={{ ease: "linear", duration: 0.3 }}
          exit={{ opacity: 0, width: [maxWidth, minWidth] }}
        />
      }
    </AnimatePresence>
  )
}
import { AnimatePresence, motion } from "framer-motion"
import { Key } from "react";

interface SlideProps {
  key: Key;
  children: any;
  classes: string;
  x: number;
  show: boolean;
}

export const Slide = ({ key, children, classes, x, show }: SlideProps) => {
  return (
    <AnimatePresence initial={false}>
      {show &&
        <motion.nav
          key={key}
          className={classes}
          initial={{ opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: [x, 0] }}
          transition={{ ease: "linear", duration: 0.2 }}
          exit={{ opacity: 1, x: [0, x] }}
        >
          {children}
        </motion.nav>
      }
    </AnimatePresence>
  );
}
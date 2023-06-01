import { AnimatePresence, motion } from "framer-motion";

interface SlideProps {
  children: any;
  classes: string;
  x: number;
  show: boolean;
}

export default function Slide({ children, classes, x, show }: SlideProps) {
  return (
    <AnimatePresence initial={false}>
      {show &&
        <motion.nav
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
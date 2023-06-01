import { motion } from "framer-motion";

interface EaseProps {
  children: any;
  classes?: string;
  x?: number;
  y?: number;
}

export default function Ease({ children, x, y, classes }: EaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x: [x || 0, 0], y: [y || 0, 0] }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", delay: 0.1, duration: 0.2 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}
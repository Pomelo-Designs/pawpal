import { motion } from "framer-motion"
import { Key } from "react"

interface EaseProps {
  key: Key;
  children: any;
  classes?: string;
  x?: number;
}

export const Ease = ({ key, children, x, classes }: EaseProps) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: [x || 0, 0] }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", delay: 0.1, duration: 0.3 }}
      className={classes}
    >
      {children}
    </motion.div>
  )
}
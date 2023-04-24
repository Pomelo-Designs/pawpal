import { AnimatePresence, motion } from "framer-motion";


export const SubNavBar = ({ children }: any) => (
  <AnimatePresence initial={false}>
    <motion.nav
      key="subnavbar"
      className="p-2 h-screen w-[244px] border-r-[1px] bg-[#FFF8F6] border-[#D8C2C0]"
      initial={{ opacity: 0, width: '0px' }}
      animate={{ opacity: 1, width: ['0px', '244px'] }}
      transition={{ ease: "linear", duration: 0.3 }}
      exit={{ opacity: 0, width: '0px' }}
    >
      {children}
    </motion.nav>
  </AnimatePresence>
)
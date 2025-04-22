import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, duration: 0.5 }
  })
};

const AnimatedText = ({ children, delay }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
    custom={delay / 100}
  >
    {children}
  </motion.div>
);

export default AnimatedText;

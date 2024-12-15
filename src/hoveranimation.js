import { motion } from 'framer-motion';
import { ReactComponent as LaptopMan } from './assets/laptop-man.svg';

const AnimatedSvg = () => (
  <div className="mt-8 w-full max-w-xs sm:max-w-sm">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 10 }}
    >
      <LaptopMan />
    </motion.div>
  </div>
);

export default AnimatedSvg;

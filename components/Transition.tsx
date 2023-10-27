import { motion } from "framer-motion";


const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen "
        key={1}
        initial={{ x: 1050, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
        }}
        exit={{ x: 1050, opacity: 0 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen "
        key={2}
        initial={{ x: 1050, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        exit={{ x: 1050, opacity: 0 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen"
        key={3}
        initial={{ x: 1050, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        exit={{ x: 1050, opacity: 0 }}
      />
    </>
  );
};

export default Transition;

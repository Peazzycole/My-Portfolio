import { motion } from "framer-motion";


const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]"
        key={1}
        initial={{ x: 1050, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
        }}
        exit={{ x: 1050, opacity: 0 }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#3b2d71]"
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
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#4b3792]"
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

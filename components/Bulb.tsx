import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";



const Bulb = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="absolute hidden xl:flex xl:-bottom-12 xl:left-4 animate-pulse duration-75 z-10 w-[70px] xl:w-[120px]">
      <Image
        src={"/bulb.svg"}
        width={260}
        height={200}
        className="w-full h-full opacity-80"
        alt=""
      />
    </motion.div>
  );
};

export default Bulb;

import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import dynamic from "next/dynamic";

const DynamicWorkSlider = dynamic(() => import("@/components/WorkSlider"), { ssr: false });
const DynamicBulb = dynamic(() => import("@/components/Bulb"), { ssr: false });


const Work = () => {
  return (
    <div className="py-10 xl:py-[150px] flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto md:text-xl lg:mx-0 text-black dark:text-white"
            >
              Crafting digital experiences, one line of code at a time – where innovation meets impeccable design
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <DynamicWorkSlider />
          </motion.div>
        </div>
      </div>
      <DynamicBulb />
    </div>
  );
};

export default Work;

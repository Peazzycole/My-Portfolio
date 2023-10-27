'use client'

import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import dynamic from "next/dynamic";

const DynamicServiceSlider = dynamic(() => import("@/components/ServiceSlider"), { ssr: false });
const DynamicCircles = dynamic(() => import("@/components/Circles"), { ssr: false, });
const DynamicBulb = dynamic(() => import("@/components/Bulb"), { ssr: false });

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <DynamicCircles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              laborum? Consequuntur itaque voluptates rem sequi fugiat quos.
              Modi tempore consectetur velit. Rem, modi. Possimus amet vero quis
              in sapiente maiores.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <DynamicServiceSlider />
          </motion.div>
        </div>
      </div>
      <DynamicBulb />
    </div>
  );
};

export default Services;

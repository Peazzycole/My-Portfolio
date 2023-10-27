'use client'

import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import dynamic from "next/dynamic";

const DynamicTestimonialSlider = dynamic(() => import("@/components/TestimonialSlider"), { ssr: false });
const DynamicCircles = dynamic(() => import("@/components/Circles"), { ssr: false, });
const DynamicBulb = dynamic(() => import("@/components/Bulb"), { ssr: false });

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <DynamicCircles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What client <span className="text-accent">say.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <DynamicTestimonialSlider />
        </motion.div>
      </div>

      <DynamicBulb />
    </div>
  );
};

export default Testimonials;

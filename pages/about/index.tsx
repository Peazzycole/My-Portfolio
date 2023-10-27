import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { aboutData } from "@/helper/data";

const DynamicCircles = dynamic(() => import("@/components/Circles"));

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full py-32 bg-primary/30 text-center xl:text-left">
      <DynamicCircles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* heading */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs
          </motion.h2>
          {/* summary */}
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then I&apos;ve
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use
          </motion.p>
          {/* countUp */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading[1.4] xl:max-w-[100px]">
                  Year of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading[1.4] xl:max-w-[100px]">
                  Projects Completed
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading[1.4] xl:max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info section */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4  xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => (
              <div
                key={i}
                className={`${index === i &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] ${index !== i && "after:bg-white"
                  } after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(i)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col xl:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 xl:mb-0">{item.title}</div>
                <div className="hidden xl:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, i) => (
                    <div key={i} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

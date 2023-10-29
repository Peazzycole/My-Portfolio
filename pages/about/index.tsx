import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import CountUp from "react-countup";
import dynamic from "next/dynamic";
import { aboutData } from "@/helper/data";

const DynamicCircles = dynamic(() => import("@/components/Circles"));
const DynamicAvatar = dynamic(() => import("@/components/Avatar"));

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full py-32 bg-primary/30 text-center xl:text-left sm:overflow-scroll md:overflow-hidden">
      <DynamicCircles />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-20 -left-[370px]"
      >
        <DynamicAvatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 xl:justify-start">
        <div className="flex-1 flex flex-col justify-center">
          {/* heading */}
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
          {/* summary */}
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-sm md:text-lg max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a committed Fullstack developer located in Sapele, Nigeria, with a strong skill set that encompasses various web technologies.nMy experience has exposed me to working with individuals from diverse cultural backgrounds, and I thrive in a collaborative, cross-functional team environment. My primary focus is on producing exceptional web and mobile applications, and I am dedicated to continually improving my skills to provide top-notch solutions.
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
                  <CountUp start={0} end={2} duration={7} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading[1.4] xl:max-w-[100px]">
                  Year of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={7} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading[1.4] xl:max-w-[100px]">
                  Projects Completed
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
                className="flex-1 flex flex-col xl:flex-row max-w-max gap-x-2 items-center text-white/60 text-sm"
              >
                <div className="font-light mb-2 xl:mb-0 xl:w-max">{item.title}</div>
                <div className="hidden xl:flex">-</div>
                <div className="font-bold">{item.stage}</div>
                <div className="flex gap-x-4 flex-wrap md:flex-nowrap justify-center gap-y-2">
                  {item.icons?.map((icon, i) => (
                    <div key={i} className="sm:text-sm md:text-2xl text-white">
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

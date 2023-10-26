'use client'

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn } from "../helper/variants";

const DynamicParticlesContainer = dynamic(() => import("@/components/ParticlesContainer"), { ssr: false });
const DynamicProjectsBtn = dynamic(() => import("@/components/ProjectsBtn"), { ssr: false });
const DynamicAvatar = dynamic(() => import("@/components/Avatar"), { ssr: false });

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center h-full container mx-auto xl:pt-40 xl:text-left">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            impedit molestias animi aut perferendis temporibus, quam nisi
            reiciendis a facere aspernatur. Consectetur necessitatibus adipisci
            dolore enim? Veniam perspiciatis minus porro!
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <DynamicProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <DynamicProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0 absolute"
        ></motion.div>
        <div>
          <DynamicParticlesContainer />
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%]"
        >
          <DynamicAvatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

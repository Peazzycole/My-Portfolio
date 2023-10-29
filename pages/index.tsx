import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn } from "../helper/variants";
import { HiFaceSmile } from "react-icons/hi2";
import Link from "next/link";

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
            <div className="flex items-center justify-center gap-x-2 xl:justify-start xl:mb-[-30px] md:mb-[-20px] vsm:text-2xl vsm:mt-10  vsm:-mb-3">
              Hi! Welcome
              <HiFaceSmile className="animate-bounce text-secondary" /> <br />
            </div>
            <span className="text-[#e68e2e] opacity-80 text-xl md:text-2xl vsm:text-sm">I&apos;M A FULLSTACK DEVELOPER</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm text-white xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 vsm:-mt-3"
          >
            I&apos;m a developer who focuses on getting things done efficiently. I love writing neat and tidy code. I&apos;m also quick at learning and using new software and technologies.
            <Link href={'https://drive.google.com/file/d/1dltQvrF31_ifB5759-b0eMzEvpWK1obq/view?usp=sharing'} target='_blank' className="w-full flex items-center justify-center xl:justify-start font-bold vsm:-mb-3">
              <button className="flex text-white justify-center opacity-90 btn bg-gradient-to-r from-[#F13024] w-max to-[#e68e2e] rounded-full items-center px-8 mt-6 mb-12 vsm:mb-0 hover:scale-110 hover:opacity-70 transition-all duration-300 z-10 ease-in-out">Resume</button>
            </Link>
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
      <div className="w-full h-full absolute right-0 bottom-0">
        <div className="opacity-20">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-color-dodge translate-z-0 absolute"
          ></motion.div>
        </div>
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

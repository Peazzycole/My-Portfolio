import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn } from "../helper/variants";
import { HiFaceSmile } from "react-icons/hi2";
import Link from "next/link";

const DynamicParticlesContainer = dynamic(
  () => import("@/components/ParticlesContainer"),
  { ssr: false }
);
const DynamicProjectsBtn = dynamic(() => import("@/components/ProjectsBtn"), {
  ssr: false,
});
const DynamicAvatar = dynamic(() => import("@/components/Avatar"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-center flex flex-col justify-center container mx-auto xl:pt-40 xl:text-left">
          <div className="flex xl:hidden items-center justify-center -mb-6">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full max-w-[200px] max-h-[200px] md:max-w-[300px] md:max-h-[300px] md:mt-3 "
            >
              <DynamicAvatar />
            </motion.div>
          </div>

          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            <div className="flex items-center justify-center gap-x-2 xl:justify-start xl:mb-[10px] vsm:text-2xl vsm:mt-10 md:text-3xl xl:text-6xl">
              Hi! Welcome
              <HiFaceSmile className="animate-bounce text-gray-800 dark:text-gray-100" />{" "}
              <br />
            </div>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm text-black xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 vsm:-mt-3 xl:text-xl xl:-mt-5 dark:text-white"
          >
            As a skilled Frontend developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
            <Link
              href="https://drive.google.com/file/d/1vtIGvqEoWWSNHkUYFQJsWPFkeTC-CqnG/view?usp=sharing"
              target="_blank"
              className="w-full flex items-center justify-center xl:justify-start font-bold vsm:-mb-3"
            >
              <button className="flex text-black justify-center opacity-90 btn bg-gradient-to-r from-[#F13024] w-max to-[#e68e2e] rounded-full items-center px-8 mt-6 mb-12 vsm:mb-0 hover:scale-110 hover:opacity-70 transition-all duration-300 z-10 ease-in-out">
                Resume
              </button>
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
      <div className=" w-[1200px] h-full absolute right-0 bottom-0">
        <div>
          {/* <div>
            <DynamicParticlesContainer />
          </div> */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 lg:right-[8%] hidden xl:flex"
          >
            <DynamicAvatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;

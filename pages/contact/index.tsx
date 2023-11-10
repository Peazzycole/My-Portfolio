import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";

const Contact = () => {

  function onSubmitHandler(e: any) {
    e.preventDefault();
  }

  return (
    <div className="">
      <div className="conatiner mx-6 md:mx-auto py-10 xl:py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={onSubmitHandler}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea
              name="messaage"
              id="message"
              placeholder="message"
              className="textarea"
            ></textarea>
            <button className="btn rounded-full bg-accent/90 border-black/30 text-white max-w-[170px] font-bold px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] opacity-0 font-bold" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

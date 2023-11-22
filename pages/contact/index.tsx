import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import { useEffect, useState } from "react";
import { sendContactForm } from "@/helper/api";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setMessage('')
    setError('')
  }, [])

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    try {
      await sendContactForm(formData)
      setMessage('Message sent successfully')
    } catch (error) {
      setError('Message Not Sent')
    }
  }

  const onChangeHandler = ({ target }: any) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  return (
    <div className="">
      <div className="conatiner mx-6 md:mx-auto py-10 xl:py-[100px] text-center xl:text-left flex items-center justify-center h-full">
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
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input"
                onChange={onChangeHandler}
                required
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input"
                onChange={onChangeHandler}
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="input"
              onChange={onChangeHandler}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="message"
              className="textarea"
              onChange={onChangeHandler}
              required
            />
            <button
              className="btn rounded-full bg-accent border-black/30 text-white max-w-[170px] font-bold px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight className="-translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] opacity-0 font-bold" />
            </button>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

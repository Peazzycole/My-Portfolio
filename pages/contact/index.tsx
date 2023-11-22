import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import { useEffect, useState } from "react";
import { sendContactForm } from "@/helper/api";
import Spinner from "@/components/Spinner";
import { FaCheck, FaTimes } from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMessage('')
    setError('')
  }, [])

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    setIsLoading(true)

    try {
      await sendContactForm(formData)
      setIsLoading(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setMessage('Message sent successfully')
    } catch (error) {
      setError('Message Not Sent')
      setIsLoading(false)
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
                value={formData.name}
                required
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input"
                onChange={onChangeHandler}
                value={formData.email}
                required
              />
            </div>
            <input
              type="text"
              placeholder="subject"
              name="subject"
              className="input"
              onChange={onChangeHandler}
              value={formData.subject}
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="message"
              className="textarea"
              onChange={onChangeHandler}
              value={formData.message}
              required
            />
            <button
              className="btn rounded-full bg-accent border-black/30 text-white max-w-[170px] font-bold px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 group">
              {!isLoading && <div className="transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] opacity-0 font-bold" />
              </div>}

              {isLoading && <Spinner />}
            </button>
            {message && <p className=" text-green-800 -mt-3 text-xl flex items-center gap-1">Success <FaCheck /></p>}
            {error && <p className="text-red-800 text-2xl flex items-center gap-1">{error}failed <FaTimes /></p>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

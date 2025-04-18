import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/helper/variants";
import { useEffect, useState } from "react";
import { sendContactForm } from "@/helper/api";
import Spinner from "@/components/Spinner";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";

const MessageSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Must be in email format").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

type emailType = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setMessage('')
    setError('')
  }, [])

  const onSubmitHandler = async (values: emailType, actions: FormikHelpers<emailType>) => {
    setIsLoading(true)
    try {
      await sendContactForm(values)
      setIsLoading(false)
      actions.resetForm()
      setMessage('Message sent successfully')
    } catch (error) {
      setError('Message Not Sent')
      setIsLoading(false)
    }
  }


  return (
    <div className="">
      <div className="conatiner mx-6 md:mx-auto py-10 pb-32 xl:py-[100px] text-center xl:text-left flex items-center justify-center h-full">
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
          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={onSubmitHandler}
            validationSchema={MessageSchema}
          >
            {({
              handleChange,
              values,
              errors,
              handleBlur,
              handleSubmit,
              touched
            }) => (
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="flex flex-1 flex-col gap-6 w-full mx-auto"
              >
                <div className="flex gap-x-6 w-full">
                  <div className="flex flex-col gap-2 flex-1">
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input"
                      onChange={handleChange}
                      value={values.name}
                      onBlur={handleBlur}
                    />
                    {touched.name && errors.name && (
                      <span className="text-red-500">{errors.name}</span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input"
                      onChange={handleChange}
                      value={values.email}
                      onBlur={handleBlur}
                    />
                    {touched.email && errors.email && (
                      <span className="text-red-500">{errors.email}</span>
                    )}
                  </div>

                </div>
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    placeholder="subject"
                    name="subject"
                    className="input"
                    onChange={handleChange}
                    value={values.subject}
                    onBlur={handleBlur}
                    required
                  />
                  {touched.subject && errors.subject && (
                    <span className="text-red-500">{errors.subject}</span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="message"
                    className="textarea"
                    onChange={handleChange}
                    value={values.message}
                    onBlur={handleBlur}
                    required
                  />
                  {touched.message && errors.message && (
                    <span className="text-red-500">{errors.message}</span>
                  )}
                </div>
                <button
                  className="btn rounded-full bg-accent border-black/30 text-white max-w-[170px] font-bold px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 group"
                  onClick={() => handleSubmit()}
                >
                  {!isLoading && <span className="transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 group"
                  >
                    <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                      Let&apos;s talk
                    </span>
                    <BsArrowRight className="-translate-y-[120%] group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] opacity-0 font-bold" />
                  </span>}
                  {isLoading && <Spinner />}
                </button>
                {message && <p className=" text-green-800 -mt-3 text-xl flex items-center gap-1">Success <FaCheck /></p>}
                {error && <p className="text-red-800 text-2xl flex items-center gap-1">{error}failed <FaTimes /></p>}
              </motion.div>
            )}
          </Formik>

        </div>
      </div>
    </div>
  );
};

export default Contact;

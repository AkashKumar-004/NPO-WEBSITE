import emailjs from 'emailjs-com';
import { Mail, MessageCircle, Phone } from "lucide-react";
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { addquery } from '../API/api';
const Contact = () => {
  const form = useRef();
  const handlesubmit=async(e)=>{
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try{
      const response=await addquery(data);
      console.log(response);
      console.log("Submitted Successfully");
    }
    catch(err)
    {
      console.log(err);
    }
  }
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-black px-4 py-20">
      
      <motion.div
        className="w-full max-w-6xl flex flex-col md:flex-row backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="md:w-1/2 p-10 flex flex-col justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-400 to-indigo-400 text-center mb-6 drop-shadow-xl">
            Join Our Team
          </h2>
          <p className="text-slate-300 text-lg text-center font-light max-w-md">
            Your contributions help us change lives. Become a volunteer and make an impact with your support!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 py-3 px-8 bg-gradient-to-r from-sky-400 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
        <div className="md:w-1/2 p-8 bg-black">
          <form
            ref={form}
            onSubmit={handlesubmit}
            className="flex flex-col gap-5"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-sky-500 focus:outline-none"
              placeholder="Phone No"
              type="number"
              name="phone"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              className="bg-gray-900 text-white p-4 rounded-lg border border-gray-700 placeholder-gray-400 h-32 resize-none focus:ring-2 focus:ring-sky-500 focus:outline-none"
              placeholder="Your message"
              name="message"
              required
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold rounded-lg hover:shadow-xl transition duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
      <div className="mt-12 flex gap-10">
        {[{
          icon: <Phone className="w-6 h-6 text-white" />,
          href: "tel:+8754363052",
          label: "Call"
        }, {
          icon: <Mail className="w-6 h-6 text-white" />,
          href: "mailto:dilipkumar.dk2610@gmail.com",
          label: "Email"
        }, {
          icon: <MessageCircle className="w-6 h-6 text-white" />,
          href: "https://wa.me/8754363052",
          label: "WhatsApp"
        }].map(({ icon, href, label }, idx) => (
          <motion.a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-md hover:shadow-xl transition transform hover:scale-110"
            whileHover={{ rotate: 5 }}
          >
            {icon}
            <span className="absolute bottom-[-35px] text-xs text-white bg-gray-800 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;

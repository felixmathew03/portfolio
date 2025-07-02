import React, { useRef, useState } from "react";
import { FaEnvelope, FaGithub, FaPhone, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_yourServiceID", "template_yourTemplateID", form.current, "yourPublicKey")
      .then(
        () => {
          setMessage("Message sent successfully!");
          e.target.reset();
        },
        () => {
          setMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <footer
      id="contact"
      className=" text-white py-16 px-6 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4 w-full"
        >
          <h2 className="text-3xl font-bold text-[#14b8a6] mb-2 font-abril">Let’s Connect</h2>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 bg-transparent border border-white/20 rounded-md text-white placeholder-gray-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#14b8a6] text-black font-semibold py-2 rounded-md hover:bg-[#0d9488] transition"
          >
            Send Message
          </button>
          {message && <p className="text-xs text-center pt-2 text-green-400">{message}</p>}
        </motion.form>

        {/* Info + Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-2xl font-bold text-[#14b8a6] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm mb-6">
              {["Home", "About", "Projects", "Skills", "Education"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#14b8a6] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-white mt-8 mb-3">Connect with me</h3>
            <div className="flex gap-5 text-xl text-gray-300">
              {[
                { icon: <FaEnvelope />, href: "mailto:yourmail@gmail.com" },
                { icon: <FaGithub />, href: "https://github.com/yourusername" },
                { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourusername" },
                { icon: <FaPhone className="rotate-90" />, href: "tel:+911234567890" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#14b8a6] transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="text-xs text-gray-500 mt-8">
            <p>“First, solve the problem. Then, write the code.”</p>
            <p className="mt-1 text-[10px] text-gray-600">– John Johnson</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-16 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-white font-medium">Felix</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

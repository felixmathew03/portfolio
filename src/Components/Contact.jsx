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
        (result) => {
          setMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <footer
      id="contact"
      className="bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white py-16 px-6 backdrop-blur-md border-t border-white/10"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Section */}
        <div className="flex flex-col items-start justify-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-[#14b8a6] tracking-wide font-abril"
          >
            Let’s Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-md"
          >
            Have a project in mind, want to collaborate, or just say hello? Feel free to reach out through any of the platforms below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-start items-center gap-6"
          >
            {[
              {
                icon: <FaEnvelope className="w-6 h-6" />, label: "Email", href: "mailto:username@gmail.com",
              },
              {
                icon: <FaGithub className="w-6 h-6" />, label: "GitHub", href: "https://github.com/username",
              },
              {
                icon: <FaLinkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://linkedin.com/in/username",
              },
              {
                icon: <FaPhone className="w-6 h-6 rotate-90" />, label: "Call", href: "tel:+999999999",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-sm hover:text-[#14b8a6] transition"
                aria-label={item.label}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="transition-transform duration-300"
                >
                  {item.icon}
                </motion.div>
                <span className="opacity-0 group-hover:opacity-100 text-xs mt-1 transition-opacity duration-300">
                  {item.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-xl space-y-4 backdrop-blur-md shadow-lg"
          >
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
              className="w-full bg-[#14b8a6] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#0d9488] transition"
            >
              Send Message
            </button>
            {message && <p className="text-xs text-center pt-2 text-green-400">{message}</p>}
          </motion.form>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-sm text-gray-400 text-center"
      >
        © {new Date().getFullYear()} <span className="text-white font-semibold">Felix</span>. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
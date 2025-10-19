import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AK
                </span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          >
            Arun Kumar Kanneli Suresh
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            SAP Integration Consultant
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
            className="flex flex-wrap justify-center gap-6 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-purple-400" />
              <span>Bangalore, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} className="text-pink-400" />
              <span>+91 8884996999</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-blue-400" />
              <span>arunkumar_ks@live.in</span>
            </div>
            <a
              href="https://www.linkedin.com/in/arunkumarks01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Linkedin size={20} className="text-purple-400" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;

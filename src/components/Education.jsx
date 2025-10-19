import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="py-20 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Engineering
              </h3>
              <p className="text-xl text-purple-300 mb-2">
                In Computer Science
              </p>
              <p className="text-gray-400">
                Visvesvaraya Technological University (VTU), Belgaum, India
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

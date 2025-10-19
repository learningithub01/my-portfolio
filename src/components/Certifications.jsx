import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Award } from "lucide-react";

const Certifications = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const certifications = [
    {
      title: "SAP Certified Professional - Solution Architect",
      subtitle: "SAP BTP",
    },
    {
      title: "SAP Certified Application Associate",
      subtitle: "SAP Cloud Platform Integration",
    },
  ];

  return (
    <section className="py-20 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Award size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xl text-purple-300">{cert.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

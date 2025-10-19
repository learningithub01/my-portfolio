import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const Summary = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="summary" className="py-20 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Summary
          </h2>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              SAP Integration Consultant with{" "}
              <span className="text-purple-400 font-semibold">
                12+ years of experience
              </span>{" "}
              specializing in integrating SAP procurement solutions (SAP Ariba)
              with SAP ERP and other systems. Expertise in SAP integration
              technologies, such as{" "}
              <span className="text-pink-400 font-semibold">SAP PI/CI</span>,
              and responsible for designing and implementing integration
              solutions that enable data exchange and process synchronization.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Expert in leveraging technologies like{" "}
              <span className="text-blue-400 font-semibold">
                CIG and Open API
              </span>{" "}
              to connect and synchronize SAP Ariba and ERP systems. Collaborated
              with functional teams to analyze business requirements, design
              integration architectures, configure middleware platforms, and
              ensure integration testing and troubleshooting.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              My role also involves providing post-go-live support, conducting
              training sessions, and identifying opportunities for process
              improvement and cost optimization within procurement workflows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;

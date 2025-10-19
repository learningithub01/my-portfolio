import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const experiences = [
    {
      title: "Senior Technology Consultant",
      period: "January 2020 – Present",
      achievements: [
        "Worked on CAP application to extract Ariba Analytical Reporting API into Hana Cloud database.",
        "Worked on database migration from SAP Hana Service to SAP Hana Cloud.",
        "Worked as an BTP architect to design to migrate existing on-premise Supplier Network Collaboration application to SAP BTP.",
        "Designed and implemented a custom SAP Cloud Integration flow to overcome a specific problem in the standard integration between SAP IAG solution and SAP Ariba Buying.",
        "Designed and implemented a solution to provide access suppliers for Buyers custom applications using Ariba as IdP.",
        "Worked on CI-CIG migration and upgrade to enhance integration between SAP ERP and SAP Ariba SCC solution.",
        "Worked on extracting supplier data using Supplier Data API with Pagination and storing in Hana Cloud Database.",
        "Consulting on CI to CIG migration steps (enablement, migration, mapping, cutover and",
        "Custom mappings in CIG mapping tool and coordinating activities to be executed on CIG cloud by Ariba Engineering team.",
      ],
    },
    {
      title: "Technology Consultant",
      period: "September 2011 – December 2020",
      achievements: [
        "Was part of Ariba Souring and Commerce Automation migration from CI 9 to CIG migration as SAP PI/CI consultant and was responsible for CIG configurations.",
        "Integrated SAP ERP with Ariba Sourcing using CI 9 in SAP PI.",
        "Designed and implemented integration solutions unsung SAP Process Integration (PI)/SAP Cloud Integration (CPI).",
        "Collaborated with stakeholders to gather requirements and analyze existing business processes.",
        "Configured and developed interfaces, mapping, and integration scenarios.",
        "Conducted unit testing, SIT and UAT for integration solutions.",
        "Resolved integration issues and errors through troubleshooting and analysis.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Employment History
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

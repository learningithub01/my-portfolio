import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const Skills = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      title: "Ariba",
      skills: ["Ariba Network", "Ariba Buying", "Guided Buying"],
    },
    {
      title: "Integration Platforms",
      skills: [
        "SAP Cloud Integration",
        "SAP Cloud Integration Gateway",
        "SAP Process Integration",
      ],
    },
    {
      title: "Identity and Access Management",
      skills: [
        "SAP Identity Authentication Service (SAP IAS)",
        "SAP Identity Provisioning Service (SAP IPS)",
      ],
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "NodeJS", "Groovy Scripts", "Core Java"],
    },
    {
      title: "Cloud Platforms",
      skills: ["SAP Business Technology Platform (Neo and Cloud Foundry)"],
    },
    {
      title: "Languages",
      skills: ["English (Fluent)", "German (Conversational)"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-purple-300">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                    <span>{skill}</span>
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

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arunkumar_ks@live.in",
      href: "mailto:arunkumar_ks@live.in",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8884996999",
      href: "tel:+918884996999",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "arunkumarks01",
      href: "https://www.linkedin.com/in/arunkumarks01",
    },
  ];

  const handleContactClick = (href, label, value) => {
    if (href) {
      window.open(href, "_blank");
    } else {
      toast({
        title: label,
        description: value,
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                onClick={() =>
                  handleContactClick(item.href, item.label, item.value)
                }
                className="w-full h-auto p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg border border-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                variant="outline"
              >
                <div className="flex items-center gap-4 w-full">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <item.icon size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Open to new opportunities and collaborations
          </p>
        </motion.div>
      </div>

      <footer className="mt-20 text-center text-gray-500 pb-8">
        <p>© 2025 Arun Kumar Kanneli Suresh. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;

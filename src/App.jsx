import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Helmet>
        <title>Arun Kumar Kanneli Suresh - SAP Integration Consultant</title>
        <meta
          name="description"
          content="Arun Kumar Kanneli Suresh, an SAP Integration Consultant based in Bangalore, India, with 12+ years of experience specializing in SAP Ariba, ERP integration, and cloud technologies."
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Summary />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
        <Toaster />
      </div>
    </>
  );
}

export default App;

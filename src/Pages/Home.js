import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Clients from "../Components/Clients";
import About from "../Components/About";
import Stats from "../Components/Stats";
import Services from "../Components/Services";
import Features from "../Components/Features";
import Testimonials from "../Components/Testimonials";
import Portfolio from "../Components/Portfolio";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Header />
      <main class="main">
        <Hero />
        <Clients />
        <About />
        <Stats />
        <Services />
        <Features />
        <Testimonials />
        {/* <Portfolio /> */}
        {/* <Team /> */}
        <Contact />
      </main>
      <Footer />
      
    </>
  );
}

export default Home;

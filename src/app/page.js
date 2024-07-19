"use client";
import Image from "next/image";
import Challenge from "./components/Challenge";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Security from "./components/Security";
import Service from "./components/Service";
import Process from "./components/Process";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Challenge />
      <Partner />
      <Security />
      <Service />
      <Process />
      <About />
      <Footer />
    </div>
  );
}

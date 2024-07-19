"use client";
import Image from "next/image";
import Challenge from "./components/Challenge";
import Hero from "./components/Hero";
import Partner from "./components/Partner";
import Security from "./components/Security";
import Service from "./components/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <Challenge />
      <Partner />
      <Security />
      <Service />
    </div>
  );
}

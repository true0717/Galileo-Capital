"use client";
import Image from "next/image";
import Challenge from "./components/Challenge";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />

      <Challenge />
    </div>
  );
}

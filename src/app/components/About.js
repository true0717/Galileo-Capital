"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CTAnim from "../../../public/assets/lottie/CTA-anim.json";
import Lottie from "react-lottie";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 9000 });
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CTAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      id="about-us"
      className="section pt-[8%] gap-[2%] bg-[#09002a] px-[10%] py-[50px] md:py-[5%]"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="2000"
        className="grid py-8 md:py-0 md:grid-cols-2 items-center gap-[12%]"
      >
        <img src="/assets/fonts/What people are saying about us.svg" />
        <p className="text-[18px] leading-[32px] text-white/70">
          Everything you need to liquidate your crypto assets realiably.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="4000"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-[4%] py-[12%]"
      >
        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img src="/assets/quotes.png" />
          <p className="pt-4 text-[15px] leading-[27px]">
            Desde que empezamos a usar Galileo Capital, nuestras operaciones son
            mucho más eficientes y seguras. La integración fue rápida y el
            equipo de soporte siempre está disponible para ayudarnos. Recomiendo
            encarecidamente sus servicios.
          </p>
        </div>

        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img src="/assets/quotes.png" />
          <p className="pt-4 text-[15px] leading-[27px]">
            Galileo Capital nos ha proporcionado una solución completa para
            nuestras necesidades de liquidación de criptomonedas. Sus tarifas
            competitivas y la atención al cliente personalizada han hecho una
            gran diferencia para nuestra empresa.
          </p>
        </div>

        <div className="px-8 py-14 rounded-[20px] hover-gradient">
          <img src="/assets/quotes.png" />
          <p className="pt-4 text-[15px] leading-[27px]">
            La tecnología avanzada de Galileo Capital y su enfoque en la
            seguridad nos han permitido manejar grandes volúmenes de
            transacciones con confianza. El cumplimiento regulatorio en EE.UU. y
            Costa Rica es un gran plus.
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="2000"
        className="bg-cover bg-center py-[4%] my-[8%] md:my-0 flex flex-col md:flex-row items-center gap-[5%] p-4 rounded-[20px]"
        style={{
          backgroundImage: "url('/assets/bg-cta.png')",
        }}
      >
        <div className="md:w-[30%]">
          <Lottie
            options={defaultOptions}
            className="h-[20px] md:h-[280px] w-auto"
          />
        </div>
        <div>
          <h3 className="text-[30px] lg:text-[48px] text-center md:text-start  leading-[45px] lg:leading-[67px] font-[600] ">
            Galileo Capital is regulated in Costa Rica and United States
          </h3>
          <div className="flex items-center justify-center md:justify-start md:items-start">
            <button className="mt-6 bg-[#FCF0F8] text-black py-4 px-9 rounded-full text-[17px] font-[500]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

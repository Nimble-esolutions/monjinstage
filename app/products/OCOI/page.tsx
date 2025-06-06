"use client";

import { Footer } from "@/components/layout/footer";
import { NavbarBlack } from '@/components/layout/navbar-black';
import OcoiHeroSection from "@/components/ocoi/hero-section";
import OcoiFeatures from "@/components/ocoi/ocoi-features";
import OcoiPricing from "@/components/ocoi/ocoi-pricing";
import { ClientsSlider } from "@/components/sliders/clients-slider";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import { MobileNavbarDark } from "@/components/layout/mobile-navbar-dark";
import PipedriveChat from "@/components/pipedrive/PipedriveChat";
import Demo from "@/components/free-demo/demo-form";

const OCOI = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarBlack />
      <MobileNavbarDark />

      <div
        className="absolute inset-0 -z-50 w-full h-full"
        
      >
        <div className="lg:block w-full h-full">
          <Image
            src="/assets/ocoi/ocoi-bg-web.jpg"
            alt="Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            priority
            className="background-desktop object-cover object-center"
          />
        </div>
        <div className="block lg:hidden w-full h-full">
          <Image
            src="/assets/ocoi/ocoi-bg-mobile.jpg"
            alt="Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            priority
            className="background-mobile object-cover object-top"
          />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="md:max-w-[1600px] mx-auto px-4 lg:px-8 py-8 z-10"
      >
        <OcoiHeroSection />
        <OcoiFeatures />
      </motion.div>

      <div className="flex flex-col gap-8">
        <OcoiPricing />
        <ClientsSlider />
        <Footer />
      </div>
	  
	  /* <div className="flex flex-col gap-8">
        <OcoiPricing />
        <ClientsSlider />
        <Footer />
      </div> */

      <PipedriveChat />
    </main>
  );
};

export default OCOI;

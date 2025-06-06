"use client";

import { Footer } from "@/components/layout/footer";
import { MobileNavbarLight } from "@/components/layout/mobile-navbar-light";
import { NavbarWhite } from "@/components/layout/navbar-white";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Privacy from "@/components/privacy-policy/privacy";

const PrivacyPolicy = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <NavbarWhite />
      <MobileNavbarLight />

      <motion.div
        className="absolute inset-0 -z-50 w-full h-full"
        initial={{ opacity: 0, translateY: -100 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <div className="hidden md:block w-full h-full">
          <Image
            src="/assets/support/support-web.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-desktop object-cover object-top"
          />
        </div>
        <div className="block md:hidden w-full h-full">
          <Image
            src="/assets/support/support-mobile-bg.jpg"
            alt="Background"
            fill
            quality={80}
            priority
            className="background-mobile object-cover object-top"
          />
        </div>
      </motion.div>

      <motion.div
        className="md:max-w-[1600px] mx-auto px-2 lg:px-8 py-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20,
          ease: "easeOut",
        }}
      >
        <Privacy />
      </motion.div>
      <div className="flex flex-col gap-8">
        <Footer />
      </div>
    </main>
  );
};

export default PrivacyPolicy;

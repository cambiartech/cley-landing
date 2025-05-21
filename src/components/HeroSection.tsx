'use client';

import Image from "next/image";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { SiTiktok } from "react-icons/si";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.5 } },
  };

  return (
    <main className="relative w-full h-screen flex items-center bg-[url('/cleyfi-bg.webp')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[rgba(0,0,0,0.4)] before:to-transparent before:z-0 px-4 lg:px-[10%]">
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center h-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="max-w-[550px] lg:pt-0 pt-24">
          <motion.h1 
            className="font-archivo font-black text-(--cleyfi-white) text-[48px] lg:text-[60px] xl:text-[80px] leading-[1.1] mb-6"
            variants={itemVariants}
          >
            CHANGE THE WAY YOU MONEY
          </motion.h1>
          <motion.p 
            className="font-quicksand text-(--cleyfi-white) text-lg lg:text-[22px] leading-relaxed max-w-[480px] mb-10"
            variants={itemVariants}
          >
            Home or away, local or global — move freely between countries and currencies. Sign up for free, in a tap.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button variant="secondary" size="lg" className="rounded-full px-8 py-4 text-lg">Download the app</Button>
          </motion.div>
        </div>
        {/* Right Card Content */}
        <motion.div 
          className="hidden lg:flex flex-col items-center justify-center w-[380px] h-[560px] relative"
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[16px] border border-white/30 rounded-[32px] shadow-2xl" />
          <div className="relative z-10 flex flex-col justify-center items-center w-full h-full p-10 text-(--cleyfi-white)">
            <div className="text-center mb-auto pt-16">
              <p className="font-quicksand text-lg text-(--cleyfi-white)/80 mb-1">Personal</p>
              <p className="font-archivo font-bold text-[48px] leading-none mb-5">₦1,200,000</p>
              <Button variant="white" size="md" className="rounded-full px-6 py-2 text-base font-semibold">Accounts</Button>
            </div>
            <div className="w-full mt-auto pb-8">
              <div className="bg-(--cleyfi-white) p-4 rounded-2xl flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 bg-(--cleyfi-black) rounded-full flex items-center justify-center">
                  <SiTiktok/>
                  {/* <span className="font-archivo font-bold text-(--cleyfi-white) text-lg">T</span> */}
                </div>
                <div className="flex-grow">
                  <p className="font-archivo font-semibold text-(--cleyfi-deepPurple) text-base">Tiktok Pay</p>
                  <p className="font-quicksand text-gray-500 text-sm">Today, 11:28</p>
                </div>
                <p className="font-archivo font-semibold text-(--cleyfi-deepPurple) text-base">+₦500,000</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
} 
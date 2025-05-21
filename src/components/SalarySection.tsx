'use client';

import { Button } from "./ui/Button";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiTrendingUp, FiDollarSign, FiZap, FiGift } from "react-icons/fi";
import { SiNetflix, SiSpotify, SiTiktok, SiAmazon, SiYoutube, SiApple, SiPlaystation, SiGoogleadmob, SiTwitch } from "react-icons/si";
import { useRef } from "react";

// Updated platform data for the new concept
const platformData = [
  {
    id: "netflix",
    name: "Netflix",
    icon: SiNetflix,
    logoUrl: "/icons/netflix-logo.svg",
    color: "text-red-500",
    position: { x: -150, y: -150 },
  },
  {
    id: "spotify",
    name: "Spotify",
    icon: SiSpotify,
    logoUrl: "/icons/spotify-logo.svg",
    color: "text-green-400",
    position: { x: 150, y: -150 },
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: SiTiktok,
    logoUrl: "/icons/tiktok-logo.svg",
    color: "text-black",
    position: { x: -150, y: 150 },
  },
  {
    id: "amazonprime",
    name: "Prime Video",
    icon: SiAmazon,
    logoUrl: "/icons/amazon-prime-logo.svg",
    color: "text-sky-500",
    position: { x: 150, y: 150 },
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: SiYoutube,
    color: "text-red-600",
  },
  {
    id: "apple",
    name: "Apple Store",
    icon: SiApple,
    color: "text-gray-500",
  },
  {
    id: "playstation",
    name: "PlayStation",
    icon: SiPlaystation,
    color: "text-blue-600",
  },
  {
    id: "admob",
    name: "AdMob",
    icon: SiGoogleadmob,
    color: "text-yellow-500",
  },
  {
    id: "twitch",
    name: "Twitch",
    icon: SiTwitch,
    color: "text-purple-500",
  }
  
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// hubVariants will now apply to the container of the phone and icons, but without visual styling for the container itself.
const hubContainerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  },
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const platformIconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (custom: { x: number, y: number, delay: number }) => ({
    opacity: 1,
    scale: 1,
    x: custom.x,
    y: custom.y,
    transition: { type: "spring", stiffness: 100, damping: 12, delay: custom.delay },
  }),
  hover: {
    scale: 1.15,
    boxShadow: "0px 7px 25px rgba(0,0,0,0.12)",
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

// Define sectionVariants for the main content section
const mainSectionContentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: 0.6,
      staggerChildren: 0.2, 
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

// New variant for the white splash effect
const splashVariants = {
  initial: {
    scale: 0,
    opacity: 0,
    borderRadius: "100%"
  },
  animate: {
    scale: 1,
    opacity: 1,
    borderRadius: "0%",
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  exit: {
    scale: 0,
    opacity: 0,
    borderRadius: "100%",
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  },
};

// New variants for the phone mockup itself
const phoneMockupVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
  },
};

export default function SalarySection() {
  const sectionRef = useRef(null);
  const isInViewForSplash = useInView(sectionRef, { amount: 0.4 });

  const iconOrbitRadius = 260;
  const mdIconOrbitRadius = 340;

  return (
    <div className="relative w-full" ref={sectionRef}>
      <AnimatePresence>
        {isInViewForSplash && (
          <motion.div
            key="splash"
            className="fixed inset-0 bg-[var(--cleyfi-lightBg)] pointer-events-none"
            variants={splashVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        )}
      </AnimatePresence>

      <motion.section 
        className="w-full min-h-screen py-10 md:py-10 bg-[var(--cleyfi-lightBg)] text-[var(--cleyfi-deepPurple)] flex flex-col justify-center items-center overflow-hidden relative z-10"
        variants={mainSectionContentVariants}
        initial="hidden"
        animate={isInViewForSplash ? "visible" : "hidden"}
      >
        <motion.h2 
          className="font-archivo font-black text-4xl md:text-5xl xl:text-6xl mb-4 text-center relative z-10 text-[var(--cleyfi-black)]"
          variants={itemVariants}
        >
          Your Creative Universe, Unified.
        </motion.h2>
        <motion.p 
          className="font-quicksand text-lg md:text-xl max-w-2xl mx-auto text-center mb-10 text-gray-600 relative z-10"
          variants={itemVariants}
        >
          Seamlessly consolidate earnings from all your platforms. CleyFi provides a singular, exquisite view of your creative financial world.
        </motion.p>
        <motion.div variants={itemVariants} className="relative z-10 mb-16">
          <Button variant="primary" size="lg" className="rounded-full px-10 py-4 text-xl shadow-md hover:shadow-lg transition-shadow">
            Do it the C.L.E.Y way
          </Button>
        </motion.div>

        {/* Blue background container for phone and icons */}
        <div className="w-full flex justify-center">
          <div className="bg-cleyfi-blue rounded-3xl py-12 px-4 md:px-12 flex items-center justify-center w-full max-w-2xl relative">
            <motion.div 
              className="relative flex items-center justify-center w-full max-w-xs h-[450px] md:max-w-md md:h-[550px]"
              variants={hubContainerVariants}
              initial="hidden"
              animate={isInViewForSplash ? "visible" : "visible"}
            >
              <motion.div
                layoutId="hero-card-transition"
                className="w-[200px] h-[400px] md:w-[240px] md:h-[480px]"
                variants={phoneMockupVariants}
                initial="hidden"
                animate={isInViewForSplash ? "visible" : "visible"}
              >
                <div className="w-full h-full bg-gray-900 rounded-[32px] md:rounded-[36px] overflow-hidden relative z-20">
                  <Image 
                    src="/bg-image.png" 
                    alt="App Preview" 
                    layout="fill" 
                    objectFit="cover"
                    className="rounded-[32px] md:rounded-[36px]" 
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-30"
                variants={iconContainerVariants}
                initial="hidden"
                animate={isInViewForSplash ? "visible" : "visible"}
              >
                {platformData.map((platform, index) => {
                  const totalIcons = platformData.length;
                  const currentRadius = typeof window !== "undefined" && window.innerWidth >= 768 ? mdIconOrbitRadius : iconOrbitRadius;
                  const angle = (index / totalIcons) * 2 * Math.PI - (Math.PI / 2);
                  const xPos = Math.cos(angle) * currentRadius;
                  const yPos = Math.sin(angle) * currentRadius;
                  const IconComponent = platform.icon;
                  const animationDelay = index * 0.05;
                  return (
                    <motion.div
                      key={platform.id}
                      className={`absolute w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg border border-gray-200 hover:shadow-xl`}
                      variants={platformIconVariants}
                      custom={{ x: xPos, y: yPos, delay: animationDelay }}
                      whileHover="hover"
                      initial="hidden"
                      animate={isInViewForSplash ? "visible" : "visible"}
                    >
                      <IconComponent 
                        size={20}
                        className={`mb-0.5 ${platform.color || 'text-gray-700'}`}
                      />
                      <span className="text-[10px] font-quicksand text-gray-600">{platform.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
} 
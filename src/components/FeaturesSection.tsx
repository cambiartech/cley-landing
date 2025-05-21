'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Content data for the three card tiers
const cardData = [
  {
    id: 'cley-spark',
    title: 'Cley Spark',
    tagline: 'Ignite Your Global Journey',
    description: 'Perfect for first-time users exploring international subscriptions and in-app purchases—no frills, just frictionless access.',
    features: [
      'Instant Top-Up: Fund in NGN via bank transfer; 99% of your amount credited immediately.',
      'Virtual USD Card: Spend on any global merchant—streaming, gaming, digital content.',
      'Zero KYC Needed: Create and use your card without lengthy verification for loads up to ₦5,000.'
    ],
    buttonText: 'Start with Spark →',
    imageUrl: '/feature-1.webp',
    color: 'text-yellow-500',
    bgColor: 'from-yellow-500/5 to-transparent',
  },
  {
    id: 'cley-flow',
    title: 'Cley Flow',
    tagline: 'Spend Without Limits',
    description: 'For power users and daily spenders who want a card that keeps pace with their life—effortless, reliable, and rewarding.',
    features: [
      'Reloadable Wallet: Top-up anytime in NGN or crypto; funds appear in real time.',
      'Enhanced Controls: Set monthly and per-transaction limits, block categories, and get instant spend alerts.',
      '0.5% Cashback: Earn on every purchase—put money back in your pocket.'
    ],
    buttonText: 'Go with Flow →',
    imageUrl: '/feature-2.png',
    color: 'text-blue-500',
    bgColor: 'from-blue-500/5 to-transparent',
  },
  {
    id: 'cley-luxe',
    title: 'Cley Luxe',
    tagline: 'Elevate Every Experience',
    description: 'Our premium offering for creators and high-value customers: exclusive perks, VIP support, and advanced financial tools.',
    features: [
      'Dedicated Sub-Accounts: Receive USD payouts directly into your private vault—no mix-ups, no delays.',
      'Priority FX Rates: Best-in-market conversion and next-day NGN withdrawals.',
      'Premium Perks: Airport lounge access, partner discounts, and early beta invites.'
    ],
    buttonText: 'Unlock Luxe →',
    imageUrl: '/feature-3.webp',
    color: 'text-purple-700',
    bgColor: 'from-purple-500/5 to-transparent',
  }
];

// Animation variants
const cardVariants = {
  enter: { 
    opacity: 0, 
    y: 40, 
    scale: 0.96,
    filter: "blur(5px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  center: {
    zIndex: 1,
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    zIndex: 0,
    opacity: 0,
    y: -40,
    scale: 0.96,
    filter: "blur(5px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const phoneVariants = {
  enter: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(5px)",
    y: 20,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    filter: "blur(5px)",
    y: -20,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

const buttonVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Phone animation values
  const phoneScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.95, 1, 1, 0.95]
  );
  
  const phoneRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-2deg", "0deg", "2deg"]
  );
  
  // Effect to update current card based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Calculate which card to show based on scroll progress
      // We divide the scroll range into sections for each card
      const sectionSize = 1 / (cardData.length + 0.5); // +0.5 to leave space at end
      const activeIndex = Math.min(
        Math.floor(value / sectionSize),
        cardData.length - 1
      );
      
      if (activeIndex !== currentCardIndex && activeIndex >= 0 && activeIndex < cardData.length) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentCardIndex(activeIndex);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 300);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, currentCardIndex]);
  
  return (
    <section className="bg-white text-cleyfi-black">
      {/* Main header */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-archivo font-black text-center mb-5">
          Choose the Card <br /> That's Right for You
        </h2>
        <p className="text-lg md:text-xl text-gray-600 font-quicksand text-center max-w-3xl mx-auto">
          Whether you're just getting started with global payments or you're a high-earning creator, Cleyfi's tiered cards give you the right blend of simplicity, flexibility, and premium perks.
        </p>
      </div>
      
      {/* Scrollytelling container */}
      <div
        ref={containerRef}
        className="relative w-full" 
        style={{ height: `${(cardData.length + 0.5) * 100}vh` }} // Extra space at end for transition
      >
        {/* Fixed stage area */}
        <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center z-10">
          <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center">
            {/* Phone on left side (or top on mobile) */}
            <div className="w-full md:w-1/2 flex justify-center items-center pb-8 md:pb-0">
              <motion.div 
                className="relative w-[200px] md:w-[280px] h-[400px] md:h-[560px]"
                style={{ 
                  scale: phoneScale,
                  rotate: phoneRotate,
                  transformOrigin: "center center" 
                }}
              >
                {/* Phone frame - stays consistent */}
                <div className="absolute inset-0 rounded-[40px] bg-black/5 shadow-lg z-10 pointer-events-none" />
                
                {/* Phone mockup images that change based on card */}
                <div className="relative w-full h-full overflow-hidden rounded-[35px]">
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={cardData[currentCardIndex].id}
                      className="absolute inset-0 z-0"
                      initial="enter"
                      animate="center"
                      exit="exit"
                      variants={phoneVariants}
                    >
                      <Image 
                        src={cardData[currentCardIndex].imageUrl}
                        alt={`${cardData[currentCardIndex].title} mockup`}
                        layout="fill" 
                        objectFit="cover"
                        className="rounded-[30px]"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Phone screen highlight overlay */}
                <div className="absolute inset-1 rounded-[35px] bg-gradient-to-br from-white/20 to-transparent pointer-events-none z-20" />

                {/* Subtle glow effect behind phone that changes color with cards */}
                <motion.div 
                  className={`absolute inset-0 rounded-full blur-3xl opacity-20 -z-10 bg-gradient-radial ${cardData[currentCardIndex].bgColor}`}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </div>
            
            {/* Card content that changes */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-lg relative">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={cardData[currentCardIndex].id}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full absolute left-0 top-0 right-0"
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={cardVariants}
                  >
                    <motion.span 
                      className={`font-archivo uppercase text-sm font-bold mb-2 block ${cardData[currentCardIndex].color}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } }}
                    >
                      {`Card Tier ${currentCardIndex + 1}`}
                    </motion.span>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl font-archivo font-bold"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }}
                    >
                      {cardData[currentCardIndex].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-xl font-archivo font-semibold mt-1 mb-3 text-gray-800"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }}
                    >
                      {cardData[currentCardIndex].tagline}
                    </motion.p>
                    
                    <motion.p 
                      className="text-gray-600 mb-6 font-quicksand"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.8 } }}
                    >
                      {cardData[currentCardIndex].description}
                    </motion.p>
                    
                    <ul className="space-y-4 mb-8">
                      {cardData[currentCardIndex].features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          custom={idx}
                          initial="hidden"
                          animate="visible"
                          variants={featureItemVariants}
                        >
                          <span className={`${cardData[currentCardIndex].color} mr-3 mt-1 flex-shrink-0`}>&#10003;</span> 
                          <span className="text-gray-700 font-quicksand">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      variants={buttonVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Button 
                        variant="secondary" 
                        className={`w-full justify-center py-3 border-2 ${cardData[currentCardIndex].color.replace('text-', 'border-')}`}
                      >
                        {cardData[currentCardIndex].buttonText}
                      </Button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Invisible div to maintain height */}
                <div className="invisible">
                  <div className="p-6 md:p-8 w-full">
                    <span className="font-archivo uppercase text-sm font-bold mb-2 block">Card Tier</span>
                    <h3 className="text-2xl md:text-3xl font-archivo font-bold">Title</h3>
                    <p className="text-xl font-archivo font-semibold mt-1 mb-3">Tagline</p>
                    <p className="mb-6">Description</p>
                    <ul className="space-y-4 mb-8">
                      {cardData[0].features.map((_, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-3 mt-1"></span>
                          <span>Feature</span>
                        </li>
                      ))}
                    </ul>
                    <div className="h-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA - this appears after scrolling through all cards */}
      <div className="py-20 bg-(--cleyfi-yellow)">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl font-archivo font-bold mb-6">
            Ready to transform how you pay and get paid?
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            className="px-8 py-4 rounded-full shadow-lg"
          >
            Create Your Card Now
          </Button>
        </div>
      </div>
    </section>
  );
} 
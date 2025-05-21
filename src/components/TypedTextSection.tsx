'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Updated sentences with emojis replacing key nouns
const sentences = [
  "Top-up from 🏦 local bank or your 📱 favorite app.",
//   "Issue a 💳 virtual USD card in one tap.",
  "Subscribe to your go-to 📺 streaming, 🎮 gaming, and 📰 news services.",
  "Gift 🪙 coins to creators—no barriers, no delays.",
  "Creators collect 💰 earnings into private USD vaults.",
  "Convert to local 💱 currency in seconds—no hidden fees.",
//   "Spend anywhere 🌐 online or in-app without borders.",
  "Send 💸 payouts to collaborators, pay suppliers, reward fans.",
//   "Set spend limits, block categories, receive ⚡ real-time alerts.",
  "All of it, in one card.",
  "",
//   "Cley Spark. Cley Flow. Cley Luxe.",
  "Choose your tier. Choose your journey."
];

export default function TypedTextSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hasAnimatedOnce, setHasAnimatedOnce] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimatedOnce) {
      const totalAnimationTime = sentences.reduce((total, sentence, index) => {
        return total + (sentence.length * 25) + (index * 0.8 * 1000);
      }, 0);
      
      const timer = setTimeout(() => {
        setHasAnimatedOnce(true);
      }, totalAnimationTime);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAnimatedOnce]);
  
  return (
    <section 
      ref={sectionRef} 
      className="bg-(--cleyfi-blue) text-white py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          {sentences.map((sentence, index) => (
            <TypewriterText 
              key={index} 
              text={sentence} 
              isInView={isInView && !hasAnimatedOnce}
              delay={index * 0.8} 
              isLastBlock={index >= sentences.length - 3}
            />
          ))}
        </div>
      </div>
      
      {/* Gradient overlay for shine effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" 
        style={{ backgroundSize: '200% 100%' }} />
    </section>
  );
}

type TypewriterTextProps = {
  text: string;
  isInView: boolean;
  delay: number;
  isLastBlock?: boolean;
};

const TypewriterText = ({ 
  text, 
  isInView, 
  delay, 
  isLastBlock = false
}: TypewriterTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasTyped, setHasTyped] = useState(false);
  
  useEffect(() => {
    if (hasTyped) return;
    
    if (!isInView || !containerRef.current) return;
    
    const container = containerRef.current;
    container.textContent = '';
    
    if (text === '') return;
    
    const characters = Array.from(text);
    
    characters.forEach((char, i) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.style.opacity = '0';
      charSpan.style.transition = 'opacity 0.15s ease';
      
      if (/\p{Emoji}/u.test(char)) {
        charSpan.className = 'emoji-character';
        charSpan.style.fontSize = '1.1em';
        charSpan.style.verticalAlign = 'middle';
        charSpan.style.display = 'inline-block';
        charSpan.style.transform = 'translateY(-2px)';
        charSpan.style.color = 'wheat';
        charSpan.style.backgroundClip = 'initial';
        charSpan.style.webkitBackgroundClip = 'initial';
        charSpan.style.textShadow = 'none';
      }
      
      container.appendChild(charSpan);
      
      const baseDelayMs = delay * 1000;
      const staggerDelayMs = isLastBlock ? 40 : 25; 
      const totalDelay = baseDelayMs + (i * staggerDelayMs);
      
      setTimeout(() => {
        charSpan.style.opacity = '1';
        
        if (i === characters.length - 1) {
          setHasTyped(true);
        }
      }, totalDelay);
    });
  }, [isInView, text, delay, isLastBlock, hasTyped]);
  
  return (
    <div 
      ref={containerRef}
      className={`font-archivo md:text-[50px] font-black leading-[1.2] mb-6 relative ${
        isLastBlock 
          ? 'font-black text-2xl md:text-4xl mt-8 ' 
          : 'silver-metallic-text'
      } h-auto min-h-fit`}
      aria-live="polite"
    >
      {/* Text will be populated dynamically */}
    </div>
  );
}; 
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/Button";

// Updated navigation data structure with dropdowns
const navItems = [
  {
    title: "Product",
    dropdown: [
      { title: "Overview", href: "#overview" },
      { title: "How It Works", href: "#how-it-works" },
      { 
        title: "Cards", 
        href: "#cards",
        subitems: [
          { title: "Cley Spark", href: "#cley-spark" },
          { title: "Cley Flow", href: "#cley-flow" },
          { title: "Cley Luxe", href: "#cley-luxe" },
        ]
      }
    ]
  },
  {
    title: "Solutions",
    dropdown: [
      { title: "Consumers", href: "#consumers" },
      { title: "Creators & Freelancers", href: "#creators-freelancers" },
      { title: "Businesses & SMBs", href: "#businesses-smbs" },
    ]
  },
  // {
  //   title: "Developers",
  //   dropdown: [
  //     { title: "API Docs", href: "#api-docs" },
  //     { title: "SDKs & Libraries", href: "#sdks-libraries" },
  //     { title: "Sandbox", href: "#sandbox" },
  //     { title: "Changelog", href: "#changelog" },
  //   ]
  // },
  // {
  //   title: "Pricing",
  //   dropdown: [
  //     { title: "Consumer Plans", href: "#consumer-plans" },
  //     { title: "Creator Plans", href: "#creator-plans" },
  //     { title: "Enterprise & Custom", href: "#enterprise-custom" },
  //   ]
  // },
  {
    title: "Resources",
    dropdown: [
      { title: "Blog", href: "#blog" },
      { title: "Help Center", href: "#help-center" },
      { title: "Case Studies", href: "#case-studies" },
      { title: "Webinars & Events", href: "#webinars-events" },
    ]
  },
  {
    title: "Company",
    dropdown: [
      { title: "About Us", href: "#about-us" },
      { title: "Careers", href: "#careers" },
      { title: "Partners", href: "#partners" },
      { title: "Press & Media", href: "#press-media" },
    ]
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);
  
  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setActiveSubmenu(null);
  };
  
  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };
  
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 lg:px-[10%]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-20">
          {/* Desktop Logo */}
          <div className="hidden lg:block">
            <Image 
              src="/cley-white.png" 
              alt="CleyFi" 
              width={120} 
              height={30} 
              priority
            />
          </div>
          
          {/* Mobile Logo */}
          <div className="block lg:hidden">
            <Image 
              src="/logo.png" 
              alt="CleyFi" 
              width={100} 
              height={25} 
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className="relative"
              ref={el => {
                dropdownRefs.current[index] = el;
              }}
            >
              <button
                className="font-quicksand text-(--cleyfi-white) hover:opacity-80 transition-opacity text-lg flex items-center"
                onClick={() => toggleDropdown(index)}
                aria-expanded={activeDropdown === index}
              >
                {item.title}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === index && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[220px] z-20">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <div key={dropdownIndex} className="relative">
                      {dropdownItem.subitems ? (
                        <>
                          <button
                            className="w-full text-left flex justify-between items-center px-4 py-2 text-(--cleyfi-black) hover:bg-(--cleyfi-lightBg) transition-colors text-sm group"
                            onClick={() => toggleSubmenu(dropdownItem.title)}
                          >
                            {dropdownItem.title}
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              strokeWidth={2}
                              stroke="currentColor" 
                              className="w-3 h-3 ml-1 text-gray-400 group-hover:text-gray-700 transition-transform"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                          </button>
                          
                          {/* Submenu */}
                          {activeSubmenu === dropdownItem.title && (
                            <div className="absolute left-full top-0 bg-white rounded-lg shadow-xl py-2 min-w-[180px] ml-1">
                              {dropdownItem.subitems.map((subitem, subitemIndex) => (
                                <Link 
                                  key={subitemIndex}
                                  href={subitem.href}
                                  className="block px-4 py-2 text-(--cleyfi-black) hover:bg-(--cleyfi-lightBg) transition-colors text-sm"
                                >
                                  {subitem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link 
                          href={dropdownItem.href} 
                          className="block px-4 py-2 text-(--cleyfi-black) hover:bg-(--cleyfi-lightBg) transition-colors text-sm"
                        >
                          {dropdownItem.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/login" className="font-quicksand text-(--cleyfi-white) hover:opacity-80 transition-opacity text-lg">Login</Link>
          <Button variant="white" size="md" className="rounded-full px-6 py-2 text-(--cleyfi-deepPurple)">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-(--cleyfi-white) relative z-20"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-10 pt-20 overflow-y-auto">
            <div className="px-4 py-2">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="w-full py-4 flex justify-between items-center text-(--cleyfi-black) font-medium text-lg"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.title}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className={`w-5 h-5 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  
                  {activeDropdown === index && (
                    <div className="bg-(--cleyfi-lightBg) py-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex}>
                          {dropdownItem.subitems ? (
                            <>
                              <button
                                className="w-full text-left flex justify-between items-center px-4 py-3 text-(--cleyfi-black) text-base"
                                onClick={() => toggleSubmenu(dropdownItem.title)}
                              >
                                {dropdownItem.title}
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg" 
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  strokeWidth={2} 
                                  stroke="currentColor" 
                                  className={`w-4 h-4 transition-transform ${activeSubmenu === dropdownItem.title ? 'rotate-180' : ''}`}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              </button>
                              
                              {activeSubmenu === dropdownItem.title && (
                                <div className="ml-4 pl-4 border-l-2 border-(--cleyfi-blue)/20">
                                  {dropdownItem.subitems.map((subitem, subitemIndex) => (
                                    <Link
                                      key={subitemIndex}
                                      href={subitem.href}
                                      className="block py-3 text-(--cleyfi-black) text-base"
                                    >
                                      {subitem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link 
                              href={dropdownItem.href} 
                              className="block px-4 py-3 text-(--cleyfi-black) text-base"
                            >
                              {dropdownItem.title}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-6 space-y-4">
                <Link href="/login" className="block w-full py-3 text-center text-(--cleyfi-blue) font-medium text-lg border border-(--cleyfi-blue) rounded-lg">
                  Login
                </Link>
                <Button variant="primary" fullWidth size="lg" className="py-3 text-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 
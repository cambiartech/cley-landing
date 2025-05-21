'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-(--cleyfi-lightBg) text-(--cleyfi-black) pt-20 pb-10">
      {/* Main footer sections */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
          {/* Section 1: Services */}
          <div className="lg:col-span-1">
            <h3 className="text-(--cleyfi-black) font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Card Issuance</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Global Payments</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Creator Vault</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">API Access</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Subscription Management</Link></li>
            </ul>
          </div>

          {/* Section 2: Security */}
          <div className="lg:col-span-1">
            <h3 className="text-(--cleyfi-black) font-bold mb-4">Security</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">How We Protect You</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Report Lost Card</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Fraud Prevention</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Security Features</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Bug Bounty Program</Link></li>
            </ul>
          </div>

          {/* Section 3: Card Tiers */}
          <div className="lg:col-span-1">
            <h3 className="text-(--cleyfi-black) font-bold mb-4">Card Tiers</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Cley Spark</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Cley Flow</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Cley Luxe</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Compare Cards</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Upgrade Options</Link></li>
            </ul>
          </div>

          {/* Section 4: Company */}
          <div className="lg:col-span-1">
            <h3 className="text-(--cleyfi-black) font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">About Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Careers</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Press</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Blog</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Sustainability</Link></li>
            </ul>
          </div>

          {/* Section 5: Help */}
          <div className="lg:col-span-1">
            <h3 className="text-(--cleyfi-black) font-bold mb-4">Help</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Help Center</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">Developer Docs</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">System Status</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-(--cleyfi-blue) transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Section 6: Get App */}
          <div className="lg:col-span-1">
            <h3 className="text-(--cleyfi-black) font-bold mb-4">Get The App</h3>
            <div className="flex flex-col space-y-3">
              <Link href="#" className="bg-(--cleyfi-blue) text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
              <Link href="#" className="bg-(--cleyfi-blue) text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-gray-800 transition">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-10 pb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-archivo font-bold">
                <Image src="/logo.png" alt="Cleyfi" width={100} height={100} />
            </h2>
            <p className="text-gray-500 text-sm mt-2">Global payments for the digital economy</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#1877F2] hover:opacity-80 transition" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-[#1DA1F2] hover:opacity-80 transition" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-[#E4405F] hover:opacity-80 transition" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-[#0A66C2] hover:opacity-80 transition" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-[#000000] hover:opacity-80 transition" aria-label="TikTok">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        {/* Language selector */}
        <div className="border-t border-gray-200 py-6 flex justify-start">
          <div className="inline-flex items-center rounded-md border border-gray-300 px-3 py-1">
            <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <select className="bg-transparent border-none text-sm focus:outline-none">
              <option value="en">English (US)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-4 md:mb-0">
            <Link href="#" className="text-sm text-gray-500 hover:text-[--cleyfi-blue] transition">Terms of Service</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[--cleyfi-blue] transition">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[--cleyfi-blue] transition">Cookie Policy</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[--cleyfi-blue] transition">Compliance</Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-[--cleyfi-blue] transition">Accessibility</Link>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Cleyfi Inc. All rights reserved.
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-xs text-gray-400 leading-relaxed">
          <p>Cleyfi is a financial technology company, not a bank. Banking services provided by partner financial institutions, Member FDIC. The Cleyfi Card is issued pursuant to a license from Visa/Mastercard and may be used everywhere Visa/Mastercard is accepted.</p>
          <p className="mt-2">Cleyfi is a subsidiary of Cambiar Technologies LLC, headquartered in Delaware, USA. All trademarks and registered trademarks are the property of their respective owners. Use of Cleyfi services is subject to our Terms and Conditions.</p>
        </div>
      </div>
    </footer>
  );
} 
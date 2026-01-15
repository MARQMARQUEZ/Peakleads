'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-12 pb-8">
      {/* Scrolling Logo Marquee */}
      <div className="relative overflow-hidden py-8 mb-8">
        {/* Fade edges */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)'
          }}
        ></div>
        
        <motion.div 
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'linear' 
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...Array(8)].map((_, i) => (
            <span 
              key={i} 
              className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent select-none outline-text"
            >
              PEAKLEADS
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Footer Card */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative">
          {/* Glass Card */}
          <div 
            className="relative bg-white/70 backdrop-blur-2xl border border-gray-200/80 rounded-[32px] p-8 md:p-12 shadow-xl shadow-gray-900/5"
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
          >
            {/* Inner shine - top edge highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent rounded-t-[32px]"></div>
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-[32px] pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Top Section */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                {/* Company Info */}
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                    PeakLeads helps businesses build high-converting websites and generate qualified leads with precision-crafted designs.
                  </p>
                  
                  {/* Contact & Social */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link 
                      href="mailto:hello@peakleads.online" 
                      className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                    >
                      hello@peakleads.online
                    </Link>
                    
                    <div className="flex items-center gap-3">
                      <Link 
                        href="https://linkedin.com" 
                        target="_blank"
                        className="w-10 h-10 bg-white/80 border border-gray-200/60 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 26 26" fill="currentColor">
                          <path d="M24 0L2 0C0.895 0 0 0.895 0 2L0 24C0 25.105 0.895 26 2 26L24 26C25.105 26 26 25.105 26 24L26 2C26 0.895 25.105 0 24 0ZM24 24L2 24L2 2L24 2ZM9 11L9 19C9 19.552 8.552 20 8 20C7.448 20 7 19.552 7 19L7 11C7 10.448 7.448 10 8 10C8.552 10 9 10.448 9 11ZM20 14.5L20 19C20 19.552 19.552 20 19 20C18.448 20 18 19.552 18 19L18 14.5C18 13.119 16.881 12 15.5 12C14.119 12 13 13.119 13 14.5L13 19C13 19.552 12.552 20 12 20C11.448 20 11 19.552 11 19L11 11C11.003 10.493 11.384 10.068 11.888 10.011C12.392 9.955 12.858 10.284 12.974 10.777C14.352 9.842 16.135 9.745 17.607 10.525C19.079 11.305 19.999 12.834 20 14.5ZM9.5 7.5C9.5 8.328 8.828 9 8 9C7.172 9 6.5 8.328 6.5 7.5C6.5 6.672 7.172 6 8 6C8.828 6 9.5 6.672 9.5 7.5Z"/>
                        </svg>
                      </Link>
                      
                      <Link 
                        href="https://x.com" 
                        target="_blank"
                        className="w-10 h-10 bg-white/80 border border-gray-200/60 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-4 h-4 text-gray-700" viewBox="0 0 22 24" fill="currentColor">
                          <path d="M21.852 22.464L14.027 10.166L21.748 1.673C22.111 1.263 22.078 0.637 21.673 0.269C21.267 -0.099 20.641 -0.073 20.268 0.328L12.913 8.418L7.852 0.464C7.668 0.175 7.35 0 7.008 0L1.008 0C0.643 0 0.307 0.199 0.131 0.519C-0.045 0.839 -0.032 1.23 0.164 1.538L7.989 13.834L0.268 22.334C0.023 22.597 -0.062 22.973 0.046 23.316C0.155 23.659 0.439 23.918 0.792 23.993C1.144 24.068 1.509 23.948 1.748 23.679L9.103 15.589L14.164 23.543C14.349 23.829 14.667 24.001 15.008 24L21.008 24C21.373 24 21.709 23.801 21.884 23.481C22.06 23.162 22.047 22.772 21.852 22.464ZM15.557 22L2.829 2L6.454 2L19.187 22Z"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Company Links */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Company</h4>
                  <div className="space-y-3">
                    <Link href="#services" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Services
                    </Link>
                    <Link href="/about" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      About Us
                    </Link>
                    <Link href="#testimonials" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Testimonials
                    </Link>
                    <Link href="#faq" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      FAQs
                    </Link>
                  </div>
                </div>
                
                {/* Services Links */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900">Services</h4>
                  <div className="space-y-3">
                    <Link href="#" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Web Design
                    </Link>
                    <Link href="#" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Lead Generation
                    </Link>
                    <Link href="#" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      SEO Optimization
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200/60">
                <p className="text-lg text-gray-600">
                  © 2025 PeakLeads. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <Link href="/privacy" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

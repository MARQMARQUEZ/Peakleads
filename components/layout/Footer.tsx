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
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 mb-12">
                {/* Company Info */}
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                    PeakLeads helps businesses build high-converting websites and generate qualified leads with precision-crafted designs.
                  </p>
                  
                  {/* Contact & Social */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link 
                      href="mailto:bradley@peakleads.agency" 
                      className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                    >
                      bradley@peakleads.agency
                    </Link>
                    
                    <div className="flex items-center gap-3">
                      <Link 
                        href="https://www.facebook.com/profile.php?id=61586554864685" 
                        target="_blank"
                        className="w-10 h-10 bg-white/80 border border-gray-200/60 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Link>
                      
                      <Link 
                        href="https://www.instagram.com/peakleads_?igsh=bnZjY2tpbDZoZ2h1" 
                        target="_blank"
                        className="w-10 h-10 bg-white/80 border border-gray-200/60 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Company Links */}
                <div className="space-y-4 md:ml-16">
                  <h4 className="text-xl font-bold text-gray-900">Company</h4>
                  <div className="space-y-3">
                    <Link href="/services" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Services
                    </Link>
                    <Link href="/about" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      About Us
                    </Link>
                    <Link href="#testimonials" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Testimonials
                    </Link>
                  </div>
                </div>
                
                {/* Services Links */}
                <div className="space-y-4 md:ml-16">
                  <h4 className="text-xl font-bold text-gray-900">Services</h4>
                  <div className="space-y-3">
                    <Link href="/services#web-design" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Web Design
                    </Link>
                    <Link href="/services#lead-generation" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Lead Generation
                    </Link>
                    <Link href="/services#seo-optimization" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      SEO Optimization
                    </Link>
                  </div>
                </div>

                {/* Legal Links */}
                <div className="space-y-4 md:ml-16">
                  <h4 className="text-xl font-bold text-gray-900">Legal</h4>
                  <div className="space-y-3">
                    <Link href="/privacy-policy" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link href="/terms-and-conditions" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Terms & Conditions
                    </Link>
                    <Link href="/cookie-policy" className="block text-lg text-gray-600 hover:text-gray-900 transition-colors">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200/60">
                <p className="text-lg text-gray-600">
                  © 2026 PeakLeads. All rights reserved.
                </p>
                <div className="flex flex-wrap items-center gap-6 justify-center">
                  <Link href="/disclaimer" className="text-lg text-gray-600 hover:text-gray-900 transition-colors">
                    Disclaimer
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

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';

export default function Home() {
  // Handle smooth scroll to testimonials on page load if hash is present
  useEffect(() => {
    if (window.location.hash === '#testimonials') {
      setTimeout(() => {
        const testimonialsSection = document.getElementById('testimonials');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-x-hidden max-w-full">
      <Header />
      
      {/* Floating Video - Bottom Right */}
      <motion.a
        href="#schedule-call"
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 group block video-container-hover"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById('schedule-call');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        onMouseEnter={() => {
          const emoji = document.querySelector('.wave-emoji') as HTMLElement;
          if (emoji) {
            emoji.classList.remove('waving');
            void emoji.offsetWidth; // Force reflow to restart animation
            emoji.classList.add('waving');
          }
        }}
        onMouseLeave={() => {
          const emoji = document.querySelector('.wave-emoji') as HTMLElement;
          if (emoji) {
            emoji.classList.remove('waving');
          }
        }}
      >
        {/* Animated glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400/40 via-gray-300/30 to-gray-200/20 blur-xl animate-pulse"></div>
        
        {/* Outer ring with subtle animation */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 opacity-20 animate-spin-slow"></div>
        
        {/* Glass frame */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden cursor-pointer shadow-2xl border-4 border-white/80 backdrop-blur-sm"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
          }}
        >
          {/* Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-125 pointer-events-none"
            style={{ objectPosition: 'center 30%' }}
          >
            <source src="/bradley.mp4" type="video/mp4" />
          </video>
          
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/10 via-transparent to-white/20 pointer-events-none"></div>
        </motion.div>
        
        {/* Floating "Say Hi!" label - Desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="hidden md:block absolute -left-12 top-1/3 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap transition-opacity duration-300 cursor-pointer hover-wave-trigger"
          onMouseEnter={() => {
            const emoji = document.querySelector('.wave-emoji') as HTMLElement;
            if (emoji) {
              emoji.classList.remove('waving');
              void emoji.offsetWidth; // Force reflow to restart animation
              emoji.classList.add('waving');
            }
          }}
          onMouseLeave={() => {
            const emoji = document.querySelector('.wave-emoji') as HTMLElement;
            if (emoji) {
              emoji.classList.remove('waving');
            }
          }}
        >
          Say Hi! <span className="inline-block wave-emoji">👋</span>
        </motion.div>
      </motion.a>
      
      {/* Hero Section + Benefits (combined for seamless blend) */}
      <section className="relative overflow-hidden pt-20">
        {/* Subtle gradient background - extends through both hero and benefits */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white">
          {/* Subtle glass orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-gray-300/20 to-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[40%] left-1/3 w-96 h-96 bg-gradient-to-br from-gray-200/20 to-white/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-10 min-h-screen flex items-center overflow-visible">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full overflow-visible">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                    Build Your
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                    Presence
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-600 max-w-xl leading-relaxed"
                >
                  Transform your business with precision-crafted websites designed for painting, roofing, and plumbing professionals.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="https://calendly.com/bradley-hart/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 rounded-2xl overflow-hidden inline-block"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative text-white font-semibold tracking-wide">Book A Call</span>
                </motion.a>
                
                <Link href="/about">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white/80 backdrop-blur-xl border border-gray-200/60 text-gray-800 font-semibold rounded-2xl hover:bg-white/90 transition-all shadow-lg shadow-gray-900/5 inline-block cursor-pointer"
                  >
                    Learn More
                  </motion.div>
                </Link>
              </motion.div>

            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative flex items-center justify-center mx-auto"
              style={{ overflow: 'visible' }}
            >
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-gray-400/10 rounded-full blur-3xl"></div>
              
              {/* Main Image - Circle Crop with Hover Effect */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full overflow-visible cursor-pointer mx-auto"
                style={{ borderRadius: '50%', overflow: 'visible' }}
              >
                <Image
                  src="https://peakleads.online/wp-content/uploads/2025/11/image1.png?v=2"
                  alt="PeakLeads Hero"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-cover drop-shadow-2xl rounded-full"
                  style={{ borderRadius: '50%' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Benefits Content - Still within hero section for seamless background */}
        <div className="relative z-10 container mx-auto px-4 pb-24 md:pb-32">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              {/* Mobile heading */}
              <span className="md:hidden">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                  Serious Founders
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                  Pick Us
                </span>
              </span>
              {/* Desktop heading */}
              <span className="hidden md:inline">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                  Why Fast-Moving Founders
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                  Pick Us
                </span>
              </span>
            </h2>
          </motion.div>

          {/* Benefits Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Designed to Convert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative"
            >
              <div className="relative bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 rounded-3xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1">
                {/* Illustration Area */}
                <div className="relative h-56 md:h-64 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                  {/* Floating pill tags */}
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      Clarity first
                    </div>
                    <div className="flex items-center gap-2 bg-gray-700/90 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Trust-focused
                    </div>
                    <div className="flex items-center gap-2 bg-gray-600/90 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Action-driven
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Designed to convert</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fund-ready sites that turn traffic into demos and signups. Clear product story & credible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Built Fast */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 rounded-3xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1">
                {/* Illustration Area */}
                <div className="relative h-56 md:h-64 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                  {/* Browser mockup */}
                  <div className="relative bg-gray-900 rounded-xl p-4 shadow-2xl transform rotate-[-2deg]">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg px-6 py-4 min-w-[180px]">
                      <p className="text-white text-sm font-medium">Your Next Site</p>
                      <p className="text-gray-400 text-xs mt-1">Starts Here.</p>
                    </div>
                    {/* Cursor */}
                    <div className="absolute bottom-0.5 left-0.5 w-5 h-5">
                      <svg viewBox="0 0 24 24" fill="white" className="drop-shadow-lg" style={{ transform: 'rotate(12deg)' }}>
                        <path d="M4 4l16 6-6 2-2 6z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Built fast, without drama</h3>
                  <p className="text-gray-600 leading-relaxed">
                    2-3 week sprint from call to live site. No back-and-forth, polished and performant.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 - Progress Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              className="group relative"
            >
              <div className="relative bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 rounded-3xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1">
                {/* Illustration Area */}
                <div className="relative h-56 md:h-64 overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
                  {/* Task completion pills */}
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="flex items-center gap-2 bg-gray-700/90 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Mobile shipped.
                    </div>
                    <div className="flex items-center gap-2 bg-gray-800/90 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                      </svg>
                      Homepage layout drafted.
                    </div>
                    <div className="flex items-center gap-2 bg-gray-600/90 backdrop-blur-sm text-white text-sm px-4 py-2.5 rounded-full shadow-lg">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      New version is live.
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Progress every single day</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Daily updates and Looms. See what's shipped, what's next, no chasing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Carousel */}
      <section className="py-24 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 container mx-auto px-4"
        >
          <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
              Our Recent
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
              Work
            </span>
          </h2>
        </motion.div>

        {/* Carousel Container - Full Width */}
        <div className="relative w-full">
          {/* Carousel Wrapper */}
          <div className="relative overflow-hidden">
            {/* Sliding Track */}
            <motion.div
              className="flex gap-4 md:gap-6"
              animate={{
                x: [0, -2584],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 37.5,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the images multiple times for seamless loop */}
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 md:gap-6 shrink-0">
                  {/* Image 1 */}
                  <a href="https://greatergood.co/info" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl w-[360px] md:w-auto">
                    <Image
                      src="/1.png"
                      alt="Portfolio project 1"
                      width={640}
                      height={360}
                      className="cursor-pointer transition-transform duration-700 ease-out hover:scale-[1.03] w-full h-auto"
                    />
                  </a>

                  {/* Image 2 */}
                  <a href="https://andersonroofingrenovations.com/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl w-[360px] md:w-auto">
                    <Image
                      src="/2.png"
                      alt="Portfolio project 2"
                      width={640}
                      height={360}
                      className="cursor-pointer transition-transform duration-700 ease-out hover:scale-[1.03] w-full h-auto"
                    />
                  </a>

                  {/* Image 3 */}
                  <a href="https://waterautomation.com/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl w-[360px] md:w-auto">
                    <Image
                      src="/3.png"
                      alt="Portfolio project 3"
                      width={640}
                      height={360}
                      className="cursor-pointer transition-transform duration-700 ease-out hover:scale-[1.03] w-full h-auto"
                    />
                  </a>

                  {/* Image 4 */}
                  <a href="https://theleakgeeks.com/" target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl w-[360px] md:w-auto">
                    <Image
                      src="/4.png"
                      alt="Portfolio project 4"
                      width={640}
                      height={360}
                      className="cursor-pointer transition-transform duration-700 ease-out hover:scale-[1.03] w-full h-auto"
                    />
                  </a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="testimonials" className="relative pt-16 md:pt-24 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Header Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Trusted by the
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                Best Clients
              </span>
            </h2>
          </motion.div>

          {/* Reviews Grid - 2x2 on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Review 1 - Greg */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 pt-6 px-6 pb-4 rounded-3xl md:min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-base text-gray-700 leading-relaxed mb-auto">
                Peak Leads built us a beautiful website that perfectly captures our brand. The team was professional, responsive, and delivered everything on time. Our online presence has never looked better.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://peakleads.online/wp-content/uploads/2025/11/Greg-e1738938682562-2-e1762539914353.png"
                    alt="Greg"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Greg</p>
                  <p className="text-xs text-gray-500">Business Owner</p>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 pt-6 px-6 pb-4 rounded-3xl md:min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-base text-gray-700 leading-relaxed mb-auto">
                Working with Peak Leads was a game-changer for my business. They understood exactly what we needed and delivered a website that not only looks amazing but converts visitors into customers. Highly recommended!
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://peakleads.online/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-01-at-22.26.33_618e8afa-1.jpg"
                    alt="Client"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Michael Anderson</p>
                  <p className="text-xs text-gray-500">Contractor</p>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 pt-6 px-6 pb-4 rounded-3xl md:min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-base text-gray-700 leading-relaxed mb-auto">
                The team at Peak Leads exceeded all expectations. From the initial consultation to the final launch, they were communicative, creative, and truly cared about our success. Our new site has dramatically increased our leads.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://peakleads.online/wp-content/uploads/2025/11/Screenshot-2025-11-10-125003.png"
                    alt="Client"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sarah Thompson</p>
                  <p className="text-xs text-gray-500">Roofing Company Owner</p>
                </div>
              </div>
            </motion.div>

            {/* Review 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 pt-6 px-6 pb-4 rounded-3xl md:min-h-[300px] flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-base text-gray-700 leading-relaxed mb-auto">
                Peak Leads transformed our outdated website into a modern, professional platform. The attention to detail and understanding of our industry made all the difference. We've seen a significant uptick in inquiries since launch.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://peakleads.online/wp-content/uploads/2026/01/Screenshot-2026-01-05-230102.png"
                    alt="Client"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">David Chen</p>
                  <p className="text-xs text-gray-500">Plumbing Services</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Glass Marquee Separator */}
      <div className="py-6 overflow-hidden">
        <motion.div
          className="flex shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Ready to reach new heights
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Push boundaries
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Transform your business
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Build your presence
              </span>
              <span className="text-gray-300">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Calendly Integration Section */}
      <section id="schedule-call" className="py-24 relative bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Schedule A Call
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Let's Talk About
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                Your Project
              </span>
            </h2>
          </motion.div>

          {/* Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative border border-gray-200/80 rounded-[32px] shadow-xl shadow-gray-900/5 overflow-hidden"
            style={{
              height: '850px'
            }}
          >
            {/* Calendly iframe */}
            <iframe 
              src="https://calendly.com/bradley-hart/30min" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Select a Date & Time - Calendly"
              className="rounded-[32px]"
            />
          </motion.div>
        </div>
      </section>

      {/* Let's Begin Section */}
      <section className="py-24 relative bg-gradient-to-b from-white via-gray-50 to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Roadmap */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-16">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                  Let's
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                  Begin
                </span>
              </h2>

              {/* Roadmap Steps */}
              <div className="relative">
                {/* Abstract connecting lines - thin, gradient, centered between circles */}
                <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{ height: '100%', width: '300px' }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="25%" stopColor="#d1d5db" />
                      <stop offset="75%" stopColor="#d1d5db" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  {/* Line between circle 1 and circle 2 - exactly centered */}
                  <path 
                    d="M 70 95 Q 100 115, 120 140" 
                    stroke="#d1d5db" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.5"
                  />
                  {/* Line between circle 2 and circle 3 - exactly centered */}
                  <path 
                    d="M 95 248 Q 65 278, 52 308" 
                    stroke="#d1d5db" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.5"
                  />
                </svg>

                {/* Step 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative flex items-start gap-8 mb-20"
                >
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-gray-200/40"></div>
                    {/* Inner glass circle */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/60 flex items-center justify-center shadow-lg shadow-gray-200/20 backdrop-blur-sm">
                      <span className="text-lg font-medium text-gray-400">1</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-gray-600">
                      Fill out the form—we'll get<br />
                      back to you within <span className="font-semibold text-gray-800">24 hours</span>
                    </p>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative flex items-start gap-8 mb-20 ml-24"
                >
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-gray-300/40"></div>
                    {/* Inner glass circle */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-150 border border-gray-200/60 flex items-center justify-center shadow-lg shadow-gray-200/20 backdrop-blur-sm">
                      <span className="text-lg font-medium text-gray-400">2</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-gray-600">
                      Get a <span className="font-semibold text-gray-800">tailored proposal</span><br />
                      specifically for your project
                    </p>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="relative flex items-start gap-8"
                >
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border border-gray-200/40"></div>
                    {/* Inner glass circle */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-200/60 flex items-center justify-center shadow-lg shadow-gray-200/20 backdrop-blur-sm">
                      <span className="text-lg font-medium text-gray-400">3</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold text-gray-800">Kick-start your project</span><br />
                      with our expert team
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Glass Form Card */}
              <div 
                className="relative bg-white/70 backdrop-blur-2xl border border-gray-200/80 rounded-[32px] p-8 md:p-10 shadow-xl shadow-gray-900/5"
                style={{
                  backdropFilter: 'blur(40px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                }}
              >
                {/* Inner shine */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent rounded-t-[32px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-[32px] pointer-events-none"></div>

                <form className="relative z-10 space-y-6">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                    />
                  </div>

                  {/* How did you find us? */}
                  <div>
                    <input
                      type="text"
                      placeholder="How did you find us?"
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors"
                    />
                  </div>

                  {/* Your request */}
                  <div>
                    <textarea
                      placeholder="Your request"
                      rows={3}
                      className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-gray-600 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full md:w-auto px-12 py-4 rounded-full overflow-hidden mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <span className="relative text-white font-semibold tracking-wide">Submit</span>
                  </motion.button>

                  {/* Privacy Policy */}
                  <p className="text-sm text-gray-500 mt-4">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-gray-700 hover:text-gray-900 underline transition-colors">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function About() {
  const team = [
    {
      name: 'Bradley Hartmann',
      role: 'Founder & CEO',
      bio: 'Digital marketing expert with 5+ years of experience. Proven track record of scaling businesses to new heights through strategic web strategies.',
      image: 'https://peakleads.online/wp-content/uploads/2024/11/Bradley-Hartmann.jpg',
    },
    {
      name: 'Anri Burger',
      role: 'Social Media Manager',
      bio: 'Creates engaging content and manages digital presence for businesses across all social platforms.',
      image: 'https://peakleads.online/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-06-at-13.42.04_b08628e8.jpg',
    },
    {
      name: 'Alex Carstens',
      role: 'Paid Ads Expert',
      bio: 'Specializes in paid advertising and digital marketing to generate high-quality leads for businesses.',
      image: 'https://peakleads.online/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-19-at-12.47.48_4494f92b-2.jpg',
    },
    {
      name: 'Cullen Diener',
      role: 'Web Developer',
      bio: 'Builds high-converting, performance-optimized websites that turn visitors into customers.',
      image: 'https://peakleads.online/wp-content/uploads/2024/12/CullenDienerPhoto.jpeg',
    },
  ];

  const values = [
    {
      title: 'Collaboration',
      description: 'We work closely with you to understand your unique needs and deliver customized strategies.',
      icon: 'collaboration',
    },
    {
      title: 'Transparency',
      description: 'Daily updates, clear communication, and honest reporting on every project milestone.',
      icon: 'transparency',
    },
    {
      title: 'Results-Driven',
      description: 'Every decision is made with your bottom line in mind - more leads, higher conversions, better ROI.',
      icon: 'results',
    },
    {
      title: 'Excellence',
      description: 'We compete with the largest agencies while delivering personalized attention and quality.',
      icon: 'excellence',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
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
            void emoji.offsetWidth;
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
              void emoji.offsetWidth;
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-20">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-gray-200/30 to-gray-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-300/20 to-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 mb-16 pt-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                About Peak Leads
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We partner with ambitious businesses to craft America's best websites and deliver high-quality leads that drive real growth.
            </motion.p>
          </motion.div>
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

      {/* Our Story Section */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
                  Our Story
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                    Built on
                  </span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                    Trust
                  </span>
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Peak Leads was founded with a single mission: to help businesses rise above the rest through digital excellence.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                What started as a passion project has evolved into a full-service agency competing with the largest web design firms in the industry. Our founder, Bradley Hartmann, brought years of digital marketing expertise and a deep understanding of the business landscape's unique challenges.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to work with ambitious businesses that are ready to scale. We don't just build websites—we build growth engines that generate qualified leads and drive measurable results.
              </p>

              <div className="pt-4">
                <p className="text-xl font-semibold text-gray-900">
                  "Teamwork makes the dream work."
                </p>
                <p className="text-gray-600 mt-2">— Bradley Hartmann, Founder</p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://peakleads.online/wp-content/uploads/2024/11/Bradley-Hartmann.jpg"
                  alt="Bradley Hartmann - Founder"
                  fill
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                What Drives
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                Us Forward
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white hover:bg-gray-50 border border-gray-200/60 rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-5xl mb-6">
                    {value.icon === 'collaboration' && (
                      <svg className="w-12 h-12 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    )}
                    {value.icon === 'transparency' && (
                      <svg className="w-12 h-12 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    )}
                    {value.icon === 'results' && (
                      <svg className="w-12 h-12 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18 9.41 12l4 4 6.3-6.29L21 12v-6z"/>
                      </svg>
                    )}
                    {value.icon === 'excellence' && (
                      <svg className="w-12 h-12 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Meet the
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
              Unstoppable talent dedicated to elevating your business to new heights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl h-72 bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-lg font-semibold text-gray-600">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Proven
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                Results
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: 'Specialized Expertise',
                description: 'We focus exclusively on helping service-based businesses succeed, understanding your industry challenges inside and out.',
              },
              {
                title: 'Transparent Communication',
                description: 'Daily updates, regular calls, and honest reporting keep you informed every step of the way.',
              },
              {
                title: 'Fast Turnaround',
                description: 'Your website goes from concept to live in 2-3 weeks—no lengthy delays or surprises.',
              },
              {
                title: 'Results-Oriented',
                description: 'We measure success by your success: more leads, higher conversions, better ROI.',
              },
              {
                title: 'Collaborative Approach',
                description: 'We work with you, not for you. Your vision guides every decision we make.',
              },
              {
                title: 'Full-Service Solutions',
                description: 'Web design, SEO, paid ads, social media—everything you need in one place.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white border border-gray-200/60 rounded-3xl p-8 h-full hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section id="schedule-call" className="py-24 relative bg-gradient-to-b from-white to-gray-50">
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

      <Footer />
    </div>
  );
}

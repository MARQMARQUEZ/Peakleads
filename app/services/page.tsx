'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const services = [
  {
    id: 1,
    title: 'Website Design & Development',
    subtitle: 'Building a Strong Online Presence',
    description: 'Custom websites tailored for your industry, creating a professional digital hub that showcases your expertise and attracts local customers.',
    cta: 'Build An Online Presence',
    features: ['Mobile-Responsive Design', 'SEO Optimized', 'Fast Loading Times', 'User-Friendly Interface'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
  },
  {
    id: 2,
    title: 'Local Service Ads Management',
    subtitle: 'Targeted Leads for Your Services',
    description: 'Get your business front and center when local customers search for services. Drive high-quality leads for jobs in your area with optimized campaigns.',
    cta: 'Get Local Leads Fast',
    features: ['High-Quality Leads', 'Local Targeting', 'Quick Response Setup', 'Performance Tracking'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80',
  },
  {
    id: 3,
    title: 'SEO (Search Engine Optimization)',
    subtitle: 'Rank Higher in Local Search',
    description: 'Enhance your visibility in local search results with industry-focused SEO strategies. Appear at the top when potential customers are searching.',
    cta: 'Rank Higher Now',
    features: ['Keyword Research', 'Content Optimization', 'Local SEO', 'Backlink Building'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
  },
  {
    id: 4,
    title: 'Paid Advertising: Google & Meta Ads',
    subtitle: 'Attracting Customers with Targeted Ads',
    description: 'Customized ad campaigns focusing on high-intent keywords and precise local targeting. Maximize your ad spend effectively and turn clicks into customers.',
    cta: 'Turn Clicks into Clients',
    features: ['Google Ads Management', 'Meta Ads Campaigns', 'High-Intent Targeting', 'ROI Optimization'],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=80',
  },
  {
    id: 5,
    title: 'Social Media Management & Strategy',
    subtitle: 'Building Your Brand Presence',
    description: 'Connect with your community and build brand trust on social media. Create engaging content that highlights your skills and establishes you as an industry expert.',
    cta: 'Grow Your Following',
    features: ['Content Creation', 'Community Engagement', 'Brand Building', 'Analytics & Reporting'],
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=1200&q=80',
  },
];

const benefits = [
  {
    number: '01',
    title: 'Multi-Industry Expertise',
    description: 'We work across diverse industries, understanding the unique challenges and opportunities specific to your business type',
  },
  {
    number: '02',
    title: 'Proven Results',
    description: 'Track record of delivering high-quality leads and increasing revenue for businesses of all sizes and industries',
  },
  {
    number: '03',
    title: 'Full-Service Solutions',
    description: 'Complete digital marketing services under one roof for seamless execution and consistent branding',
  },
  {
    number: '04',
    title: 'Dedicated Support',
    description: 'Personal account managers who understand your business goals and work as an extension of your team',
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <Header />

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
                Our Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive digital marketing solutions designed to help all businesses attract more customers, build trust, and grow their revenue.
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
                Professional Digital Services
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Drive Real Results
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Grow Your Business
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Attract More Customers
              </span>
              <span className="text-gray-300">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Complete Digital
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                Marketing Solutions
              </span>
            </h2>
          </motion.div>

          {/* Services Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 rounded-3xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl">
                  {/* Image Section - 40% */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  </div>
                  
                  {/* Content - 60% */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <svg
                            className="w-4 h-4 text-gray-900 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - Centered */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-6 lg:mt-8">
            {services.slice(3, 5).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-50 hover:bg-gray-100/80 border border-gray-200/60 rounded-3xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl">
                  {/* Image Section - 40% */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                  </div>
                  
                  {/* Content - 60% */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5">
                          <svg
                            className="w-4 h-4 text-gray-900 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass Marquee Separator */}
      <div className="py-6 overflow-hidden bg-gray-50">
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
                Transform Your Business
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Scale With Confidence
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Proven Strategies
              </span>
              <span className="text-gray-300">·</span>
              <span className="text-gray-400 font-medium tracking-[0.3em] text-sm uppercase whitespace-nowrap px-12">
                Expert Team Ready
              </span>
              <span className="text-gray-300">·</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <section className="relative py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              Why Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Why Peak Leads
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                is Your Best Choice
              </span>
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white hover:bg-gray-50 border border-gray-200/60 rounded-3xl overflow-hidden transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-lg p-8 md:p-10">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-700 flex-shrink-0">
                      {benefit.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                Our Simple
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900">
                3-Step Process
              </span>
            </h2>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 relative">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'We learn about your business, goals, and challenges to understand your unique needs.',
              },
              {
                step: '02',
                title: 'Strategic Plan',
                description: 'We create a customized strategy tailored to your business and target market.',
              },
              {
                step: '03',
                title: 'Implementation & Results',
                description: 'We execute the plan and track results, making adjustments to maximize your ROI.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white hover:bg-gray-50 border border-gray-200/60 rounded-3xl overflow-hidden p-8 md:p-10 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-6">
                    <div className="inline-block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                {/* Connector Arrow - Centered between cards */}
                {index < 2 && (
                  <div className="hidden md:flex absolute left-full top-1/2 -translate-y-1/2 w-12 lg:w-16 justify-center items-center z-10">
                    <svg
                      className="w-8 h-8 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7m0 0l-7 7m7-7H6"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Integration Section */}
      <section className="py-24 relative bg-gray-50">
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

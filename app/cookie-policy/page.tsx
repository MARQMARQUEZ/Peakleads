'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CookiePolicyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Cookie Policy - Peak Leads";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative pt-40 pb-24 bg-gray-50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Title */}
            <div className="md:col-span-3">
              <h1 className="text-[25px] leading-[1.3] font-[450] text-gray-900 mb-1.5">Cookie Policy</h1>
              <p className="text-base text-gray-600">Last updated Jan 15, 2026</p>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-6 max-w-none text-gray-700 space-y-6">
          
              {/* Introduction */}
              <section className="pb-6 border-b border-gray-200">
                <p className="text-base leading-normal text-gray-800 font-light">
                  This Cookie Policy explains how <strong>Peak Leads</strong> uses cookies and similar technologies on our website and mobile applications. We use cookies to enhance your experience, analyze site performance, and personalize content.
                </p>
                <p className="text-base leading-normal text-gray-800 mt-3 font-light">
                  By accessing Peak Leads, you consent to our use of cookies as described in this policy. You can control cookie settings through your browser preferences.
                </p>
              </section>

              {/* What are Cookies */}
              <section id="what-are-cookies" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">What Are Cookies?</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Cookies are small text files that are stored on your device when you visit a website. They serve various purposes, including remembering your preferences, tracking site usage, and enabling certain functionalities.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Types of Cookies</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Session Cookies:</strong> These temporary cookies are deleted when you close your browser. They help maintain your session and allow you to navigate our site seamlessly.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or until you delete them. They help us remember your preferences and login information.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>First-Party Cookies:</strong> Set by Peak Leads directly to enhance your experience and functionality.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Third-Party Cookies:</strong> Set by our partners and service providers for analytics and advertising purposes.</span>
                  </li>
                </ul>
              </section>

              {/* How We Use Cookies */}
              <section id="how-we-use" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">How We Use Cookies</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">We use cookies for the following purposes:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Essential Cookies</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">These cookies are necessary for our website to function properly. They enable core functionality such as security, account access, and user authentication.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Performance Cookies</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">We use performance cookies to understand how visitors interact with our site. This information helps us improve performance, identify errors, and optimize user experience.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Functional Cookies</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">These cookies remember your preferences and choices, enabling us to provide a personalized experience tailored to your needs.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Marketing Cookies</h3>
                <p className="text-base leading-normal text-gray-800 font-light">We use marketing cookies to track your interactions and display personalized advertisements. These cookies may be shared with advertising partners.</p>
              </section>

              {/* Third-Party Services */}
              <section id="third-party" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Third-Party Cookie Services</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads may use third-party services that set their own cookies:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Analytics</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">We use analytics services (such as Google Analytics) to track site usage, user behavior, and performance metrics. These services help us understand how our site is used and identify areas for improvement.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Advertising</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">We may use advertising cookies to display targeted ads based on your interests and browsing history. This may include retargeting ads from Peak Leads.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Social Media</h3>
                <p className="text-base leading-normal text-gray-800 font-light">If you interact with social media plugins on our site, those platforms may set their own cookies to track your activity and preferences.</p>
              </section>

              {/* Cookie Control */}
              <section id="cookie-control" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Managing Your Cookies</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">You have the right to control cookies stored on your device:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Browser Settings</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">Most browsers allow you to refuse cookies or alert you when cookies are being sent. You can adjust these settings in your browser preferences. Please note that disabling cookies may affect the functionality of our website.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Opt-Out Options</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Google Analytics: Visit <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" className="text-gray-900 hover:text-gray-600 underline transition-colors">Google's opt-out page</a></span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Network Advertising Initiative: Visit <a href="https://optout.networkadvertising.org/" target="_blank" className="text-gray-900 hover:text-gray-600 underline transition-colors">NAI opt-out page</a></span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Do Not Track</h3>
                <p className="text-base leading-normal text-gray-800 font-light">If your browser supports the "Do Not Track" feature, Peak Leads will honor this preference. However, note that not all services respect this signal.</p>
              </section>

              {/* Data Security */}
              <section id="data-security" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Data Security and Privacy</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">While cookies are essential for website functionality, we take your privacy seriously. Information collected through cookies is:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Protected by encryption and secure protocols</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Retained only as long as necessary</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Never sold to third parties without explicit consent</span>
                  </li>
                </ul>
                <p className="text-base leading-normal text-gray-800 mt-4 font-light">For more information about how we handle your data, please refer to our <Link href="/privacy-policy" className="text-gray-900 hover:text-gray-600 underline transition-colors">Privacy Policy</Link>.</p>
              </section>

              {/* Contact Us */}
              <section id="contact" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Contact Us</h2>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">If you have any questions about our use of cookies or this Cookie Policy, please contact us at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
              </section>

              {/* Final Notice */}
              <section className="pb-6">
                <p className="text-base leading-normal text-gray-800 font-light">
                  By continuing to use Peak Leads, you acknowledge that you have read and understood this Cookie Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

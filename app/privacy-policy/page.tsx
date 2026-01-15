'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Privacy Policy - Peak Leads";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative pt-40 pb-24 bg-gray-50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Title */}
            <div className="md:col-span-3">
              <h1 className="text-[25px] leading-[1.3] font-[450] text-gray-900 mb-1.5">Privacy Policy</h1>
              <p className="text-base text-gray-600">Last updated Jan 15, 2026</p>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-6 max-w-none text-gray-700 space-y-6">
          
              {/* Introduction */}
              <section className="pb-6 border-b border-gray-200">
                <p className="text-base leading-normal text-gray-800 font-light">
                  Welcome to <strong>Peak Leads</strong>, your partner for digital growth. This Privacy Policy explains how Peak Leads ("we," "our," or "us") collects, uses, and discloses your information when you use our website, mobile applications, and any related services that link to this Policy.
                </p>
                <p className="text-base leading-normal text-gray-800 mt-3 font-light">
                  By accessing or using Peak Leads on any platform (web or mobile), you agree to the practices described in this Privacy Policy. If you do not agree, please do not access or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section id="information" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Information We Collect</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Information You Provide Directly</h3>
                
                <h4 className="text-base font-semibold text-gray-900 mb-2 mt-3">Contact Details</h4>
                <ul className="space-y-2 mb-4">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Name and email address</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Phone number</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Business information and website details</span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-4 mt-3">Business & Account Information</h4>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Company name, industry type, and business goals</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Account credentials and authentication information</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Payment and billing information</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-4 pt-4">Automatically Collected Data</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">When you use Peak Leads on web or mobile, we may automatically collect information such as:</p>

                <h4 className="text-base font-semibold text-gray-900 mb-4 mt-3">Device & Usage Information</h4>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Browser type and version, operating system, and language preferences</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>IP address, referrer information, and pages visited</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Device model and mobile operating system information</span>
                  </li>
                </ul>

                <h4 className="text-base font-semibold text-gray-900 mb-4 mt-3">Analytics & Performance</h4>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Website and app navigation and feature usage metrics</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Crash reports and performance metrics</span>
                  </li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section id="usage" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">How We Use Your Information</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">We use the collected information for various purposes, including:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Providing and Enhancing Services</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Creating and managing your account</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Delivering web design, marketing, and lead generation services</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Processing payments and managing subscriptions</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Communication and Support</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Sending updates, notifications, and customer support messages</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Informing you about new services, features, or changes</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Improving Our Services</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Conducting research and analysis to enhance our offerings</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Personalizing your experience based on your interactions</span>
                  </li>
                </ul>
              </section>

              {/* Disclosure of Information */}
              <section id="disclosure" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Disclosure of Information</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">We do not sell or rent your personal information. However, we may share your data in the following situations:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Service Providers</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">With trusted third-party providers who assist us with operations, analytics, hosting, and customer support under strict confidentiality agreements.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Legal Requirements</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">When required to comply with legal obligations or protect our rights, including responding to lawful requests from governmental authorities.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">With Your Consent</h3>
                <p className="text-base leading-normal text-gray-800 font-light">When you provide explicit consent to share your information with third parties.</p>
              </section>

              {/* Data Security */}
              <section id="security" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Data Security</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Our Commitment to Security</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">At Peak Leads, protecting your data is our highest priority. We implement comprehensive security measures across all platforms to safeguard your personal and business information.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Technical Security Measures</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Encryption in Transit:</strong> All data transmitted between your device and Peak Leads servers is encrypted using industry-standard TLS/SSL protocols.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Encryption at Rest:</strong> Sensitive data is encrypted using AES-256 encryption standards when stored in our databases.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Secure Authentication:</strong> We use secure authentication systems with multi-factor authentication options to verify user identity.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Secure Infrastructure:</strong> Peak Leads is hosted on secure cloud infrastructure with enterprise-grade security and continuous monitoring.</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Data Retention</h3>
                <p className="text-base leading-normal text-gray-800 mb-2 font-light">We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable laws.</p>
                <ul className="space-y-2">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Active Accounts:</strong> Data is retained for the duration of your active subscription.</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span><strong>Closed Accounts:</strong> After account closure, personal data is retained for 30 days to allow for recovery, then securely deleted.</span>
                  </li>
                </ul>
              </section>

              {/* Your Rights */}
              <section id="rights" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Your Rights</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Depending on your jurisdiction, you may have rights regarding your personal data, including:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Accessing and updating your information</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Requesting deletion or correction of your data</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Objecting to or restricting the processing of your data</span>
                  </li>
                </ul>
                <p className="text-base leading-normal text-gray-800 font-light">To exercise these rights, please contact us using the details provided below.</p>
              </section>

              {/* Contact Us */}
              <section id="contact" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Contact Us</h2>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">If you have any questions or concerns regarding this Privacy Policy or our privacy practices, please contact us at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
              </section>

              {/* Final Notice */}
              <section className="pb-6">
                <p className="text-base leading-normal text-gray-800 font-light">
                  By using Peak Leads, you agree to the terms of this Privacy Policy. If you do not agree, please refrain from using our services.
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

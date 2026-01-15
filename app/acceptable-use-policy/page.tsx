'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AcceptableUsePolicyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Acceptable Use Policy - Peak Leads";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative pt-40 pb-24 bg-gray-50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Title */}
            <div className="md:col-span-3">
              <h1 className="text-[25px] leading-[1.3] font-[450] text-gray-900 mb-1.5">Acceptable Use Policy</h1>
              <p className="text-base text-gray-600">Last updated Jan 15, 2026</p>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-6 max-w-none text-gray-700 space-y-6">
          
              {/* Introduction */}
              <section className="pb-6 border-b border-gray-200">
                <p className="text-base leading-normal text-gray-800 font-light">
                  This Acceptable Use Policy ("Policy") outlines the standards of conduct for all users of <strong>Peak Leads</strong> services, applications, and platforms. This Policy is intended to protect our users, services, and reputation.
                </p>
                <p className="text-base leading-normal text-gray-800 mt-3 font-light">
                  By accessing or using Peak Leads, you agree to comply with this Acceptable Use Policy and all applicable laws and regulations. Violations of this Policy may result in account suspension or termination.
                </p>
              </section>

              {/* Prohibited Uses */}
              <section id="prohibited-uses" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Prohibited Uses</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">You agree not to use Peak Leads for any illegal, abusive, or unauthorized purpose. Specifically, you may not:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Illegal Activities</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Engage in, promote, or facilitate any illegal activity, including fraud, theft, or money laundering</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Violate any applicable local, state, national, or international law or regulation</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Use Peak Leads to circumvent legal restrictions or law enforcement activities</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Harassment and Abuse</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Harass, threaten, defame, or intimidate any person or entity</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Engage in bullying, cyberstalking, or any form of harassment</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Make threats of violence or harm against any person</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Intellectual Property Violations</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Upload, transmit, or distribute copyrighted material without proper authorization</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Violate trademark, patent, or other intellectual property rights</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Reverse engineer, decompile, or attempt to derive proprietary information</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Security and System Access</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Attempt to gain unauthorized access to Peak Leads systems or accounts</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Introduce malware, viruses, trojans, or other harmful code</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Perform denial-of-service (DDoS) attacks or other disruptive activities</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Use automated tools, scrapers, or bots without explicit permission</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Harmful Content</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Upload or transmit explicit, obscene, or sexually explicit content</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Share hate speech, discriminatory content, or content promoting violence</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Distribute content involving minors in inappropriate contexts</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Spam and Deceptive Practices</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Send unsolicited bulk emails, spam, or phishing messages</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Engage in misleading advertising or deceptive marketing practices</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Create multiple accounts to circumvent restrictions or deceive other users</span>
                  </li>
                </ul>
              </section>

              {/* Account Responsibility */}
              <section id="account-responsibility" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Account Responsibility</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">You are responsible for maintaining the security and confidentiality of your account:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You must keep your password confidential and not share it with others</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You are liable for all activities conducted under your account</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You must notify us immediately of any unauthorized account access</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You agree to use a unique, strong password and enable two-factor authentication</span>
                  </li>
                </ul>
              </section>

              {/* Content Responsibility */}
              <section id="content-responsibility" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Content Responsibility</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">You are responsible for all content you upload, transmit, or create through Peak Leads:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You must have the right to use all content you share</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You must ensure content complies with all laws and regulations</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You grant Peak Leads a license to use content as necessary to provide services</span>
                  </li>
                </ul>
              </section>

              {/* Enforcement and Consequences */}
              <section id="enforcement" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Enforcement and Consequences</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads reserves the right to investigate and take appropriate action in response to violations of this Policy:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Potential Actions</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Issuance of warnings or notices of violation</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Suspension of account privileges or access to services</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Permanent termination of account and services</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Referral to law enforcement for illegal activities</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Legal action to recover damages or prevent continued violations</span>
                  </li>
                </ul>
              </section>

              {/* Reporting Violations */}
              <section id="reporting" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Reporting Violations</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">If you believe someone has violated this Acceptable Use Policy, please report it to us immediately at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
                <p className="text-base leading-normal text-gray-800 font-light">Please provide detailed information about the violation, including relevant links, timestamps, and descriptions of the content or behavior in question.</p>
              </section>

              {/* Changes to Policy */}
              <section id="changes" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Changes to This Policy</h2>
                <p className="text-base leading-normal text-gray-800 font-light">We may update this Acceptable Use Policy at any time. Continued use of Peak Leads following any changes constitutes your acceptance of the revised Policy.</p>
              </section>

              {/* Contact Us */}
              <section id="contact" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Contact Us</h2>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">If you have questions about this Acceptable Use Policy or need to report a violation, please contact us at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
              </section>

              {/* Final Notice */}
              <section className="pb-6">
                <p className="text-base leading-normal text-gray-800 font-light">
                  By using Peak Leads, you acknowledge that you have read and agree to comply with this Acceptable Use Policy.
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

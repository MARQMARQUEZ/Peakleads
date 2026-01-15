'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function TermsAndConditionsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Terms and Conditions - Peak Leads";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative pt-40 pb-24 bg-gray-50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Title */}
            <div className="md:col-span-3">
              <h1 className="text-[25px] leading-[1.3] font-[450] text-gray-900 mb-1.5">Terms and Conditions</h1>
              <p className="text-base text-gray-600">Last updated Jan 15, 2026</p>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-6 max-w-none text-gray-700 space-y-6">
          
              {/* Introduction */}
              <section className="pb-6 border-b border-gray-200">
                <p className="text-base leading-normal text-gray-800 font-light">
                  Welcome to <strong>Peak Leads</strong>. These Terms and Conditions ("Terms," "Agreement," or "Terms of Use") govern your access to and use of the Peak Leads website, mobile applications, and all related services (collectively, the "Services").
                </p>
                <p className="text-base leading-normal text-gray-800 mt-3 font-light">
                  By accessing or using Peak Leads on any platform (web or mobile), you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our Services.
                </p>
              </section>

              {/* User Eligibility */}
              <section id="eligibility" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">User Eligibility</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">By using Peak Leads, you represent and warrant that:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You are at least 18 years of age or the legal age of majority in your jurisdiction</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You have the legal capacity to enter into binding contracts</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You are not prohibited by law from using the Services</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You will not violate these Terms or any applicable law</span>
                  </li>
                </ul>
              </section>

              {/* Account Registration */}
              <section id="account" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Account Registration</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">When you create an account with Peak Leads, you agree to:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Account Information</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Provide accurate, complete, and current account information</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Maintain the confidentiality of your account credentials</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Accept responsibility for all activities that occur under your account</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Password Security</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">You are responsible for maintaining the secrecy of your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access to your account.</p>
              </section>

              {/* Acceptable Use */}
              <section id="acceptable-use" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Acceptable Use Policy</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">You agree not to use Peak Leads for any purpose that is illegal or prohibited by these Terms. Specifically, you agree not to:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Prohibited Activities</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Engage in any form of illegal activity or fraud</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Harass, threaten, or intimidate any person or entity</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Upload, transmit, or distribute any harmful, malicious, or offensive content</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Attempt to gain unauthorized access to Peak Leads systems or networks</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Violate intellectual property rights of Peak Leads or third parties</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Reverse engineer, decompile, or attempt to derive the source code of our Services</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Use automated tools, scrapers, or bots to access the Services without permission</span>
                  </li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual-property" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Intellectual Property Rights</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Peak Leads Content</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">All content on Peak Leads, including text, graphics, logos, images, and software, is the property of Peak Leads or its content suppliers and is protected by international copyright laws. You may not reproduce, modify, or transmit any content without our prior written consent.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">User-Generated Content</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">When you submit content to Peak Leads, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, and distribute your content for the purpose of providing and improving our Services.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Limited License</h3>
                <p className="text-base leading-normal text-gray-800 font-light">We grant you a limited, non-exclusive, non-transferable license to access and use the Services for your personal, non-commercial purposes. You may not use the Services for any commercial purpose without our express written permission.</p>
              </section>

              {/* Payment Terms */}
              <section id="payment" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Payment Terms</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">By making a purchase through Peak Leads, you agree to the following:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Billing Information</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You provide accurate and complete billing information</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You authorize us to charge your payment method for fees</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>You are responsible for all applicable taxes</span>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-3">Refunds and Cancellation</h3>
                <p className="text-base leading-normal text-gray-800 font-light">Refund policies are determined on a per-service basis. Please contact support at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a> for information regarding specific refund policies for your services.</p>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Limitation of Liability</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Disclaimer of Warranties</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">Peak Leads is provided on an "as-is" and "as-available" basis. We disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be error-free or uninterrupted.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Limitation of Damages</h3>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">To the fullest extent permitted by law, Peak Leads shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or business opportunities arising from your use of or inability to use the Services, even if we have been advised of the possibility of such damages.</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Maximum Liability</h3>
                <p className="text-base leading-normal text-gray-800 font-light">Our total liability to you for all claims arising from these Terms shall not exceed the amount you paid for the Services in the twelve months preceding the claim.</p>
              </section>

              {/* Indemnification */}
              <section id="indemnification" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Indemnification</h2>
                <p className="text-base leading-normal text-gray-800 font-light">You agree to indemnify, defend, and hold harmless Peak Leads, its officers, directors, employees, and agents from any claims, liabilities, damages, and expenses (including attorney's fees) arising from or related to your use of the Services, your violation of these Terms, or your violation of any applicable law or the rights of any third party.</p>
              </section>

              {/* Termination */}
              <section id="termination" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Termination</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">We may terminate or suspend your account and access to the Services at any time, in our sole discretion, without notice or liability for:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Violation of these Terms</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Engagement in illegal or fraudulent activity</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Any other reason at our discretion</span>
                  </li>
                </ul>
                <p className="text-base leading-normal text-gray-800 font-light">You may terminate your account at any time by contacting support at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
              </section>

              {/* Changes to Terms */}
              <section id="changes" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Changes to These Terms</h2>
                <p className="text-base leading-normal text-gray-800 font-light">We may modify these Terms at any time without prior notice. Your continued use of the Services following any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically to stay informed of any updates.</p>
              </section>

              {/* Governing Law */}
              <section id="governing-law" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Governing Law and Jurisdiction</h2>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Peak Leads operates, without regard to its conflicts of law principles.</p>
                <p className="text-base leading-normal text-gray-800 font-light">You agree to submit to the exclusive jurisdiction of the courts located in that jurisdiction for the resolution of any disputes arising from these Terms or your use of the Services.</p>
              </section>

              {/* Severability */}
              <section id="severability" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Severability</h2>
                <p className="text-base leading-normal text-gray-800 font-light">If any provision of these Terms is found to be invalid or unenforceable, that provision will be severed, and the remaining provisions will continue in full force and effect.</p>
              </section>

              {/* Contact Us */}
              <section id="contact" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Contact Us</h2>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
              </section>

              {/* Final Notice */}
              <section className="pb-6">
                <p className="text-base leading-normal text-gray-800 font-light">
                  By using Peak Leads, you acknowledge that you have read and agree to be bound by these Terms and Conditions.
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

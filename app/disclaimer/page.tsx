'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function DisclaimerPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Disclaimer - Peak Leads";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative pt-40 pb-24 bg-gray-50">
        <div className="max-w-[1360px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8">
            {/* Left Side - Title */}
            <div className="md:col-span-3">
              <h1 className="text-[25px] leading-[1.3] font-[450] text-gray-900 mb-1.5">Disclaimer</h1>
              <p className="text-base text-gray-600">Last updated Jan 15, 2026</p>
            </div>

            {/* Right Side - Content */}
            <div className="md:col-span-6 max-w-none text-gray-700 space-y-6">
          
              {/* Introduction */}
              <section className="pb-6 border-b border-gray-200">
                <p className="text-base leading-normal text-gray-800 font-light">
                  This Disclaimer provides important information about the use of <strong>Peak Leads</strong> website, applications, and services. Please read this Disclaimer carefully before using our Services.
                </p>
                <p className="text-base leading-normal text-gray-800 mt-3 font-light">
                  By accessing and using Peak Leads, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer and all terms contained herein.
                </p>
              </section>

              {/* As-Is Disclaimer */}
              <section id="as-is" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Services Provided "As-Is"</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads provides its website, applications, and services on an "as-is" and "as-available" basis without warranties of any kind, whether express or implied. To the fullest extent permitted by law, we disclaim all warranties, including:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Implied warranties of merchantability and fitness for a particular purpose</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Warranties of title, non-infringement, and data accuracy</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Warranties that services will meet your requirements or expectations</span>
                  </li>
                </ul>
              </section>

              {/* No Guarantee of Results */}
              <section id="no-guarantee" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">No Guarantee of Results</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads provides web design, marketing, and lead generation services. However, we cannot guarantee specific results, including:</p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-3">Performance Metrics</h3>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Specific traffic increases, conversion rates, or sales figures</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Search engine rankings or SEO performance</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Lead quality, quantity, or customer acquisition timelines</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-start font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0 mt-1">■</span>
                    <span>Return on investment (ROI) or specific business outcomes</span>
                  </li>
                </ul>

                <p className="text-base leading-normal text-gray-800 mt-3 font-light">Results depend on various factors outside Peak Leads' control, including market conditions, user engagement, and implementation by your team.</p>
              </section>

              {/* Third-Party Content */}
              <section id="third-party-content" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Third-Party Content and Links</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads may contain links to third-party websites and services. We are not responsible for:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>The accuracy, quality, or legality of third-party content</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Any services or products offered by third parties</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Any transactions or agreements with third parties</span>
                  </li>
                </ul>
                <p className="text-base leading-normal text-gray-800 mt-3 font-light">Your interactions with third-party services are governed by their respective terms and policies.</p>
              </section>

              {/* Technical Issues */}
              <section id="technical-issues" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Technical Issues and Interruptions</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads does not guarantee uninterrupted or error-free access to our Services. We are not liable for:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Service downtime, outages, or technical failures</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Data loss or corruption resulting from technical issues</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Delays in service delivery or communication</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Issues arising from your internet connection or device</span>
                  </li>
                </ul>
              </section>

              {/* User Responsibility */}
              <section id="user-responsibility" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">User Responsibility</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">You are responsible for:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Your use of Peak Leads and compliance with all applicable laws</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>The security of your account credentials and login information</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>The accuracy and legality of information you provide</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Your device's security and the confidentiality of your data</span>
                  </li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section id="liability" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Limitation of Liability</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">To the maximum extent permitted by law, Peak Leads shall not be liable for any:</p>
                <ul className="space-y-2 mb-3">
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Direct, indirect, incidental, or consequential damages</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Lost profits, revenue, or business opportunities</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Data loss or corruption</span>
                  </li>
                  <li className="text-base leading-normal text-gray-800 flex items-center font-light">
                    <span className="mr-4 text-gray-500 text-xs opacity-50 scale-75 flex-shrink-0">■</span>
                    <span>Personal injury or property damage</span>
                  </li>
                </ul>
              </section>

              {/* Medical and Professional Disclaimer */}
              <section id="professional-disclaimer" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Professional Advice Disclaimer</h2>
                <p className="text-base leading-normal text-gray-800 mb-4 font-light">Peak Leads does not provide legal, medical, financial, or professional advice. Any content, recommendations, or strategies provided are for informational purposes only and should not be considered professional guidance.</p>
                <p className="text-base leading-normal text-gray-800 font-light">You should consult with qualified professionals before making any business, financial, or legal decisions based on information obtained through Peak Leads.</p>
              </section>

              {/* Changes to Disclaimer */}
              <section id="changes" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Changes to Disclaimer</h2>
                <p className="text-base leading-normal text-gray-800 font-light">We reserve the right to modify this Disclaimer at any time. Continued use of Peak Leads following any changes constitutes your acceptance of the revised Disclaimer.</p>
              </section>

              {/* Contact Us */}
              <section id="contact" className="pb-6 border-b border-gray-200 scroll-mt-20">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">Contact Us</h2>
                <p className="text-base leading-normal text-gray-800 mb-3 font-light">If you have any questions about this Disclaimer, please contact us at <a href="mailto:bradley@peakleads.agency" className="text-gray-900 hover:text-gray-600 underline transition-colors">bradley@peakleads.agency</a>.</p>
              </section>

              {/* Final Notice */}
              <section className="pb-6">
                <p className="text-base leading-normal text-gray-800 font-light">
                  By using Peak Leads, you acknowledge that you have read and understood this Disclaimer and accept all its terms.
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

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="mx-auto max-w-[1366px]">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`relative flex items-center justify-between h-16 px-10 rounded-full transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/90 shadow-xl shadow-black/10 border border-gray-200/60' 
              : 'bg-white/70 shadow-lg shadow-black/5 border border-white/60'
          }`}
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Inner shine effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent rounded-full pointer-events-none"></div>
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/Peakleads.png"
                alt="PeakLeads Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="text-lg font-bold text-gray-900">PeakLeads</span>
            </motion.div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6 relative z-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="#services">What We Do</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10"
          >
            <Link 
              href="#book" 
              className="relative group flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative text-white text-sm font-semibold">Book A Call</span>
            </Link>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
    >
      {children}
    </Link>
  );
}

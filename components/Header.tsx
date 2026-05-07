"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const navLinks = [
  { href: "/", label: "Atelier" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_0_rgba(207,197,185,0.3)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="flex justify-between items-center px-6 md:px-margin-page max-w-[1440px] mx-auto">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-10 h-10 hover:opacity-70 smooth-ease ${
              isScrolled ? "text-primary" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
 
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className={`font-display text-headline-md tracking-[0.2em] uppercase smooth-ease group-hover:tracking-[0.3em] ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              LUMIÈRE
            </h1>
          </Link>
 
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-gutter">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-label-sm font-label tracking-[0.1em] smooth-ease ${
                  pathname === link.href
                    ? isScrolled ? "text-primary font-bold" : "text-white font-bold"
                    : isScrolled ? "text-on-surface-variant hover:text-primary" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className={`absolute -bottom-2 left-0 right-0 h-[2px] ${
                      isScrolled ? "bg-primary" : "bg-white"
                    }`}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>
 
          {/* CTA */}
          <Link
            href="/experience#contact"
            className={`hidden sm:block text-label-sm font-label tracking-[0.15em] px-6 py-3 smooth-ease active:scale-95 border ${
              isScrolled 
                ? "text-primary border-primary/20 hover:bg-primary hover:text-on-primary" 
                : "text-white border-white/30 hover:bg-white hover:text-black"
            }`}
          >
            CONSULTATION
          </Link>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className={`text-headline-lg font-headline smooth-ease ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Link
                href="/experience#contact"
                className="text-label-sm font-label tracking-[0.1em] text-primary border border-primary px-8 py-3 hover:bg-primary hover:text-on-primary smooth-ease"
              >
                CONSULTATION
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

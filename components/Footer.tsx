"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Architects", href: "/architects" },
    { label: "Experience", href: "/experience" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/arova" },
    { label: "LinkedIn", href: "https://linkedin.com/company/arova" },
    { label: "Pinterest", href: "https://pinterest.com/arova" },
    { label: "Twitter", href: "https://twitter.com/arova" },
  ],
};

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant/30">
      <div className="max-w-[1440px] mx-auto px-6 md:px-margin-page py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="group">
              <h2 className="font-display text-headline-lg text-primary tracking-[0.2em] uppercase smooth-ease group-hover:tracking-[0.3em]">
                AROVA
              </h2>
            </Link>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Elevating the human experience through intentional space design and
              architectural clarity. Based in the heart of design, working globally.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-body-md">hello@arova-interiors.com</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-body-md">+1 (234) 567-890</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-label-sm font-label text-primary tracking-[0.2em] uppercase">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-body-md text-on-surface-variant hover:text-primary smooth-ease">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-label-sm font-label text-primary tracking-[0.2em] uppercase">Connect</h4>
            <ul className="space-y-4">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-body-md text-on-surface-variant hover:text-primary smooth-ease">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map / Location */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-label-sm font-label text-primary tracking-[0.2em] uppercase">The Atelier</h4>
            <div className="w-full h-48 bg-surface-dim grayscale brightness-75 rounded-sm overflow-hidden border border-outline-variant/30">
              {isMounted && (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937371434!2d-73.98731968459424!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625584218225!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Office Location"
                />
              )}
            </div>
            <p className="text-body-sm text-on-surface-variant italic">
              123 Design District, Manhattan, NY 10001
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-label text-on-surface-variant tracking-[0.3em] uppercase">
            © 2024 AROVA INTERIORS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] font-label text-on-surface-variant/50 tracking-[0.3em] uppercase">
            Defining spaces through silence.
          </p>
        </div>
      </div>
    </footer>
  );
}

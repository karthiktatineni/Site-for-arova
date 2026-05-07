"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  explore: [
    { label: "Atelier", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Experience", href: "/experience" },
    { label: "Process", href: "/services#process" },
  ],
  connect: [
    { label: "Journal", href: "#" },
    { label: "Contact", href: "/experience#contact" },
    { label: "Instagram", href: "#" },
    { label: "Pinterest", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-container border-t border-outline-variant/30">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-margin-page py-stack-lg max-w-[1440px] mx-auto gap-gutter">
        {/* Brand */}
        <div className="flex flex-col gap-stack-sm max-w-sm mb-stack-md md:mb-0">
          <Link href="/">
            <h2 className="font-display text-headline-lg text-primary tracking-[0.15em] uppercase smooth-ease hover:tracking-[0.25em]">
              LUMIÈRE
            </h2>
          </Link>
          <p className="text-body-md text-on-surface-variant">
            Elevating the human experience through intentional space design and
            architectural clarity since 2018.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-gutter gap-y-stack-sm md:flex md:gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-label-sm font-label text-primary tracking-[0.15em] uppercase mb-2">
              EXPLORE
            </p>
            {footerLinks.explore.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 smooth-ease inline-block"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-label-sm font-label text-primary tracking-[0.15em] uppercase mb-2">
              CONNECT
            </p>
            {footerLinks.connect.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-md text-on-surface-variant hover:text-primary hover:translate-x-1 smooth-ease inline-block"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 md:px-margin-page py-6 border-t border-outline-variant/10 max-w-[1440px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="text-[10px] md:text-label-sm font-label text-on-surface-variant tracking-[0.2em] text-center md:text-left"
        >
          © 2024 LUMIÈRE INTERIORS. ALL RIGHTS RESERVED.
        </motion.p>
      </div>
    </footer>
  );
}

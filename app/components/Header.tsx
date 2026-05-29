"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "#services", label: "Prestations" },
  { href: "#atelier", label: "L'atelier" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-moss/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="#top" className="flex items-center gap-3" aria-label="BoschPrepa — accueil">
          <Image
            src="/brand/logo-horizontal-light.svg"
            alt="BoschPrepa"
            width={170}
            height={36}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-bone/70 transition-colors hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton
            variant="primary"
            label="WhatsApp"
            className="!h-11 !px-5 !text-sm"
          />
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-bone md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/[0.06] bg-moss/95 px-6 py-6">
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-bone/80 transition-colors hover:bg-white/5 hover:text-bone"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <WhatsAppButton variant="primary" label="WhatsApp" className="w-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

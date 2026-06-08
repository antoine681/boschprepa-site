import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "../lib/contact";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-moss-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="#top" aria-label="BoschPrepa — accueil">
              <Image
                src="/brand/logo-horizontal-light.svg"
                alt="BoschPrepa"
                width={200}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-bone/50">
              Préparation moteur, banc de puissance et usinage à Perpignan.
              Travail à la cote, finitions soignées, performance mesurée.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone/40">
              Prestations
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-bone/70">
              <li><Link href="#services" className="hover:text-lime">Passage au banc</Link></li>
              <li><Link href="#services" className="hover:text-lime">Montage moteur</Link></li>
              <li><Link href="#services" className="hover:text-lime">Préparation</Link></li>
              <li><Link href="#services" className="hover:text-lime">Usinage</Link></li>
              <li><Link href="#services" className="hover:text-lime">Machine proto vario</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bone/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-bone/70">
              <li>
                <Link href={CONTACT.phoneHref} className="hover:text-lime">
                  {CONTACT.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${CONTACT.email}`} className="hover:text-lime">
                  {CONTACT.email}
                </Link>
              </li>
              <li className="text-bone/50">
                {CONTACT.city} — {CONTACT.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-bone/40 sm:flex-row sm:items-center">
          <span>© {year} BoschPrepa. Tous droits réservés.</span>
          <span>Atelier de préparation moteur · Perpignan (66)</span>
        </div>

        <div className="mt-4 flex justify-center sm:justify-end">
          <a
            href="https://www.audemarmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-bone/30 transition-colors hover:text-lime"
            aria-label="Site réalisé par AudemarMedia — ouvre dans un nouvel onglet"
          >
            <span>Site by</span>
            <span className="font-semibold text-bone/60 transition-colors group-hover:text-lime">
              AudemarMedia
            </span>
            <svg
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

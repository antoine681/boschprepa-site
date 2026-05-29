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
      </div>
    </footer>
  );
}

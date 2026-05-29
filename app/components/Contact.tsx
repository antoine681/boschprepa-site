import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { CONTACT, whatsappHref } from "../lib/contact";
import { WhatsAppButton } from "./WhatsAppButton";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-40">
      {/* Lime accent panel */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-lime/20 bg-gradient-to-br from-moss-700 via-moss to-moss-950 px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          {/* Lime glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-lime/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />

          {/* Submark */}
          <Image
            src="/brand/submark-light.svg"
            alt=""
            width={300}
            height={300}
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-6 h-72 w-auto opacity-[0.06] lg:h-96"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-lime">
                <span className="h-px w-8 bg-lime/40" />
                04 — Contact
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tightest text-balance text-bone sm:text-5xl lg:text-6xl">
                Parlons de votre <span className="text-lime">projet.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">
                Préparation, devis, ou simple question technique — la réponse
                la plus rapide reste WhatsApp. On regarde ensemble ce qui est
                faisable, et à quel coût.
              </p>

              <div className="mt-10">
                <WhatsAppButton label="Démarrer la discussion sur WhatsApp" />
              </div>

              <p className="mt-4 text-sm text-bone/40">
                Lun – Sam · Réponse en quelques heures ouvrées
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-3">
                <ContactRow
                  icon={Phone}
                  label="Téléphone"
                  value={CONTACT.phone}
                  href={CONTACT.phoneHref}
                />
                <ContactRow
                  icon={Mail}
                  label="Email"
                  value={CONTACT.email}
                  href={`mailto:${CONTACT.email}`}
                />
                <ContactRow
                  icon={MapPin}
                  label="Atelier"
                  value={`${CONTACT.city} · ${CONTACT.region}`}
                />
              </div>

              <div className="mt-6 rounded-2xl border border-lime/20 bg-lime/5 p-5">
                <p className="text-sm leading-relaxed text-bone/80">
                  <span className="font-semibold text-lime">À noter —</span>{" "}
                  les visites de l'atelier se font sur rendez-vous uniquement,
                  pour ne pas interrompre un montage en cours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-200 group-hover:border-lime/30 group-hover:bg-white/[0.04]">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime">
        <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-bone/40">
          {label}
        </div>
        <div className="mt-0.5 truncate font-display text-lg font-semibold text-bone">
          {value}
        </div>
      </div>
      {href && (
        <ArrowUpRight
          size={18}
          className="shrink-0 text-bone/30 transition-all duration-200 group-hover:text-lime"
          aria-hidden="true"
        />
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group block">
        {Inner}
      </Link>
    );
  }
  return <div className="group">{Inner}</div>;
}

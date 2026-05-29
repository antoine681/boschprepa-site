import { Gauge, Cog, Wrench, CircleDot, Cpu, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { whatsappHref } from "../lib/contact";

type Service = {
  id: string;
  title: string;
  short: string;
  body: string;
  icon: LucideIcon;
  tags: string[];
  feature?: boolean;
};

const services: Service[] = [
  {
    id: "banc",
    title: "Passage au banc",
    short: "Mesure réelle, pas de promesses.",
    body: "Chevaux, couple, AFR, montée en charge. Validation d'une cartographie, diagnostic d'un manque de puissance, comparatif avant/après préparation — la courbe parle pour vous.",
    icon: Gauge,
    tags: ["Puissance", "Couple", "AFR"],
    feature: true,
  },
  {
    id: "montage",
    title: "Montage moteur",
    short: "Du bloc nu au moteur tournant.",
    body: "Assemblage propre et tracé : couples au pied-livre, jeux contrôlés à la jauge, étanchéités soignées. Chaque opération est notée, chaque pièce vérifiée avant assemblage.",
    icon: Cog,
    tags: ["Assemblage", "Couples", "Jeux"],
  },
  {
    id: "prepa",
    title: "Préparation",
    short: "Pensée pour son usage.",
    body: "Étude de cahier des charges, choix des composants, optimisation du couple ou de la puissance selon l'objectif. Atmo, suralimenté, route ou compétition — chaque prépa est dessinée pour son terrain.",
    icon: Wrench,
    tags: ["Étude", "Optimisation", "Route / Piste"],
    feature: true,
  },
  {
    id: "usinage",
    title: "Usinage",
    short: "Travail à la cote.",
    body: "Rectification de portées, rodage de cylindres, alésage, surfaçage de culasse. Les opérations qui fiabilisent un moteur ou rattrapent l'usure — réalisées en interne, sans intermédiaire.",
    icon: CircleDot,
    tags: ["Rectif", "Rodage", "Surfaçage"],
  },
  {
    id: "proto",
    title: "Montage machine proto vario",
    short: "Bancs et machines spéciales.",
    body: "Installation et mise en route de machines proto vario, calibration des chaînes de mesure, validation des process. Pour les ateliers et bureaux d'études qui ont besoin d'un opérateur fiable.",
    icon: Cpu,
    tags: ["Installation", "Calibration", "Process"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionEyebrow>01 — Prestations</SectionEyebrow>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.02] tracking-tightest text-balance text-bone sm:text-5xl lg:text-6xl">
            Cinq métiers, <span className="text-lime">un seul atelier.</span>
          </h2>
          <p className="max-w-md text-base text-bone/60 sm:text-lg">
            De l'étude à la mise en route, tout est concentré sous un même
            toit. Pas de sous-traitance, pas d'intermédiaire.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const span = service.feature ? "md:col-span-3" : "md:col-span-2";
  // Layout map: featured (3) + small (2) + featured (3) + small (2) + small (2)
  // 3+2 (row 1, =5 cols) → need col-span-1 filler? Let's use a different grid: 6 cols × 2 rows
  // Row 1: feature(3) + small(2) + small(2)? = 7, too much.
  // Use: feature(3) | small(3) | feature(3) | small(3) | small(6) for visual rhythm
  // Simpler: keep all cards equal width on md, feature only changes height/visual emphasis
  const layoutClass = [
    "md:col-span-3", // banc - feature
    "md:col-span-3", // montage
    "md:col-span-2", // prepa - feature
    "md:col-span-2", // usinage
    "md:col-span-2", // proto
  ][index];

  return (
    <article
      className={`group relative isolate overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-lime/30 hover:bg-white/[0.04] sm:p-8 ${layoutClass}`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime/0 blur-3xl transition-all duration-500 group-hover:bg-lime/10" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-lime/30 bg-lime/10 text-lime transition-all duration-300 group-hover:bg-lime group-hover:text-moss">
            <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
          </div>
          <span className="font-display text-xs font-semibold tracking-[0.18em] text-bone/30">
            0{index + 1}
          </span>
        </div>

        <h3 className="mt-8 font-display text-2xl font-semibold leading-tight text-bone sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-2 text-base font-medium text-lime/90">
          {service.short}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-bone/65">
          {service.body}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {service.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-bone/60"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-bone transition-all hover:gap-2.5 hover:text-lime"
          aria-label={`Demander un devis pour ${service.title} sur WhatsApp`}
        >
          Demander un devis
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-lime">
      <span className="h-px w-8 bg-lime/40" />
      {children}
    </div>
  );
}

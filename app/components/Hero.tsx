import { ArrowDown, MapPin } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-moss"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-radial-glow opacity-90" />
      <div className="absolute inset-0 bg-grid-faint bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-moss" />

      {/* Floating ring */}
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/2 hidden h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-lime/10 md:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-lime/20 md:block"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-10">
        {/* Location chip */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-bone/70 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime" />
          </span>
          <MapPin size={12} className="text-lime" aria-hidden="true" />
          Atelier · Perpignan (66)
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-[clamp(2.6rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-tightest text-balance text-bone">
          Du bloc nu à la <span className="text-lime">courbe</span>
          <br className="hidden sm:block" /> de couple.
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-bone/70 sm:text-xl">
          Préparation moteur, banc de puissance et usinage en interne.
          On travaille à la cote, sans approximation — atmo, suralimenté,
          route ou piste.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <WhatsAppButton label="Parler de mon projet" />
          <a
            href="#services"
            className="group inline-flex items-center gap-2 rounded-full px-2 py-3 text-sm font-medium text-bone/80 transition-colors hover:text-bone"
          >
            <span className="border-b border-bone/30 pb-0.5 group-hover:border-bone">
              Voir les prestations
            </span>
            <ArrowDown
              size={16}
              className="transition-transform duration-200 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        {/* Spec strip */}
        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/[0.08] pt-10 sm:grid-cols-4">
          <Spec value="Banc" label="Puissance & couple" />
          <Spec value="Montage" label="Moteurs complets" />
          <Spec value="Usinage" label="Travail à la cote" />
          <Spec value="Proto" label="Machine vario" />
        </dl>
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-bone/40 sm:flex">
        <span>Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-bone/40 to-transparent" />
      </div>
    </section>
  );
}

function Spec({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-2xl font-semibold text-lime sm:text-3xl">
        {value}
      </dt>
      <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-bone/50">
        {label}
      </dd>
    </div>
  );
}

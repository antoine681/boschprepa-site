import { Camera, Instagram } from "lucide-react";

const tiles = [
  { label: "Banc de puissance", aspect: "aspect-[4/5]", span: "md:col-span-2 md:row-span-2" },
  { label: "Bloc strippé", aspect: "aspect-square", span: "md:col-span-1" },
  { label: "Vilebrequin", aspect: "aspect-square", span: "md:col-span-1" },
  { label: "Surfaçage culasse", aspect: "aspect-[4/3]", span: "md:col-span-2" },
  { label: "Montage tracé", aspect: "aspect-square", span: "md:col-span-1" },
  { label: "Cycle de rodage", aspect: "aspect-square", span: "md:col-span-1" },
];

export function Gallery() {
  return (
    <section id="galerie" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-lime">
              <span className="h-px w-8 bg-lime/40" />
              03 — Galerie
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.04] tracking-tightest text-balance text-bone sm:text-5xl lg:text-6xl">
              Quelques étapes <span className="text-lime">sur le marbre.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base text-bone/60">
            Les images parlent souvent mieux qu'un argumentaire. Suivez
            l'atelier au quotidien sur Instagram.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {tiles.map((t, i) => (
            <GalleryTile key={i} label={t.label} span={t.span} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
          <div className="flex items-center gap-3 text-sm text-bone/70">
            <Camera size={16} className="text-lime" />
            Photos d'illustration — les images réelles de l'atelier arrivent.
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-bone transition-colors hover:border-lime/40 hover:text-lime"
          >
            <Instagram size={16} />
            Suivre sur Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ label, span }: { label: string; span: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${span}`}
    >
      {/* Placeholder gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-moss-700 via-moss to-moss-950" />
      <div className="absolute inset-0 bg-grid-faint bg-[size:24px_24px] opacity-50 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Diagonal accent that swipes on hover */}
      <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-lime/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />

      {/* Center icon */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-moss/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-lime/40">
          <Camera
            size={20}
            className="text-bone/40 transition-colors group-hover:text-lime"
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-xs font-medium uppercase tracking-wider text-bone/60 transition-colors group-hover:text-bone">
          {label}
        </div>
      </div>
    </div>
  );
}

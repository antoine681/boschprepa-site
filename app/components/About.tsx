import Image from "next/image";
import { Ruler, Hammer, ClipboardList, Activity } from "lucide-react";

const values = [
  {
    icon: Ruler,
    title: "Travail à la cote",
    text: "Chaque jeu mesuré, chaque tolérance respectée. La précision n'est pas négociable.",
  },
  {
    icon: ClipboardList,
    title: "Tracé & documenté",
    text: "Couples, jeux, opérations notées. Vous savez ce qui a été fait sur votre moteur.",
  },
  {
    icon: Hammer,
    title: "Tout en interne",
    text: "Banc, usinage, montage : pas d'intermédiaire, pas de délais étirés.",
  },
  {
    icon: Activity,
    title: "Validé au banc",
    text: "Une prépa ne vaut que par sa mesure. Chaque moteur passe sur le banc avant livraison.",
  },
];

export function About() {
  return (
    <section id="atelier" className="relative overflow-hidden py-28 lg:py-40">
      {/* Diagonal accent background */}
      <div className="absolute inset-0 bg-gradient-to-b from-moss to-moss-800" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Image side */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08]">
              {/* Placeholder atelier image */}
              <div className="absolute inset-0 bg-gradient-to-br from-moss-700 via-moss to-moss-950" />
              <div className="absolute inset-0 bg-grid-faint bg-[size:32px_32px] opacity-60" />

              {/* Submark watermark */}
              <div className="absolute inset-0 grid place-items-center">
                <Image
                  src="/brand/submark-light.svg"
                  alt=""
                  width={220}
                  height={220}
                  className="h-44 w-auto opacity-[0.08]"
                />
              </div>

              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-moss/70 p-5 backdrop-blur-xl">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl font-semibold text-lime">
                    66
                  </span>
                  <div className="text-sm leading-tight text-bone/70">
                    Pyrénées-Orientales
                    <br />
                    <span className="text-bone/40">Occitanie · France</span>
                  </div>
                </div>
              </div>

              {/* Corner tag */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-moss/60 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-lime backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                Atelier en activité
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-lime">
              <span className="h-px w-8 bg-lime/40" />
              02 — L'atelier
            </div>

            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-tightest text-balance text-bone sm:text-5xl lg:text-6xl">
              On traite un moteur comme une <span className="text-lime">pièce</span> qu'on monterait pour soi.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-bone/70">
              <p>
                Au cœur des Pyrénées-Orientales, à quelques kilomètres de
                Perpignan, BoschPrepa concentre sous un même toit ce qu'un
                moteur préparé exige : banc de puissance, machines d'usinage,
                espace de montage propre et outillage adapté.
              </p>
              <p>
                Pas de chaîne, pas de cadence imposée. Chaque moteur est suivi
                par la même paire de mains, du démontage au cycle de rodage.
                Cette continuité, c'est la garantie qu'aucun détail ne se perd
                entre deux ateliers.
              </p>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <li
                    key={v.title}
                    className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-lime/20"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime">
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-bone">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-bone/60">
                        {v.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

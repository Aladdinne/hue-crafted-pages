import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CircuitBoard,
  Factory,
  Gauge,
  HardHat,
  Layers,
  Ruler,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero-piping.jpg";
import cad from "@/assets/cad-model.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOUiTECH Engineering — Bureau d'études en ingénierie industrielle" },
      {
        name: "description",
        content:
          "Bureau d'études pluridisciplinaire : piping, structures métalliques, génie civil, électricité & instrumentation, modélisation 3D et calculs techniques.",
      },
      { property: "og:title", content: "SOUiTECH Engineering — Ingénierie industrielle" },
      {
        property: "og:description",
        content:
          "Études techniques, modélisation 3D et assistance technique pour l'industrie, l'EPC et les maîtres d'ouvrage.",
      },
    ],
  }),
  component: Home,
});

const domains = [
  { icon: Factory, title: "Piping & réseaux industriels", text: "Conception, isométriques et supportage." },
  { icon: Layers, title: "Structures métalliques", text: "Charpentes, plateformes et ossatures." },
  { icon: HardHat, title: "Génie civil industriel", text: "Fondations, massifs et ouvrages." },
  { icon: CircuitBoard, title: "Électricité & Instrumentation", text: "Schémas, boucles et implantations." },
  { icon: Boxes, title: "Équipements industriels", text: "Dimensionnement et intégration." },
  { icon: Gauge, title: "Utilités & process", text: "Installations et réseaux d'utilités." },
];

const stats = [
  { value: "20+", label: "Clients industriels" },
  { value: "6", label: "Disciplines couvertes" },
  { value: "3D", label: "Modélisation & conception" },
  { value: "100%", label: "Standards internationaux" },
];

function Home() {
  return (
    <div>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={hero}
          alt="Réseau de tuyauterie industrielle au crépuscule"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,color-mix(in_oklab,var(--navy-deep)_92%,transparent)_0%,color-mix(in_oklab,var(--navy)_75%,transparent)_48%,transparent_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 md:px-8">
          <Reveal>
            <span className="inline-block rounded-full border border-navy-foreground/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-navy-foreground/85">
              Bureau d'études
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold uppercase leading-[0.95] text-navy-foreground md:text-7xl">
              L'ingénierie au service de la{" "}
              <span className="text-accent">performance industrielle</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/85 md:text-lg">
              SOUiTECH Engineering couvre l'ensemble des disciplines de l'ingénierie
              industrielle : modélisation & conception 3D, piping & tuyauterie, structure
              & génie civil, étude électrique & instrumentation.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap gap-4 pb-16">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Nos services
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-navy-foreground/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground transition-colors duration-300 hover:bg-navy-foreground/10"
              >
                Coordonnées
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="brand-gradient">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-navy-foreground md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-navy-foreground/70">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase md:text-5xl">Nos domaines d'intervention</h2>
          <div className="rule-accent mt-4" />
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Une équipe expérimentée et multidisciplinaire qui intervient depuis les phases
            d'étude et de conception jusqu'à l'assistance technique et au suivi des
            réalisations.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal key={d.title} delay={i * 80}>
              <article className="card-industrial h-full p-7">
                <div className="brand-gradient inline-flex rounded-md p-3 text-navy-foreground">
                  <d.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold uppercase">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="steel-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elevated)]">
              <img
                src={cad}
                alt="Modélisation 3D d'une unité industrielle"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="text-4xl font-bold uppercase md:text-5xl">
              Pourquoi <span className="text-gradient-brand">SOUiTECH</span> ?
            </h2>
            <div className="rule-accent mt-4" />
            <ul className="mt-8 space-y-4">
              {[
                "Équipe multidisciplinaire expérimentée",
                "Réservoir d'experts agréés et spécialisés",
                "Solutions adaptées à vos contraintes techniques",
                "Flexibilité et réactivité projet",
                "Qualité et conformité aux standards internationaux",
                "Coût optimisé et forte valeur ajoutée",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Ruler className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed md:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

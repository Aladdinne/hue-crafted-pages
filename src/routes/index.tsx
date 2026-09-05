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
import { useLang } from "@/i18n/LanguageProvider";
import hero from "@/assets/hero-piping.jpg";
import cad from "@/assets/cad-model.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const domainIcons = [Factory, Layers, HardHat, CircuitBoard, Boxes, Gauge];
const statValues = ["20+", "6", "3D", "100%"];

function Home() {
  const { t } = useLang();

  return (
    <div>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={hero}
          alt={t.home.heroAlt}
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,color-mix(in_oklab,var(--sky-blue)_92%,transparent)_0%,color-mix(in_oklab,var(--navy)_75%,transparent)_48%,transparent_100%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 md:px-8">
          <Reveal>
            <span className="inline-block rounded-full border border-navy-foreground/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-navy-foreground/85">
              {t.home.badge}
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl text-5xl font-bold uppercase leading-[0.95] text-navy-foreground md:text-7xl">
              {t.home.titleA}{" "}
              <span className="text-accent">{t.home.titleB}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/85 md:text-lg">
              {t.home.intro}
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-wrap gap-4 pb-16">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-accent-foreground shadow-[var(--shadow-elevated)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.home.ctaServices}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-navy-foreground/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-navy-foreground transition-colors duration-300 hover:bg-navy-foreground/10"
              >
                {t.home.ctaContact}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="brand-gradients">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8">
          {statValues.map((value, i) => (
            <Reveal key={value} delay={i * 90}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-navy-foreground md:text-5xl">
                  {value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-navy-foreground/70">
                  {t.home.stats[i]}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase md:text-5xl">{t.home.domainsTitle}</h2>
          <div className="rule-accent mt-4" />
          <p className="mt-6 max-w-2xl text-muted-foreground">{t.home.domainsIntro}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.home.domains.map((d, i) => {
            const Icon = domainIcons[i] ?? Factory;
            return (
              <Reveal key={d.title} delay={i * 80}>
                <article className="card-industrial h-full p-7">
                  <div className="brand-gradient inline-flex rounded-md p-3 text-navy-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold uppercase">{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="steel-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elevated)]">
              <img
                src={cad}
                alt={t.home.cadAlt}
                width={1200}
                height={900}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="text-4xl font-bold uppercase md:text-5xl">
              {t.home.whyTitle} <span className="text-gradient-brand">SOUiTECH</span> ?
            </h2>
            <div className="rule-accent mt-4" />
            <ul className="mt-8 space-y-4">
              {t.home.why.map((item) => (
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

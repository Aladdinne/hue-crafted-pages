import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import team from "@/assets/team-meeting.jpg";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  const { t } = useLang();

  return (
    <div>
      <section className="brand-gradient pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-bold uppercase text-navy-foreground md:text-6xl">
              {t.services.title}
            </h1>
            <div className="rule-accent mt-5" />
            <p className="mt-6 max-w-2xl text-navy-foreground/85">{t.services.intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {t.services.blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <article className="card-industrial h-full p-8">
                <span className="font-display text-5xl font-bold text-steel">
                  0{i + 1}
                </span>
                <h2 className="mt-2 text-2xl font-semibold uppercase">{b.title}</h2>
                <div className="rule-accent mt-4" />
                <ul className="mt-6 space-y-3">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="steel-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg shadow-[var(--shadow-elevated)]">
              <img
                src={team}
                alt={t.services.teamAlt}
                width={1200}
                height={800}
                loading="lazy"
                className="w-full transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="text-4xl font-bold uppercase">{t.services.teamTitle}</h2>
            <div className="rule-accent mt-4" />
            <p className="mt-6 leading-relaxed text-muted-foreground">{t.services.teamText}</p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors duration-300 hover:bg-accent"
            >
              {t.services.cta}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

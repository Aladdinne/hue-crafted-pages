import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import team from "@/assets/team-meeting.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SOUiTECH Engineering" },
      {
        name: "description",
        content:
          "Ingénierie & études techniques, modélisation & conception 3D, calculs & analyses, assistance et sous-traitance technique pour l'industrie.",
      },
      { property: "og:title", content: "Services — SOUiTECH Engineering" },
      {
        property: "og:description",
        content:
          "Des prestations complètes couvrant l'ensemble des disciplines de l'ingénierie industrielle.",
      },
    ],
  }),
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
        <div className="grid gap-6 md:grid-cols-2">
          {t.services.blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <article className="card-industrial h-full p-8">
                <h2 className="font-display text-2xl font-bold uppercase tracking-wide">
                  {b.title}
                </h2>
                <div className="rule-accent mt-3" />
                <ul className="mt-5 space-y-2.5">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground/85">
                      <span className="brand-gradient mt-2 size-2 shrink-0 rounded-full" />
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
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold uppercase">{t.services.teamTitle}</h2>
              <div className="rule-accent mt-4" />
              <p className="mt-6 max-w-xl text-muted-foreground">{t.services.teamText}</p>
              <Link
                to="/contact"
                className="mt-8 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-accent hover:shadow-[var(--shadow-elevated)]"
              >
                {t.services.cta}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={team}
              alt={t.services.teamAlt}
              width={960}
              height={640}
              loading="lazy"
              className="w-full rounded-lg object-cover shadow-[var(--shadow-elevated)]"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

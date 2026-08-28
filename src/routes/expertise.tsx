import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: "Expertise & Références — SOUiTECH Engineering" },
      {
        name: "description",
        content:
          "Logiciels maîtrisés (AutoCAD Plant 3D, CAESAR II, Tekla, Staad Pro, SolidWorks, Advance Steel) et références clients industriels de SOUiTECH Engineering.",
      },
      { property: "og:title", content: "Expertise & Références — SOUiTECH Engineering" },
      {
        property: "og:description",
        content:
          "Une expérience confirmée acquise auprès de grands donneurs d'ordre de l'industrie et de l'énergie.",
      },
    ],
  }),
  component: Expertise,
});

const software = [
  "AutoCAD Plant 3D",
  "CAESAR II",
  "Autodesk Robot Structural",
  "Tekla Structures",
  "Staad Pro",
  "Trimble",
  "AutoCAD Electrical",
  "SolidWorks",
  "Autodesk Advance Steel",
  "PV Elite",
];

const clients = [
  "OMV",
  "Lafarge",
  "BIA",
  "TotalEnergies",
  "Eni",
  "Clarke Energy",
  "Agil",
  "Sotuver",
  "Sonatrach",
  "STEP",
  "SMIP",
  "SIA",
  "Perenco",
  "Saica",
  "Vivo Energy Tunisie",
  "SB Trust",
  "Actiis Groupe",
  "Process Safety Engineering",
  "SOTACIB",
  "Cementos Molins",
  "Sinoma Cement Co. Ltd",
  "Ciments de Jbel Oust",
  "AkzoNobel",
  "Astral",
];

function Expertise() {
  return (
    <div>
      <section className="brand-gradient pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-bold uppercase text-navy-foreground md:text-6xl">
              Expertise & Références
            </h1>
            <div className="rule-accent mt-5" />
            <p className="mt-6 max-w-2xl text-navy-foreground/85">
              Notre équipe dispose d'une expérience confirmée dans l'utilisation des
              logiciels métiers les plus exigeants, et notre savoir-faire est reconnu par
              des clients industriels de premier plan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase">Logiciels maîtrisés</h2>
          <div className="rule-accent mt-4" />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {software.map((s, i) => (
            <Reveal key={s} delay={i * 60}>
              <div className="card-industrial flex items-center gap-4 p-5">
                <span className="brand-gradient size-2.5 shrink-0 rounded-full" />
                <span className="font-display text-lg font-semibold uppercase tracking-wide">
                  {s}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="steel-gradient">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal>
            <h2 className="text-4xl font-bold uppercase">Ils nous font confiance</h2>
            <div className="rule-accent mt-4" />
            <p className="mt-6 max-w-2xl text-muted-foreground">
              Notre expérience acquise auprès des clients suivants témoigne de notre
              savoir-faire et de notre capacité à répondre aux exigences les plus élevées.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {clients.map((c, i) => (
              <Reveal key={c} delay={(i % 8) * 60}>
                <div className="group flex h-24 items-center justify-center rounded-md border border-border bg-card px-4 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-[var(--shadow-card)]">
                  <span className="font-display text-lg font-semibold uppercase tracking-wide text-foreground/80 transition-colors group-hover:text-primary">
                    {c}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

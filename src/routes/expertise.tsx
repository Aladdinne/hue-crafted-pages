import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import logoAkzoNobel from "@/assets/logos/akzonobel.png.asset.json";
import logoSonatrach from "@/assets/logos/sonatrach.png.asset.json";
import logoTotal from "@/assets/logos/totalenergies.png.asset.json";
import logoActiis from "@/assets/logos/actiis.png.asset.json";
import logoAgil from "@/assets/logos/agil.png.asset.json";
import logoOmv from "@/assets/logos/omv.png.asset.json";
import logoSitep from "@/assets/logos/sitep.png.asset.json";
import logoSinoma from "@/assets/logos/sinoma-jbeloust.png.asset.json";
import logoSotacib from "@/assets/logos/sotacib.png.asset.json";
import logoEni from "@/assets/logos/eni.png.asset.json";
import logoAstral from "@/assets/logos/astral.jpg.asset.json";

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

const clientLogos = [
  { name: "OMV", src: logoOmv.url },
  { name: "TotalEnergies", src: logoTotal.url },
  { name: "Eni", src: logoEni.url },
  { name: "Agil", src: logoAgil.url },
  { name: "Sonatrach", src: logoSonatrach.url },
  { name: "STEP", src: logoSitep.url },
  { name: "Actiis Groupe", src: logoActiis.url },
  { name: "SOTACIB", src: logoSotacib.url },
  { name: "Sinoma Cement — Ciments de Jbel Oust", src: logoSinoma.url },
  { name: "AkzoNobel", src: logoAkzoNobel.url },
  { name: "Astral", src: logoAstral.url },
];

const otherClients = [
  "Lafarge",
  "BIA",
  "Clarke Energy",
  "Sotuver",
  "SMIP",
  "SIA",
  "Perenco",
  "Saica",
  "Vivo Energy Tunisie",
  "SB Trust",
  "Process Safety Engineering",
  "Cementos Molins",
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
            {clientLogos.map((c, i) => (
              <Reveal key={c.name} delay={(i % 8) * 60}>
                <div className="flex h-24 items-center justify-center rounded-md border border-border bg-card px-5 py-3 transition-all duration-300 hover:border-accent/50 hover:shadow-[var(--shadow-card)]">
                  <img
                    src={c.src}
                    alt={`Logo ${c.name}`}
                    width={180}
                    height={72}
                    loading="lazy"
                    className="max-h-16 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {otherClients.map((c) => (
                <span
                  key={c}
                  className="font-display text-base font-semibold uppercase tracking-wide text-foreground/60"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

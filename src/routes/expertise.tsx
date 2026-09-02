import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";

const logoModules = import.meta.glob("../assets/logos/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const logoNames: Record<string, string> = {
  "agil.png": "Agil",
  "agoco.png": "Arabian Gulf Oil Company",
  "akzonobel.png": "AkzoNobel",
  "alkimia.png": "Alkimia",
  "ansaldo.png": "Ansaldo Energia",
  "astral.jpg": "Astral",
  "bakerhicks.png": "BakerHicks",
  "butagaz.png": "BUTAGAZ",
  "actiis.png": "Actiis Groupe",
  "cftp.png": "CFTP",
  "cipem.png": "CIPEM",
  "cntic.png": "CNTIC",
  //"cpg.png": "CPG",
  //"ekium.png": "EKIUM",
  "emco.png": "EMCO",
  "eni.png": "Eni",
  "eppm.png": "EPPM",
  "etap.png": "ETAP",
  //"gct.png": "Groupe Chimique Tunisien",
  "ginor.png": "GINOR",
  "gpp.png": "GPP",
  "gsfc.png": "GSFC",
  "gulf-oil-libya.png": "Gulf Oil & Gas Processing Co.",
  "halk-el-menzel.png": "Halk El Menzel",
  //"i2e.png": "I2E",
  "maretap.png": "Maretap",
  "mellitah-libya.png": "Mellitah Oil & Gas — Libya",
  "mellitah-og.png": "Mellitah Oil & Gas",
  "meri.png": "MERI Hal Group",
  "npi.png": "NPI",
  "ola-energy.png": "OLA Energy",
  "omv.png": "OMV",
  "ortec.png": "Ortec Group",
  "perenco.png": "Perenco",
  "phosphea.png": "Phosphea",
  "ponticelli.png": "Ponticelli",
  "sanofi.png": "Sanofi",
  "saudi-aramco.png": "Saudi Aramco",
  "serept.png": "Serept",
  "serinus.png": "Serinus Energy",
  "sinoma-jbeloust.png": "Sinoma Cement — Ciments de Jbel Oust",
  "sitep.png": "SITEP",
  "snim.png": "Snim",
  "sodeps.png": "SODEPS",
  "sonatrach.png": "Sonatrach",
  "sonede.png": "SONEDE",
  "sotacib.png": "SOTACIB",
  "sotrapil.png": "Sotrapil",
  "sppc.png": "SPPC",
  "staroil.png": "Staroil",
  "stia.png": "STIA",
  "technip.png": "Technip",
  //"teci.png": "TECI",
  "tic-group.png": "TIC Group",
  "tifert.png": "TIFERT",
  "totalenergies.png": "TotalEnergies",
  "tps.png": "TPS",
  "vivo-energy.png": "Vivo Energy Tunisie",
  "wacom.png": "WACOM",
  "zallaf.jpeg": "Zallaf Libya Oil & Gas",
};

const clientLogos = Object.entries(logoModules)
  .map(([path, src]) => {
    const file = path.split("/").pop()!;
    return { src, name: logoNames[file] ?? "Client SOUiTECH" };
  })
  .sort((a, b) => a.name.localeCompare(b.name, "fr"));

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
  const { t } = useLang();
  return (
    <div>
      <section className="brand-gradient pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-bold uppercase text-navy-foreground md:text-6xl">
              {t.expertise.title}
            </h1>
            <div className="rule-accent mt-5" />
            <p className="mt-6 max-w-2xl text-navy-foreground/85">
              {t.expertise.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <Reveal>
          <h2 className="text-4xl font-bold uppercase">{t.expertise.softwareTitle}</h2>
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
            <h2 className="text-4xl font-bold uppercase">{t.expertise.clientsTitle}</h2>
            <div className="rule-accent mt-4" />
            <p className="mt-6 max-w-2xl text-muted-foreground">
              {t.expertise.clientsIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {clientLogos.map((c, i) => (
              <Reveal key={c.src} delay={(i % 8) * 60}>
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

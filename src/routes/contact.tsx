import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, Phone, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import logo from "@/assets/souitech-logo.png";
export const Route = createFileRoute("/contact")({
  component: Contact,
});
function Contact() {
  const { t } = useLang();
  const coords = [
    {
      icon: Phone,
      label: t.contact.phone,
      values: ["+216 97 686 557", "+216 23 740 984"],
      hrefs: ["tel:+21697686557", "tel:+21623740984"],
    },
    {
      icon: Mail,
      label: t.contact.email,
      values: ["riadh.souibgui@souitech.com"],
      hrefs: ["mailto:riadh.souibgui@souitech.com"],
    },
    {
      icon: Globe,
      label: t.contact.web,
      values: ["[www.souitech.com](https://www.souitech.com)"],
      hrefs: ["https://www.souitech.com"],
    },
    { icon: FileText, label: t.contact.tax, values: ["MF : 1986248K"], hrefs: [] as string[] },
  ];
  return (
    <div>
      <section className="brand-gradient pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-bold uppercase text-navy-foreground md:text-6xl">
              {t.contact.title}
            </h1>
            <div className="rule-accent mt-5" />
            <p className="mt-6 max-w-2xl text-navy-foreground/85">{t.contact.intro}</p>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <Reveal>
          <div className="flex justify-center">
            <img
              src={logo}
              alt="SOUiTECH Engineering"
              width={520}
              height={203}
              loading="lazy"
              className="animate-float-slow h-24 w-auto md:h-32"
            />
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {coords.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <article className="card-industrial h-full p-8">
                <div className="brand-gradient inline-flex rounded-md p-3 text-navy-foreground">
                  <c.icon className="size-6" />
                </div>
                <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {c.label}
                </h2>
                <div className="mt-3 space-y-1.5" dir="ltr">
                  {c.values.map((v, j) => {
                    const href = c.hrefs[j];
                    return href ? (

                        key={v}
                        href={href}
                        className="block font-display text-xl font-semibold transition-colors hover:text-accent md:text-2xl"
                      >
                        {v}
                      </a>
                    ) : (
                      <p key={v} className="font-display text-xl font-semibold md:text-2xl">
                        {v}
                      </p>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

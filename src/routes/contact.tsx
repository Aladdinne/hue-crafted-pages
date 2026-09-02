import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, Phone, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import logo from "@/assets/souitech-logo.png";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.87.507 3.673 1.469 5.246L2 22l4.905-1.437a10.03 10.03 0 0 0 5.1 1.39h.004c5.518 0 10.004-4.486 10.004-10.004C22.013 6.486 17.522 2 12.004 2zm0 18.192a8.16 8.16 0 0 1-4.283-1.203l-.307-.183-3.13.916.925-3.121-.2-.32a8.156 8.156 0 0 1-1.257-4.297c0-4.507 3.667-8.174 8.176-8.174 4.5 0 8.166 3.667 8.166 8.174 0 4.507-3.667 8.208-8.19 8.208z" />
    </svg>
  );
}

interface CoordItem {
  icon: typeof Phone;
  label: string;
  values: string[];
  hrefs: string[];
  whatsapp?: boolean[];
}

function Contact() {
  const { t } = useLang();

  const coords: CoordItem[] = [
    {
      icon: Phone,
      label: t.contact.phone,
      values: ["+216 97 686 557", "+216 23 740 984"],
      hrefs: ["tel:+21697686557", "tel:+21623740984"],
      whatsapp: [true, false],
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
      values: ["www.souitech.com"],
      hrefs: ["https://www.souitech.com"],
    },
    {
      icon: FileText,
      label: t.contact.tax,
      values: ["MF : 1986248K"],
      hrefs: [],
    },
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
          {coords.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.label} delay={i * 100}>
                <article className="card-industrial h-full p-8">
                  <div className="brand-gradient inline-flex rounded-md p-3 text-navy-foreground">
                    <Icon className="size-6" />
                  </div>
                  <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {c.label}
                  </h2>
                  <div className="mt-3 space-y-1.5" dir="ltr">
                    {c.values.map((v, j) => {
                      const href = c.hrefs[j];
                      const isWhatsapp = c.whatsapp ? c.whatsapp[j] : false;

                      if (href) {
                        return (
                          
                            key={v}
                            href={href}
                            className="flex items-center gap-2 font-display text-xl font-semibold transition-colors hover:text-accent md:text-2xl"
                          >
                            {v}
                            {isWhatsapp && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/15 px-2 py-0.5 text-xs font-medium text-[#25D366]">
                                <WhatsAppIcon className="size-3.5" />
                                WhatsApp
                              </span>
                            )}
                          </a>
                        );
                      }

                      return (
                        <p key={v} className="font-display text-xl font-semibold md:text-2xl">
                          {v}
                        </p>
                      );
                    })}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}

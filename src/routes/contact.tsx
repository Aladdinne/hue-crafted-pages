import { createFileRoute } from "@tanstack/react-router";
import { Globe, Mail, Phone, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import logo from "@/assets/souitech-logo.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SOUiTECH Engineering" },
      {
        name: "description",
        content:
          "Coordonnées de SOUiTECH Engineering : téléphone +216 97 686 557 / +216 23 740 984, email riadh.souibgui@souitech.com, www.souitech.com.",
      },
      {
        property: "og:title",
        content: "Contact — SOUiTECH Engineering",
      },
      {
        property: "og:description",
        content:
          "Retrouvez les coordonnées de SOUiTECH Engineering, bureau d'études industriel.",
      },
    ],
  }),

  component: Contact,
});

function Contact() {
  const { t } = useLang();

  const coords = [
    {
      icon: Phone,
      label: t.contact.phone,
      values: [
        {
          text: "+216 97 686 557",
          href: "tel:+21697686557",
          whatsapp: true,
        },
        {
          text: "+216 23 740 984",
          href: "tel:+21623740984",
          whatsapp: false,
        },
      ],
    },
    {
      icon: Mail,
      label: t.contact.email,
      values: [
        {
          text: "riadh.souibgui@souitech.com",
          href: "mailto:riadh.souibgui@souitech.com",
        },
      ],
    },
    {
      icon: Globe,
      label: t.contact.web,
      values: [
        {
          text: "www.souitech.com",
          href: "https://www.souitech.com",
        },
      ],
    },
    {
      icon: FileText,
      label: t.contact.tax,
      values: [
        {
          text: "MF : 1986248K",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="brand-gradient pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-bold uppercase text-navy-foreground md:text-6xl">
              {t.contact.title}
            </h1>

            <div className="rule-accent mt-5" />

            <p className="mt-6 max-w-2xl text-navy-foreground/85">
              {t.contact.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        {/* Logo */}
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

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {coords.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <article className="card-industrial h-full p-8">
                {/* Icon */}
                <div className="brand-gradient inline-flex rounded-md p-3 text-navy-foreground">
                  <c.icon className="size-6" />
                </div>

                {/* Label */}
                <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  {c.label}
                </h2>

                {/* Values */}
                <div className="mt-3 space-y-3" dir="ltr">
                  {c.values.map((item) => {
                    const isWhatsapp = item.whatsapp;

                    if (item.href) {
                      return (
                        <a
                          key={item.text}
                          href={item.href}
                          className="flex items-center gap-2 font-display text-xl font-semibold transition-colors hover:text-accent md:text-2xl"
                        >
                          {/* Phone + WhatsApp indicator */}
                          {isWhatsapp && (
                            <span className="text-lg leading-none">
                              📞💬
                            </span>
                          )}

                          <span>{item.text}</span>

                          {/* WhatsApp Badge */}
                          {isWhatsapp && (
                            <span className="rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600">
                              WhatsApp
                            </span>
                          )}
                        </a>
                      );
                    }

                    return (
                      <p
                        key={item.text}
                        className="font-display text-xl font-semibold md:text-2xl"
                      >
                        {item.text}
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

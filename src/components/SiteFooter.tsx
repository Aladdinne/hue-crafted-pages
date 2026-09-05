import { Link } from "@tanstack/react-router";
import { Mail, Phone, Globe } from "lucide-react";
import logo from "@/assets/souitech-logo.png";
import { useLang } from "@/i18n/LanguageProvider";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="brand-gradient text-navy-foreground">
      <div className="h-1 sheen-line" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="inline-flex rounded-md bg-background/95 px-4 py-3">
            <img
              src={logo}
              alt="SOUiTECH Engineering"
              width={220}
              height={86}
              loading="lazy"
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/80">
            {t.footer.about}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase tracking-[0.16em]">
            {t.footer.navigation}
          </h3>
          <div className="rule-accent mt-3" />
          <ul className="mt-5 space-y-2.5 text-sm text-navy-foreground/80">
            <li>
              <Link to="/" className="transition-colors hover:text-navy-foreground">
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-navy-foreground">
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link to="/expertise" className="transition-colors hover:text-navy-foreground">
                {t.nav.expertise}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-navy-foreground">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase tracking-[0.16em]">
            {t.footer.contact}
          </h3>
          <div className="rule-accent mt-3" />
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/85">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" />
              <span dir="ltr">+216 97 686 557 · +216 23 740 984</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" />
              <span dir="ltr">riadh.souibgui@souitech.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" />
              <span dir="ltr">contact.administratif@souitech.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="size-4 shrink-0" />
              <span dir="ltr">www.souitech.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 px-5 py-5 text-center text-xs tracking-wide text-navy-foreground/60 md:px-8">
        © {new Date().getFullYear()} {t.footer.rights}
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";
import { Mail, Phone, Globe } from "lucide-react";
import logo from "@/assets/souitech-logo.png";

export function SiteFooter() {
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
            Bureau d'études pluridisciplinaire spécialisé dans les études techniques
            d'ingénierie industrielle : piping, structure, génie civil, électricité &
            instrumentation.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase tracking-[0.16em]">Navigation</h3>
          <div className="rule-accent mt-3" />
          <ul className="mt-5 space-y-2.5 text-sm text-navy-foreground/80">
            <li>
              <Link to="/" className="transition-colors hover:text-navy-foreground">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-navy-foreground">
                Services
              </Link>
            </li>
            <li>
              <Link to="/expertise" className="transition-colors hover:text-navy-foreground">
                Expertise & Références
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-navy-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold uppercase tracking-[0.16em]">Coordonnées</h3>
          <div className="rule-accent mt-3" />
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/85">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" /> +216 97 686 557 · +216 23 740 984
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0" /> riadh.souibgui@souitech.com
            </li>
            <li className="flex items-center gap-3">
              <Globe className="size-4 shrink-0" /> www.souitech.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15 px-5 py-5 text-center text-xs tracking-wide text-navy-foreground/60 md:px-8">
        © {new Date().getFullYear()} SOUiTECH Engineering — MF : 1986248K
      </div>
    </footer>
  );
}

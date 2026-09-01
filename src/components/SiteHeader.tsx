import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/souitech-logo.png.asset.json";
import { useLang } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/services", label: t.nav.services },
    { to: "/expertise", label: t.nav.expertise },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "shadow-[var(--shadow-card)]" : "border-b border-border/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="SOUiTECH Engineering"
            width={200}
            height={78}
            className="h-11 w-auto md:h-13"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative text-sm font-semibold uppercase tracking-[0.14em] text-bordeaux transition-colors hover:text-accent"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-bordeaux transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-primary-foreground shadow-[var(--shadow-card)] transition-all duration-300 hover:bg-accent hover:shadow-[var(--shadow-elevated)]"
          >
            {t.nav.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={t.nav.menu}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-bordeaux"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-border bg-background/98 px-5 py-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-bordeaux"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

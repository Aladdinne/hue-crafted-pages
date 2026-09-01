import { Globe } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { LANGS } from "@/i18n/translations";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-md border border-border bg-card/80 p-1 ${className}`}
    >
      <Globe className="mx-1 size-4 text-bordeaux" aria-hidden />
      {LANGS.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          aria-label={l.label}
          aria-pressed={lang === l.code}
          className={`rounded px-2 py-1 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
            lang === l.code
              ? "bg-bordeaux text-primary-foreground"
              : "text-foreground/70 hover:text-bordeaux"
          }`}
        >
          {l.short}
        </button>
      ))}
    </div>
  );
}

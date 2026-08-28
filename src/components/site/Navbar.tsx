import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { DoorIcon } from "./DoorIcon";
import { BOOKING_URL } from "@/lib/hostel";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useT } from "@/lib/useT";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = useT();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#rooms", label: t.nav.rooms },
    { href: "#events", label: t.nav.events },
    { href: "#location", label: t.nav.location },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[var(--shadow-soft)]" : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5 md:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <DoorIcon className="h-7 shrink-0" />
          <span className="truncate font-display text-lg font-bold tracking-tight text-primary">
            Blue Door Hostel
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/75 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={cn("rounded-full px-3 py-1 transition-colors", lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground")}
            >
              EN
            </button>
            <button
              onClick={() => setLang("sq")}
              className={cn("rounded-full px-3 py-1 transition-colors", lang === "sq" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground")}
            >
              SQ
            </button>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {t.nav.bookNow}
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-primary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between border-b border-border/60 py-3">
              <span className="text-sm font-medium text-foreground/60">Theme</span>
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground/70"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </li>
            <li className="flex items-center justify-between py-3">
              <span className="text-sm font-medium text-foreground/60">Language</span>
              <div className="flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold">
                <button
                  onClick={() => setLang("en")}
                  className={cn("rounded-full px-3 py-1 transition-colors", lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground")}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("sq")}
                  className={cn("rounded-full px-3 py-1 transition-colors", lang === "sq" ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:text-foreground")}
                >
                  SQ
                </button>
              </div>
            </li>
            <li className="py-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                {t.nav.bookNow}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

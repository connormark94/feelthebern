import { Link, Outlet, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Meet Bern" },
  { to: "/about", label: "Feel the Bern!" },
  { to: "/contact", label: "Contact" },
  { to: "/listen", label: "Listen" },
];

export function SiteLayout({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className="relative border-b border-border"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(15,10,40,0.55), rgba(15,10,40,0.85)), url(/images/bern-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-10 text-center">
          <Link to="/" className="inline-block group">
            <div className="relative inline-block">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[var(--color-gold)] text-3xl">
                ✦
              </span>
              <h1 className="font-display text-5xl sm:text-7xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
                Feel the Bern
              </h1>
            </div>
            <div className="mt-2 tracking-[0.5em] text-xs sm:text-sm text-white/80">
              MALE VOCALIST
            </div>
            <div className="mt-3 text-primary tracking-[0.25em] text-xs sm:text-sm font-semibold">
              A TOUCH OF CLASS FOR EVERY OCCASION
            </div>
          </Link>
        </div>
        <nav className="bg-black/70 backdrop-blur border-t border-border">
          <ul className="max-w-6xl mx-auto px-2 flex flex-wrap justify-center sm:justify-start">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`block px-5 py-4 text-sm uppercase tracking-wider transition-colors border-r border-border/40 ${
                      active
                        ? "text-primary"
                        : "text-white/80 hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        {children ?? <Outlet />}
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Berni Stubbs — Feel the Bern. All rights reserved.
      </footer>
    </div>
  );
}

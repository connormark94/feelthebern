import { Link, Outlet, useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/listen", label: "Listen" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();


  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <span className="text-gold-gradient text-xl">✦</span>
            <span className="font-display text-lg sm:text-xl text-white group-hover:text-primary transition-colors whitespace-nowrap">
              Feel the Bern
            </span>
          </Link>

          {/* Top bar nav — visible on all sizes, scrolls horizontally on small screens */}
          <nav className="flex-1 min-w-0">
            <ul className="flex items-center justify-end gap-0.5 sm:gap-1">
              {nav.map((item) => {
                const active = pathname === item.to;
                return (
                  <li key={item.to} className="shrink-0">
                    <Link
                      to={item.to}
                      className={`px-2 sm:px-4 py-2 text-[13px] sm:text-sm tracking-wide rounded-full transition-colors whitespace-nowrap ${
                        active
                          ? "text-primary bg-primary/10"
                          : "text-white/80 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="shrink-0 hidden lg:block">
                <Link
                  to="/contact"
                  className="ml-1 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  Book Bern
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {children ?? <Outlet />}
      </main>

      <footer className="border-t border-border mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-gold-gradient text-xl">✦</span>
              <span className="font-display text-xl text-white">Feel the Bern</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              A touch of class for every occasion. Live male vocalist for weddings,
              corporate events and private parties across the UK and beyond.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-primary">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+447790373972" className="hover:text-primary">07790 373972</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:Bern_uk@hotmail.com" className="hover:text-primary break-all">Bern_uk@hotmail.com</a>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-border text-white/80 hover:text-primary hover:border-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border border-border text-white/80 hover:text-primary hover:border-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Berni Stubbs — Feel the Bern. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

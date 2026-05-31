import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, Instagram, Facebook } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/listen", label: "Listen" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout({ children }: { children?: ReactNode }) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-gold-gradient text-xl">✦</span>
            <span className="font-display text-xl text-white group-hover:text-primary transition-colors">
              Feel the Bern
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-2 text-sm tracking-wide rounded-full transition-colors ${
                    active ? "text-primary bg-primary/10" : "text-white/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Book Bern
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass border-t border-border">
            <ul className="px-5 py-4 space-y-1">
              {nav.map((item) => {
                const active = pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-lg ${
                        active ? "text-primary bg-primary/10" : "text-white/85 hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="block text-center rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  Book Bern
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
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

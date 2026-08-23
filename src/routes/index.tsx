import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import {
  Music2, Heart, Building2, PartyPopper, Mic2, Sparkles,
  Star, ArrowRight, Phone, Play, Quote,
} from "lucide-react";
import bernPortrait from "@/assets/bern-portrait.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northwest UK Singer | Male Vocalist for Weddings & Events" },
      { name: "description", content: "Professional Northwest UK singer and male vocalist with 20+ years performing at weddings, parties and corporate events across the UK and internationally." },
      { name: "keywords", content: "northwest uk singer, north west singer, male vocalist, evening singer, wedding singer, male wedding vocalist, solo male singer, live vocalist UK, international wedding singer, corporate event singer, function singer, destination wedding singer" },
      { property: "og:title", content: "Northwest UK Singer | Male Vocalist for Weddings & Events" },
      { property: "og:description", content: "Professional Northwest UK singer and male vocalist with 20+ years performing at weddings, parties and corporate events across the UK and internationally." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bernieventsinger.co.uk/" },
      { property: "og:image", content: "https://bernieventsinger.co.uk/__l5e/assets-v1/fec93a53-945a-4043-97f3-3b8db94d8bf0/og-share.jpg" },
      { property: "og:image:secure_url", content: "https://bernieventsinger.co.uk/__l5e/assets-v1/fec93a53-945a-4043-97f3-3b8db94d8bf0/og-share.jpg" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Feel the Bern — Male Vocalist & Evening Singer, UK & International" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Northwest UK Singer | Male Vocalist for Weddings & Events" },
      { name: "twitter:description", content: "Professional Northwest UK singer and male vocalist with 20+ years performing at weddings, parties and corporate events across the UK and internationally." },
      { name: "twitter:image", content: "https://bernieventsinger.co.uk/__l5e/assets-v1/fec93a53-945a-4043-97f3-3b8db94d8bf0/og-share.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://bernieventsinger.co.uk/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicGroup",
          name: "Bern — Feel the Bern",
          url: "https://bernieventsinger.co.uk/",
          genre: ["Pop", "Rock", "Soul", "Swing", "Classical Crossover"],
          description: "Professional Northwest UK singer and male vocalist performing at weddings, corporate events and private parties across the UK and internationally.",
          areaServed: { "@type": "Place", name: "Northwest UK" },
          additionalProperty: [
            { "@type": "PropertyValue", name: "internationalBookings", value: "Available worldwide" }
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "How far will Bern travel?", acceptedAnswer: { "@type": "Answer", text: "Based in the Northwest UK, Bern travels UK-wide as standard and welcomes international bookings — including destination weddings and corporate events abroad." } },
            { "@type": "Question", name: "Can Bern learn our special song?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Subject to suitability, special requests are warmly welcomed for first dances and key moments." } },
            { "@type": "Question", name: "Solo or with a band?", acceptedAnswer: { "@type": "Answer", text: "Both. Bern performs solo with backing tracks and has worked extensively with bands of every size." } },
            { "@type": "Question", name: "How do we book?", acceptedAnswer: { "@type": "Answer", text: "Drop a message through the contact page or call directly — Bern will reply with availability and a tailored quote." } },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Heart, title: "Weddings", desc: "From your first dance to the late-night sing-along." },
  { icon: Building2, title: "Corporate Events", desc: "Polished entertainment that reads any room." },
  { icon: PartyPopper, title: "Private Parties", desc: "Milestone birthdays, anniversaries and more." },
  { icon: Mic2, title: "Live Music Venues", desc: "Regular sets at bars, clubs and hotels." },
  { icon: Sparkles, title: "Themed Evenings", desc: "Curated sets built around a genre or era." },
  { icon: Music2, title: "Tribute Sets", desc: "From Black Sabbath to Bocelli & Dion." },
];

const stats = [
  { num: "20+", label: "Years performing" },
  { num: "500+", label: "Events delivered" },
  { num: "11", label: "Tracks to preview" },
  { num: "5★", label: "Average rating" },
];

const testimonials = [
  { quote: "Bern made our wedding unforgettable. Guests are still talking about it.", author: "Sarah & James" },
  { quote: "Effortlessly switched genres all night. A real pro.", author: "Corporate event organiser" },
  { quote: "That voice — pure goosebumps from the first note.", author: "Private party host" },
];

const faqs = [
  { q: "How far will Bern travel?", a: "UK-wide as standard, with international bookings welcomed — Bern has performed as far afield as Portugal and is happy to travel worldwide for your event." },
  { q: "Can Bern learn our special song?", a: "Absolutely. Subject to suitability, special requests are warmly welcomed for first dances and key moments." },
  { q: "Solo or with a band?", a: "Both. Bern performs solo with backing tracks and has worked extensively with bands of every size." },
  { q: "How do we book?", a: "Drop a message through the contact page or call directly — Bern will reply with availability and a tailored quote." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Off-center hero portrait, blends with the global fixed background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -right-[22%] sm:-right-[6%] w-[115%] sm:w-[60%] bg-no-repeat bg-contain opacity-65 sm:opacity-90"
          style={{
            backgroundImage: `url(${bernPortrait.url})`,
            backgroundPosition: "right center",
            maskImage:
              "radial-gradient(ellipse at 70% 50%, black 35%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 70% 50%, black 35%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.09 0.03 285 / 0.92) 0%, oklch(0.09 0.03 285 / 0.7) 45%, transparent 75%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-20 sm:pt-32 sm:pb-40 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-white/80">
            <span className="text-gold-gradient">✦</span> Northwest UK Singer
          </div>
          <h1 className="mt-5 sm:mt-6 font-display text-[3.2rem] leading-none min-[380px]:text-6xl sm:text-8xl text-white drop-shadow-2xl">
            Feel the <span className="text-gradient">Bern</span>
            <span className="block mt-2 sm:mt-3 text-lg sm:text-2xl font-serif italic text-white/90 leading-normal">
              Male Vocalist & Evening Singer — Northwest UK
            </span>
          </h1>
          <p className="mt-5 sm:mt-6 font-serif italic text-lg leading-7 sm:text-2xl text-white/90 max-w-2xl mx-auto sm:mx-0">
            A touch of class for every occasion — a uniquely wide vocal range,
            shaped to your event.
          </p>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center sm:justify-start gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundImage: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
            >
              Book Bern <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/listen"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-colors"
            >
              <Play className="h-4 w-4" /> Listen Now
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6 max-w-3xl mx-auto sm:mx-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-3xl sm:text-4xl text-gradient">{s.num}</div>
                <div className="mt-1 text-[11px] sm:text-xs uppercase tracking-wide text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL SHOWCASE — sticky portrait with passing copy */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 md:gap-16 py-16 sm:py-24">
            <div className="md:sticky md:top-24 self-start h-[62vh] max-h-[560px] md:h-[78vh] md:max-h-none relative">
            <div
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-border overflow-hidden"
              style={{
                backgroundImage: `url(${bernPortrait.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, oklch(0.09 0.03 285 / 0.85) 100%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">Live & in the moment</div>
                <div className="mt-2 font-display text-3xl sm:text-4xl text-white leading-none">Every note, felt.</div>
              </div>
            </div>
          </div>

          <div className="space-y-24 sm:space-y-32 pt-6 md:pt-12">
            {[
              { kicker: "The Voice", title: "A range that bends to the room.", body: "Soaring tenor moments, smoky low-end balladry, full-blooded rock anthems — all delivered with the same effortless control." },
              { kicker: "The Set", title: "Curated for your night.", body: "Bern tailors every set list to the venue, the audience and the moment — from cocktail-hour classics to last-dance sing-alongs." },
              { kicker: "The Feeling", title: "Goosebumps, on cue.", body: "Two decades on stage have taught Bern one thing: it's not just what you sing, it's how you make the room feel when you sing it." },
            ].map((b) => (
              <div key={b.kicker}>
                <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">{b.kicker}</div>
                <h2 className="mt-3 font-display text-[2rem] sm:text-5xl text-white leading-tight">{b.title}</h2>
                <p className="mt-5 font-serif text-lg leading-relaxed text-foreground/85">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">Meet Bern</div>
            <h2 className="mt-3 font-display text-[2.35rem] leading-tight sm:text-5xl text-white">
              A voice with <span className="text-gradient">range</span>.
            </h2>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          </div>
          <div className="md:col-span-3 space-y-5 font-serif text-lg leading-relaxed text-foreground/90">
            <p>
              Bern is a Northwest UK singer with a uniquely wide vocal range and
              20+ years performing at weddings, parties and corporate events.
              He personalises the set list for any occasion to accommodate most song
              requests and musical genres — bringing vocal authenticity to
              everything he sings.
            </p>
            <p>
              From a 5-piece covers band to a specialised Black Sabbath tribute,
              and the tenor for an Andrea Bocelli & Celine Dion tribute duo in
              Portugal, Bern adapts his voice to whatever the moment needs.
            </p>
            <p className="font-display not-italic text-2xl text-white">
              Just close your eyes and feel the Bern.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">What Bern Does</div>
            <h2 className="mt-3 font-display text-[2.35rem] leading-tight sm:text-5xl text-white">
              Every occasion, <span className="text-gradient">covered</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              One vocalist. Endless settings. Pick the moment — Bern shapes the music to suit.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/60"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl text-white">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">Kind Words</div>
          <h2 className="mt-3 font-display text-[2.35rem] leading-tight sm:text-5xl text-white">
            From the people in the room.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="h-7 w-7 text-primary/60" />
              <blockquote className="mt-4 font-serif text-lg italic text-white/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">— {t.author}</span>
                <span className="flex gap-0.5 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
        <div className="text-center">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.3em] text-primary">Good to know</div>
          <h2 className="mt-3 font-display text-[2.35rem] leading-tight sm:text-5xl text-white">
            Frequently asked.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-serif text-lg text-white">{f.q}</span>
                <span className="text-primary transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-16 text-center"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="text-gold-gradient text-3xl">✦</div>
          <h2 className="mt-4 font-display text-[2.35rem] leading-tight sm:text-6xl text-white">
            Let's make it <span className="text-gradient">unforgettable</span>.
          </h2>
          <p className="mt-4 font-serif italic text-lg sm:text-xl text-white/85 max-w-xl mx-auto">
            Tell Bern about your event — receive a personal reply with availability and tailored ideas.
          </p>
          <div className="mt-8 grid grid-cols-1 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 sm:px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Send an enquiry <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+447790373972"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/5 px-5 sm:px-6 py-3 text-sm font-semibold text-white hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" /> 07790 373972
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Bern — A Vocalist for Every Occasion" },
      { name: "description", content: "Bern's musical journey, vocal versatility and the experiences he brings to weddings, corporate events and live venues." },
    ],
  }),
  component: About,
});

const journey = [
  { year: "Early years", title: "Finding the voice", text: "Years spent honing range across rock, pop, soul and classical crossover — learning to read a room before singing a note." },
  { year: "Band years", title: "From covers to tribute", text: "Fronted a 5-piece covers band and a specialised Black Sabbath tribute act — different vocal worlds, same commitment." },
  { year: "Portugal", title: "Tenor abroad", text: "Toured as the tenor for an Andrea Bocelli & Celine Dion tribute duo, sharpening dynamic control and stage presence." },
  { year: "Today", title: "Tailored events", text: "A trusted vocalist for weddings, corporate galas and private parties — setlists built bespoke for each booking." },
];

const offers = [
  "Bespoke setlists shaped to your audience and venue",
  "Solo performances with high-quality backing tracks",
  "Comfortable working with bands of every size",
  "Multi-genre fluency — pop, rock, soul, swing, classical crossover",
  "Themed evenings and tribute sets on request",
  "Special song requests for first dances and key moments",
];

function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">About</div>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl text-white">
            Feel the <span className="text-gradient">Bern</span>!
          </h1>
          <p className="mt-6 font-serif italic text-xl text-white/85 max-w-2xl mx-auto">
            From intimate acoustic sets to powerhouse rock anthems and
            classical crossover — every performance is shaped around the
            audience and the occasion.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">The Journey</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl text-white">A voice in motion.</h2>
        </div>
        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-10">
            {journey.map((j, i) => (
              <li key={j.title} className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 ${i % 2 ? "sm:[&>*:first-child]:order-2" : ""}`}>
                <div className="pl-12 sm:pl-0 sm:text-right">
                  <div className="text-xs uppercase tracking-[0.25em] text-primary">{j.year}</div>
                  <h3 className="mt-2 font-display text-2xl text-white">{j.title}</h3>
                </div>
                <div className="pl-12 sm:pl-0">
                  <p className="font-serif text-lg leading-relaxed text-foreground/90">{j.text}</p>
                </div>
                <span
                  className="absolute left-4 sm:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full ring-4 ring-background"
                  style={{ backgroundImage: "var(--gradient-accent)" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What you get */}
      <section className="relative" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">What you get</div>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl text-white">
                Built around <span className="text-gradient">your night</span>.
              </h2>
              <p className="mt-5 font-serif text-lg text-foreground/90 leading-relaxed">
                Every booking starts with a conversation — about the venue,
                the guests and the feeling you want to leave them with.
                Everything else is built from there.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg"
                style={{ backgroundImage: "var(--gradient-accent)" }}
              >
                Start the conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="space-y-3">
              {offers.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-accent)" }}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

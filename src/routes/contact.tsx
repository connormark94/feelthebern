import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book Bern — Male Vocalist & Evening Singer for Weddings & Events" },
      { name: "description", content: "Book Bern, a professional male vocalist, for weddings, parties, corporate events and evening entertainment across the UK and internationally. Personal reply with availability and tailored ideas." },
      { name: "keywords", content: "book male vocalist, hire evening singer, wedding singer booking, party singer hire, corporate event vocalist, UK male singer, international event singer, destination wedding singer" },
      { property: "og:title", content: "Book Bern — Male Vocalist & Evening Singer" },
      { property: "og:description", content: "Enquire about availability for weddings, parties and corporate events across the UK and internationally." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://feelthebern.lovable.app/contact" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Book Bern — Male Vocalist & Evening Singer" },
      { name: "twitter:description", content: "Enquire about booking Bern for your wedding, party or corporate event — UK & international." },
    ],
    links: [{ rel: "canonical", href: "https://feelthebern.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Book Bern — Male Vocalist",
          url: "https://feelthebern.lovable.app/contact",
          about: "Booking a professional male vocalist for weddings, parties and corporate events in the UK and internationally.",
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative" style={{ backgroundImage: "var(--gradient-hero)" }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Get in touch</div>
          <h1 className="mt-3 font-display text-5xl sm:text-7xl text-white">
            Let's <span className="text-gradient">talk music</span>.
          </h1>
          <p className="mt-5 font-serif italic text-lg text-white/85 max-w-xl mx-auto">
            Share a few details about your event and Bern will reply personally
            with availability and ideas.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-5 gap-10">
        {/* Info column */}
        <aside className="lg:col-span-2 space-y-4">
          <InfoCard icon={Phone} label="Call Bern" value="07790 373972" href="tel:+447790373972" />
          <InfoCard icon={Mail} label="Email" value="Bern_uk@hotmail.com" href="mailto:Bern_uk@hotmail.com" />
          <InfoCard icon={MapPin} label="Based in" value="UK — available worldwide" />
          <InfoCard icon={Clock} label="Reply time" value="Usually within 24 hours" />
        </aside>

        {/* Form */}
        <div className="lg:col-span-3">
          <form
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-5 shadow-xl"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Booking enquiry from ${data.get("name")}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "—"}\nEvent type: ${data.get("event") || "—"}\nEvent date: ${data.get("date") || "—"}\n\n${data.get("comment")}`
              );
              window.location.href = `mailto:Bern_uk@hotmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
          >
            {sent && (
              <p className="flex items-center gap-2 rounded-lg bg-primary/15 border border-primary/40 px-4 py-3 text-primary">
                <CheckCircle2 className="h-5 w-5" /> Thanks — your email client should now open with your message ready to send.
              </p>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone (optional)" type="tel" />
              <Field name="event" label="Event type" placeholder="Wedding, party, corporate…" />
              <Field name="date" label="Event date" type="date" />
            </div>
            <Field name="comment" label="Tell Bern about your event" textarea required />
            <button
              type="submit"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Send enquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/60">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
        style={{ backgroundImage: "var(--gradient-accent)" }}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-1 text-white font-medium break-words">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

function Field({
  name, label, type = "text", textarea, required, placeholder,
}: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean; placeholder?: string }) {
  const cls =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring focus:border-primary transition-colors";
  return (
    <label className={`block ${textarea ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

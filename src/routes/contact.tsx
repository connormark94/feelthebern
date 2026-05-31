import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Berni Stubbs | Feel the Bern" },
      { name: "description", content: "Get in touch with Berni Stubbs to book Bern for your wedding, corporate event or private party." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <div className="space-y-10">
        <header>
          <h2 className="font-display text-4xl sm:text-5xl text-primary">Berni Stubbs</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </header>

        <div className="grid gap-2 text-xl sm:text-2xl">
          <p>
            <span className="text-muted-foreground">mobile: </span>
            <a href="tel:+447790373972" className="text-white hover:text-primary">07790 373972</a>
          </p>
          <p className="break-all">
            <span className="text-muted-foreground">email: </span>
            <a href="mailto:Bern_uk@hotmail.com" className="text-white hover:text-primary">Bern_uk@hotmail.com</a>
          </p>
        </div>

        <form
          className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const subject = encodeURIComponent(`Booking enquiry from ${data.get("name")}`);
            const body = encodeURIComponent(
              `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("comment")}`
            );
            window.location.href = `mailto:Bern_uk@hotmail.com?subject=${subject}&body=${body}`;
            setSent(true);
          }}
        >
          {sent && (
            <p className="rounded-md bg-primary/15 border border-primary/40 px-4 py-3 text-primary">
              Thank you for your response. ✨
            </p>
          )}
          <Field name="name" label="Name" required />
          <Field name="email" label="Email" type="email" required />
          <Field name="comment" label="Comment" textarea required />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            style={{ backgroundImage: "var(--gradient-accent)" }}
          >
            Submit
          </button>
        </form>
      </div>
    </SiteLayout>
  );
}

function Field({
  name, label, type = "text", textarea, required,
}: { name: string; label: string; type?: string; textarea?: boolean; required?: boolean }) {
  const cls =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <label className="block">
      <span className="mb-1 block text-sm text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={cls} />
      ) : (
        <input name={name} type={type} required={required} className={cls} />
      )}
    </label>
  );
}

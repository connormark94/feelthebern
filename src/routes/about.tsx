import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Feel the Bern! — About Bern" },
      { name: "description", content: "More about Bern's musical journey, styles and the unique experience he brings to every event." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <article className="space-y-8">
        <h2 className="font-display text-4xl sm:text-5xl text-primary">Feel the Bern!</h2>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        <p className="text-lg leading-relaxed text-foreground/90">
          From intimate acoustic sets to powerhouse rock anthems and classical
          crossover, Bern delivers a memorable experience tailored to your
          event. Every performance is shaped around the audience and the
          occasion — so whether you're planning a wedding, corporate gala or
          private party, expect a setlist that feels just right.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2">
          {[
            "Weddings & receptions",
            "Corporate events",
            "Private parties",
            "Live music venues",
            "Themed evenings",
            "Tribute sets",
          ].map((i) => (
            <li
              key={i}
              className="rounded-lg border border-border bg-card px-5 py-4 text-foreground/90"
            >
              {i}
            </li>
          ))}
        </ul>
      </article>
    </SiteLayout>
  );
}

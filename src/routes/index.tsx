import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Feel the Bern — Male Vocalist | A Touch of Class for Every Occasion" },
      { name: "description", content: "Bern is a superb male vocalist with a uniquely wide vocal range, performing at weddings, corporate events, private parties and live music venues." },
      { property: "og:title", content: "Feel the Bern — Male Vocalist" },
      { property: "og:description", content: "A touch of class for every occasion." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <article className="space-y-10">
        <header>
          <h2 className="font-display text-4xl sm:text-5xl text-primary">Meet Bern</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </header>

        <p className="text-lg leading-relaxed text-foreground/90">
          Bern is a superb singer with a uniquely wide vocal range. He can
          personalise the set list for any event to accommodate most song
          requests and musical genres, making him a very popular artist due to
          his ability to bring a vocal authenticity to everything he sings.
        </p>

        <h3 className="font-display text-3xl sm:text-4xl italic text-white">
          Just close your eyes and feel the Bern!
        </h3>

        <p className="text-lg leading-relaxed text-foreground/90">
          Bern has sung solo and with many different styles of band over the
          years, and modified his voice accordingly, ranging from a 5-piece
          covers band to a specialised Black Sabbath tribute band, and even as
          the tenor for an Andrea Bocelli & Celine Dion tribute duo in
          Portugal.
        </p>

        <p className="text-lg leading-relaxed text-foreground/90">
          Bern can offer a truly multi-genre musical approach to your event, or
          tailor the musical offering to a particular genre of your choice,
          which could help with a themed musical event.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-white">
          For this reason he is in demand at weddings, corporate events,
          private parties and live music venues.
        </blockquote>
      </article>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export const Route = createFileRoute("/listen")({
  head: () => ({
    meta: [
      { title: "Listen — Feel the Bern" },
      { name: "description", content: "Listen to Bern singing a selection of tracks across multiple genres." },
    ],
  }),
  component: Listen,
});

type Track = { title: string; artist: string; src: string };

const tracks: Track[] = [
  { title: "Mr Brightside", artist: "Bern", src: "/audio/mr-brightside.mp3" },
  { title: "Sex on Fire", artist: "Bern", src: "/audio/sex-on-fire.mp3" },
  { title: "Time to Say Goodbye", artist: "Bern", src: "/audio/time-to-say-goodbye.mp3" },
  { title: "I Don't Want to Miss a Thing", artist: "Bern", src: "/audio/i-dont-want-to-miss-a-thing.mp3" },
  { title: "Love on the Rocks", artist: "Bern", src: "/audio/love-on-the-rocks.mp3" },
  { title: "God Only Knows", artist: "Bern", src: "/audio/god-only-knows.mp3" },
  { title: "Bat Out of Hell", artist: "Bern", src: "/audio/bat-out-of-hell.mp3" },
  { title: "All I Ask of You", artist: "Bern and friend", src: "/audio/berni-friend-all-i-ask-of-you.mp3" },
  { title: "The Prayer", artist: "Bern and friend", src: "/audio/berni-friend-the-prayer.mp3" },
  { title: "You Don't Bring Me Flowers Any More", artist: "Bern and friend", src: "/audio/berni-friend-you-dont-bring-me-flowers-any-more.mp3" },
  { title: "America", artist: "Bern", src: "/audio/america.mp3" },
];

function Listen() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const select = (i: number) => {
    setCurrent(i);
    requestAnimationFrame(() => {
      audioRef.current?.play();
      setPlaying(true);
    });
  };

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) { el.play(); setPlaying(true); }
    else { el.pause(); setPlaying(false); }
  };

  return (
    <SiteLayout>
      <div className="space-y-8">
        <header>
          <h2 className="font-display text-4xl sm:text-5xl text-primary">Listen</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </header>

        <div
          className="rounded-2xl border border-border p-6 sm:p-8"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="flex items-center gap-5">
            <button
              onClick={toggle}
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform hover:scale-105"
              style={{ backgroundImage: "var(--gradient-accent)" }}
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 translate-x-0.5" />}
            </button>
            <div className="min-w-0">
              <p className="font-display text-2xl sm:text-3xl text-white truncate">
                "{tracks[current].title}"
              </p>
              <p className="text-muted-foreground">{tracks[current].artist}</p>
            </div>
          </div>
          <audio
            ref={audioRef}
            src={tracks[current].src}
            controls
            className="mt-6 w-full"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => {
              if (current < tracks.length - 1) select(current + 1);
              else setPlaying(false);
            }}
          />
        </div>

        <ol className="overflow-hidden rounded-xl border border-border bg-card">
          {tracks.map((t, i) => {
            const active = i === current;
            return (
              <li key={t.src}>
                <button
                  onClick={() => select(i)}
                  className={`flex w-full items-center gap-4 border-b border-border px-5 py-4 text-left transition-colors last:border-b-0 hover:bg-muted ${
                    active ? "bg-muted" : ""
                  }`}
                >
                  <span className={`w-6 text-right tabular-nums ${active ? "text-primary" : "text-muted-foreground"}`}>
                    {i + 1}.
                  </span>
                  <span className="flex-1">
                    <span className={`block font-medium ${active ? "text-primary" : "text-white"}`}>
                      "{t.title}"
                    </span>
                    <span className="block text-sm text-muted-foreground">{t.artist}</span>
                  </span>
                  {active && playing && (
                    <span className="text-primary text-xs uppercase tracking-wider">Playing</span>
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </SiteLayout>
  );
}

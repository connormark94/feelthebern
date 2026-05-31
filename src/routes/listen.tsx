import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

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

const fmt = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const ss = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${ss}`;
};

function Listen() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const shouldPlayRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // When `current` changes, load the new track and play if requested.
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.load();
    if (shouldPlayRef.current) {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => setPlaying(false));
    }
  }, [current]);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.volume = volume;
  }, [volume]);

  const select = (i: number) => {
    shouldPlayRef.current = true;
    if (i === current) {
      audioRef.current?.play();
      return;
    }
    setCurrent(i);
  };

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      shouldPlayRef.current = true;
      el.play();
    } else {
      el.pause();
    }
  };

  const prev = () => {
    shouldPlayRef.current = playing;
    setCurrent((c) => (c - 1 + tracks.length) % tracks.length);
  };
  const next = () => {
    shouldPlayRef.current = playing;
    setCurrent((c) => (c + 1) % tracks.length);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = audioRef.current;
    if (!el) return;
    const v = Number(e.target.value);
    el.currentTime = v;
    setTime(v);
  };

  const track = tracks[current];
  const pct = duration > 0 ? (time / duration) * 100 : 0;

  return (
    <SiteLayout>
      <div className="space-y-10">
        <header>
          <h2 className="font-display text-4xl sm:text-5xl text-primary">Listen</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A selection of tracks Bern performs live. Tap any song to start playing — use the controls to skip, scrub or pause.
          </p>
        </header>

        {/* Player */}
        <div
          className="rounded-2xl border border-border p-6 sm:p-8 shadow-xl"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
                Now playing · {current + 1} / {tracks.length}
              </p>
              <p className="mt-2 font-display text-2xl sm:text-3xl text-white truncate">
                "{track.title}"
              </p>
              <p className="text-muted-foreground italic">{track.artist}</p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white/90 hover:text-primary hover:border-primary transition-colors"
                aria-label="Previous track"
              >
                <SkipBack className="h-5 w-5" />
              </button>
              <button
                onClick={toggle}
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform hover:scale-105"
                style={{ backgroundImage: "var(--gradient-accent)" }}
                aria-label={playing ? "Pause" : "Play"}
              >
                {playing ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 translate-x-0.5" />}
              </button>
              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-white/90 hover:text-primary hover:border-primary transition-colors"
                aria-label="Next track"
              >
                <SkipForward className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Scrubber */}
          <div className="mt-6">
            <div className="relative h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ width: `${pct}%`, backgroundImage: "var(--gradient-accent)" }}
              />
              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={time}
                onChange={seek}
                aria-label="Seek"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground tabular-nums">
              <span>{fmt(time)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* Volume */}
          <div className="mt-4 flex items-center gap-3 max-w-xs">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volume"
              className="flex-1 accent-[color:var(--primary)]"
            />
          </div>

          <audio
            ref={audioRef}
            src={track.src}
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onEnded={() => {
              shouldPlayRef.current = true;
              setCurrent((c) => (c + 1) % tracks.length);
            }}
            className="hidden"
          />
        </div>

        {/* Track list */}
        <ol className="overflow-hidden rounded-xl border border-border bg-card divide-y divide-border">
          {tracks.map((t, i) => {
            const active = i === current;
            return (
              <li key={t.src}>
                <button
                  onClick={() => select(i)}
                  className={`group flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-muted ${
                    active ? "bg-muted" : ""
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs tabular-nums transition-colors ${
                      active
                        ? "text-primary-foreground"
                        : "bg-background text-muted-foreground group-hover:text-primary"
                    }`}
                    style={active ? { backgroundImage: "var(--gradient-accent)" } : undefined}
                  >
                    {active && playing ? <Pause className="h-4 w-4" /> : active ? <Play className="h-4 w-4 translate-x-0.5" /> : i + 1}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className={`block font-medium truncate ${active ? "text-primary" : "text-white"}`}>
                      "{t.title}"
                    </span>
                    <span className="block text-sm text-muted-foreground truncate">{t.artist}</span>
                  </span>
                  {active && (
                    <span className="text-primary text-[10px] uppercase tracking-[0.2em]">
                      {playing ? "Playing" : "Paused"}
                    </span>
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

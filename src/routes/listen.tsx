import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export const Route = createFileRoute("/listen")({
  head: () => ({
    meta: [
      { title: "Listen — Male Vocalist Demo Tracks | Feel the Bern" },
      { name: "description", content: "Listen to live demo recordings from Bern — a professional male vocalist and evening singer for UK and international weddings and events. Rock, pop, soul, ballads and classical crossover." },
      { name: "keywords", content: "male vocalist demo, evening singer samples, wedding singer audio, live vocals UK, male singer demo tracks, destination wedding singer demos" },
      { property: "og:title", content: "Listen — Male Vocalist Demo Tracks" },
      { property: "og:description", content: "Hear live recordings from Bern — professional male vocalist for weddings, parties and evening events across the UK and internationally." },
      { property: "og:type", content: "music.playlist" },
      { property: "og:url", content: "https://bernieventsinger.co.uk/listen" },
      { property: "og:image", content: "https://bernieventsinger.co.uk/__l5e/assets-v1/63fcc156-bdc8-4f48-ba35-55588958662e/og-share.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Feel the Bern — Male Vocalist & Evening Singer" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Listen — Male Vocalist Demo Tracks" },
      { name: "twitter:description", content: "Live demo recordings from a professional UK & international male vocalist." },
      { name: "twitter:image", content: "https://bernieventsinger.co.uk/__l5e/assets-v1/63fcc156-bdc8-4f48-ba35-55588958662e/og-share.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://feelthebern.lovable.app/listen" }],
  }),
  component: Listen,
});

type Track = { title: string; artist: string; src: string; genre?: string };

const tracks: Track[] = [
  { title: "Mr Brightside", artist: "Bern", src: "/audio/mr-brightside.mp3", genre: "Rock" },
  { title: "Sex on Fire", artist: "Bern", src: "/audio/sex-on-fire.mp3", genre: "Rock" },
  { title: "Time to Say Goodbye", artist: "Bern", src: "/audio/time-to-say-goodbye.mp3", genre: "Classical" },
  { title: "I Don't Want to Miss a Thing", artist: "Bern", src: "/audio/i-dont-want-to-miss-a-thing.mp3", genre: "Ballad" },
  { title: "Love on the Rocks", artist: "Bern", src: "/audio/love-on-the-rocks.mp3", genre: "Classic" },
  { title: "God Only Knows", artist: "Bern", src: "/audio/god-only-knows.mp3", genre: "Pop" },
  { title: "Bat Out of Hell", artist: "Bern", src: "/audio/bat-out-of-hell.mp3", genre: "Rock" },
  { title: "All I Ask of You", artist: "Bern & friend", src: "/audio/berni-friend-all-i-ask-of-you.mp3", genre: "Duet" },
  { title: "The Prayer", artist: "Bern & friend", src: "/audio/berni-friend-the-prayer.mp3", genre: "Duet" },
  { title: "You Don't Bring Me Flowers Any More", artist: "Bern & friend", src: "/audio/berni-friend-you-dont-bring-me-flowers-any-more.mp3", genre: "Duet" },
  { title: "America", artist: "Bern", src: "/audio/america.mp3", genre: "Classic" },
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
  const [muted, setMuted] = useState(false);
  const shouldPlayRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.load();
    setTime(0);
    if (shouldPlayRef.current) {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => setPlaying(false));
    }
  }, [current]);

  useEffect(() => {
    const el = audioRef.current;
    if (el) el.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const select = (i: number) => {
    shouldPlayRef.current = true;
    if (i === current) {
      const el = audioRef.current;
      if (el) {
        if (el.paused) el.play();
        else el.pause();
      }
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

  const seekTo = (v: number) => {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = v;
    setTime(v);
  };

  const track = tracks[current];

  return (
    <SiteLayout>
      <div className="space-y-10">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80">Live recordings</p>
          <h2 className="font-display text-4xl sm:text-5xl text-primary mt-2">Listen</h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A selection of tracks Bern performs live — from rock anthems to classical duets.
            Tap any track to play, or use the controls to skip and scrub through.
          </p>
        </header>

        {/* Player */}
        <div
          className="rounded-3xl border border-border/60 p-6 sm:p-8 shadow-2xl backdrop-blur-md"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Artwork */}
            <div
              className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/10"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Music2 className={`h-10 w-10 text-white/90 ${playing ? "animate-pulse" : ""}`} />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary/80">
                {playing ? "Now Playing" : "Ready"} · {current + 1} / {tracks.length}
              </p>
              <p className="mt-1.5 font-display text-2xl sm:text-3xl text-white truncate">
                {track.title}
              </p>
              <p className="text-muted-foreground italic truncate">
                {track.artist}{track.genre ? ` · ${track.genre}` : ""}
              </p>
            </div>
          </div>

          {/* Scrubber */}
          <div className="mt-6">
            <Slider
              value={[Math.min(time, duration || 0)]}
              max={duration || 1}
              step={0.1}
              onValueChange={(v) => seekTo(v[0])}
              aria-label="Seek"
              className="cursor-pointer"
            />
            <div className="mt-2 flex justify-between text-xs text-muted-foreground tabular-nums">
              <span>{fmt(time)}</span>
              <span>-{fmt(Math.max(0, (duration || 0) - time))}</span>
            </div>
          </div>

          {/* Transport */}
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 flex-1 max-w-[180px]">
              <button
                onClick={() => setMuted((m) => !m)}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={muted ? "Unmute" : "Mute"}
              >
                {muted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <Slider
                value={[muted ? 0 : volume]}
                max={1}
                step={0.01}
                onValueChange={(v) => { setMuted(false); setVolume(v[0]); }}
                aria-label="Volume"
              />
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
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
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

            <div className="flex-1 max-w-[180px] hidden sm:block" />
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
        <div>
          <div className="flex items-baseline justify-between mb-3">
            <h3 className="font-display text-xl text-white">Tracklist</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {tracks.length} tracks
            </span>
          </div>
          <ol className="overflow-hidden rounded-2xl border border-border bg-card/80 backdrop-blur divide-y divide-border">
            {tracks.map((t, i) => {
              const active = i === current;
              return (
                <li key={t.src}>
                  <button
                    onClick={() => select(i)}
                    className={`group flex w-full items-center gap-4 px-4 sm:px-5 py-3.5 text-left transition-colors hover:bg-muted/60 ${
                      active ? "bg-muted/80" : ""
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs tabular-nums transition-colors ${
                        active
                          ? "text-primary-foreground shadow-md"
                          : "bg-background text-muted-foreground group-hover:text-primary"
                      }`}
                      style={active ? { backgroundImage: "var(--gradient-accent)" } : undefined}
                    >
                      {active && playing ? (
                        <Pause className="h-4 w-4" />
                      ) : active ? (
                        <Play className="h-4 w-4 translate-x-0.5" />
                      ) : (
                        <span className="group-hover:hidden">{String(i + 1).padStart(2, "0")}</span>
                      )}
                      {!active && <Play className="h-4 w-4 translate-x-0.5 hidden group-hover:block" />}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className={`block font-medium truncate ${active ? "text-primary" : "text-white"}`}>
                        {t.title}
                      </span>
                      <span className="block text-sm text-muted-foreground truncate">
                        {t.artist}{t.genre ? ` · ${t.genre}` : ""}
                      </span>
                    </span>
                    {active && (
                      <span className="text-primary text-[10px] uppercase tracking-[0.2em] shrink-0">
                        {playing ? "Playing" : "Paused"}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </SiteLayout>
  );
}

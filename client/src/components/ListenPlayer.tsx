import { Headphones, Pause, Play, Square } from "lucide-react";
import { TTS_RATES, type TTSRate, type TTSStatus } from "@/hooks/useTTS";

interface ListenPlayerProps {
  status: TTSStatus;
  rate: TTSRate;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onRateChange: (rate: TTSRate) => void;
}

/**
 * Compact "listen to this chapter" control row, shown under the chapter
 * header when the browser supports speech synthesis.
 */
export default function ListenPlayer({
  status,
  rate,
  onPlay,
  onPause,
  onStop,
  onRateChange,
}: ListenPlayerProps) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card px-4 py-2.5">
      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Headphones className="w-4 h-4" />
        Listen
      </span>

      {status === "playing" ? (
        <button
          onClick={onPause}
          aria-label="Pause audio"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Pause className="w-3.5 h-3.5" />
          Pause
        </button>
      ) : (
        <button
          onClick={onPlay}
          aria-label={status === "paused" ? "Resume audio" : "Play chapter audio"}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Play className="w-3.5 h-3.5" />
          {status === "paused" ? "Resume" : "Play"}
        </button>
      )}

      {status !== "idle" && (
        <button
          onClick={onStop}
          aria-label="Stop audio"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
        >
          <Square className="w-3 h-3" />
          Stop
        </button>
      )}

      <div className="flex items-center rounded-lg border border-border p-0.5 gap-0.5 bg-muted/50 ml-auto">
        {TTS_RATES.map((r) => (
          <button
            key={r}
            onClick={() => onRateChange(r)}
            aria-pressed={rate === r}
            aria-label={`Playback speed ${r}x`}
            className={`px-2 py-1 rounded-md text-xs font-medium tabular-nums transition-all ${
              rate === r
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {r}×
          </button>
        ))}
      </div>

      <span className="w-full sm:w-auto text-[11px] text-muted-foreground sm:ml-1">
        Uses your browser's built-in voice.
      </span>
    </div>
  );
}

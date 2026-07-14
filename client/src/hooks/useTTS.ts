import { useCallback, useEffect, useRef, useState } from "react";

export interface TTSChunk {
  /** subsection id this chunk belongs to, "" for the chapter header */
  sectionId: string;
  text: string;
}

export type TTSStatus = "idle" | "playing" | "paused";

const RATES = [0.75, 1, 1.25, 1.5] as const;
export type TTSRate = (typeof RATES)[number];
export const TTS_RATES = RATES;

// Chrome silently cuts off very long utterances, so split at paragraph
// boundaries into pieces below ~1,500 characters.
function splitLong(text: string, max = 1500): string[] {
  if (text.length <= max) return [text];
  const paragraphs = text.split(/\n\n+/);
  const parts: string[] = [];
  let current = "";
  for (const p of paragraphs) {
    if (current && current.length + p.length + 2 > max) {
      parts.push(current);
      current = p;
    } else {
      current = current ? `${current}\n\n${p}` : p;
    }
    // a single paragraph longer than max: split at sentence ends
    while (current.length > max) {
      const cut = current.lastIndexOf(". ", max);
      const at = cut > 200 ? cut + 1 : max;
      parts.push(current.slice(0, at));
      current = current.slice(at).trim();
    }
  }
  if (current) parts.push(current);
  return parts;
}

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((v) => v.lang === "en-GB" && v.localService) ??
    voices.find((v) => v.lang === "en-GB") ??
    voices.find((v) => v.lang.startsWith("en")) ??
    null
  );
}

/**
 * Reads an ordered list of text chunks aloud via the Web Speech API.
 * Reports which section is currently being spoken so the page can
 * highlight it. Hidden entirely when speechSynthesis is unavailable.
 */
export function useTTS(chunks: TTSChunk[]) {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const [status, setStatus] = useState<TTSStatus>("idle");
  const [rate, setRate] = useState<TTSRate>(1);
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);

  // flattened queue: one entry per utterance
  const queueRef = useRef<TTSChunk[]>([]);
  const indexRef = useRef(0);
  const rateRef = useRef<TTSRate>(1);
  const stoppedRef = useRef(true);

  const buildQueue = useCallback(() => {
    const queue: TTSChunk[] = [];
    for (const chunk of chunks) {
      for (const part of splitLong(chunk.text)) {
        queue.push({ sectionId: chunk.sectionId, text: part });
      }
    }
    return queue;
  }, [chunks]);

  const speakFrom = useCallback((index: number) => {
    const queue = queueRef.current;
    if (index >= queue.length) {
      stoppedRef.current = true;
      setStatus("idle");
      setCurrentSectionId(null);
      return;
    }
    indexRef.current = index;
    const chunk = queue[index];
    setCurrentSectionId(chunk.sectionId);
    const utterance = new SpeechSynthesisUtterance(chunk.text);
    const voice = pickVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang ?? "en-GB";
    utterance.rate = rateRef.current;
    utterance.onend = () => {
      if (!stoppedRef.current) speakFrom(index + 1);
    };
    utterance.onerror = () => {
      if (!stoppedRef.current) {
        stoppedRef.current = true;
        setStatus("idle");
        setCurrentSectionId(null);
      }
    };
    window.speechSynthesis.speak(utterance);
  }, []);

  const play = useCallback(() => {
    if (!supported) return;
    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
      return;
    }
    window.speechSynthesis.cancel();
    queueRef.current = buildQueue();
    stoppedRef.current = false;
    setStatus("playing");
    // voices load asynchronously in some browsers; retry once they arrive
    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.addEventListener("voiceschanged", () => speakFrom(0), { once: true });
      // fall through and try anyway - some browsers speak with the default voice
    }
    speakFrom(0);
  }, [supported, status, buildQueue, speakFrom]);

  const pause = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.pause();
    setStatus("paused");
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    setStatus("idle");
    setCurrentSectionId(null);
  }, [supported]);

  const changeRate = useCallback(
    (next: TTSRate) => {
      setRate(next);
      rateRef.current = next;
      // rate is fixed once an utterance starts, so restart the current chunk
      if (!stoppedRef.current && status !== "idle") {
        const index = indexRef.current;
        window.speechSynthesis.cancel();
        // cancel() fires onend; guard with a flag flip
        stoppedRef.current = true;
        setTimeout(() => {
          stoppedRef.current = false;
          setStatus("playing");
          speakFrom(index);
        }, 60);
      }
    },
    [status, speakFrom],
  );

  // stop speech when the chapter changes or the page unmounts
  useEffect(() => {
    return () => {
      if (supported) {
        stoppedRef.current = true;
        window.speechSynthesis.cancel();
      }
    };
  }, [supported, chunks]);

  return { supported, status, rate, currentSectionId, play, pause, stop, changeRate };
}

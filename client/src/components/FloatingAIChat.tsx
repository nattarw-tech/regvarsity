import { useState, useRef, useEffect } from "react";
import { sendChat } from "@/lib/aiChat";
import { Sparkles, X, Minus, Send, RotateCcw, ChevronDown } from "lucide-react";
import { Streamdown } from "streamdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED = [
  "What is Consumer Duty?",
  "What does CDD mean?",
  "What is a SAR?",
  "How does MiFID II affect me?",
];

export default function FloatingAIChat() {
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && !minimised) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open, minimised]);

  useEffect(() => {
    if (open && !minimised) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, minimised]);

  const sendMessage = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || isLoading) return;

    const newMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const result = await sendChat(newMessages);
      setMessages([...newMessages, { role: "assistant", content: result.content }]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, I couldn't connect right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const reset = () => {
    setMessages([]);
    setInput("");
  };

  return (
    <>
      {/* Floating trigger button — always visible */}
      {!open && (
        <button
          onClick={() => { setOpen(true); setMinimised(false); }}
          aria-label="Open AI Expert chat"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-2xl font-semibold text-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] active:scale-95"
          style={{
            background: "linear-gradient(135deg, oklch(0.28 0.08 255), oklch(0.52 0.14 195))",
            color: "white",
          }}
        >
          <Sparkles className="w-4 h-4" />
          Ask AI Expert
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300"
          style={{
            width: "min(420px, calc(100vw - 2rem))",
            height: minimised ? "56px" : "min(580px, calc(100vh - 5rem))",
            background: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0 cursor-pointer select-none"
            style={{
              background: "linear-gradient(135deg, oklch(0.28 0.08 255), oklch(0.52 0.14 195))",
              color: "white",
            }}
            onClick={() => setMinimised((v) => !v)}
          >
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm leading-tight">RegVarsity AI Expert</div>
              {!minimised && (
                <div className="text-xs text-white/70 truncate">UK & EU Financial Regulation</div>
              )}
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && !minimised && (
                <button
                  onClick={(e) => { e.stopPropagation(); reset(); }}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={(e) => { e.stopPropagation(); setMinimised((v) => !v); }}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                aria-label={minimised ? "Expand chat" : "Minimise chat"}
              >
                {minimised ? <ChevronDown className="w-4 h-4 rotate-180" /> : <Minus className="w-4 h-4" />}
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); setOpen(false); setMinimised(false); }}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body — hidden when minimised */}
          {!minimised && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
                {messages.length === 0 ? (
                  <div className="flex flex-col h-full">
                    {/* Welcome */}
                    <div
                      className="rounded-2xl rounded-tl-sm p-4 text-sm leading-relaxed mb-4"
                      style={{ background: "var(--muted)", color: "var(--foreground)" }}
                    >
                      <p className="font-semibold mb-1">Hello! I'm RegVarsity AI.</p>
                      <p style={{ color: "var(--muted-foreground)" }}>
                        Ask me anything about UK and EU financial regulation — FCA rules, AML/KYC, MiFID II, Crypto, MiCA, UK GDPR, or any term in the glossary. I'll explain it in plain English.
                      </p>
                    </div>
                    {/* Suggested questions */}
                    <p className="text-xs font-semibold mb-2" style={{ color: "var(--muted-foreground)" }}>
                      Try asking:
                    </p>
                    <div className="flex flex-col gap-2">
                      {SUGGESTED.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="text-left text-sm px-3 py-2 rounded-xl border transition-all duration-150 hover:-translate-y-0.5 hover:shadow-sm"
                          style={{
                            borderColor: "var(--border)",
                            background: "var(--card)",
                            color: "var(--foreground)",
                          }}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className="max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
                          style={
                            msg.role === "user"
                              ? {
                                  background: "oklch(0.28 0.08 255)",
                                  color: "white",
                                  borderBottomRightRadius: "4px",
                                }
                              : {
                                  background: "var(--muted)",
                                  color: "var(--foreground)",
                                  borderBottomLeftRadius: "4px",
                                }
                          }
                        >
                          {msg.role === "assistant" ? (
                            <Streamdown>{msg.content}</Streamdown>
                          ) : (
                            msg.content
                          )}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div
                          className="rounded-2xl rounded-bl-sm px-4 py-3"
                          style={{ background: "var(--muted)" }}
                        >
                          <div className="flex gap-1 items-center h-5">
                            {[0, 1, 2].map((i) => (
                              <span
                                key={i}
                                className="w-2 h-2 rounded-full animate-bounce"
                                style={{
                                  background: "var(--muted-foreground)",
                                  animationDelay: `${i * 0.15}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input */}
              <div
                className="flex-shrink-0 px-3 py-3 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="flex items-end gap-2 rounded-xl border px-3 py-2 transition-shadow focus-within:ring-2"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--background)",
                    "--tw-ring-color": "oklch(0.52 0.14 195 / 0.4)",
                  } as React.CSSProperties}
                >
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about UK or EU financial regulation..."
                    rows={1}
                    className="flex-1 resize-none bg-transparent text-sm outline-none leading-relaxed max-h-28 overflow-y-auto"
                    style={{ color: "var(--foreground)" }}
                    disabled={isLoading}
                  />
                  <button
                    onClick={() => sendMessage()}
                    disabled={!input.trim() || isLoading}
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 disabled:opacity-40 hover:scale-105 active:scale-95"
                    style={{
                      background: input.trim() && !isLoading
                        ? "oklch(0.28 0.08 255)"
                        : "var(--muted)",
                      color: input.trim() && !isLoading ? "white" : "var(--muted-foreground)",
                    }}
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-center text-[10px] mt-1.5" style={{ color: "var(--muted-foreground)" }}>
                  Educational only — not legal advice
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

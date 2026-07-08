import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import { sendChat } from "@/lib/aiChat";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, User, Sparkles, RefreshCw, ChevronDown } from "lucide-react";
import { Streamdown } from "streamdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "What is Consumer Duty and how does it affect me as a customer?",
  "What does a firm need to do to get FCA authorisation?",
  "What is a SAR and when must I file one?",
  "What is the difference between CDD and EDD?",
  "Does my crypto exchange need to be FCA-registered?",
  "What is SM&CR and who does it apply to?",
  "What are the UK MiFIR transaction reporting requirements?",
  "What counts as a Politically Exposed Person (PEP)?",
];

function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white ${
          isUser ? "bg-primary" : "bg-brand-teal"
        }`}
      >
        {isUser ? <User size={14} /> : <Bot size={14} />}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser
            ? "rounded-tr-sm bg-primary text-primary-foreground"
            : "rounded-tl-sm bg-muted text-foreground"
        }`}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-sm max-w-none text-foreground">
            <Streamdown>{message.content}</Streamdown>
          </div>
        )}
        <p
          className={`text-xs mt-1.5 ${
            isUser ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-teal text-white">
        <Bot size={14} />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm px-4 py-3 bg-muted">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-brand-teal animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default function AIExpertPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm **RegVarsity AI**, your UK financial regulation expert.\n\nI can help you understand FCA rules, AML/KYC requirements, MiFID II obligations, and the UK's crypto asset regime — in plain English or with full technical detail, depending on what you need.\n\nWhat would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [isPending, setIsPending] = useState(false);

  const runChat = async (contextMessages: { role: "user" | "assistant"; content: string }[]) => {
    setIsPending(true);
    try {
      const data = await sendChat(contextMessages);
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        role: "assistant",
        content:
          "I'm sorry, I encountered an error processing your question. Please try again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsPending(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isAtBottom) scrollToBottom();
  }, [messages, isPending, isAtBottom]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const { scrollTop, scrollHeight, clientHeight } = container;
    setIsAtBottom(scrollHeight - scrollTop - clientHeight < 50);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isPending) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");

    // Send only the last 10 messages to keep context manageable
    const contextMessages = updatedMessages.slice(-10).map((m) => ({
      role: m.role,
      content: m.content,
    }));

    void runChat(contextMessages);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestion = (q: string) => {
    setInput(q);
    textareaRef.current?.focus();
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome-reset",
        role: "assistant",
        content:
          "Conversation cleared. What would you like to know about UK financial regulation?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <div className="flex flex-col" style={{ height: "calc(100vh - 64px)" }}>
        {/* Header */}
        <div className="border-b border-border px-4 py-4 md:px-6 bg-muted/50">
          <div className="container flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">
                  RegVarsity AI Expert
                </h1>
                <p className="text-xs text-muted-foreground">
                  UK financial regulation — FCA · AML/KYC · MiFID II · Crypto
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="gap-1.5 text-xs text-muted-foreground"
            >
              <RefreshCw size={13} />
              New chat
            </Button>
          </div>
        </div>

        {/* Messages area */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto bg-background"
        >
          <div className="container py-6">
            <div className="max-w-2xl mx-auto space-y-5">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isPending && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>
          </div>
        </div>

        {/* Scroll to bottom button */}
        {!isAtBottom && (
          <button
            onClick={scrollToBottom}
            className="fixed bottom-32 right-6 z-20 flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-all bg-primary text-primary-foreground"
            aria-label="Scroll to bottom"
          >
            <ChevronDown size={18} />
          </button>
        )}

        {/* Suggested questions (only show at start) */}
        {messages.length <= 1 && (
          <div className="border-t border-border px-4 py-3 bg-muted/50">
            <div className="container">
              <div className="max-w-2xl mx-auto">
                <p className="text-xs font-medium mb-2 text-muted-foreground">
                  Try asking:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.slice(0, 4).map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border bg-background text-foreground transition-all hover:bg-muted"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Input area */}
        <div className="border-t border-border px-4 py-4 md:px-6 bg-muted/50">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-end gap-2 rounded-2xl border border-border p-2 bg-background">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about UK financial regulation..."
                  className="min-h-[44px] max-h-[200px] resize-none border-0 bg-transparent p-2 text-sm text-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                  rows={1}
                  aria-label="Chat input"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim() || isPending}
                  size="sm"
                  className="h-9 w-9 shrink-0 rounded-xl p-0 bg-primary text-primary-foreground"
                  aria-label="Send message"
                >
                  <Send size={15} />
                </Button>
              </div>
              <p className="text-xs mt-2 text-center text-muted-foreground">
                Educational information only — not legal advice. Always consult qualified professionals for compliance decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

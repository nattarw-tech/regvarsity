import { useLocation, Link } from "wouter";
import { Sparkles } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function FloatingAIButton() {
  const [location] = useLocation();

  // Don't show on the AI Expert page itself
  if (location === "/ai-expert") return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link href="/ai-expert">
            <button
              className="group flex items-center gap-2.5 rounded-full shadow-xl transition-all duration-200 hover:shadow-2xl active:scale-95"
              style={{
                backgroundColor: "var(--brand-teal)",
                color: "white",
                padding: "0.75rem 1.25rem",
              }}
              aria-label="Open AI Expert chat"
            >
              <Sparkles size={18} className="shrink-0" />
              <span className="text-sm font-semibold whitespace-nowrap">Ask AI Expert</span>
            </button>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="left" className="text-xs">
          Get instant answers from RegVarsity AI
        </TooltipContent>
      </Tooltip>
    </div>
  );
}

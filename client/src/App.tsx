import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ExercisesPage from "./pages/ExercisesPage";
import GlossaryPage from "./pages/GlossaryPage";
import AIExpertPage from "./pages/AIExpertPage";
import FloatingAIChat from "./components/FloatingAIChat";
import ModulesPage from "./pages/ModulesPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import ChapterPage from "./pages/ChapterPage";
import ModuleTestPage from "./pages/ModuleTestPage";
import ProgressPage from "./pages/ProgressPage";
import WhatsNewPage from "./pages/WhatsNewPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Learning routes */}
      <Route path="/learn" component={ModulesPage} />
      <Route path="/learn/:moduleSlug" component={ModuleDetailPage} />
      {/* "/test" must stay above the chapterSlug route, "test" is a reserved chapter slug */}
      <Route path="/learn/:moduleSlug/test" component={ModuleTestPage} />
      <Route path="/learn/:moduleSlug/:chapterSlug" component={ChapterPage} />
      {/* Tools & resources */}
      <Route path="/progress" component={ProgressPage} />
      <Route path="/exercises" component={ExercisesPage} />
      <Route path="/exercises/:topic" component={ExercisesPage} />
      <Route path="/glossary" component={GlossaryPage} />
      <Route path="/whats-new" component={WhatsNewPage} />
      <Route path="/ai-expert" component={AIExpertPage} />
      {/* Redirects from legacy routes */}
      <Route path="/fca">
        {() => <Redirect to="/learn/prin-principles-for-business" />}
      </Route>
      <Route path="/aml-kyc">
        {() => <Redirect to="/learn/aml-kyc-anti-money-laundering" />}
      </Route>
      <Route path="/mifid">
        {() => <Redirect to="/learn/mifid-ii-uk-mifir" />}
      </Route>
      <Route path="/crypto">
        {() => <Redirect to="/learn/crypto-asset-regulation" />}
      </Route>
      <Route path="/updates">{() => <Redirect to="/whats-new" />}</Route>
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          {/* Floating AI chat widget, appears on every page, minimisable */}
          <FloatingAIChat />
          {import.meta.env.PROD && <Analytics />}
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Animated Routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        {/* Placeholder routes for other pages */}
        <Route
          path="/about"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold gradient-text">
                About Page - Coming Soon
              </h1>
            </div>
          }
        />
        <Route
          path="/projects"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold gradient-text">
                Projects Page - Coming Soon
              </h1>
            </div>
          }
        />
        <Route
          path="/skills"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold gradient-text">
                Skills Page - Coming Soon
              </h1>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold gradient-text">
                Contact Page - Coming Soon
              </h1>
            </div>
          }
        />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

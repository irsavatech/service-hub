import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IndexRu from "./pages/IndexRu";
import PricePage from "./pages/PricePage";
import CenaPage from "./pages/CenaPage";
import PodmienkyPage from "./pages/PodmienkyPage";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";

// Service Pages
import VymenaDisplejaPage from "./pages/services/VymenaDisplejaPage";
import OpravaNabijaniaPage from "./pages/services/OpravaNabijaniaPage";
import DiagnostikaNotebookPage from "./pages/services/DiagnostikaNotebookPage";
import OdvirovaniePocitacaPage from "./pages/services/OdvirovaniePocitacaPage";
import CistenieOdPrachuPage from "./pages/services/CistenieOdPrachuPage";
import VymenaPastyPage from "./pages/services/VymenaPastyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ru" element={<IndexRu />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/cena" element={<CenaPage />} />
          <Route path="/podmienky" element={<PodmienkyPage />} />
          
          {/* Service Pages */}
          <Route path="/vymena-displeja" element={<VymenaDisplejaPage />} />
          <Route path="/oprava-nabijania" element={<OpravaNabijaniaPage />} />
          <Route path="/diagnostika-notebooku" element={<DiagnostikaNotebookPage />} />
          <Route path="/odvirovanie-pocitaca" element={<OdvirovaniePocitacaPage />} />
          <Route path="/cistenie-od-prachu" element={<CistenieOdPrachuPage />} />
          <Route path="/vymena-teplovodivej-pasty" element={<VymenaPastyPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

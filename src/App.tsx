import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionProvider } from "@/components/MotionProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ServiceDetail } from "./components/ServiceDetail";
import { Services } from "./components/Services";
import { MainLayout } from "./components/layout/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Services Routes */}
            <Route path="/servicios" element={
              <MainLayout>
                <Services />
              </MainLayout>
            } />
            <Route path="/servicios/:serviceId" element={
              <MainLayout>
                <ServiceDetail />
              </MainLayout>
            } />
            
            {/* 404 - Keep this as the last route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </MotionProvider>
  </QueryClientProvider>
);

export default App;

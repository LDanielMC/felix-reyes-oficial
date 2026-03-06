import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { MotionProvider } from "@/components/MotionProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import CriptomonedasPost from "./pages/blog/CriptomonedasPost";
import RegimenFiscal624Post from "./pages/blog/RegimenFiscal624Post";
import PlataformasTecnologicasPost from "./pages/blog/PlataformasTecnologicasPost";
import DepositosBancariosPost from "./pages/blog/DepositosBancariosPost";
import ResumenEjecutivoPost from "./pages/blog/ResumenEjecutivoPost";
import { ServiceDetail } from "./components/ServiceDetail";
import { Services } from "./components/Services";
import { MainLayout } from "./components/layout/MainLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Contact } from "./components/Contact";
import Nosotros from "./pages/Nosotros";
import { ScrollToHashElement } from "./components/ScrollToHashElement";

const queryClient = new QueryClient();

// Create a custom history object to use with the router
const history = createBrowserHistory({
  window
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MotionProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <ScrollToTop />
          <ScrollToHashElement />
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
            
            {/* Blog Routes */}
            <Route path="/blog" element={
              <MainLayout>
                <Blog />
              </MainLayout>
            } />
            {/* Blog Post Routes */}
            <Route path="/blog/criptomonedas" element={
              <MainLayout>
                <CriptomonedasPost />
              </MainLayout>
            } />
            <Route path="/blog/regimen-fiscal-624" element={
              <MainLayout>
                <RegimenFiscal624Post />
              </MainLayout>
            } />
            <Route path="/blog/plataformas-tecnologicas" element={
              <MainLayout>
                <PlataformasTecnologicasPost />
              </MainLayout>
            } />
            <Route path="/blog/depositos-bancarios" element={
              <MainLayout>
                <DepositosBancariosPost />
              </MainLayout>
            } />
            <Route path="/blog/resumen-ejecutivo" element={
              <MainLayout>
                <ResumenEjecutivoPost />
              </MainLayout>
            } />
            
            {/* Contact Route */}
            <Route path="/contacto" element={
              <MainLayout>
                <Contact />
              </MainLayout>
            } />
            
            {/* Nosotros Page */}
            <Route path="/nosotros" element={
              <MainLayout>
                <Nosotros />
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

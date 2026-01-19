import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Layout from "@/components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryDetail from "./pages/CategoryDetail";
import SubcategoryDetail from "./pages/SubcategoryDetail";
import ProductDetail from "./pages/ProductDetail";
import Tenders from "./pages/Tenders";
import TenderDetail from "./pages/TenderDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:slug" element={<CategoryDetail />} />
              <Route path="/products/:categorySlug/:subcategorySlug" element={<SubcategoryDetail />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/tenders" element={<Tenders />} />
              <Route path="/tenders/:slug" element={<TenderDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;

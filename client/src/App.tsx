/* Style reminder: Bibliothèque de preuves académiques — routes distinctes, contenu sourcé et accès contrôlé. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import LibraryLayout from "@/components/LibraryLayout";
import ErrorBoundary from "@/components/ErrorBoundary";
import DocumentPage from "@/pages/DocumentPage";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Locale } from "@/lib/archiveData";
import { Route, Switch } from "wouter";
import { useEffect, useState } from "react";

function SiteRouter({ locale }: { locale: Locale }) {
  return <Switch>
    <Route path="/" component={() => <Home locale={locale} />} />
    <Route path="/formation-academique" component={() => <DocumentPage section="academic" locale={locale} />} />
    <Route path="/experiences-professionnelles" component={() => <DocumentPage section="experience" locale={locale} />} />
    <Route path="/stages" component={() => <DocumentPage section="internships" locale={locale} />} />
    <Route path="/formations-certificats" component={() => <DocumentPage section="certificates" locale={locale} />} />
    <Route path="/communications-scientifiques" component={() => <DocumentPage section="communications" locale={locale} />} />
    <Route path="/activites-para-universitaires" component={() => <DocumentPage section="activities" locale={locale} />} />
    <Route path="/lettres-recommandation" component={() => <DocumentPage section="recommendations" locale={locale} />} />
    <Route path="/memoire-master" component={() => <DocumentPage section="thesis" locale={locale} />} />
    <Route path="/projet-sii-ml-chu" component={() => <DocumentPage section="project" locale={locale} />} />
    <Route path="/registre-des-pieces" component={() => <DocumentPage section="registry" locale={locale} />} />
    <Route path="/confidentialite" component={() => <DocumentPage section="privacy" locale={locale} />} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    return requested && ["fr", "en", "ar", "es", "nl", "de"].includes(requested) ? requested as Locale : "fr";
  });
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = locale === "ar" ? "rtl" : "ltr"; }, [locale]);
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><LibraryLayout locale={locale} setLocale={setLocale}><SiteRouter locale={locale} /></LibraryLayout></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

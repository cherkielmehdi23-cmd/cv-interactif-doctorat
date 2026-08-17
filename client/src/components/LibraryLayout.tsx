/* Style reminder: Bibliothèque de preuves académiques — navigation stable et catégorisation sans contenu fictif. */
import { ArchiveIcon, BookOpenText, Languages, Mail, Menu, Printer, ShieldCheck, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { ReactNode, useState } from "react";
import { assets, languageOptions, Locale, messages, SectionId } from "@/lib/archiveData";

const nav: { id: SectionId | "home"; href: string }[] = [
  { id:"home", href:"/" },
  { id:"academic", href:"/formation-academique" },
  { id:"experience", href:"/experiences-professionnelles" },
  { id:"internships", href:"/stages" },
  { id:"certificates", href:"/formations-certificats" },
  { id:"communications", href:"/communications-scientifiques" },
  { id:"activities", href:"/activites-para-universitaires" },
  { id:"recommendations", href:"/lettres-recommandation" },
  { id:"thesis", href:"/memoire-master" },
  { id:"project", href:"/projet-sii-ml-chu" },
  { id:"registry", href:"/registre-des-pieces" },
  { id:"privacy", href:"/confidentialite" },
];

export default function LibraryLayout({ locale, setLocale, children }: { locale: Locale; setLocale: (locale: Locale) => void; children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const t = messages[locale];
  const label = (id: SectionId | "home") => id === "home" ? t.home : t.nav[id];
  return <div className={locale === "ar" ? "library-app rtl" : "library-app"}>
    <aside className="library-sidebar">
      <Link href="/" className="library-brand"><img src={assets.mark} alt="" /><span><b>CHERKI</b><em>EL MEHDI</em></span></Link>
      <div className="archive-label"><BookOpenText size={16} /><span>{t.archive}</span></div>
      <nav>{nav.map((item, index) => <Link key={item.href} href={item.href} className={location === item.href ? "active" : ""}><span>{String(index).padStart(2, "0")}</span>{label(item.id)}</Link>)}</nav>
      <div className="sidebar-note"><ShieldCheck size={15} /><p>CV / STRUCTURATION<br />ZIP / PREUVES</p></div><a className="sidebar-export" href="/manus-storage/cherki-el-mehdi-public-dossier_a7a29908.zip" download><ArchiveIcon size={14} /> EXPORT PUBLIC .ZIP</a>
      <a className="sidebar-contact" href="mailto:cherkielmehdi@outlook.com"><Mail size={14} /> cherkielmehdi@outlook.com</a>
    </aside>

    <header className="library-mobile-header"><Link href="/" className="library-brand"><img src={assets.mark} alt="" /><b>CEM</b></Link><div><select value={locale} onChange={e => setLocale(e.target.value as Locale)}>{languageOptions.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}</select><button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">{mobileOpen ? <X /> : <Menu />}</button></div></header>
    {mobileOpen && <nav className="library-mobile-nav">{nav.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}><span>{String(index).padStart(2, "0")}</span>{label(item.id)}</Link>)}</nav>}

    <main className="library-main"><header className="library-toolbar"><div><span>{t.archive}</span><i>/</i><span className="toolbar-name">CHERKI EL MEHDI</span></div><div><a className="toolbar-export" href="/manus-storage/cherki-el-mehdi-public-dossier_a7a29908.zip" download><ArchiveIcon size={15} /> EXPORT .ZIP</a><label><Languages size={15} /><select value={locale} onChange={e => setLocale(e.target.value as Locale)}>{languageOptions.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}</select></label><button onClick={() => window.print()}><Printer size={15} /> {t.print}</button></div></header>{children}<footer className="library-footer"><span>ARCHIVE PH.D / DOCUMENT INDEX</span><p>{t.languageNotice}</p></footer></main>
  </div>;
}

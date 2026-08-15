/* Style reminder: Bibliothèque de preuves académiques — synthèse d'archive et accès direct aux pages sources. */
import { ArrowRight, BookOpenCheck, FileText, FolderCheck, FolderLock, GraduationCap, LibraryBig, Medal, ScrollText, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { assets, Locale, messages, SectionId, sectionMeta } from "@/lib/archiveData";

const routes: { id: SectionId; href: string; icon: typeof GraduationCap; count: string }[] = [
  { id:"academic", href:"/formation-academique", icon:GraduationCap, count:"8" },
  { id:"experience", href:"/experiences-professionnelles", icon:FolderCheck, count:"1" },
  { id:"internships", href:"/stages", icon:ScrollText, count:"0" },
  { id:"certificates", href:"/formations-certificats", icon:Medal, count:"20" },
  { id:"communications", href:"/communications-scientifiques", icon:BookOpenCheck, count:"2" },
  { id:"activities", href:"/activites-para-universitaires", icon:LibraryBig, count:"6" },
  { id:"recommendations", href:"/lettres-recommandation", icon:ScrollText, count:"5" },
  { id:"thesis", href:"/memoire-master", icon:FileText, count:"4" },
  { id:"project", href:"/projet-sii-ml-chu", icon:FolderCheck, count:"239" },
];

export default function Home({ locale }: { locale: Locale }) {
  const t = messages[locale];
  return <div className="archive-home">
    <section className="archive-hero"><div className="hero-copy"><p className="crumb">01 / {t.archive}</p><h1>Dossier doctoral<br /><em>documenté.</em></h1><p>{t.intro}</p><div className="hero-actions"><Link href="/registre-des-pieces"><FileText size={16} /> {t.register}</Link><Link className="outline" href="/confidentialite"><ShieldCheck size={16} /> {t.nav.privacy}</Link></div></div><div className="hero-image"><img src={assets.hero} alt="Dossier et pièces documentaires" /><div><span>ZIP / PH.D</span><span>HORS CV</span></div></div></section>
    <section className="coverage-strip"><article><b>41</b><span>{t.pieces}<br />hors CV</span></article><article><b>239</b><span>fichiers<br />SII-ML CHU</span></article><article><b>0</b><span>justificatif de<br />stage identifié</span></article><article><FolderLock size={22} /><span>pièces sensibles<br />sous accès contrôlé</span></article></section>
    <section className="home-intro"><div><p className="crumb">02 / {t.coverage}</p><h2>Un archive, des pages distinctes, une source par affirmation.</h2></div><p>Le site ne recompose pas un CV à partir de souvenirs ou de listes indicatives. Il organise les documents disponibles par catégorie et indique explicitement les limites du corpus lorsque l’archive ne contient pas de justificatif.</p></section>
    <section className="category-grid">{routes.map((route, index) => { const Icon = route.icon; const meta = sectionMeta[route.id]; return <Link key={route.id} href={route.href} className="category-card"><div><span>0{index + 1}</span><Icon size={20} /></div><div className="category-class"><img src={assets.mark} alt="" /><span>ARCHIVE / {meta.scope}</span></div><h3>{t.nav[route.id]}</h3><p>{meta.lead}</p><footer><b>{route.count}</b><span>{t.pieces}</span><ArrowRight size={17} /></footer></Link>; })}</section>
    <section className="home-callout"><div><p className="crumb inverse">ARCHIVE / PÉRIMÈTRE</p><h2>Chaque pièce est visible dans le registre, même lorsque sa consultation est restreinte.</h2></div><div><p>La carte nationale d’identité, les lettres originales signées et les données opérationnelles liées au projet hospitalier sont bien inventoriées, mais ne sont pas mises à disposition publiquement.</p><Link href="/confidentialite">{t.nav.privacy} <ArrowRight size={17} /></Link></div></section>
  </div>;
}

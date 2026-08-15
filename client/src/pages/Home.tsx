/* Style reminder: Bibliothèque de preuves académiques — synthèse d'archive et accès direct aux pages sources. */
import { ArrowRight, BookOpenCheck, FileText, FolderCheck, FolderLock, GraduationCap, LibraryBig, Medal, ScrollText, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { assets, Locale, messages, SectionId, sectionMeta } from "@/lib/archiveData";
import { localeTools, useContentTranslation } from "@/lib/translation";

const routes: { id: SectionId; href: string; icon: typeof GraduationCap; count: string }[] = [
  { id:"academic", href:"/formation-academique", icon:GraduationCap, count:"4" },
  { id:"experience", href:"/experiences-professionnelles", icon:FolderCheck, count:"1" },
  { id:"internships", href:"/stages", icon:ScrollText, count:"9" },
  { id:"certificates", href:"/formations-certificats", icon:Medal, count:"7" },
  { id:"communications", href:"/communications-scientifiques", icon:BookOpenCheck, count:"2" },
  { id:"activities", href:"/activites-para-universitaires", icon:LibraryBig, count:"8" },
  { id:"recommendations", href:"/lettres-recommandation", icon:ScrollText, count:"5" },
  { id:"thesis", href:"/memoire-master", icon:FileText, count:"4" },
  { id:"project", href:"/projet-sii-ml-chu", icon:FolderCheck, count:"239" },
];

export default function Home({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const localized = useContentTranslation(locale, [{ key:"home-title", text:"Dossier doctoral structuré." }, { key:"home-intro", text:"Le CV structure les intitulés, le parcours et les expériences ; l’archive ZIP apporte les diplômes, attestations, lettres, travaux scientifiques et pièces de contrôle correspondantes." }, { key:"home-heading", text:"Un parcours professionnel, des preuves organisées, une source explicitée." }, { key:"home-body", text:"Les informations de parcours, les stages et les activités sont reformulés à partir des CV français et anglais. Chaque notice précise ensuite si elle est soutenue par un justificatif du ZIP ou si son document original reste à ajouter." }]);
  const tools = localeTools[locale];
  return <div className="archive-home">
    <section className="archive-hero"><div className="hero-copy"><p className="crumb">01 / {t.archive}</p><h1>{localized("home-title", "Dossier doctoral structuré.")}</h1><p>{localized("home-intro", "Le CV structure les intitulés, le parcours et les expériences ; l’archive ZIP apporte les diplômes, attestations, lettres, travaux scientifiques et pièces de contrôle correspondantes.")}</p><div className="hero-actions"><Link href="/registre-des-pieces"><FileText size={16} /> {t.register}</Link><Link className="outline" href="/confidentialite"><ShieldCheck size={16} /> {t.nav.privacy}</Link></div></div><div className="hero-image"><img src={assets.hero} alt="Dossier et pièces documentaires" /><div><span>{tools.cv}</span><span>{tools.zip}</span></div></div></section>
    <section className="coverage-strip"><article><b>4</b><span>parcours<br />académiques</span></article><article><b>9</b><span>stages<br />extraits du CV</span></article><article><b>7</b><span>ensembles de<br />certificats</span></article><article><FolderLock size={22} /><span>preuves ZIP<br />sous accès contrôlé</span></article></section>
    <section className="home-intro"><div><p className="crumb">02 / {t.coverage}</p><h2>{localized("home-heading", "Un parcours professionnel, des preuves organisées, une source explicitée.")}</h2></div><p>{localized("home-body", "Les informations de parcours, les stages et les activités sont reformulés à partir des CV français et anglais. Chaque notice précise ensuite si elle est soutenue par un justificatif du ZIP ou si son document original reste à ajouter.")}</p></section>
    <section className="category-grid">{routes.map((route, index) => { const Icon = route.icon; const meta = sectionMeta[route.id]; return <Link key={route.id} href={route.href} className="category-card"><div><span>0{index + 1}</span><Icon size={20} /></div><div className="category-class"><img src={assets.mark} alt="" /><span>ARCHIVE / {meta.scope}</span></div><h3>{t.nav[route.id]}</h3><p>{meta.lead}</p><footer><b>{route.count}</b><span>{t.pieces}</span><ArrowRight size={17} /></footer></Link>; })}</section>
    <section className="home-callout"><div><p className="crumb inverse">ARCHIVE / PÉRIMÈTRE</p><h2>Chaque pièce est visible dans le registre, même lorsque sa consultation est restreinte.</h2></div><div><p>La carte nationale d’identité, les lettres originales signées et les données opérationnelles liées au projet hospitalier sont bien inventoriées, mais ne sont pas mises à disposition publiquement.</p><Link href="/confidentialite">{t.nav.privacy} <ArrowRight size={17} /></Link></div></section>
  </div>;
}

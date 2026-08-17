/* Style reminder: Research IDE — dossier de recherche avec identité professionnelle, repères de fichiers et preuves structurées. */
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
  const localized = useContentTranslation(locale, [{ key:"home-title", text:"Candidature au cycle doctoral" }, { key:"home-intro", text:"Je suis Cherki El Mehdi, diplômé d’un Master d’excellence en Management des Systèmes d’Information Intelligents. Fort d’une expérience en audit interne et contrôle de gestion au CHU Mohammed VI d’Oujda, je souhaite poursuivre un doctorat consacré aux systèmes d’information intelligents, à l’IA documentaire et à la gouvernance des processus hospitaliers. Mon mémoire et le prototype SII-ML CHU constituent les premières bases de cette démarche de recherche appliquée." }, { key:"home-heading", text:"Un parcours professionnel, des preuves organisées, une source explicitée." }, { key:"home-body", text:"Les informations de parcours, les stages et les activités sont reformulés à partir des CV français et anglais. Chaque notice précise ensuite si elle est soutenue par un justificatif du ZIP ou si son document original reste à ajouter." }]);
  const tools = localeTools[locale];
  return <div className="archive-home">
    <section className="archive-hero"><div className="hero-copy"><p className="crumb">01 / {t.archive}</p><h1>{localized("home-title", "Candidature au cycle doctoral")}</h1><p>{localized("home-intro", "Je suis Cherki El Mehdi, diplômé d’un Master d’excellence en Management des Systèmes d’Information Intelligents. Fort d’une expérience en audit interne et contrôle de gestion au CHU Mohammed VI d’Oujda, je souhaite poursuivre un doctorat consacré aux systèmes d’information intelligents, à l’IA documentaire et à la gouvernance des processus hospitaliers. Mon mémoire et le prototype SII-ML CHU constituent les premières bases de cette démarche de recherche appliquée.")}</p><div className="hero-actions"><Link href="/registre-des-pieces"><FileText size={16} /> {t.register}</Link><Link className="outline" href="/confidentialite"><ShieldCheck size={16} /> {t.nav.privacy}</Link></div></div><div className="hero-image"><img className="hero-document-art" src={assets.hero} alt="Dossier et pièces documentaires" /><div className="profile-hero-card"><img src="/manus-storage/cherki-el-mehdi-portrait_c963a941.jpg" alt="Cherki El Mehdi, profil professionnel" /><div><span>PROFILE / RESEARCHER</span><b>Cherki El Mehdi</b><p>Management des systèmes d’information intelligents</p></div></div><div><span>{tools.cv}</span><span>{tools.zip}</span></div></div></section>
    <section className="coverage-strip"><article><b>4</b><span>parcours<br />académiques</span></article><article><b>9</b><span>stages<br />extraits du CV</span></article><article><b>7</b><span>ensembles de<br />certificats</span></article><article><FolderLock size={22} /><span>preuves ZIP<br />sous accès contrôlé</span></article></section>
    <section className="home-intro"><div><p className="crumb">02 / {t.coverage}</p><h2>{localized("home-heading", "Un parcours professionnel, des preuves organisées, une source explicitée.")}</h2></div><p>{localized("home-body", "Les informations de parcours, les stages et les activités sont reformulés à partir des CV français et anglais. Chaque notice précise ensuite si elle est soutenue par un justificatif du ZIP ou si son document original reste à ajouter.")}</p></section>
    <section className="category-grid">{routes.map((route, index) => { const Icon = route.icon; const meta = sectionMeta[route.id]; return <Link key={route.id} href={route.href} className="category-card"><div><span>0{index + 1}</span><Icon size={20} /></div><div className="category-class"><img src={assets.mark} alt="" /><span>ARCHIVE / {meta.scope}</span></div><h3>{t.nav[route.id]}</h3><p>{meta.lead}</p><footer><b>{route.count}</b><span>{t.pieces}</span><ArrowRight size={17} /></footer></Link>; })}</section>
    <section className="home-callout"><div><p className="crumb inverse">ARCHIVE / PÉRIMÈTRE</p><h2>Chaque pièce est visible dans le registre, même lorsque sa consultation est restreinte.</h2></div><div><p>La carte nationale d’identité, les lettres originales signées et les données opérationnelles liées au projet hospitalier sont bien inventoriées, mais ne sont pas mises à disposition publiquement.</p><Link href="/confidentialite">{t.nav.privacy} <ArrowRight size={17} /></Link></div></section>
  </div>;
}

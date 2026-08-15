/* Style reminder: Bibliothèque de preuves académiques — notice par pièce, source et statut d'accès visibles. */
import { ArrowUpRight, FileCheck2, FileText, FolderLock, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { allIndexItems, assets, DocumentItem, Locale, messages, sectionItems, sectionMeta, SectionId } from "@/lib/archiveData";

function accessClass(access: DocumentItem["access"]) { return `access ${access}`; }

export default function DocumentPage({ section, locale }: { section: SectionId; locale: Locale }) {
  const [query, setQuery] = useState("");
  const t = messages[locale];
  const meta = sectionMeta[section];
  const baseItems = section === "registry" ? allIndexItems : sectionItems[section as Exclude<SectionId, "registry">];
  const items = useMemo(() => baseItems.filter(item => `${item.title} ${item.source} ${item.type}`.toLowerCase().includes(query.toLowerCase())), [baseItems, query]);
  const accessLabel = (access: DocumentItem["access"]) => t[access];
  const isProject = section === "project";
  const controlledCount = baseItems.filter(item => item.access === "controlled" || item.access === "private").length;
  const verifyCount = baseItems.filter(item => item.access === "verify").length;
  const next = { academic:"experience", experience:"internships", internships:"certificates", certificates:"communications", communications:"activities", activities:"recommendations", recommendations:"thesis", thesis:"project", project:"registry", registry:"privacy", privacy:"academic" } as Record<Exclude<SectionId, "internships">, SectionId>;
  const route = (id: SectionId) => ({ academic:"/formation-academique", experience:"/experiences-professionnelles", internships:"/stages", certificates:"/formations-certificats", communications:"/communications-scientifiques", activities:"/activites-para-universitaires", recommendations:"/lettres-recommandation", thesis:"/memoire-master", project:"/projet-sii-ml-chu", registry:"/registre-des-pieces", privacy:"/confidentialite" }[id]);

  return <div className="document-page">
    <section className={isProject ? "document-hero project-hero" : "document-hero"}>
      <div><p className="crumb">{t.document} / {meta.scope}</p><h1>{meta.title}</h1><p className="document-lead">{meta.lead}</p><div className="document-stats"><span><b>{meta.count}</b> {t.pieces}</span><span><ShieldCheck size={15} /> {t.archive}</span></div></div>
      <div className="document-hero-image"><img src={isProject ? assets.project : assets.hero} alt="" /><span>{isProject ? "SII-ML CHU / CORPUS TECHNIQUE" : "SOURCE / ARCHIVE ZIP"}</span></div>
    </section>

    <section className="coverage-panel"><div className="coverage-mark"><img src={assets.mark} alt="" /><span>{t.coverage}</span></div><div><FileCheck2 size={17} /><p><b>{meta.count}</b><span>{meta.scope} présents dans l’archive.</span></p></div><div><ShieldCheck size={17} /><p><b>{controlledCount}</b><span>pièce{controlledCount > 1 ? "s" : ""} à accès contrôlé ou privé.</span></p></div>{verifyCount > 0 ? <div className="coverage-verify"><FolderLock size={17} /><p><b>{verifyCount}</b><span>intitulé{verifyCount > 1 ? "s" : ""} à confirmer sur l’original.</span></p></div> : <div className="coverage-clear"><ShieldCheck size={17} /><p><b>CV</b><span>exclu comme source de contenu.</span></p></div>}</section>
    <>
      <section className="document-controls"><div><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search} /></div><p>{items.length} / {baseItems.length} {t.pieces}</p></section>
      <section className="document-list">{items.map((item, index) => <article className="document-card" key={item.id}><div className="document-number">{String(index + 1).padStart(2, "0")}</div><div className="document-core"><div className="document-kinds"><span>{item.type}</span><span className={accessClass(item.access)}>{accessLabel(item.access)}</span>{item.date && <span>{item.date}</span>}</div><h2>{item.title}</h2><p>{item.description}</p><details><summary>{t.details} <ArrowUpRight size={15} /></summary><div className="source-box"><span><FileText size={15} /> {t.source}</span><code>{item.source}</code></div>{item.details && <ol className="source-details">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ol>}</details></div><div className="source-id">{item.id}</div></article>)}</section>
      {items.length === 0 && <p className="no-results">{t.noEvidence}</p>}
    </>
    <Link className="next-page" href={route(next[section as Exclude<SectionId, "internships">])}>{t.next}<span>{t.nav[next[section as Exclude<SectionId, "internships">]]}</span><ArrowUpRight size={17} /></Link>
  </div>;
}

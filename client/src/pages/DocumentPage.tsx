/* Style reminder: Bibliothèque de preuves académiques — notice par pièce, source et statut d'accès visibles. */
import { ArrowUpRight, Award, BriefcaseBusiness, FileCheck2, FileText, FolderLock, GraduationCap, Layers3, Microscope, Search, ShieldCheck, UsersRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { allIndexItems, assets, DocumentItem, Locale, messages, sectionItems, sectionMeta, SectionId } from "@/lib/archiveData";
import DocumentLightbox, { DocumentPreview } from "@/components/DocumentLightbox";
import { localeTools, useContentTranslation } from "@/lib/translation";
import Project3D from "@/components/Project3D";
import EvidenceGallery from "@/components/EvidenceGallery";
import { publicEvidenceFor, PublicEvidence } from "@/lib/publicEvidence";

function accessClass(access: DocumentItem["access"]) { return `access ${access}`; }

export default function DocumentPage({ section, locale }: { section: SectionId; locale: Locale }) {
  const [query, setQuery] = useState("");
  const [activePreview, setActivePreview] = useState<DocumentPreview | null>(null);
  const [previewCollection, setPreviewCollection] = useState<PublicEvidence[]>([]);
  const t = messages[locale];
  const meta = sectionMeta[section];
  const baseItems = section === "registry" ? allIndexItems : sectionItems[section as Exclude<SectionId, "registry">];
  const items = useMemo(() => baseItems.filter(item => `${item.title} ${item.source} ${item.type}`.toLowerCase().includes(query.toLowerCase())), [baseItems, query]);
  const localized = useContentTranslation(locale, [
    { key:"meta-title", text:meta.title }, { key:"meta-lead", text:meta.lead }, { key:"meta-count", text:meta.count }, { key:"meta-scope", text:meta.scope },
    ...items.flatMap(item => [{ key:`${item.id}-type`, text:item.type }, { key:`${item.id}-title`, text:item.title }, { key:`${item.id}-description`, text:item.description }]),
  ]);
  const accessLabel = (access: DocumentItem["access"]) => ({ public:"VERIFIED", controlled:"CONTROLLED", private:"PRIVATE", verify:"REVIEW" }[access]);
  const isProject = section === "project";
  const controlledCount = baseItems.filter(item => item.access === "controlled" || item.access === "private").length;
  const verifyCount = baseItems.filter(item => item.access === "verify").length;
  const next = { academic:"experience", experience:"internships", internships:"certificates", certificates:"communications", communications:"activities", activities:"recommendations", recommendations:"thesis", thesis:"project", project:"registry", registry:"privacy", privacy:"academic" } as Record<Exclude<SectionId, "internships">, SectionId>;
  const route = (id: SectionId) => ({ academic:"/formation-academique", experience:"/experiences-professionnelles", internships:"/stages", certificates:"/formations-certificats", communications:"/communications-scientifiques", activities:"/activites-para-universitaires", recommendations:"/lettres-recommandation", thesis:"/memoire-master", project:"/projet-sii-ml-chu", registry:"/registre-des-pieces", privacy:"/confidentialite" }[id]);
  const moduleHeaders: Record<SectionId, string> = { academic:"// archive/education/academic-record.md", experience:"// archive/experience/chou-audit.log", internships:"// cv/stages/index.log", certificates:"// archive/certifications/certificate-index.json", communications:"// archive/science/communications.bib", activities:"// archive/activities/engagement.log", recommendations:"// secure/references/private-index.md", thesis:"// research/thesis/master-project.md", project:"// projects/sii-ml-chu/architecture.3d", registry:"// archive/index/manifest.json", privacy:"// secure/access-policy.md" };
  const previewsBySection: Record<SectionId, { file: string; type: string; status: string; icon: typeof FileText }> = {
    academic:{ file:"academic-record.md", type:"DIPLOMA / TRANSCRIPT", status:"CONTROLLED", icon:GraduationCap }, experience:{ file:"chou-audit.log", type:"EMPLOYMENT RECORD", status:"CONTROLLED", icon:BriefcaseBusiness }, internships:{ file:"stages.index.log", type:"CV-STRUCTURED / REVIEW", status:"REVIEW", icon:BriefcaseBusiness }, certificates:{ file:"certificates.json", type:"ATTESTATION BUNDLE", status:"CONTROLLED", icon:Award }, communications:{ file:"communications.bib", type:"SCIENTIFIC OUTPUT", status:"CONTROLLED", icon:Microscope }, activities:{ file:"engagement.log", type:"ACTIVITIES / ROLES", status:"REVIEW", icon:UsersRound }, recommendations:{ file:"references.private", type:"SIGNED LETTERS", status:"PRIVATE", icon:FolderLock }, thesis:{ file:"master-project.md", type:"THESIS / DEFENSE", status:"CONTROLLED", icon:FileText }, project:{ file:"architecture.3d", type:"SYSTEM MODULES", status:"VERIFIED", icon:Layers3 }, registry:{ file:"manifest.json", type:"ARCHIVE INDEX", status:"VERIFIED", icon:FileText }, privacy:{ file:"access-policy.md", type:"RESTRICTED SURFACES", status:"PRIVATE", icon:FolderLock },
  };
  const previewMeta = previewsBySection[section];
  const PreviewIcon = previewMeta.icon;

  const previews: Record<string, string> = {
    "ACA-01":"/manus-storage/safe-preview-master_ed351907.jpg", "ACA-02":"/manus-storage/safe-preview-licence_a6bd9623.jpg", "ACA-03":"/manus-storage/safe-preview-bts_ab5dc91c.jpg", "CER-01":"/manus-storage/preview-project-management_b8dbb072.png", "ACT-01":"/manus-storage/preview-festival-sciences_77300530.png",
  };
  const galleryEvidence = useMemo(() => publicEvidenceFor(section), [section]);
  useEffect(() => {
    const requestedPreview = new URLSearchParams(window.location.search).get("preview");
    const publicItem = requestedPreview ? galleryEvidence.find(entry => entry.id === requestedPreview) : undefined;
    const item = requestedPreview ? items.find(entry => entry.id === requestedPreview) : undefined;
    const src = requestedPreview ? previews[requestedPreview] : undefined;
    if (publicItem) { setPreviewCollection(galleryEvidence); setActivePreview({ id:publicItem.id, src:publicItem.preview, title:publicItem.title, source:publicItem.source, download:publicItem.download }); }
    else if (item && src && item.access !== "private") setActivePreview({ src, title:item.title, source:item.source });
  }, [items, galleryEvidence]);
  const tool = localeTools[locale];
  const openEvidence = (item: PublicEvidence, collection: PublicEvidence[] = galleryEvidence) => { setPreviewCollection(collection); setActivePreview({ id:item.id, src:item.preview, title:item.title, source:item.source, download:item.download }); };
  const activeIndex = activePreview?.id ? previewCollection.findIndex(item => item.id === activePreview.id) : -1;
  const shiftPreview = (direction: -1 | 1) => { const item = previewCollection[activeIndex + direction]; if (item) openEvidence(item, previewCollection); };
  return <div className="document-page">
    <section className={isProject ? "document-hero project-hero" : "document-hero"}>
      <div><p className="module-path">{moduleHeaders[section]}</p><p className="crumb">{t.document} / {localized("meta-scope", meta.scope)}</p><h1>{localized("meta-title", meta.title)}</h1><p className="document-lead">{localized("meta-lead", meta.lead)}</p><div className="document-stats"><span><b>{localized("meta-count", meta.count)}</b> {t.pieces}</span><span><ShieldCheck size={15} /> {t.archive}</span></div></div>
      <div className={`document-hero-image route-preview preview-${section}`}><div className="route-preview-window"><div className="route-preview-tabs"><span>preview</span><span>metadata</span></div><div className="route-preview-file"><PreviewIcon size={30} /><div><b>{previewMeta.file}</b><small>{previewMeta.type}</small></div></div><div className="route-preview-lines"><i /><i /><i /><i /></div><div className="route-preview-status"><span>ACCESS</span><b>{previewMeta.status}</b></div></div><span>{moduleHeaders[section]}</span></div>
    </section>

    <section className="coverage-panel"><div className="coverage-mark"><img src={assets.mark} alt="" /><span>{t.coverage}</span></div><div><FileCheck2 size={17} /><p><b>{localized("meta-count", meta.count)}</b><span>{localized("meta-scope", meta.scope)}</span></p></div><div><ShieldCheck size={17} /><p><b>{controlledCount}</b><span>pièce{controlledCount > 1 ? "s" : ""} à accès contrôlé ou privé.</span></p></div>{verifyCount > 0 ? <div className="coverage-verify"><FolderLock size={17} /><p><b>{verifyCount}</b><span>intitulé{verifyCount > 1 ? "s" : ""} à confirmer sur l’original.</span></p></div> : <div className="coverage-clear"><ShieldCheck size={17} /><p><b>CV</b><span>{tool.cv}</span></p></div>}</section>
    <EvidenceGallery section={section} locale={locale} evidence={galleryEvidence} onPreview={openEvidence} />
    {isProject && <Project3D />}
    <>
      <section className="document-controls"><div><Search size={17} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={t.search} /></div><p>{items.length} / {baseItems.length} {t.pieces}</p></section>
      <section className="document-list">{items.map((item, index) => { const preview = previews[item.id]; const title = localized(`${item.id}-title`, item.title); return <article className="document-card" id={item.id} key={item.id}><div className="document-number">{String(index + 1).padStart(2, "0")}</div><div className="document-core"><div className="document-kinds"><span>{localized(`${item.id}-type`, item.type)}</span><span className={accessClass(item.access)}>{accessLabel(item.access)}</span>{item.date && <span>{item.date}</span>}</div><h2>{title}</h2><p>{localized(`${item.id}-description`, item.description)}</p><div className="document-actions">{preview && item.access !== "private" && <button className="preview-button" onClick={() => setActivePreview({ src:preview, title, source:item.source })}><FileCheck2 size={14} /> {tool.preview}</button>}<details><summary>{t.details} <ArrowUpRight size={15} /></summary><div className="source-box"><span><FileText size={15} /> {t.source}</span><code>{item.source}</code></div>{item.details && <ol className="source-details">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ol>}</details></div></div><div className="source-id">{item.id}</div></article>; })}</section>
      {items.length === 0 && <p className="no-results">{t.noEvidence}</p>}
    </>
    <Link className="next-page" href={route(next[section as Exclude<SectionId, "internships">])}>{t.next}<span>{t.nav[next[section as Exclude<SectionId, "internships">]]}</span><ArrowUpRight size={17} /></Link>
    <DocumentLightbox preview={activePreview} locale={locale} onClose={() => setActivePreview(null)} onPrevious={() => shiftPreview(-1)} onNext={() => shiftPreview(1)} hasPrevious={activeIndex > 0} hasNext={activeIndex >= 0 && activeIndex < previewCollection.length - 1} />
  </div>;
}

/* Style reminder: Research IDE — galerie de fichiers consultables, téléchargeables et clairement séparés des pièces privées. */
import { Download, Eye, Filter, ImageOff, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { Locale, SectionId } from "@/lib/archiveData";
import { PublicEvidence } from "@/lib/publicEvidence";
import { localeTools } from "@/lib/translation";

const copy: Record<Locale, { title: string; lead: string; download: string; empty: string; year: string; type: string; organization: string; all: string; reset: string; result: string }> = {
  fr:{ title:"Fichiers visualisables", lead:"Aperçus et fichiers téléchargeables autorisés dans cette section.", download:"Télécharger", empty:"Aucun fichier public téléchargeable n’est disponible dans cette section. Les notices restent consultables ci-dessous.", year:"Année", type:"Type", organization:"Organisme", all:"Tous", reset:"Réinitialiser", result:"résultat(s)" },
  en:{ title:"Viewable files", lead:"Authorised previews and downloadable files in this section.", download:"Download", empty:"No public downloadable file is available in this section. Records remain available below.", year:"Year", type:"Type", organization:"Organisation", all:"All", reset:"Reset", result:"result(s)" },
  ar:{ title:"ملفات قابلة للعرض", lead:"معاينات وملفات مسموح بتنزيلها في هذا القسم.", download:"تنزيل", empty:"لا يوجد ملف عام قابل للتنزيل في هذا القسم. تبقى البطاقات متاحة أدناه.", year:"السنة", type:"النوع", organization:"الجهة", all:"الكل", reset:"إعادة", result:"نتيجة" },
  es:{ title:"Archivos visualizables", lead:"Vistas previas y archivos descargables autorizados en esta sección.", download:"Descargar", empty:"No hay un archivo público descargable en esta sección. Las fichas siguen disponibles abajo.", year:"Año", type:"Tipo", organization:"Organización", all:"Todos", reset:"Restablecer", result:"resultado(s)" },
  nl:{ title:"Bekijkbare bestanden", lead:"Toegestane previews en downloads in deze sectie.", download:"Downloaden", empty:"Er is geen openbaar downloadbaar bestand in deze sectie. De fiches blijven hieronder beschikbaar.", year:"Jaar", type:"Type", organization:"Organisatie", all:"Alle", reset:"Herstellen", result:"resultaat/resultaten" },
  de:{ title:"Anzeigbare Dateien", lead:"Autorisierte Vorschauen und Downloads in diesem Bereich.", download:"Herunterladen", empty:"In diesem Bereich ist keine öffentliche Datei zum Herunterladen verfügbar. Die Einträge bleiben unten verfügbar.", year:"Jahr", type:"Typ", organization:"Organisation", all:"Alle", reset:"Zurücksetzen", result:"Ergebnis(se)" },
};

export default function EvidenceGallery({ section, locale, evidence, onPreview }: { section: SectionId; locale: Locale; evidence: PublicEvidence[]; onPreview: (item: PublicEvidence, collection: PublicEvidence[]) => void }) {
  const t = copy[locale];
  const [year, setYear] = useState("all");
  const [type, setType] = useState("all");
  const [organization, setOrganization] = useState("all");
  const years = useMemo(() => Array.from(new Set(evidence.map(item => item.year))).sort().reverse(), [evidence]);
  const types = useMemo(() => Array.from(new Set(evidence.map(item => item.type))).sort(), [evidence]);
  const organizations = useMemo(() => Array.from(new Set(evidence.map(item => item.organization))).sort(), [evidence]);
  const filtered = useMemo(() => evidence.filter(item => (year === "all" || item.year === year) && (type === "all" || item.type === type) && (organization === "all" || item.organization === organization)), [evidence, year, type, organization]);
  if (!evidence.length) return <section className="evidence-gallery evidence-empty"><ImageOff size={19} /><div><span>public-assets/{section}</span><p>{t.empty}</p></div></section>;
  const reset = () => { setYear("all"); setType("all"); setOrganization("all"); };
  return <section className="evidence-gallery"><header><div><span>public-assets/{section}</span><h2>{t.title}</h2><p>{t.lead}</p></div><b>{filtered.length.toString().padStart(2,"0")}</b></header><div className="evidence-filters"><div className="filter-title"><Filter size={15} /><span>filter.query</span></div><label>{t.year}<select value={year} onChange={event => setYear(event.target.value)}><option value="all">{t.all}</option>{years.map(value => <option key={value} value={value}>{value}</option>)}</select></label><label>{t.type}<select value={type} onChange={event => setType(event.target.value)}><option value="all">{t.all}</option>{types.map(value => <option key={value} value={value}>{value}</option>)}</select></label><label>{t.organization}<select value={organization} onChange={event => setOrganization(event.target.value)}><option value="all">{t.all}</option>{organizations.map(value => <option key={value} value={value}>{value}</option>)}</select></label><button onClick={reset}><RotateCcw size={13} /> {t.reset}</button><p>{filtered.length} {t.result}</p></div><div className="evidence-grid">{filtered.map(item => <article key={item.id}><button className="evidence-thumb" onClick={() => onPreview(item, filtered)}><img src={item.preview} alt={`Aperçu : ${item.title}`} /><span><Eye size={14} /> PREVIEW</span></button><div className="evidence-meta"><span>{item.id}</span><h3>{item.title}</h3><p>{item.source}</p><div className="evidence-tags"><i>{item.year}</i><i>{item.type}</i><i>{item.organization}</i></div></div><footer><button onClick={() => onPreview(item, filtered)}><Eye size={14} /> {localeTools[locale].preview}</button><a href={item.download} download><Download size={14} /> {t.download}</a></footer></article>)}</div>{!filtered.length && <p className="evidence-no-result">0 // {t.result}</p>}</section>;
}

/* Style reminder: Research IDE — galerie de fichiers consultables, téléchargeables et clairement séparés des pièces privées. */
import { Download, Eye, FileWarning, ImageOff } from "lucide-react";
import { Locale, SectionId } from "@/lib/archiveData";
import { PublicEvidence } from "@/lib/publicEvidence";
import { localeTools } from "@/lib/translation";

const copy: Record<Locale, { title: string; lead: string; download: string; empty: string }> = {
  fr:{ title:"Fichiers visualisables", lead:"Aperçus et fichiers téléchargeables autorisés dans cette section.", download:"Télécharger", empty:"Aucun fichier public téléchargeable n’est disponible dans cette section. Les notices restent consultables ci-dessous." },
  en:{ title:"Viewable files", lead:"Authorised previews and downloadable files in this section.", download:"Download", empty:"No public downloadable file is available in this section. Records remain available below." },
  ar:{ title:"ملفات قابلة للعرض", lead:"معاينات وملفات مسموح بتنزيلها في هذا القسم.", download:"تنزيل", empty:"لا يوجد ملف عام قابل للتنزيل في هذا القسم. تبقى البطاقات متاحة أدناه." },
  es:{ title:"Archivos visualizables", lead:"Vistas previas y archivos descargables autorizados en esta sección.", download:"Descargar", empty:"No hay un archivo público descargable en esta sección. Las fichas siguen disponibles abajo." },
  nl:{ title:"Bekijkbare bestanden", lead:"Toegestane previews en downloads in deze sectie.", download:"Downloaden", empty:"Er is geen openbaar downloadbaar bestand in deze sectie. De fiches blijven hieronder beschikbaar." },
  de:{ title:"Anzeigbare Dateien", lead:"Autorisierte Vorschauen und Downloads in diesem Bereich.", download:"Herunterladen", empty:"In diesem Bereich ist keine öffentliche Datei zum Herunterladen verfügbar. Die Einträge bleiben unten verfügbar." },
};

export default function EvidenceGallery({ section, locale, evidence, onPreview }: { section: SectionId; locale: Locale; evidence: PublicEvidence[]; onPreview: (item: PublicEvidence) => void }) {
  const t = copy[locale];
  if (!evidence.length) return <section className="evidence-gallery evidence-empty"><ImageOff size={19} /><div><span>public-assets/{section}</span><p>{t.empty}</p></div></section>;
  return <section className="evidence-gallery"><header><div><span>public-assets/{section}</span><h2>{t.title}</h2><p>{t.lead}</p></div><b>{evidence.length.toString().padStart(2,"0")}</b></header><div className="evidence-grid">{evidence.map(item => <article key={item.id}><button className="evidence-thumb" onClick={() => onPreview(item)}><img src={item.preview} alt={`Aperçu : ${item.title}`} /><span><Eye size={14} /> PREVIEW</span></button><div className="evidence-meta"><span>{item.id}</span><h3>{item.title}</h3><p>{item.source}</p></div><footer><button onClick={() => onPreview(item)}><Eye size={14} /> {localeTools[locale].preview}</button><a href={item.download} download><Download size={14} /> {t.download}</a></footer></article>)}</div></section>;
}

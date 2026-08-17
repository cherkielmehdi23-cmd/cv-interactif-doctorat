/* Style reminder: Research IDE — frise de type journal d’événements, compacte, navigable et liée aux notices source. */
import { CalendarDays, ChevronRight, GitCommitHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { DocumentItem, Locale, messages } from "@/lib/archiveData";
import { useContentTranslation } from "@/lib/translation";

type Props = { items: DocumentItem[]; locale: Locale; onSelect: (id: string) => void };

const copy: Record<Locale, { title: string; instruction: string; indexed: string }> = {
  fr: { title:"Chronologie interactive", instruction:"Sélectionner un repère pour accéder à sa notice", indexed:"éléments indexés" },
  en: { title:"Interactive timeline", instruction:"Select a marker to open its record", indexed:"indexed items" },
  ar: { title:"خط زمني تفاعلي", instruction:"اختر علامة للوصول إلى بطاقتها", indexed:"عناصر مفهرسة" },
  es: { title:"Cronología interactiva", instruction:"Seleccione un marcador para abrir su ficha", indexed:"elementos indexados" },
  nl: { title:"Interactieve tijdlijn", instruction:"Selecteer een markering om de fiche te openen", indexed:"geïndexeerde items" },
  de: { title:"Interaktive Zeitleiste", instruction:"Wählen Sie eine Markierung, um den Eintrag zu öffnen", indexed:"indizierte Elemente" },
};

function yearOf(item: DocumentItem, index: number) {
  const dates = item.date?.match(/\b(19|20)\d{2}\b/g) ?? [];
  return dates.length ? Number(dates[dates.length - 1]) : 2100 + index;
}

export default function TimelineView({ items, locale, onSelect }: Props) {
  const initialActive = useMemo(() => [...items].sort((a, b) => yearOf(b, items.indexOf(b)) - yearOf(a, items.indexOf(a)))[0]?.id ?? "", [items]);
  const [activeId, setActiveId] = useState(initialActive);
  const t = copy[locale];
  const translated = useContentTranslation(locale, items.flatMap(item => [{ key:`time-title-${item.id}`, text:item.title }, { key:`time-type-${item.id}`, text:item.type }]));
  const sorted = useMemo(() => [...items].sort((a, b) => yearOf(a, items.indexOf(a)) - yearOf(b, items.indexOf(b))), [items]);
  if (!items.length) return null;
  const active = items.find(item => item.id === activeId) ?? items[0];
  const go = (item: DocumentItem) => { setActiveId(item.id); onSelect(item.id); };
  return <section className="timeline-view" aria-label={t.title}>
    <header><div><GitCommitHorizontal size={17} /><span>timeline.log</span></div><p>{items.length} {t.indexed}</p></header>
    <div className="timeline-head"><div><h2>{t.title}</h2><p>{t.instruction}</p></div><CalendarDays size={20} /></div>
    <div className="timeline-rail" role="list">{sorted.map((item, index) => <button key={item.id} role="listitem" className={item.id === active.id ? "is-active" : ""} onClick={() => go(item)}><span className="timeline-dot" /><span className="timeline-year">{item.date || "INDEX"}</span><b>{translated(`time-title-${item.id}`, item.title)}</b><em>{translated(`time-type-${item.id}`, item.type)}</em></button>)}</div>
    <button className="timeline-active" onClick={() => onSelect(active.id)}><span>{active.id}</span><b>{translated(`time-title-${active.id}`, active.title)}</b><ChevronRight size={16} /></button>
  </section>;
}

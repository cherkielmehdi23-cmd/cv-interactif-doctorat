/* Style reminder: Bibliothèque de preuves académiques — la traduction respecte les sources, les statuts et le sens RTL. */
import { useEffect, useMemo, useState } from "react";
import { Locale } from "@/lib/archiveData";

type TranslationRecord = { key: string; text: string };
const cache = new Map<string, string>();

export const localeTools: Record<Locale, { preview: string; close: string; translation: string; cv: string; zip: string }> = {
  fr: { preview:"Visualiser la pièce", close:"Fermer", translation:"Traduction automatique", cv:"CV / structuration", zip:"ZIP / preuves" },
  en: { preview:"View document", close:"Close", translation:"Automatic translation", cv:"CV / structure", zip:"ZIP / evidence" },
  ar: { preview:"عرض الوثيقة", close:"إغلاق", translation:"ترجمة تلقائية", cv:"السيرة الذاتية / الهيكلة", zip:"ZIP / الأدلة" },
  es: { preview:"Ver documento", close:"Cerrar", translation:"Traducción automática", cv:"CV / estructura", zip:"ZIP / pruebas" },
  nl: { preview:"Document bekijken", close:"Sluiten", translation:"Automatische vertaling", cv:"CV / structuur", zip:"ZIP / bewijzen" },
  de: { preview:"Dokument ansehen", close:"Schließen", translation:"Automatische Übersetzung", cv:"CV / Struktur", zip:"ZIP / Nachweise" },
};

async function translate(text: string, locale: Locale) {
  if (locale === "fr" || !text.trim()) return text;
  const key = `${locale}:${text}`;
  const existing = cache.get(key);
  if (existing) return existing;
  try {
    const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=fr&tl=${locale}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("translation unavailable");
    const payload = await response.json();
    const output = Array.isArray(payload?.[0]) ? payload[0].map((part: unknown[]) => part[0]).join("") : text;
    cache.set(key, output || text);
    return output || text;
  } catch {
    return text;
  }
}

export function useContentTranslation(locale: Locale, entries: TranslationRecord[]) {
  const signature = useMemo(() => entries.map(entry => `${entry.key}:${entry.text}`).join("|"), [entries]);
  const [result, setResult] = useState<Record<string, string>>({});
  useEffect(() => {
    let active = true;
    if (locale === "fr") { setResult({}); return () => { active = false; }; }
    Promise.all(entries.map(async entry => [entry.key, await translate(entry.text, locale)] as const)).then(values => {
      if (active) setResult(Object.fromEntries(values));
    });
    return () => { active = false; };
  }, [locale, signature]);
  return (key: string, fallback: string) => result[key] || fallback;
}

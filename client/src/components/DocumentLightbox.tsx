/* Style reminder: Research IDE — visionneuse de document précise, contrôles de zoom explicites et lecture technique. */
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, FileCheck2, Maximize2, Minus, Plus, ShieldCheck } from "lucide-react";
import { Locale } from "@/lib/archiveData";
import { localeTools } from "@/lib/translation";
import { Spinner } from "@/components/ui/spinner";
import { useEffect, useState } from "react";

export type DocumentPreview = { id?: string; src: string; title: string; source: string; download?: string };

export default function DocumentLightbox({ preview, locale, onClose, onPrevious, onNext, hasPrevious, hasNext }: { preview: DocumentPreview | null; locale: Locale; onClose: () => void; onPrevious?: () => void; onNext?: () => void; hasPrevious?: boolean; hasNext?: boolean }) {
  const copy = localeTools[locale];
  const [zoom, setZoom] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const clampZoom = (value: number) => Math.min(3, Math.max(1, Number(value.toFixed(2))));
  useEffect(() => { setZoom(1); setIsLoading(Boolean(preview)); }, [preview?.id, preview?.src]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!preview) return;
      if (event.key === "+" || event.key === "=") { event.preventDefault(); setZoom(value => clampZoom(value + .25)); }
      if (event.key === "-") { event.preventDefault(); setZoom(value => clampZoom(value - .25)); }
      if (event.key === "0") { event.preventDefault(); setZoom(1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [preview]);
  const loadingText = { fr:"Chargement de l’aperçu public…", en:"Loading public preview…", ar:"جارٍ تحميل المعاينة العامة…", es:"Cargando la vista previa pública…", nl:"Openbare preview laden…", de:"Öffentliche Vorschau wird geladen…" }[locale];
  return <Dialog open={Boolean(preview)} onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className="document-lightbox max-w-5xl p-0 overflow-hidden border-0">
      {preview && <><DialogHeader className="lightbox-head"><div><DialogTitle>{preview.title}</DialogTitle><DialogDescription><FileCheck2 size={14} /> {preview.source}</DialogDescription></div><span><ShieldCheck size={14} /> {copy.zip}</span></DialogHeader><div className="lightbox-zoombar"><span><Maximize2 size={14} /> {Math.round(zoom * 100)}%</span><div><button onClick={() => setZoom(value => clampZoom(value - .25))} disabled={zoom <= 1} aria-label="Réduire le zoom"><Minus size={15} /></button><button onClick={() => setZoom(value => clampZoom(value + .25))} disabled={zoom >= 3} aria-label="Augmenter le zoom"><Plus size={15} /></button><button className="zoom-reset" onClick={() => setZoom(1)} disabled={zoom === 1}>100%</button></div></div><div className={zoom > 1 ? "lightbox-image-wrap is-zoomed" : "lightbox-image-wrap"} onWheel={event => { event.preventDefault(); setZoom(value => clampZoom(value + (event.deltaY < 0 ? .2 : -.2))); }}><button className="lightbox-nav previous" onClick={onPrevious} disabled={!hasPrevious} aria-label="Document précédent"><ChevronLeft size={22} /></button><div className="lightbox-viewport">{isLoading && <div className="lightbox-loading" role="status"><Spinner className="size-5" /><span>{loadingText}</span></div>}<img key={preview.id || preview.src} className={isLoading ? "lightbox-asset is-loading" : "lightbox-asset"} style={{ transform:`scale(${zoom})` }} src={preview.src} alt={preview.title} onLoad={() => setIsLoading(false)} onError={() => setIsLoading(false)} onDoubleClick={() => setZoom(value => value === 1 ? 2 : 1)} /></div><button className="lightbox-nav next" onClick={onNext} disabled={!hasNext} aria-label="Document suivant"><ChevronRight size={22} /></button></div><div className="lightbox-download">{preview.download && <a href={preview.download} download><Download size={15} /> {locale === "fr" ? "Télécharger le document" : "Download document"}</a>}<span>{locale === "fr" ? "Molette, double-clic ou + / − pour zoomer" : "Use wheel, double-click or + / − to zoom"}</span></div></>}
    </DialogContent>
  </Dialog>;
}

/* Style reminder: Bibliothèque de preuves académiques — consultation contrôlée, claire et non intrusive des pièces autorisées. */
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Download, FileCheck2, ShieldCheck } from "lucide-react";
import { Locale } from "@/lib/archiveData";
import { localeTools } from "@/lib/translation";

export type DocumentPreview = { id?: string; src: string; title: string; source: string; download?: string };

export default function DocumentLightbox({ preview, locale, onClose, onPrevious, onNext, hasPrevious, hasNext }: { preview: DocumentPreview | null; locale: Locale; onClose: () => void; onPrevious?: () => void; onNext?: () => void; hasPrevious?: boolean; hasNext?: boolean }) {
  const copy = localeTools[locale];
  return <Dialog open={Boolean(preview)} onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className="document-lightbox max-w-5xl p-0 overflow-hidden border-0">
      {preview && <><DialogHeader className="lightbox-head"><div><DialogTitle>{preview.title}</DialogTitle><DialogDescription><FileCheck2 size={14} /> {preview.source}</DialogDescription></div><span><ShieldCheck size={14} /> {copy.zip}</span></DialogHeader><div className="lightbox-image-wrap"><button className="lightbox-nav previous" onClick={onPrevious} disabled={!hasPrevious} aria-label="Document précédent"><ChevronLeft size={22} /></button><img key={preview.id || preview.src} className="lightbox-asset" src={preview.src} alt={preview.title} /><button className="lightbox-nav next" onClick={onNext} disabled={!hasNext} aria-label="Document suivant"><ChevronRight size={22} /></button></div><div className="lightbox-download">{preview.download && <a href={preview.download} download><Download size={15} /> {locale === "fr" ? "Télécharger le document" : "Download document"}</a>}<span>{locale === "fr" ? "Utilisez les flèches pour parcourir la sélection" : "Use arrows to browse the selection"}</span></div></>}
    </DialogContent>
  </Dialog>;
}

/* Style reminder: Bibliothèque de preuves académiques — consultation contrôlée, claire et non intrusive des pièces autorisées. */
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileCheck2, ShieldCheck } from "lucide-react";
import { Locale } from "@/lib/archiveData";
import { localeTools } from "@/lib/translation";

export type DocumentPreview = { src: string; title: string; source: string };

export default function DocumentLightbox({ preview, locale, onClose }: { preview: DocumentPreview | null; locale: Locale; onClose: () => void }) {
  const copy = localeTools[locale];
  return <Dialog open={Boolean(preview)} onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className="document-lightbox max-w-5xl p-0 overflow-hidden border-0">
      {preview && <><DialogHeader className="lightbox-head"><div><DialogTitle>{preview.title}</DialogTitle><DialogDescription><FileCheck2 size={14} /> {preview.source}</DialogDescription></div><span><ShieldCheck size={14} /> {copy.zip}</span></DialogHeader><div className="lightbox-image-wrap"><img src={preview.src} alt={preview.title} /></div></>}
    </DialogContent>
  </Dialog>;
}

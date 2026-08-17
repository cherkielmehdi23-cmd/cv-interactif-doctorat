/* Style reminder: Research IDE — catalogue de fichiers publics, aperçus réels et téléchargements autorisés uniquement. */
import { SectionId } from "@/lib/archiveData";

export type PublicEvidence = { id: string; title: string; source: string; preview: string; download: string; sections: SectionId[]; year: string; type: string; organization: string };

type EvidenceSeed = Omit<PublicEvidence, "year" | "type" | "organization">;

const seeds: EvidenceSeed[] = [
  { id:"ACA-01-MASTER", title:"Master — attestation de réussite et relevé", source:"ATTESTATION DE REUSSITE ET RELEVE DE NOTES MASTER.pdf", preview:"/manus-storage/safe-aca-01-master_d1259baa.jpg", download:"/manus-storage/safe-aca-01-master_d1259baa.jpg", sections:["academic","registry"] },
  { id:"ACA-02-LICENSE-RECORD", title:"Licence — relevé ou attestation AEMS2I", source:"licence AEMS2I.pdf", preview:"/manus-storage/safe-aca-02-license-record_5307490b.jpg", download:"/manus-storage/safe-aca-02-license-record_5307490b.jpg", sections:["academic","registry"] },
  { id:"ACA-03-LICENSE-DIPLOMA", title:"Licence d’excellence — diplôme", source:"licence d_excellence diplome mehdi.pdf", preview:"/manus-storage/safe-aca-03-license-diploma_1e8ebe80.jpg", download:"/manus-storage/safe-aca-03-license-diploma_1e8ebe80.jpg", sections:["academic","registry"] },
  { id:"ACA-04-BTS-DIPLOMA", title:"BTS Gestion PME/PMI — diplôme", source:"Diplôme BTS Gestion PME _PMI.jpg", preview:"/manus-storage/safe-aca-04-bts-diploma_21121c5c.jpg", download:"/manus-storage/safe-aca-04-bts-diploma_21121c5c.jpg", sections:["academic","registry"] },
  { id:"ACA-05-BTS-RECORD", title:"BTS Gestion PME/PMI — relevé de notes", source:"Relevé de note BTS.jpg", preview:"/manus-storage/safe-aca-05-bts-record_50a794d3.jpg", download:"/manus-storage/safe-aca-05-bts-record_50a794d3.jpg", sections:["academic","registry"] },
  { id:"ACA-06-BAC-FRONT", title:"Baccalauréat — recto", source:"BAC recto.jpg", preview:"/manus-storage/safe-aca-06-bac-front_fa7fbf2a.jpg", download:"/manus-storage/safe-aca-06-bac-front_fa7fbf2a.jpg", sections:["academic","registry"] },
  { id:"ACA-07-BAC-BACK", title:"Baccalauréat — verso", source:"BAC verso.jpg", preview:"/manus-storage/safe-aca-07-bac-back_419dddd3.jpg", download:"/manus-storage/safe-aca-07-bac-back_419dddd3.jpg", sections:["academic","registry"] },
  { id:"ACA-08-BAC-RECORD", title:"Baccalauréat — relevé de notes", source:"Relevé note BAC.jpg", preview:"/manus-storage/safe-aca-08-bac-record_bcc6af07.jpg", download:"/manus-storage/safe-aca-08-bac-record_bcc6af07.jpg", sections:["academic","registry"] },
  { id:"EXP-01-CHU-SERVICE", title:"CHU Oujda — prise de service SAICG", source:"prise de service SAICG - CHU Oujda.pdf", preview:"/manus-storage/exp-01-chu-service-preview_d9a3d1eb.png", download:"/manus-storage/exp-01-chu-service_b95275a1.pdf", sections:["experience","registry"] },
  { id:"CER-01", title:"Management de projet — de l’idée au projet", source:"certificate_2026072112245.pdf", preview:"/manus-storage/cer-01-management-project-preview_6d1026f1.png", download:"/manus-storage/cer-01-management-project_baf033ef.pdf", sections:["certificates","registry"] },
  { id:"CER-02", title:"Dimensions et bonnes pratiques de management", source:"certificate_202607211236.pdf", preview:"/manus-storage/cer-02-management-styles-preview_25baf283.png", download:"/manus-storage/cer-02-management-styles_12c663bb.pdf", sections:["certificates","registry"] },
  { id:"CER-03", title:"Formation — système d’information", source:"attestation de formation SI.pdf", preview:"/manus-storage/cer-03-si-preview_7cb92eac.png", download:"/manus-storage/cer-03-si_7bb95f7f.pdf", sections:["certificates","registry"] },
  { id:"CER-04", title:"Présence — IA et systèmes d’information intelligents", source:"attestation de présence AI et SYsteme info intellignet-2.pdf", preview:"/manus-storage/cer-04-ai-preview_f946fd50.png", download:"/manus-storage/cer-04-ai_46413099.pdf", sections:["certificates","registry"] },
  { id:"CER-05", title:"Recueil d’attestations de formations", source:"attestations de formations.pdf", preview:"/manus-storage/cer-05-recueil-preview_c5183a62.png", download:"/manus-storage/cer-05-recueil_97a09cc5.pdf", sections:["certificates","registry"] },
  { id:"CER-06", title:"Festival des sciences — animateur et organisateur", source:"CDE-6.pdf", preview:"/manus-storage/cer-06-festival-preview_700ff152.png", download:"/manus-storage/cer-06-festival_231b4274.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-07", title:"Organisation de conférence", source:"attestation d_organisation conférence.pdf", preview:"/manus-storage/cer-07-conference-preview_35e0b08a.png", download:"/manus-storage/cer-07-conference_a17482db.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-08", title:"Formation Cabinet et Power Skills", source:"attestation de formation Cabinet + power skills.pdf", preview:"/manus-storage/cer-08-cabinet-preview_53dad2b2.png", download:"/manus-storage/cer-08-cabinet_ce878541.pdf", sections:["certificates","registry"] },
  { id:"CER-09", title:"Participation au hackathon", source:"hackathon participation with 3 th place.pdf", preview:"/manus-storage/cer-09-hackathon-preview_a4815d50.png", download:"/manus-storage/cer-09-hackathon_9a5af043.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-10", title:"Attestation d’organisation 01", source:"org 1.pdf", preview:"/manus-storage/cer-10-org-1-preview_5f48522e.png", download:"/manus-storage/cer-10-org-1_9b5e85b4.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-11", title:"Attestation d’organisation 02", source:"org 2.pdf", preview:"/manus-storage/cer-11-org-2-preview_0d061a83.png", download:"/manus-storage/cer-11-org-2_14179c7d.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-12", title:"Attestation d’organisation 03", source:"org 3.pdf", preview:"/manus-storage/cer-12-org-3-preview_a3dc6fb2.png", download:"/manus-storage/cer-12-org-3_ecf11034.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-13", title:"Attestation d’organisation 04", source:"org 4.pdf", preview:"/manus-storage/cer-13-org-4-preview_02d813d4.png", download:"/manus-storage/cer-13-org-4_3eb24720.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-14", title:"Attestation d’organisation 05", source:"org 5.pdf", preview:"/manus-storage/cer-14-org-5-preview_620a3b94.png", download:"/manus-storage/cer-14-org-5_a8256042.pdf", sections:["certificates","activities","registry"] },
  { id:"CER-15", title:"Attestation de formation 01", source:"att form 1.pdf", preview:"/manus-storage/cer-15-att-1-preview_2581b526.png", download:"/manus-storage/cer-15-att-1_6d32c4a6.pdf", sections:["certificates","registry"] },
  { id:"CER-16", title:"Attestation de formation 02", source:"att form 2.pdf", preview:"/manus-storage/cer-16-att-2-preview_0b8fa6e3.png", download:"/manus-storage/cer-16-att-2_773d16dc.pdf", sections:["certificates","registry"] },
  { id:"CER-17", title:"Attestation de formation 03", source:"att form 3.pdf", preview:"/manus-storage/cer-17-att-3-preview_9f6183ae.png", download:"/manus-storage/cer-17-att-3_6b6c9fb9.pdf", sections:["certificates","registry"] },
  { id:"CER-18", title:"Attestation numérisée 01", source:"Capture.JPG", preview:"/manus-storage/cer-18-image-1-preview_f403bca9.jpg", download:"/manus-storage/cer-18-image-1_a3c52f69.jpg", sections:["certificates","registry"] },
  { id:"CER-19", title:"Attestation numérisée 02", source:"Capture d’écran 2025-01-03 153600.png", preview:"/manus-storage/cer-19-image-2-preview_928b7434.jpg", download:"/manus-storage/cer-19-image-2_6e5b3a58.png", sections:["certificates","registry"] },
  { id:"COM-01", title:"Certificat de communication scientifique", source:"certificat de communication.pdf", preview:"/manus-storage/com-01-certificate-preview_c61a6c6f.png", download:"/manus-storage/com-01-certificate_11960048.pdf", sections:["communications","registry"] },
  { id:"MEM-01", title:"Mémoire de master — version PDF", source:"MFE CHERKI EL MEHDI 2025-2026.pdf", preview:"/manus-storage/mem-01-pdf-preview_77270393.png", download:"/manus-storage/mem-01-pdf_55a60195.pdf", sections:["thesis","registry"] },
  { id:"MEM-02", title:"Mémoire de master — version DOCX", source:"MFE CHERKI EL MEHDI 2025-2026.docx", preview:"/manus-storage/mem-02-docx-preview_865ae155.png", download:"/manus-storage/mem-02-docx_8067ad2d.docx", sections:["thesis","registry"] },
  { id:"MEM-03", title:"Présentation de soutenance", source:"MFE CHERKI EL MEHDI VF 07-07-2026.pptx", preview:"/manus-storage/mem-03-pptx-preview_3984b862.png", download:"/manus-storage/mem-03-pptx_0b406a2c.pptx", sections:["thesis","registry"] },
  { id:"PRJ-01", title:"Projet SII-ML CHU — README", source:"sii-ml-chu/README.md", preview:"/manus-storage/prj-01-readme-preview_0df62cd9.jpg", download:"/manus-storage/prj-01-readme_216109f5.md", sections:["project","registry"] },
];

const metadata: Record<string, Pick<PublicEvidence, "year" | "type" | "organization">> = {
  "ACA-01-MASTER":{ year:"2026", type:"Diplôme et relevé", organization:"Université Mohammed Premier" },
  "ACA-02-LICENSE-RECORD":{ year:"2024", type:"Relevé académique", organization:"Université Mohammed Premier" },
  "ACA-03-LICENSE-DIPLOMA":{ year:"2024", type:"Diplôme", organization:"Université Mohammed Premier" },
  "ACA-04-BTS-DIPLOMA":{ year:"2016", type:"Diplôme", organization:"Lycée Mehdi Ben Barka" },
  "ACA-05-BTS-RECORD":{ year:"2016", type:"Relevé académique", organization:"Lycée Mehdi Ben Barka" },
  "ACA-06-BAC-FRONT":{ year:"2014", type:"Diplôme", organization:"Lycée Abdellah Guennoun" },
  "ACA-07-BAC-BACK":{ year:"2014", type:"Diplôme", organization:"Lycée Abdellah Guennoun" },
  "ACA-08-BAC-RECORD":{ year:"2014", type:"Relevé académique", organization:"Lycée Abdellah Guennoun" },
  "EXP-01-CHU-SERVICE":{ year:"2019", type:"Pièce professionnelle", organization:"CHU Mohammed VI Oujda" },
  "CER-01":{ year:"2025", type:"Certificat", organization:"IFIC-AUF" },
  "CER-02":{ year:"2024", type:"Certificat", organization:"IFIC-AUF" },
  "CER-03":{ year:"Non précisé", type:"Attestation de formation", organization:"Non précisé" },
  "CER-04":{ year:"Non précisé", type:"Attestation de présence", organization:"Non précisé" },
  "CER-05":{ year:"2023–2025", type:"Recueil d’attestations", organization:"Organismes variés" },
  "CER-06":{ year:"2025", type:"Attestation de participation", organization:"Fondation Omar Ibn Abdelaziz" },
  "CER-07":{ year:"Non précisé", type:"Attestation d’organisation", organization:"Non précisé" },
  "CER-08":{ year:"Non précisé", type:"Attestation de formation", organization:"Non précisé" },
  "CER-09":{ year:"Non précisé", type:"Attestation de participation", organization:"Non précisé" },
  "CER-10":{ year:"Non précisé", type:"Attestation d’organisation", organization:"Non précisé" },
  "CER-11":{ year:"Non précisé", type:"Attestation d’organisation", organization:"Non précisé" },
  "CER-12":{ year:"Non précisé", type:"Attestation d’organisation", organization:"Non précisé" },
  "CER-13":{ year:"Non précisé", type:"Attestation d’organisation", organization:"Non précisé" },
  "CER-14":{ year:"Non précisé", type:"Attestation d’organisation", organization:"Non précisé" },
  "CER-15":{ year:"Non précisé", type:"Attestation de formation", organization:"Non précisé" },
  "CER-16":{ year:"Non précisé", type:"Attestation de formation", organization:"Non précisé" },
  "CER-17":{ year:"Non précisé", type:"Attestation de formation", organization:"Non précisé" },
  "CER-18":{ year:"Non précisé", type:"Attestation numérisée", organization:"Non précisé" },
  "CER-19":{ year:"2025", type:"Attestation numérisée", organization:"Non précisé" },
  "COM-01":{ year:"Non précisé", type:"Certificat de communication", organization:"Non précisé" },
  "MEM-01":{ year:"2026", type:"Mémoire", organization:"Université Mohammed Premier" },
  "MEM-02":{ year:"2026", type:"Mémoire", organization:"Université Mohammed Premier" },
  "MEM-03":{ year:"2026", type:"Présentation de soutenance", organization:"Université Mohammed Premier" },
  "PRJ-01":{ year:"2026", type:"Documentation de projet", organization:"Projet SII-ML CHU" },
};

export const publicEvidence: PublicEvidence[] = seeds.map(item => ({ ...item, ...metadata[item.id] }));

export const publicEvidenceFor = (section: SectionId) => publicEvidence.filter(item => item.sections.includes(section));

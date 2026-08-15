/* Style reminder: Bibliothèque de preuves académiques — chaque entrée est reliée à une pièce source et à son statut d'accès. */
export type Locale = "fr" | "en" | "ar" | "es" | "nl" | "de";
export type SectionId =
  | "academic"
  | "experience"
  | "internships"
  | "certificates"
  | "communications"
  | "activities"
  | "recommendations"
  | "thesis"
  | "project"
  | "registry"
  | "privacy";

export type DocumentItem = {
  id: string;
  title: string;
  source: string;
  type: string;
  access: "public" | "controlled" | "private" | "verify";
  date?: string;
  description: string;
  details?: string[];
};

export const assets = {
  mark: "/manus-storage/research-brief-mark_afaede60.png",
  hero: "/manus-storage/research-brief-evidence_99a18073.jpg",
  project: "/manus-storage/research-brief-project_41cd91f9.jpg",
};

export const languageOptions: { code: Locale; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "es", label: "Español" },
  { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" },
];

export const messages: Record<Locale, {
  archive: string; home: string; nav: Record<SectionId, string>; document: string; source: string; access: string; public: string; controlled: string; private: string; verify: string; details: string; noEvidence: string; search: string; pieces: string; allPieces: string; returnHome: string; languageNotice: string; intro: string; coverage: string; register: string; contact: string; print: string; next: string;
}> = {
  fr: { archive:"Dossier documentaire", home:"Accueil", nav:{academic:"Formation académique",experience:"Expériences professionnelles",internships:"Stages",certificates:"Formations & certificats",communications:"Communications scientifiques",activities:"Activités para-universitaires",recommendations:"Lettres de recommandation",thesis:"Mémoire de master",project:"Projet SII-ML CHU",registry:"Registre des pièces",privacy:"Confidentialité"},document:"Notice documentaire",source:"Pièce source",access:"Statut d'accès",public:"Référencée",controlled:"Accès contrôlé",private:"Privée",verify:"À vérifier",details:"Consulter la notice",noEvidence:"Aucune pièce justificative correspondante n’a été identifiée dans l’archive hors CV.",search:"Rechercher une pièce",pieces:"pièces source",allPieces:"Toutes les pièces",returnHome:"Retour à l’accueil",languageNotice:"La langue d’interface facilite la lecture ; les intitulés de pièces restent dans leur langue d’origine pour préserver la traçabilité.",intro:"Bibliothèque de preuves académiques et professionnelles fondée exclusivement sur les documents présents dans l’archive ZIP, hors CV utilisé seulement comme repère interne.",coverage:"Couverture documentaire",register:"Ouvrir le registre complet",contact:"Contact",print:"Imprimer",next:"Page suivante" },
  en: { archive:"Document archive", home:"Home", nav:{academic:"Academic education",experience:"Professional experience",internships:"Internships",certificates:"Training & certificates",communications:"Scientific communications",activities:"Extra-academic activities",recommendations:"Recommendation letters",thesis:"Master’s thesis",project:"SII-ML CHU project",registry:"Document register",privacy:"Confidentiality"},document:"Document record",source:"Source item",access:"Access status",public:"Referenced",controlled:"Controlled access",private:"Private",verify:"To verify",details:"Open record",noEvidence:"No corresponding supporting document was identified in the archive outside the CV.",search:"Search a document",pieces:"source items",allPieces:"All items",returnHome:"Back to home",languageNotice:"The interface language supports reading; document titles remain in their original language to preserve traceability.",intro:"Academic and professional evidence library based exclusively on documents present in the ZIP archive, excluding the CV which is only used as an internal reference.",coverage:"Document coverage",register:"Open complete register",contact:"Contact",print:"Print",next:"Next page" },
  ar: { archive:"الأرشيف الوثائقي", home:"الرئيسية", nav:{academic:"التكوين الأكاديمي",experience:"الخبرات المهنية",internships:"التداريب",certificates:"تكوينات وشهادات",communications:"مساهمات علمية",activities:"أنشطة موازية",recommendations:"رسائل التوصية",thesis:"مذكرة الماستر",project:"مشروع SII-ML CHU",registry:"سجل الوثائق",privacy:"السرية"},document:"بطاقة وثيقة",source:"الوثيقة المصدر",access:"حالة الولوج",public:"مفهرسة",controlled:"ولوج مراقب",private:"خاصة",verify:"تحتاج إلى تحقق",details:"فتح البطاقة",noEvidence:"لم يتم العثور على وثيقة إثبات مطابقة في الأرشيف خارج السيرة الذاتية.",search:"البحث عن وثيقة",pieces:"وثائق مصدر",allPieces:"كل الوثائق",returnHome:"العودة للرئيسية",languageNotice:"لغة الواجهة تسهّل القراءة؛ تبقى عناوين الوثائق بلغتها الأصلية حفاظاً على التتبع.",intro:"مكتبة أدلة أكاديمية ومهنية مبنية حصراً على الوثائق الموجودة في ملف ZIP، باستثناء السيرة الذاتية المستخدمة داخلياً كمرجع فقط.",coverage:"تغطية الوثائق",register:"فتح السجل الكامل",contact:"تواصل",print:"طباعة",next:"الصفحة التالية" },
  es: { archive:"Archivo documental", home:"Inicio", nav:{academic:"Formación académica",experience:"Experiencia profesional",internships:"Prácticas",certificates:"Formación y certificados",communications:"Comunicaciones científicas",activities:"Actividades extrauniversitarias",recommendations:"Cartas de recomendación",thesis:"Memoria de máster",project:"Proyecto SII-ML CHU",registry:"Registro documental",privacy:"Confidencialidad"},document:"Ficha documental",source:"Documento fuente",access:"Estado de acceso",public:"Referenciado",controlled:"Acceso controlado",private:"Privado",verify:"Por verificar",details:"Abrir ficha",noEvidence:"No se identificó ningún documento justificativo correspondiente en el archivo fuera del CV.",search:"Buscar un documento",pieces:"documentos fuente",allPieces:"Todos los documentos",returnHome:"Volver al inicio",languageNotice:"El idioma de la interfaz facilita la lectura; los títulos de los documentos se conservan en su idioma original para mantener la trazabilidad.",intro:"Biblioteca de pruebas académicas y profesionales basada exclusivamente en documentos presentes en el archivo ZIP, excluyendo el CV que solo se usa como referencia interna.",coverage:"Cobertura documental",register:"Abrir registro completo",contact:"Contacto",print:"Imprimir",next:"Página siguiente" },
  nl: { archive:"Documentenarchief", home:"Start", nav:{academic:"Academische opleiding",experience:"Professionele ervaring",internships:"Stages",certificates:"Opleidingen en certificaten",communications:"Wetenschappelijke bijdragen",activities:"Extra-universitaire activiteiten",recommendations:"Aanbevelingsbrieven",thesis:"Masterscriptie",project:"SII-ML CHU-project",registry:"Documentenregister",privacy:"Vertrouwelijkheid"},document:"Documentfiche",source:"Brondocument",access:"Toegangsstatus",public:"Geregistreerd",controlled:"Gecontroleerde toegang",private:"Privé",verify:"Te verifiëren",details:"Fiche openen",noEvidence:"Er werd buiten het CV geen overeenkomstig bewijsdocument in het archief gevonden.",search:"Zoek een document",pieces:"brondocumenten",allPieces:"Alle documenten",returnHome:"Terug naar start",languageNotice:"De interfacetaal ondersteunt het lezen; documenttitels blijven in de oorspronkelijke taal voor traceerbaarheid.",intro:"Bibliotheek met academische en professionele bewijzen, uitsluitend gebaseerd op documenten in het ZIP-archief. Het CV wordt enkel als interne referentie gebruikt.",coverage:"Documentdekking",register:"Volledig register openen",contact:"Contact",print:"Afdrukken",next:"Volgende pagina" },
  de: { archive:"Dokumentenarchiv", home:"Startseite", nav:{academic:"Akademische Ausbildung",experience:"Berufserfahrung",internships:"Praktika",certificates:"Weiterbildungen und Zertifikate",communications:"Wissenschaftliche Beiträge",activities:"Außeruniversitäre Aktivitäten",recommendations:"Empfehlungsschreiben",thesis:"Masterarbeit",project:"Projekt SII-ML CHU",registry:"Dokumentenregister",privacy:"Vertraulichkeit"},document:"Dokumenteintrag",source:"Quelldokument",access:"Zugriffsstatus",public:"Referenziert",controlled:"Kontrollierter Zugang",private:"Privat",verify:"Zu prüfen",details:"Eintrag öffnen",noEvidence:"Außerhalb des CV wurde im Archiv kein entsprechender Nachweis gefunden.",search:"Dokument suchen",pieces:"Quelldokumente",allPieces:"Alle Dokumente",returnHome:"Zurück zur Startseite",languageNotice:"Die Sprache der Oberfläche dient der Lesbarkeit; Dokumenttitel bleiben zur Wahrung der Nachvollziehbarkeit in ihrer Originalsprache.",intro:"Bibliothek akademischer und beruflicher Nachweise, die ausschließlich auf Dokumenten im ZIP-Archiv beruht. Der Lebenslauf wird nur als interne Referenz verwendet.",coverage:"Dokumentabdeckung",register:"Vollständiges Register öffnen",contact:"Kontakt",print:"Drucken",next:"Nächste Seite" },
};

export const academicItems: DocumentItem[] = [
  { id:"ACA-01", title:"Attestation de réussite et relevé de notes — Master", source:"diplôme et relevé de notes/ATTESTATION DE REUSSITE ET RELEVE DE NOTES MASTER.pdf", type:"Attestation et relevé", access:"controlled", date:"2026", description:"Pièce académique de trois pages relative au master ; consultation intégrale sur demande dans le cadre d’une candidature." },
  { id:"ACA-02", title:"Licence AEMS2I", source:"diplôme et relevé de notes/licence AEMS2I.pdf", type:"Relevé ou attestation de licence", access:"controlled", description:"Pièce source présente dans l’archive pour la formation Analyse économique et management des systèmes d’information." },
  { id:"ACA-03", title:"Diplôme de licence d’excellence", source:"diplôme et relevé de notes/licence d_excellence diplome mehdi.pdf", type:"Diplôme", access:"controlled", description:"Diplôme de licence inclus dans le dossier documentaire." },
  { id:"ACA-04", title:"Diplôme BTS — Gestion PME/PMI", source:"diplôme et relevé de notes/Diplôme BTS Gestion PME _PMI.jpg", type:"Diplôme", access:"controlled", date:"2016", description:"Image numérisée du diplôme de Brevet de technicien supérieur, spécialité Gestion PME/PMI." },
  { id:"ACA-05", title:"Relevé de notes BTS", source:"diplôme et relevé de notes/Relevé de note BTS.jpg", type:"Relevé de notes", access:"controlled", description:"Image numérisée du relevé de notes BTS." },
  { id:"ACA-06", title:"Baccalauréat — recto", source:"diplôme et relevé de notes/BAC recto.jpg", type:"Diplôme", access:"controlled", description:"Image numérisée de la face recto du baccalauréat." },
  { id:"ACA-07", title:"Baccalauréat — verso", source:"diplôme et relevé de notes/BAC verso.jpg", type:"Diplôme", access:"controlled", description:"Image numérisée de la face verso du baccalauréat." },
  { id:"ACA-08", title:"Relevé de notes du baccalauréat", source:"diplôme et relevé de notes/Relevé note BAC.jpg", type:"Relevé de notes", access:"controlled", description:"Image numérisée du relevé de notes du baccalauréat." },
];

export const experienceItems: DocumentItem[] = [
  { id:"EXP-01", title:"Prise de service — SAICG, CHU Oujda", source:"prise de service SAICG - CHU Oujda.pdf", type:"Pièce administrative professionnelle", access:"controlled", description:"Document de prise de service au Service Audit Interne et Contrôle de Gestion du CHU Mohammed VI d’Oujda. Les missions détaillées ne sont pas affichées ici lorsqu’elles ne figurent pas explicitement dans la pièce." },
];

export const certificateItems: DocumentItem[] = [
  { id:"CER-01", title:"Festival des sciences — animation et organisation", source:"Attestation de formation - conférences et d_organisation/CDE-6.pdf", type:"Attestation de participation", access:"controlled", date:"02–04 mai 2025", description:"Attestation de la Fondation Omar Ibn Abdelaziz confirmant la participation à la 12e édition du Festival des sciences en tant qu’animateur et organisateur." },
  { id:"CER-02", title:"Image d’attestation — capture du 03 janvier 2025", source:"Attestation de formation - conférences et d_organisation/Capture d’écran 2025-01-03 153600.png", type:"Image numérisée", access:"verify", description:"Image source incluse dans le dossier ; son intitulé détaillé n’a pas été confirmé par extraction textuelle." },
  { id:"CER-03", title:"Image d’attestation — Capture.JPG", source:"Attestation de formation - conférences et d_organisation/Capture.JPG", type:"Image numérisée", access:"verify", description:"Image source incluse dans le dossier ; à consulter au cas par cas pour confirmer son intitulé exact." },
  { id:"CER-04", title:"Attestation de formation — att form 1", source:"Attestation de formation - conférences et d_organisation/att form 1.pdf", type:"Attestation scannée", access:"controlled", description:"Pièce présente sous son nom d’origine ; le titre détaillé n’est pas exploité sans validation de lecture du scan." },
  { id:"CER-05", title:"Attestation de formation — att form 2", source:"Attestation de formation - conférences et d_organisation/att form 2.pdf", type:"Attestation scannée", access:"controlled", description:"Pièce présente sous son nom d’origine ; le titre détaillé n’est pas exploité sans validation de lecture du scan." },
  { id:"CER-06", title:"Attestation de formation — att form 3", source:"Attestation de formation - conférences et d_organisation/att form 3.pdf", type:"Attestation scannée", access:"controlled", description:"Pièce présente sous son nom d’origine ; le titre détaillé n’est pas exploité sans validation de lecture du scan." },
  { id:"CER-07", title:"Attestation d’organisation de conférence", source:"Attestation de formation - conférences et d_organisation/attestation d_organisation conférence.pdf", type:"Attestation d’organisation", access:"controlled", description:"Pièce référencée explicitement comme attestation d’organisation de conférence." },
  { id:"CER-08", title:"Formation Cabinet + Power Skills", source:"Attestation de formation - conférences et d_organisation/attestation de formation Cabinet + power skills.pdf", type:"Attestation de formation", access:"controlled", description:"Attestation présente dans l’archive, nommée par son intitulé de fichier d’origine." },
  { id:"CER-09", title:"Formation Système d’information", source:"Attestation de formation - conférences et d_organisation/attestation de formation SI.pdf", type:"Attestation de formation", access:"controlled", description:"Attestation liée à une formation portant sur le système d’information, selon son nom de fichier." },
  { id:"CER-10", title:"Présence — IA et systèmes d’information intelligents", source:"Attestation de formation - conférences et d_organisation/attestation de présence AI et SYsteme info intellignet-2.pdf", type:"Attestation de présence", access:"controlled", description:"Attestation de présence liée à l’IA et aux systèmes d’information intelligents, selon son nom de fichier." },
  { id:"CER-11", title:"Recueil de 11 attestations de formation", source:"Attestation de formation - conférences et d_organisation/attestations de formations.pdf", type:"Recueil PDF — 11 pages", access:"controlled", description:"Recueil composite contenant des invitations, présences, participations et certificats. Les 11 pages sont indexées ci-dessous.", details:["Système d’information hospitalier et tableau de bord — CHU, 04–05 octobre 2023.","Participation : politiques financières et enjeux de développement au Maroc — 28–29 juin 2024.","Conférence : تبسيط المساطر الإدارية بالمغرب أسس ومبادئ — 05 avril 2024.","Initiation au logiciel SPSS — 24 février 2024.","تهيئ مخطط الأعمال وخلق المقاولة الصغيرة — 12 octobre 2024.","Comment démarrer en E-commerce ! — 26 octobre 2024.","Organisation : Confiance en soi et développement personnel — 15 novembre 2025.","Participation : Confiance en soi et développement personnel — 15 novembre 2025.","Méthodologie de recherche — session CHU, 31 octobre et 03–05 novembre 2025.","L’IA : une révolution pour le marketing digital — 28 novembre 2024.","Participation à l’IA : une révolution pour le marketing digital — 28 novembre 2024."] },
  { id:"CER-12", title:"Management de projet : de l’idée au projet", source:"Attestation de formation - conférences et d_organisation/certificate_2026072112245.pdf", type:"Certificat IFIC-AUF", access:"controlled", date:"24 février 2025", description:"Certificat IFIC-AUF attestant la réussite de l’atelier de formation en management de projet." },
  { id:"CER-13", title:"Dimensions, styles et bonnes pratiques de management", source:"Attestation de formation - conférences et d_organisation/certificate_202607211236.pdf", type:"Certificat IFIC-AUF", access:"controlled", date:"16 mai 2024", description:"Certificat IFIC-AUF attestant la réussite de l’atelier de formation en management." },
  { id:"CER-14", title:"Hackathon — participation avec 3e place", source:"Attestation de formation - conférences et d_organisation/hackathon participation with 3 th place.pdf", type:"Attestation de participation", access:"controlled", description:"Pièce de participation à un hackathon dont le nom de fichier fait état d’une troisième place ; le contexte et le classement sont à confirmer sur le document original." },
  { id:"CER-15", title:"Attestation d’organisation — org 1", source:"Attestation de formation - conférences et d_organisation/org 1.pdf", type:"Attestation d’organisation", access:"controlled", description:"Pièce d’organisation présente sous son nom d’origine." },
  { id:"CER-16", title:"Attestation d’organisation — org 2", source:"Attestation de formation - conférences et d_organisation/org 2.pdf", type:"Attestation d’organisation", access:"controlled", description:"Pièce d’organisation présente sous son nom d’origine." },
  { id:"CER-17", title:"Attestation d’organisation — org 3", source:"Attestation de formation - conférences et d_organisation/org 3.pdf", type:"Attestation d’organisation", access:"controlled", description:"Pièce d’organisation présente sous son nom d’origine." },
  { id:"CER-18", title:"Attestation d’organisation — org 4", source:"Attestation de formation - conférences et d_organisation/org 4.pdf", type:"Attestation d’organisation", access:"controlled", description:"Pièce d’organisation présente sous son nom d’origine." },
  { id:"CER-19", title:"Attestation d’organisation — org 5", source:"Attestation de formation - conférences et d_organisation/org 5.pdf", type:"Attestation d’organisation", access:"controlled", description:"Pièce d’organisation présente sous son nom d’origine." },
  { id:"CER-20", title:"Rosetta — French Proficiency", source:"Rosetta certification french.pdf", type:"Certificat de langue", access:"controlled", description:"Certificat PDF de compétence en français présent dans l’archive ; les détails de niveau doivent être confirmés sur la pièce originale." },
];

export const communicationItems: DocumentItem[] = [
  { id:"COM-01", title:"Article Badr Mehdi", source:"communications scientifiques/Article Badr Mehdi.docx", type:"Article scientifique / manuscrit", access:"controlled", description:"Document Word classé dans le dossier des communications scientifiques. Son statut éditorial doit être présenté exactement comme indiqué dans le fichier source." },
  { id:"COM-02", title:"Certificat de communication", source:"communications scientifiques/certificat de communication.pdf", type:"Certificat de communication", access:"controlled", description:"Certificat de communication scientifique présent dans l’archive." },
];

export const activityItems: DocumentItem[] = [
  { id:"ACT-01", title:"Festival des sciences — animateur et organisateur", source:"Attestation de formation - conférences et d_organisation/CDE-6.pdf", type:"Activité para-universitaire", access:"controlled", date:"02–04 mai 2025", description:"Attestation nominative de participation à la 12e édition du Festival des sciences en tant qu’animateur et organisateur." },
  { id:"ACT-02", title:"Participation : politiques financières et enjeux de développement au Maroc", source:"Attestation de formation - conférences et d_organisation/attestations de formations.pdf — page 2", type:"Participation scientifique", access:"controlled", date:"28–29 juin 2024", description:"Attestation de participation à une rencontre nationale organisée en partenariat avec la FSJES Oujda." },
  { id:"ACT-03", title:"Organisation : Confiance en soi et développement personnel", source:"Attestation de formation - conférences et d_organisation/attestations de formations.pdf — page 7", type:"Organisation d’activité", access:"controlled", date:"15 novembre 2025", description:"Attestation de participation à l’organisation de la formation, avec reconnaissance de l’implication active." },
  { id:"ACT-04", title:"Participation au hackathon", source:"Attestation de formation - conférences et d_organisation/hackathon participation with 3 th place.pdf", type:"Participation / distinction à confirmer", access:"verify", description:"Pièce portant un nom de fichier relatif à une participation au hackathon et à une troisième place ; statut à vérifier sur l’original." },
  { id:"ACT-05", title:"Organisation de conférence", source:"Attestation de formation - conférences et d_organisation/attestation d_organisation conférence.pdf", type:"Organisation", access:"controlled", description:"Attestation d’organisation présente dans l’archive." },
  { id:"ACT-06", title:"Lot d’attestations d’organisation", source:"Attestation de formation - conférences et d_organisation/org 1.pdf · org 2.pdf · org 3.pdf · org 4.pdf · org 5.pdf", type:"Organisation d’activités", access:"controlled", description:"Cinq pièces distinctes d’organisation sont présentes dans l’archive ; leurs détails sont consultables sur les documents originaux." },
];

export const recommendationItems: DocumentItem[] = [
  { id:"REC-01", title:"Lettre de recommandation — document PDF 1", source:"LETTRE DE RECOMMANDATIONS/5.Lettre de recommandation_Mr CHERKI _El Mehdi _Doc (1).pdf", type:"Lettre de recommandation", access:"private", description:"Lettre mentionnant le Master d’Excellence en Management des Systèmes d’Information Intelligents ainsi que les modules Management de l’innovation et de la transformation digitale et Gouvernance des systèmes d’information intelligents." },
  { id:"REC-02", title:"Lettre de recommandation — statistiques et méthodes de prévision", source:"LETTRE DE RECOMMANDATIONS/Lettre de recommandation CHERKI El Mehdi.pdf", type:"Lettre de recommandation", access:"private", description:"Lettre d’un Maître de conférences en statistique faisant référence au module Méthodes de Prévision et au potentiel de poursuite en doctorat." },
  { id:"REC-03", title:"Lettre de recommandation — document Word", source:"LETTRE DE RECOMMANDATIONS/Lettre_recommandation_Cherki_El_Mehdi.docx", type:"Lettre de recommandation", access:"private", description:"Lettre faisant état de la formation en Management des Systèmes d’Information Intelligents et de capacités d’analyse critique et de recherche appliquée." },
  { id:"REC-04", title:"Lettre de recommandation de l’encadrant", source:"LETTRE DE RECOMMANDATIONS/Lettre_recommandation_Encadrant_Cherki_El_Mehdi.docx", type:"Lettre de recommandation", access:"private", description:"Lettre de l’enseignant du module ERP et encadrant du mémoire de fin d’études, décrivant la rigueur scientifique et le sérieux du travail réalisé sous direction." },
  { id:"REC-05", title:"Lettre de recommandation — Mme Senhaji Zineb", source:"LETTRE DE RECOMMANDATIONS/Mme  SENHAJI ZINEB.pdf", type:"Lettre de recommandation", access:"private", description:"Lettre PDF présente dans l’archive ; le scan original est maintenu sous accès contrôlé." },
];

export const thesisItems: DocumentItem[] = [
  { id:"MEM-01", title:"Mémoire de master — version DOCX", source:"MFE CHERKI EL MEHDI 2025-2026/MFE CHERKI EL MEHDI 2025-2026.docx", type:"Mémoire", access:"controlled", description:"Version Word du mémoire : Machine Learning et gouvernance de la commande publique hospitalière." },
  { id:"MEM-02", title:"Mémoire de master — version PDF", source:"MFE CHERKI EL MEHDI 2025-2026/MFE CHERKI EL MEHDI 2025-2026.pdf", type:"Mémoire", access:"controlled", description:"Version PDF du mémoire de master." },
  { id:"MEM-03", title:"Présentation de soutenance", source:"MFE CHERKI EL MEHDI 2025-2026/MFE CHERKI EL MEHDI VF 07-07-2026.pptx", type:"Présentation", access:"controlled", description:"Présentation de soutenance du mémoire, version PowerPoint." },
  { id:"MEM-04", title:"Note d’analyse de projet", source:"MFE CHERKI EL MEHDI 2025-2026/analyse_projet VF.md", type:"Note de projet", access:"controlled", description:"Note d’analyse relative au projet SII-ML CHU incluse avec le mémoire." },
];

export const projectItems: DocumentItem[] = [
  { id:"PRJ-01", title:"Documentation principale du projet", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/README.md", type:"Documentation technique", access:"controlled", description:"README principal du projet SII-ML CHU." },
  { id:"PRJ-02", title:"Services API", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/api/", type:"Dossier technique", access:"controlled", description:"Sous-dossier API — 1 fichier recensé dans le corpus technique." },
  { id:"PRJ-03", title:"Backend", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/backend/", type:"Dossier technique", access:"private", description:"Sous-dossier backend — 190 fichiers recensés. Les données téléversées et contenus internes ne sont pas exposés publiquement." },
  { id:"PRJ-04", title:"Base de données", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/database/", type:"Dossier technique", access:"private", description:"Sous-dossier database — 3 fichiers recensés. Accès contrôlé pour éviter toute exposition de paramètres ou de structure sensible." },
  { id:"PRJ-05", title:"Interface utilisateur", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/frontend/", type:"Dossier technique", access:"controlled", description:"Sous-dossier frontend — 32 fichiers recensés, incluant des ressources visuelles de démonstration." },
  { id:"PRJ-06", title:"Services applicatifs", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/services/", type:"Dossier technique", access:"controlled", description:"Sous-dossier services — 9 fichiers recensés." },
  { id:"PRJ-07", title:"Fichiers de lancement et configuration", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/.gitignore · START_PROJECT.bat · app.bat", type:"Fichiers de projet", access:"controlled", description:"Trois fichiers de configuration et de lancement, avec le README, présents à la racine du projet." },
];

export const privacyItems: DocumentItem[] = [
  { id:"PRV-01", title:"Carte nationale d’identité", source:"diplôme et relevé de notes/CIN.bmp", type:"Pièce d’identité", access:"private", description:"La pièce est inventoriée pour assurer l’exhaustivité du ZIP, mais elle n’est pas affichée, téléchargée ni résumée publiquement." },
  { id:"PRV-02", title:"Documents hospitaliers téléversés dans le projet", source:"MFE.../APP/sii-ml-chu/backend/uploads/ et backend/bl_previews/", type:"Données et aperçus internes", access:"private", description:"Le corpus contient des documents opérationnels et aperçus de bons de livraison. Ils sont comptabilisés dans le projet, mais exclus de l’interface publique." },
  { id:"PRV-03", title:"Lettres portant signatures et cachets", source:"LETTRE DE RECOMMANDATIONS/*", type:"Correspondance académique", access:"private", description:"Les lettres sont présentées par fiche de lecture. Les scans comportant signatures, cachets ou coordonnées sont réservés à une transmission contrôlée." },
];

export const allIndexItems: DocumentItem[] = [
  ...academicItems,
  ...experienceItems,
  ...certificateItems,
  ...communicationItems,
  ...recommendationItems,
  ...thesisItems,
  ...privacyItems,
  ...projectItems,
];

export const sectionItems: Record<Exclude<SectionId, "internships" | "registry">, DocumentItem[]> = {
  academic: academicItems,
  experience: experienceItems,
  certificates: certificateItems,
  communications: communicationItems,
  activities: activityItems,
  recommendations: recommendationItems,
  thesis: thesisItems,
  project: projectItems,
  privacy: privacyItems,
};

export const sectionMeta: Record<SectionId, { title: string; lead: string; count: string; scope: string }> = {
  academic: { title:"Formation académique et universitaire", lead:"Diplômes, attestations et relevés présents dans l’archive. Le CV n’est pas utilisé comme source pour compléter les intitulés ou dates manquantes.", count:"8 pièces", scope:"Diplômes et relevés" },
  experience: { title:"Expériences professionnelles", lead:"La page présente uniquement la pièce professionnelle explicite identifiée dans l’archive : la prise de service au CHU d’Oujda.", count:"1 pièce", scope:"Expérience attestée" },
  internships: { title:"Stages", lead:"Cette page est maintenue pour séparer les stages des autres expériences. Aucun justificatif de stage explicitement nommé n’a été identifié parmi les pièces hors CV.", count:"0 pièce", scope:"Aucun justificatif identifié" },
  certificates: { title:"Formations courtes et certificats", lead:"Vingt pièces sources : attestations, certificats IFIC-AUF, recueil d’événements, images numérisées et certification de langue.", count:"20 pièces", scope:"Formations et certificats" },
  communications: { title:"Communications scientifiques", lead:"Deux pièces sont classées dans le dossier des communications : un article/manuscrit et un certificat de communication.", count:"2 pièces", scope:"Production scientifique" },
  activities: { title:"Activités para-scolaires et para-universitaires", lead:"Participations, organisation d’activités, hackathon et présence à des événements, étayés par les attestations correspondantes.", count:"6 notices", scope:"Engagement et activités" },
  recommendations: { title:"Lettres de recommandation", lead:"Cinq lettres de recommandation d’enseignants et d’encadrants sont inventoriées. Leur consultation complète reste contrôlée.", count:"5 pièces", scope:"Références académiques" },
  thesis: { title:"Mémoire de master", lead:"Les versions DOCX, PDF, la soutenance PPTX et la note d’analyse de projet sont répertoriées séparément.", count:"4 pièces", scope:"Mémoire et soutenance" },
  project: { title:"Projet SII-ML CHU", lead:"Le corpus technique compte 239 fichiers répartis entre API, backend, base de données, frontend, services et fichiers de lancement. Les contenus hospitaliers internes restent protégés.", count:"239 fichiers", scope:"Corpus applicatif" },
  registry: { title:"Registre des pièces", lead:"Index transversal des sources documentaires hors CV et des corpus techniques associés. Les pièces sensibles sont marquées comme privées ou à accès contrôlé.", count:"41+ pièces", scope:"Inventaire transversal" },
  privacy: { title:"Confidentialité et accès contrôlé", lead:"Les pièces sensibles sont inventoriées afin de garantir la couverture du ZIP, sans divulgation de données personnelles, de signatures ou de documents opérationnels du CHU.", count:"3 groupes", scope:"Protection des pièces" },
};

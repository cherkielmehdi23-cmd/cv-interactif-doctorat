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
  { id:"ACA-01", title:"Master d’excellence en Management des Systèmes d’Information Intelligents", source:"Trame éditoriale : CV français et anglais · Justificatif : ATTESTATION DE REUSSITE ET RELEVE DE NOTES MASTER.pdf", type:"Formation universitaire", access:"controlled", date:"2024–2026", description:"Parcours de master à la FSJES Oujda — Université Mohammed Premier, centré sur le management des systèmes d’information intelligents.", details:["Attestation de réussite et relevé de notes du master.","Mémoire et soutenance indexés séparément dans la rubrique Mémoire de master."] },
  { id:"ACA-02", title:"Licence d’excellence — Analyse économique et management des systèmes d’information", source:"Trame éditoriale : CV français et anglais · Justificatifs : licence AEMS2I.pdf ; licence d_excellence diplome mehdi.pdf", type:"Formation universitaire", access:"controlled", date:"2024", description:"Licence d’excellence obtenue à la FSJES Oujda — Université Mohammed Premier, à l’interface de l’analyse économique et des systèmes d’information.", details:["Attestation ou relevé de licence AEMS2I.","Diplôme de licence d’excellence."] },
  { id:"ACA-03", title:"Brevet de technicien supérieur — Gestion des entreprises", source:"Trame éditoriale : CV français et anglais · Justificatifs : Diplôme BTS Gestion PME_PMI.jpg ; Relevé de note BTS.jpg", type:"Formation technique supérieure", access:"controlled", date:"2016", description:"BTS en Gestion des entreprises, Lycée Mehdi Ben Barka, Oujda.", details:["Diplôme BTS numérisé.","Relevé de notes BTS numérisé."] },
  { id:"ACA-04", title:"Baccalauréat — Sciences physiques", source:"Trame éditoriale : CV français et anglais · Justificatifs : BAC recto.jpg ; BAC verso.jpg ; Relevé note BAC.jpg", type:"Formation secondaire", access:"controlled", date:"2014", description:"Baccalauréat en Sciences physiques, Lycée Abdellah Guennoune, Oujda.", details:["Diplôme du baccalauréat — recto et verso.","Relevé de notes du baccalauréat."] },
];

export const experienceItems: DocumentItem[] = [
  { id:"EXP-01", title:"Technicien de 3e grade — Audit interne et contrôle de gestion", source:"Trame éditoriale : CV français et anglais · Justificatif : prise de service SAICG - CHU Oujda.pdf", type:"Expérience professionnelle", access:"controlled", date:"Depuis le 01 février 2019", description:"Fonction exercée au Service Audit Interne et Contrôle de Gestion du Centre Hospitalo-Universitaire Mohammed VI d’Oujda. Le CV décrit un environnement lié à l’audit, au contrôle de gestion, au suivi administratif et aux processus hospitaliers.", details:["Pièce de prise de service présente dans le ZIP.","Les détails de mission sont présentés comme résumé du CV et non comme citation du document administratif."] },
];

export const internshipItems: DocumentItem[] = [
  { id:"STG-01", title:"Stage d’observation — Banque Centrale Populaire, agence Azzitoune", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage d’observation", access:"verify", date:"31 juillet – 24 août 2018", description:"Stage d’observation au sein de l’agence Azzitoune de la Banque Centrale Populaire à Oujda ; exposition aux opérations d’agence, à l’accueil et aux flux administratifs." },
  { id:"STG-02", title:"Stage — Recouvrement des créances, CNSS Oujda", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage thématique", access:"verify", date:"Juillet 2018", description:"Stage sous le thème du recouvrement des créances au service perception de la Caisse Nationale de Sécurité Sociale d’Oujda." },
  { id:"STG-03", title:"Stage — Audit interne, contrôle interne et management de la qualité", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage professionnel", access:"verify", date:"01 décembre 2017 – 31 janvier 2018", description:"Stage au sein de l’unité audit, contrôle interne et management de la qualité du Centre Hospitalier Universitaire d’Oujda." },
  { id:"STG-04", title:"Stage — Service des encaissements, RADEEO", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage professionnel", access:"verify", date:"Août 2017", description:"Stage au service des encaissements de la Régie Autonome Intercommunale de Distribution d’Eau et d’Électricité d’Oujda." },
  { id:"STG-05", title:"Stage — Bureau d’admission et facturation, CHU Oujda", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage professionnel", access:"verify", date:"02 mai – 31 juillet 2017", description:"Expérience au Bureau d’Admission et Facturation du Centre Hospitalier Universitaire d’Oujda, portant sur les flux d’admission et de facturation." },
  { id:"STG-06", title:"Stage — Assistant commercial, SAHAM Assurance", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage commercial", access:"verify", date:"15 septembre 2016 – 14 janvier 2017", description:"Stage en tant qu’assistant commercial à l’agence Lahbous de SAHAM Assurance, Oujda." },
  { id:"STG-07", title:"Stage de fin de formation — Coopérative Laitière du Maroc Oriental", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage de fin de formation", access:"verify", date:"09 mai – 09 juin 2016", description:"Projet de stage consacré au système d’information et à la gestion des réclamations clients au sein de la Coopérative Laitière du Maroc Oriental, Oujda." },
  { id:"STG-08", title:"Stage d’application — Service commercial, ORTEL TRAVAUX", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage d’application", access:"verify", date:"01 janvier – 30 mars 2016", description:"Stage d’application au service commercial de la société ORTEL TRAVAUX." },
  { id:"STG-09", title:"Stage d’initiation — Service comptable, Méditerranée Food Industrie", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Stage d’initiation", access:"verify", date:"01 novembre 2014 – 30 mars 2015", description:"Stage d’initiation au service comptable de la société Méditerranée Food Industrie, Oujda." },
];

export const certificateItems: DocumentItem[] = [
  { id:"CER-01", title:"Certifications IFIC-AUF en management", source:"certificate_2026072112245.pdf ; certificate_202607211236.pdf", type:"Certificats de formation", access:"controlled", description:"Deux ateliers certifiés : Management de projet — de l’idée au projet ; Dimensions, styles et bonnes pratiques de management.", details:["Management de projet : de l’idée au projet — 24 février 2025.","Dimensions, styles et bonnes pratiques de management — 16 mai 2024."] },
  { id:"CER-02", title:"Formations professionnelles en systèmes d’information et intelligence artificielle", source:"attestation de formation SI.pdf ; attestation de présence AI et SYsteme info intellignet-2.pdf", type:"Attestations de formation", access:"controlled", description:"Formations et présences documentées dans les domaines des systèmes d’information, de l’IA et des systèmes d’information intelligents." },
  { id:"CER-03", title:"Méthodes quantitatives, recherche et pilotage hospitalier", source:"attestations de formations.pdf — pages 1, 4 et 9", type:"Recueil d’attestations", access:"controlled", description:"Recueil comprenant une formation CHU sur le système d’information hospitalier et tableau de bord, une initiation à SPSS et une session de méthodologie de recherche." },
  { id:"CER-04", title:"Marketing digital, e-commerce et entrepreneuriat", source:"attestations de formations.pdf — pages 5, 6, 10 et 11", type:"Recueil d’attestations", access:"controlled", description:"Participation à des formations portant sur le marketing digital, l’intelligence artificielle, le e-commerce et la préparation d’un plan d’affaires." },
  { id:"CER-05", title:"Développement personnel et animation d’activités", source:"attestations de formations.pdf — pages 7 et 8 ; attestation d_organisation conférence.pdf ; org 1.pdf à org 5.pdf", type:"Participation et organisation", access:"controlled", description:"Ensemble de pièces liées à la participation ou l’organisation d’activités de développement personnel et d’événements." },
  { id:"CER-06", title:"Participation à des événements scientifiques et d’innovation", source:"CDE-6.pdf ; hackathon participation with 3 th place.pdf ; Capture.JPG ; Capture d’écran 2025-01-03 153600.png", type:"Participation / distinction", access:"verify", description:"Pièces relatives à un festival des sciences, à un hackathon et à deux attestations numérisées dont l’intitulé exact doit être confirmé sur l’original." },
  { id:"CER-07", title:"Certification de compétence en français", source:"Rosetta certification french.pdf", type:"Certificat de langue", access:"controlled", description:"Certification de français présente dans l’archive ; le niveau détaillé est à confirmer sur le document original." },
];

export const communicationItems: DocumentItem[] = [
  { id:"COM-01", title:"De l’opacité à la transparence : modernisation des fondations comptables au CHU Mohammed VI d’Oujda", source:"communications scientifiques/Article Badr Mehdi.docx", type:"Article scientifique / manuscrit", access:"controlled", description:"Texte co-signé dans le champ Management, Gouvernance et Économie de la santé, consacré à la modernisation comptable, à la transparence financière et à la gouvernance hospitalière. Le statut de publication reste à confirmer avant toute formulation comme article publié." },
  { id:"COM-02", title:"Communication scientifique — attestation de participation", source:"communications scientifiques/certificat de communication.pdf", type:"Certificat de communication", access:"controlled", description:"Pièce de certification associée à une communication scientifique ; les références complètes sont consultables sur le certificat original." },
];

export const activityItems: DocumentItem[] = [
  { id:"ACT-01", title:"Festival des sciences — animateur et organisateur", source:"Attestation de formation - conférences et d_organisation/CDE-6.pdf", type:"Activité para-universitaire", access:"controlled", date:"02–04 mai 2025", description:"Attestation nominative de participation à la 12e édition du Festival des sciences en tant qu’animateur et organisateur." },
  { id:"ACT-02", title:"Participation : politiques financières et enjeux de développement au Maroc", source:"Attestation de formation - conférences et d_organisation/attestations de formations.pdf — page 2", type:"Participation scientifique", access:"controlled", date:"28–29 juin 2024", description:"Attestation de participation à une rencontre nationale organisée en partenariat avec la FSJES Oujda." },
  { id:"ACT-03", title:"Organisation : Confiance en soi et développement personnel", source:"Attestation de formation - conférences et d_organisation/attestations de formations.pdf — page 7", type:"Organisation d’activité", access:"controlled", date:"15 novembre 2025", description:"Attestation de participation à l’organisation de la formation, avec reconnaissance de l’implication active." },
  { id:"ACT-04", title:"Participation au hackathon", source:"Attestation de formation - conférences et d_organisation/hackathon participation with 3 th place.pdf", type:"Participation / distinction à confirmer", access:"verify", description:"Pièce portant un nom de fichier relatif à une participation au hackathon et à une troisième place ; statut à vérifier sur l’original." },
  { id:"ACT-05", title:"Organisation de conférence", source:"Attestation de formation - conférences et d_organisation/attestation d_organisation conférence.pdf", type:"Organisation", access:"controlled", description:"Attestation d’organisation présente dans l’archive." },
  { id:"ACT-06", title:"Groupe des anciens élèves du Lycée Abdellah Guennoune", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Engagement d’orientation", access:"verify", description:"Membre créateur d’un groupe d’anciens élèves accompagnant les bacheliers du lycée dans leur orientation académique." },
  { id:"ACT-07", title:"Organisation et animation de stands d’orientation", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Engagement d’orientation", access:"verify", description:"Organisation et animation de stands dans le cadre d’une journée de l’orientation." },
  { id:"ACT-08", title:"Secrétaire général du Club d’Excellence", source:"Source éditoriale : CV français et anglais · Justificatif spécifique non identifié dans le ZIP", type:"Responsabilité associative", access:"verify", date:"2024–2025", description:"Responsabilité de Secrétaire général du Club d’Excellence durant l’année universitaire 2024–2025." },
];

export const recommendationItems: DocumentItem[] = [
  { id:"REC-01", title:"Référence académique — innovation, transformation digitale et gouvernance des SI", source:"LETTRE DE RECOMMANDATIONS/5.Lettre de recommandation_Mr CHERKI _El Mehdi _Doc (1).pdf", type:"Lettre de recommandation", access:"private", description:"Référence académique liée aux modules Management de l’innovation et de la transformation digitale et Gouvernance des systèmes d’information intelligents." },
  { id:"REC-02", title:"Référence académique — statistiques et méthodes de prévision", source:"LETTRE DE RECOMMANDATIONS/Lettre de recommandation CHERKI El Mehdi.pdf", type:"Lettre de recommandation", access:"private", description:"Lettre d’un Maître de conférences en statistique faisant référence au module Méthodes de Prévision, au sérieux académique et au potentiel doctoral." },
  { id:"REC-03", title:"Référence académique — systèmes d’information et recherche appliquée", source:"LETTRE DE RECOMMANDATIONS/Lettre_recommandation_Cherki_El_Mehdi.docx", type:"Lettre de recommandation", access:"private", description:"Lettre faisant état de la formation MSII, de capacités d’analyse critique et d’une aisance dans la conduite de travaux de recherche appliquée." },
  { id:"REC-04", title:"Référence académique — ERP et encadrement du mémoire", source:"LETTRE DE RECOMMANDATIONS/Lettre_recommandation_Encadrant_Cherki_El_Mehdi.docx", type:"Lettre de recommandation", access:"private", description:"Lettre de l’enseignant du module ERP et encadrant du mémoire de fin d’études, décrivant la rigueur scientifique et le sérieux du travail réalisé sous direction." },
  { id:"REC-05", title:"Référence académique complémentaire", source:"LETTRE DE RECOMMANDATIONS/Mme  SENHAJI ZINEB.pdf", type:"Lettre de recommandation", access:"private", description:"Lettre académique complémentaire présente dans l’archive ; le scan original et les coordonnées restent sous accès contrôlé." },
];

export const thesisItems: DocumentItem[] = [
  { id:"MEM-01", title:"Machine Learning et gouvernance de la commande publique hospitalière", source:"MFE CHERKI EL MEHDI 2025-2026/MFE CHERKI EL MEHDI 2025-2026.docx", type:"Mémoire de master — version DOCX", access:"controlled", description:"Mémoire de Master d’Excellence en Management des Systèmes d’Information Intelligents portant sur la gouvernance de la commande publique hospitalière au CHU Mohammed VI d’Oujda." },
  { id:"MEM-02", title:"Machine Learning et gouvernance de la commande publique hospitalière", source:"MFE CHERKI EL MEHDI 2025-2026/MFE CHERKI EL MEHDI 2025-2026.pdf", type:"Mémoire de master — version PDF", access:"controlled", description:"Version PDF du mémoire, présentée comme preuve documentaire de la recherche menée." },
  { id:"MEM-03", title:"Présentation de soutenance", source:"MFE CHERKI EL MEHDI 2025-2026/MFE CHERKI EL MEHDI VF 07-07-2026.pptx", type:"Présentation", access:"controlled", description:"Présentation de soutenance du mémoire, version PowerPoint." },
  { id:"MEM-04", title:"Note d’analyse de projet", source:"MFE CHERKI EL MEHDI 2025-2026/analyse_projet VF.md", type:"Note de projet", access:"controlled", description:"Note d’analyse relative au projet SII-ML CHU incluse avec le mémoire." },
];

export const projectItems: DocumentItem[] = [
  { id:"PRJ-01", title:"Spécification et documentation du prototype SII-ML CHU", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/README.md", type:"Documentation technique", access:"controlled", description:"Documentation principale du prototype de suivi intelligent et traçable lié au projet de mémoire." },
  { id:"PRJ-02", title:"Couche d’intégration et services API", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/api/", type:"Composant technique", access:"controlled", description:"Composant d’intégration recensé dans le corpus applicatif." },
  { id:"PRJ-03", title:"Moteur de traitement et logique métier", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/backend/", type:"Composant technique protégé", access:"private", description:"Ensemble backend de 190 fichiers. Les documents téléversés, les contenus internes et les configurations de traitement ne sont pas exposés publiquement." },
  { id:"PRJ-04", title:"Modèle de données et structure de persistance", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/database/", type:"Composant technique protégé", access:"private", description:"Structure de base de données recensée dans le corpus ; accès contrôlé pour éviter toute exposition de paramètres ou de modèle sensible." },
  { id:"PRJ-05", title:"Interface de démonstration", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/frontend/", type:"Composant technique", access:"controlled", description:"Interface utilisateur du prototype, composée de 32 fichiers incluant des ressources de démonstration." },
  { id:"PRJ-06", title:"Services de traitement applicatif", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/services/", type:"Composant technique", access:"controlled", description:"Services applicatifs associés au traitement du prototype, avec 9 fichiers recensés." },
  { id:"PRJ-07", title:"Scripts de démarrage et configuration du projet", source:"MFE CHERKI EL MEHDI 2025-2026/APP/sii-ml-chu/.gitignore · START_PROJECT.bat · app.bat", type:"Configuration du prototype", access:"controlled", description:"Fichiers de lancement et de configuration présents à la racine du prototype, accompagnés de la documentation principale." },
];

export const privacyItems: DocumentItem[] = [
  { id:"PRV-01", title:"Carte nationale d’identité", source:"diplôme et relevé de notes/CIN.bmp", type:"Pièce d’identité", access:"private", description:"La pièce est inventoriée pour assurer l’exhaustivité du ZIP, mais elle n’est pas affichée, téléchargée ni résumée publiquement." },
  { id:"PRV-02", title:"Documents hospitaliers téléversés dans le projet", source:"MFE.../APP/sii-ml-chu/backend/uploads/ et backend/bl_previews/", type:"Données et aperçus internes", access:"private", description:"Le corpus contient des documents opérationnels et aperçus de bons de livraison. Ils sont comptabilisés dans le projet, mais exclus de l’interface publique." },
  { id:"PRV-03", title:"Lettres portant signatures et cachets", source:"LETTRE DE RECOMMANDATIONS/*", type:"Correspondance académique", access:"private", description:"Les lettres sont présentées par fiche de lecture. Les scans comportant signatures, cachets ou coordonnées sont réservés à une transmission contrôlée." },
];

export const allIndexItems: DocumentItem[] = [
  ...academicItems,
  ...experienceItems,
  ...internshipItems,
  ...certificateItems,
  ...communicationItems,
  ...activityItems,
  ...recommendationItems,
  ...thesisItems,
  ...privacyItems,
  ...projectItems,
];

export const sectionItems: Record<Exclude<SectionId, "registry">, DocumentItem[]> = {
  academic: academicItems,
  experience: experienceItems,
  internships: internshipItems,
  certificates: certificateItems,
  communications: communicationItems,
  activities: activityItems,
  recommendations: recommendationItems,
  thesis: thesisItems,
  project: projectItems,
  privacy: privacyItems,
};

export const sectionMeta: Record<SectionId, { title: string; lead: string; count: string; scope: string }> = {
  academic: { title:"Formation académique et universitaire", lead:"Quatre parcours sont présentés selon les intitulés du CV : Master, Licence, BTS et Baccalauréat. Les diplômes et relevés du ZIP sont attachés comme justificatifs.", count:"4 parcours", scope:"Master · Licence · BTS · Bac" },
  experience: { title:"Expériences professionnelles", lead:"Le CV structure l’intitulé et le périmètre du poste ; la prise de service présente dans le ZIP joue le rôle de justificatif administratif.", count:"1 poste", scope:"Expérience au CHU" },
  internships: { title:"Stages", lead:"Neuf stages sont extraits et structurés depuis les CV français et anglais. Les attestations individuelles ne sont pas présentes dans le ZIP actuel et sont donc signalées comme à vérifier.", count:"9 stages", scope:"Expériences de stage" },
  certificates: { title:"Formations courtes et certificats", lead:"Les attestations du ZIP sont regroupées par thématique professionnelle : management, systèmes d’information, méthodes, marketing digital, animation et langue.", count:"7 ensembles", scope:"Formations complémentaires" },
  communications: { title:"Communications scientifiques", lead:"Deux pièces sont classées dans le dossier des communications : un article/manuscrit et un certificat de communication.", count:"2 pièces", scope:"Production scientifique" },
  activities: { title:"Activités para-scolaires et para-universitaires", lead:"Les attestations du ZIP et les engagements cités dans le CV sont réunis : animation, organisation, orientation, hackathon et responsabilité associative.", count:"8 activités", scope:"Engagement et responsabilités" },
  recommendations: { title:"Lettres de recommandation", lead:"Cinq lettres de recommandation d’enseignants et d’encadrants sont inventoriées. Leur consultation complète reste contrôlée.", count:"5 pièces", scope:"Références académiques" },
  thesis: { title:"Mémoire de master", lead:"Les versions DOCX, PDF, la soutenance PPTX et la note d’analyse de projet sont répertoriées séparément.", count:"4 pièces", scope:"Mémoire et soutenance" },
  project: { title:"Projet SII-ML CHU", lead:"Le corpus technique compte 239 fichiers répartis entre API, backend, base de données, frontend, services et fichiers de lancement. Les contenus hospitaliers internes restent protégés.", count:"239 fichiers", scope:"Corpus applicatif" },
  registry: { title:"Registre des pièces", lead:"Index transversal combinant les contenus structurés depuis le CV et les justificatifs de l’archive. Chaque notice indique explicitement son type de source et son statut d’accès.", count:"Dossier complet", scope:"Index éditorial et preuves" },
  privacy: { title:"Confidentialité et accès contrôlé", lead:"Les pièces sensibles sont inventoriées afin de garantir la couverture du ZIP, sans divulgation de données personnelles, de signatures ou de documents opérationnels du CHU.", count:"3 groupes", scope:"Protection des pièces" },
};

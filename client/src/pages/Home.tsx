/* Style reminder: Research Brief Executif — blanc clinique, bleu minéral, structure de sélection et preuves lisibles. */
import {
  ArrowDownToLine,
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  ChevronDown,
  FileCheck2,
  Globe2,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Microscope,
  Network,
  Printer,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type Locale = "fr" | "en" | "ar" | "es" | "nl" | "de";

const assets = {
  hero: "/manus-storage/research-brief-hero_9dcf58b0.jpg",
  project: "/manus-storage/research-brief-project_41cd91f9.jpg",
  evidence: "/manus-storage/research-brief-evidence_99a18073.jpg",
  mark: "/manus-storage/research-brief-mark_afaede60.png",
};

const languages: { code: Locale; label: string }[] = [
  { code: "fr", label: "Français" }, { code: "en", label: "English" }, { code: "ar", label: "العربية" },
  { code: "es", label: "Español" }, { code: "nl", label: "Nederlands" }, { code: "de", label: "Deutsch" },
];

const translations: Record<Locale, {
  nav: string[]; label: string; role: string; availability: string; intro: string; contact: string; cv: string; overview: string;
  target: string; targetText: string; evidence: string; evidenceText: string; research: string; researchText: string; project: string; projectText: string;
  thesis: string; thesisText: string; record: string; recordText: string; publications: string; publicationsText: string; credentials: string; credentialsText: string;
  methods: string; contactTitle: string; contactText: string; message: string; print: string; details: string; original: string; private: string; languageNote: string;
}> = {
  fr: {
    nav:["Synthèse","Recherche","Projet","Mémoire","Parcours","Preuves"], label:"RESEARCH PROFILE", role:"Candidat au doctorat", availability:"Ouvert aux opportunités doctorales", intro:"Profil de recherche appliquée en systèmes d’information intelligents, IA documentaire et gouvernance hospitalière.", contact:"Prendre contact", cv:"Imprimer le CV", overview:"Synthèse de candidature", target:"Objectif doctoral", targetText:"Développer une recherche appliquée sur la transformation des processus hospitaliers par des systèmes d’information intelligents, responsables et auditables.", evidence:"Trois preuves principales", evidenceText:"Un mémoire de master, une expérience hospitalière et un prototype de traitement documentaire forment le noyau de ce dossier.", research:"Positionnement de recherche", researchText:"Une approche qui relie des situations organisationnelles concrètes, les méthodes de recherche et la conception de systèmes fiables.", project:"Projet de recherche appliquée", projectText:"SII-ML CHU : suivi intelligent et auditable de la commande publique hospitalière.", thesis:"Mémoire de master", thesisText:"Machine Learning et gouvernance de la commande publique hospitalière au CHU Mohammed VI d’Oujda.", record:"Parcours académique & professionnel", recordText:"Les éléments les plus pertinents pour une candidature doctorale, présentés dans l’ordre de leur contribution.", publications:"Communications & production scientifique", publicationsText:"Les textes et contributions sont séparés selon leur statut afin de ne pas surinterpréter leur niveau de publication.", credentials:"Références & preuves", credentialsText:"Sélection de formations, engagements et pièces disponibles dans un cadre de candidature ; les originaux sensibles restent privés.", methods:"Méthodes & outils", contactTitle:"Parlons d’un projet doctoral ou de recherche appliquée.", contactText:"Je peux transmettre un CV détaillé, le mémoire, les lettres de recommandation et les justificatifs pertinents dans le cadre d’une candidature sérieuse.", message:"Écrire un message", print:"Imprimer", details:"Voir les éléments", original:"Intitulé original conservé", private:"Document vérifiable sur demande", languageNote:"La langue d’interface est une traduction de lecture ; elle ne constitue pas une déclaration de niveau linguistique."
  },
  en: {
    nav:["Overview","Research","Project","Thesis","Record","Evidence"], label:"RESEARCH PROFILE", role:"PhD applicant", availability:"Open to PhD opportunities", intro:"Applied research profile in intelligent information systems, document AI and hospital governance.", contact:"Get in touch", cv:"Print CV", overview:"Application overview", target:"PhD objective", targetText:"Develop applied research on the transformation of hospital processes through responsible, auditable intelligent information systems.", evidence:"Three core pieces of evidence", evidenceText:"A master’s thesis, hospital experience and a document-processing prototype form the core of this application file.", research:"Research positioning", researchText:"An approach connecting concrete organisational situations, research methods and the design of reliable systems.", project:"Applied research project", projectText:"SII-ML CHU: intelligent, auditable monitoring of hospital public procurement.", thesis:"Master’s thesis", thesisText:"Machine Learning and governance of hospital public procurement at Mohammed VI University Hospital in Oujda.", record:"Academic & professional record", recordText:"The elements most relevant to a PhD application, ordered by their contribution.", publications:"Scientific communication & output", publicationsText:"Texts and contributions are separated by status so their publication level is never overstated.", credentials:"References & evidence", credentialsText:"A selection of training, engagement and documents available in an application context; sensitive originals remain private.", methods:"Methods & tools", contactTitle:"Discuss a PhD or applied research project.", contactText:"A full CV, thesis, recommendation letters and relevant supporting records can be shared in the context of a serious application.", message:"Write a message", print:"Print", details:"View details", original:"Original title retained", private:"Verifiable document on request", languageNote:"The interface language is a reading translation; it is not a statement of language proficiency."
  },
  ar: {
    nav:["ملخص","البحث","المشروع","المذكرة","المسار","الأدلة"], label:"ملف بحثي", role:"مترشح للدكتوراه", availability:"منفتح على فرص الدكتوراه", intro:"ملف بحث تطبيقي في أنظمة المعلومات الذكية وذكاء الوثائق وحوكمة المستشفيات.", contact:"تواصل", cv:"طباعة السيرة", overview:"ملخص الترشيح", target:"هدف الدكتوراه", targetText:"تطوير بحث تطبيقي حول تحويل العمليات الاستشفائية عبر أنظمة معلومات ذكية مسؤولة وقابلة للتدقيق.", evidence:"ثلاثة أدلة رئيسية", evidenceText:"تشكل مذكرة الماستر والخبرة الاستشفائية ونموذج معالجة الوثائق نواة هذا الملف.", research:"التموضع البحثي", researchText:"مقاربة تربط أوضاعاً تنظيمية ملموسة ومناهج البحث وتصميم أنظمة موثوقة.", project:"مشروع بحث تطبيقي", projectText:"SII-ML CHU: تتبع ذكي وقابل للتدقيق للصفقات العمومية الاستشفائية.", thesis:"مذكرة الماستر", thesisText:"التعلم الآلي وحوكمة الطلب العمومي الاستشفائي بالمركز الاستشفائي الجامعي محمد السادس بوجدة.", record:"المسار الأكاديمي والمهني", recordText:"العناصر الأكثر صلة بطلب الدكتوراه، مرتبة حسب مساهمتها.", publications:"المساهمات والإنتاج العلمي", publicationsText:"تفصل النصوص والمساهمات حسب وضعها لتفادي المبالغة في مستوى النشر.", credentials:"المراجع والأدلة", credentialsText:"اختيار من التكوينات والالتزامات والوثائق المتاحة في سياق الترشيح؛ تبقى الأصول الحساسة خاصة.", methods:"المناهج والأدوات", contactTitle:"لنتحدث عن دكتوراه أو بحث تطبيقي.", contactText:"يمكن تقديم سيرة مفصلة والمذكرة ورسائل التوصية والوثائق ذات الصلة في إطار ترشيح جاد.", message:"اكتب رسالة", print:"طباعة", details:"عرض العناصر", original:"تم الاحتفاظ بالعنوان الأصلي", private:"وثيقة قابلة للتحقق عند الطلب", languageNote:"لغة الواجهة ترجمة للقراءة ولا تشكل تصريحاً بالمستوى اللغوي."
  },
  es: {
    nav:["Resumen","Investigación","Proyecto","Memoria","Trayectoria","Pruebas"], label:"PERFIL DE INVESTIGACIÓN", role:"Candidato doctoral", availability:"Abierto a oportunidades doctorales", intro:"Perfil de investigación aplicada en sistemas de información inteligentes, IA documental y gobernanza hospitalaria.", contact:"Contactar", cv:"Imprimir CV", overview:"Resumen de candidatura", target:"Objetivo doctoral", targetText:"Desarrollar investigación aplicada sobre la transformación de procesos hospitalarios mediante sistemas de información inteligentes, responsables y auditables.", evidence:"Tres pruebas principales", evidenceText:"Una memoria de máster, experiencia hospitalaria y un prototipo de procesamiento documental forman el núcleo de este expediente.", research:"Posicionamiento de investigación", researchText:"Un enfoque que relaciona situaciones organizativas concretas, métodos de investigación y diseño de sistemas fiables.", project:"Proyecto de investigación aplicada", projectText:"SII-ML CHU: seguimiento inteligente y auditable de la contratación pública hospitalaria.", thesis:"Memoria de máster", thesisText:"Machine Learning y gobernanza de la contratación pública hospitalaria en el CHU Mohammed VI de Oujda.", record:"Trayectoria académica y profesional", recordText:"Los elementos más relevantes para una candidatura doctoral, ordenados por su contribución.", publications:"Comunicaciones y producción científica", publicationsText:"Los textos y contribuciones se separan por estado para no exagerar su nivel de publicación.", credentials:"Referencias y pruebas", credentialsText:"Selección de formación, compromiso y documentos disponibles en una candidatura; los originales sensibles siguen siendo privados.", methods:"Métodos y herramientas", contactTitle:"Hablemos de un doctorado o de investigación aplicada.", contactText:"Se puede compartir un CV completo, la memoria, cartas de recomendación y pruebas pertinentes en una candidatura seria.", message:"Escribir un mensaje", print:"Imprimir", details:"Ver detalles", original:"Se conserva el título original", private:"Documento verificable bajo solicitud", languageNote:"El idioma de la interfaz es una traducción de lectura; no constituye una declaración de competencia lingüística."
  },
  nl: {
    nav:["Overzicht","Onderzoek","Project","Scriptie","Loopbaan","Bewijs"], label:"ONDERZOEKSPROFIEL", role:"Doctoraatskandidaat", availability:"Open voor doctoraatskansen", intro:"Profiel voor toegepast onderzoek in intelligente informatiesystemen, document-AI en ziekenhuisbestuur.", contact:"Contact opnemen", cv:"CV afdrukken", overview:"Sollicitatie-overzicht", target:"Doctoraatsdoel", targetText:"Toegepast onderzoek ontwikkelen naar de transformatie van ziekenhuisprocessen via verantwoordelijke, controleerbare intelligente informatiesystemen.", evidence:"Drie kernbewijzen", evidenceText:"Een masterscriptie, ziekenhuiservaring en een prototype voor documentverwerking vormen de kern van dit dossier.", research:"Onderzoekspositionering", researchText:"Een aanpak die concrete organisatorische situaties, onderzoeksmethoden en het ontwerp van betrouwbare systemen verbindt.", project:"Toegepast onderzoeksproject", projectText:"SII-ML CHU: intelligente, controleerbare opvolging van ziekenhuisaanbestedingen.", thesis:"Masterscriptie", thesisText:"Machine Learning en governance van ziekenhuisaanbestedingen bij het Mohammed VI Universitair Ziekenhuis in Oujda.", record:"Academisch en professioneel parcours", recordText:"De voor een doctoraatsaanvraag meest relevante elementen, gerangschikt naar bijdrage.", publications:"Wetenschappelijke communicatie en output", publicationsText:"Teksten en bijdragen worden per status gescheiden om het publicatieniveau niet te overschatten.", credentials:"Referenties en bewijs", credentialsText:"Een selectie van opleidingen, engagement en documenten in een sollicitatiecontext; gevoelige originelen blijven privé.", methods:"Methoden en tools", contactTitle:"Bespreek een doctoraat of toegepast onderzoeksproject.", contactText:"Een volledig CV, scriptie, aanbevelingsbrieven en relevante bewijsstukken kunnen in een serieuze sollicitatie worden gedeeld.", message:"Bericht schrijven", print:"Afdrukken", details:"Details bekijken", original:"Originele titel behouden", private:"Verifieerbaar document op aanvraag", languageNote:"De interfacetaal is een leesvertaling; zij is geen verklaring van taalvaardigheid."
  },
  de: {
    nav:["Überblick","Forschung","Projekt","Abschlussarbeit","Werdegang","Nachweise"], label:"FORSCHUNGSPROFIL", role:"Promotionsbewerber", availability:"Offen für Promotionsmöglichkeiten", intro:"Profil für angewandte Forschung in intelligenten Informationssystemen, Dokumenten-KI und Krankenhaus-Governance.", contact:"Kontakt", cv:"CV drucken", overview:"Bewerbungsüberblick", target:"Promotionsziel", targetText:"Angewandte Forschung zur Transformation von Krankenhausprozessen durch verantwortungsvolle, prüfbare intelligente Informationssysteme entwickeln.", evidence:"Drei Kernnachweise", evidenceText:"Eine Masterarbeit, Krankenhauspraxis und ein Prototyp zur Dokumentenverarbeitung bilden den Kern dieser Bewerbung.", research:"Forschungspositionierung", researchText:"Ein Ansatz, der konkrete Organisationssituationen, Forschungsmethoden und den Entwurf zuverlässiger Systeme verbindet.", project:"Angewandtes Forschungsprojekt", projectText:"SII-ML CHU: intelligente, prüfbare Nachverfolgung öffentlicher Krankenhausbeschaffung.", thesis:"Masterarbeit", thesisText:"Machine Learning und Governance der öffentlichen Krankenhausbeschaffung am Universitätsklinikum Mohammed VI in Oujda.", record:"Akademischer und beruflicher Werdegang", recordText:"Die für eine Promotionsbewerbung relevantesten Elemente, nach ihrem Beitrag geordnet.", publications:"Wissenschaftliche Kommunikation und Output", publicationsText:"Texte und Beiträge werden nach Status getrennt, damit ihr Veröffentlichungsstand nicht überhöht wird.", credentials:"Referenzen und Nachweise", credentialsText:"Eine Auswahl an Weiterbildung, Engagement und Dokumenten für den Bewerbungskontext; sensible Originale bleiben privat.", methods:"Methoden und Tools", contactTitle:"Über eine Promotion oder angewandte Forschung sprechen.", contactText:"Ein vollständiger Lebenslauf, die Masterarbeit, Empfehlungsschreiben und relevante Nachweise können bei einer ernsthaften Bewerbung geteilt werden.", message:"Nachricht schreiben", print:"Drucken", details:"Details ansehen", original:"Originaltitel beibehalten", private:"Prüfbares Dokument auf Anfrage", languageNote:"Die Sprache der Oberfläche ist eine Leseübersetzung und keine Erklärung von Sprachkenntnissen."
  },
};

const researchPillars = [
  ["Systèmes d’information intelligents", "Conception de systèmes qui articulent données, règles, apprentissage et validation humaine."],
  ["IA documentaire", "OCR, extraction d’entités, classification et traitement des pièces administratives."],
  ["Gouvernance & auditabilité", "Traçabilité des opérations, responsabilités et qualité des décisions organisationnelles."],
];

const evidenceCards = [
  { no:"01", title:"Mémoire de master", text:"Étude de cas sur la commande publique hospitalière, combinant analyse documentaire, entretiens et prototype SII-ML CHU.", proof:"Mémoire & soutenance" },
  { no:"02", title:"Expérience CHU", text:"Audit interne et contrôle de gestion au CHU Mohammed VI d’Oujda, avec ancrage opérationnel dans les processus hospitaliers.", proof:"Expérience professionnelle" },
  { no:"03", title:"Prototype auditable", text:"Chaîne de traitement documentaire : OCR, NLP, classification, validation humaine, génération et journalisation.", proof:"Projet applicatif documenté" },
];

const record = [
  ["2024–2026", "Master d’excellence", "Management des Systèmes d’Information Intelligents · FSJES Oujda", "FORMATION"],
  ["2019–présent", "Audit interne & contrôle de gestion", "CHU Mohammed VI d’Oujda", "EXPÉRIENCE"],
  ["2024", "Licence d’excellence", "Analyse économique et management des systèmes d’information · FSJES Oujda", "FORMATION"],
  ["2016", "Brevet de technicien supérieur", "Gestion des entreprises · Lycée Mehdi Ben Barka, Oujda", "FORMATION"],
];

const credentialItems = [
  ["Formation", "Management de projet : de l’idée au projet", "Agence Universitaire de la Francophonie · IFIC", "Attestation de formation présente dans le dossier."],
  ["Engagement", "12e édition du Festival des sciences", "Fondation Omar Ibn Abdelaziz · Oujda", "Participation comme animateur et organisateur ; nature exacte à vérifier avant communication publique."],
  ["Formation", "Styles et bonnes pratiques de management", "Agence Universitaire de la Francophonie · IFIC", "Atelier portant sur les styles de management, les rôles et l’animation d’équipe."],
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[locale];
  const rtl = locale === "ar";
  useEffect(() => { document.documentElement.lang = locale; document.documentElement.dir = rtl ? "rtl" : "ltr"; }, [locale, rtl]);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" }); setMenuOpen(false); };

  return <div className={rtl ? "research-app rtl" : "research-app"}>
    <aside className="rail" aria-label="Profil et navigation">
      <button className="identity" onClick={() => go("overview")}><img src={assets.mark} alt="" /><span>CHERKI<br /><b>EL MEHDI</b></span></button>
      <div className="rail-profile"><span className="eyebrow"><span className="live-dot" /> {t.label}</span><h1>{t.role}</h1><p>{t.intro}</p><span className="availability"><BadgeCheck size={15} /> {t.availability}</span></div>
      <nav className="rail-nav">{t.nav.map((item, i) => <button key={item} onClick={() => go(["overview","research","project","thesis","record","evidence"][i])}><span>0{i + 1}</span>{item}</button>)}</nav>
      <div className="rail-footer"><a href="mailto:cherkielmehdi@outlook.com"><Mail size={15} /> cherkielmehdi@outlook.com</a><p><Globe2 size={14} /> Oujda, Maroc</p></div>
    </aside>

    <header className="mobile-header"><button className="identity" onClick={() => go("overview")}><img src={assets.mark} alt="" /><b>CEM</b></button><div><select value={locale} onChange={(e) => setLocale(e.target.value as Locale)} aria-label="Langue">{languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}</select><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">{menuOpen ? <X /> : <Menu />}</button></div></header>
    {menuOpen && <nav className="mobile-nav">{t.nav.map((item, i) => <button key={item} onClick={() => go(["overview","research","project","thesis","record","evidence"][i])}><span>0{i + 1}</span>{item}</button>)}</nav>}

    <main className="main-content">
      <div className="main-toolbar"><p><span className="breadcrumb">CHERKI EL MEHDI</span> / {t.overview}</p><div><label><Languages size={15} /><select value={locale} onChange={(e) => setLocale(e.target.value as Locale)}>{languages.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}</select></label><button onClick={() => window.print()}><Printer size={15} /> {t.print}</button></div></div>

      <section id="overview" className="overview section-shell">
        <div className="overview-copy"><p className="section-no">01 / {t.overview}</p><h2>Cherki El Mehdi</h2><p className="overview-role">Audit, contrôle de gestion et systèmes d’information intelligents.</p><p className="overview-intro">{t.intro}</p><div className="quick-actions"><button className="filled" onClick={() => go("research")}>{t.nav[1]} <ArrowDownToLine size={16} /></button><a href="mailto:cherkielmehdi@outlook.com">{t.contact} <ArrowUpRight size={16} /></a></div></div>
        <div className="overview-image"><img src={assets.hero} alt="Environnement de recherche et de documentation" /><div className="image-caption"><span>RESEARCH / HEALTH SYSTEMS / DATA</span><span>2026</span></div></div>
      </section>

      <section className="decision-strip"><article><span className="mini-label">{t.target}</span><p>{t.targetText}</p></article><article><span className="mini-label">{t.evidence}</span><p>{t.evidenceText}</p></article><article className="strip-stat"><strong>03</strong><span>preuves<br />prioritaires</span></article></section>

      <section id="research" className="content-section section-shell"><header className="section-head"><div><p className="section-no">02 / {t.nav[1]}</p><h2>{t.research}</h2></div><p>{t.researchText}</p></header><div className="research-layout"><div className="research-question"><span className="mini-label">RESEARCH QUESTION</span><blockquote>Comment articuler intelligence documentaire, contrôle organisationnel et validation humaine dans des processus hospitaliers sensibles ?</blockquote><p>Le fil conducteur du dossier est la conception de systèmes utiles, vérifiables et adaptés aux contraintes de gouvernance.</p></div><div className="pillar-list">{researchPillars.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

      <section className="evidence-focus section-shell"><header className="section-head compact"><div><p className="section-no">EVIDENCE / CORE</p><h2>{t.evidence}</h2></div><p>Chaque élément doit pouvoir être relié à une pièce, une expérience ou une production documentée.</p></header><div className="evidence-row">{evidenceCards.map(card => <article key={card.no}><span className="evidence-no">{card.no}</span><h3>{card.title}</h3><p>{card.text}</p><span className="proof-tag"><ShieldCheck size={14} /> {card.proof}</span></article>)}</div></section>

      <section id="project" className="case-study section-shell"><div className="case-visual"><img src={assets.project} alt="Modèle conceptuel d’un système de traitement documentaire" /><span className="case-label">CASE STUDY / SII-ML CHU</span></div><div className="case-copy"><p className="section-no">03 / {t.nav[2]}</p><h2>{t.project}</h2><h3>{t.projectText}</h3><p>Le projet structure un pipeline de six modules : OCR, NLP, classification, validation humaine, génération documentaire et audit. Il sert de preuve de conception, non de produit commercial déployé.</p><div className="module-grid">{[["M1","OCR"],["M2","NLP"],["M3","Classification"],["M4","Validation"],["M5","Génération"],["M6","Audit"]].map(([code,title]) => <span key={code}><b>{code}</b>{title}</span>)}</div><p className="context-note"><FileCheck2 size={15} /> Prototype académique documenté. Les données hospitalières, identifiants, comptes et fichiers internes ne sont pas publiés.</p></div></section>

      <section id="thesis" className="thesis section-shell"><header className="section-head"><div><p className="section-no">04 / {t.nav[3]}</p><h2>{t.thesis}</h2></div><p>{t.thesisText}</p></header><div className="thesis-grid"><article className="thesis-title"><span className="mini-label">MASTER D’EXCELLENCE · 2026</span><h3>Machine Learning et gouvernance de la commande publique hospitalière</h3><p>Étude de cas au CHU Mohammed VI d’Oujda, organisée autour de la traçabilité, du contrôle et de la co-construction d’un système de suivi.</p></article><article className="method-card"><Microscope size={22} /><h3>Méthode</h3><p>Analyse documentaire, entretiens semi-directifs, observation et test de prototype. Les résultats sont considérés dans leur périmètre de recherche.</p></article><article className="metric-card"><strong>91,8%</strong><span>Taux d’extraction rapporté dans les tests préliminaires</span><em>À interpréter avec le protocole présenté dans le mémoire.</em></article><article className="metric-card"><strong>18</strong><span>Entretiens ou échanges terrain mobilisés dans l’étude</span><em>Source : mémoire et présentation de soutenance.</em></article></div></section>

      <section id="record" className="record section-shell"><header className="section-head"><div><p className="section-no">05 / {t.nav[4]}</p><h2>{t.record}</h2></div><p>{t.recordText}</p></header><div className="record-list">{record.map(([date,title,place,type]) => <article key={title}><span className="record-date">{date}</span><div><span className="record-type">{type}</span><h3>{title}</h3><p>{place}</p></div><BadgeCheck className="record-check" size={19} /></article>)}</div></section>

      <section className="methods section-shell"><header className="section-head compact"><div><p className="section-no">PRACTICE / SKILLS</p><h2>{t.methods}</h2></div><p>Les compétences sont décrites par famille et reliées à un projet, une formation ou une expérience ; aucune jauge subjective n’est utilisée.</p></header><div className="method-columns"><article><span>RECHERCHE</span><p>Recherche-intervention · entretiens · analyse documentaire · triangulation</p></article><article><span>DONNÉES & IA</span><p>Python · R / RStudio · Machine Learning · OCR · NLP</p></article><article><span>GOUVERNANCE</span><p>Audit interne · contrôle de gestion · reporting · processus hospitaliers</p></article><article><span>OUTILS</span><p>HOSIX · SPHINX · SAGE · Excel · Word · PowerPoint · Access</p></article></div></section>

      <section className="publications section-shell"><header className="section-head"><div><p className="section-no">SCIENTIFIC OUTPUT</p><h2>{t.publications}</h2></div><p>{t.publicationsText}</p></header><article className="publication-item"><div><span className="status-label">{t.original}</span><h3>De l’opacité à la transparence : la modernisation des fondations comptables comme prérequis à la politique financière du CHU Mohammed VI d’Oujda.</h3><p>Management · gouvernance · économie de la santé</p></div><aside><span className="publication-status">MANUSCRIT</span><p>Statut éditorial à confirmer avant toute présentation comme publication évaluée par les pairs.</p></aside></article></section>

      <section id="evidence" className="credentials section-shell"><div className="credential-image"><img src={assets.evidence} alt="Dossiers documentaires et preuve de vérification" /></div><div><header className="section-head stacked"><div><p className="section-no">06 / {t.nav[5]}</p><h2>{t.credentials}</h2></div><p>{t.credentialsText}</p></header><div className="credential-list">{credentialItems.map(([kind,title,issuer,detail]) => <details key={title}><summary><span><BadgeCheck size={16} /> {kind}</span><b>{title}</b><ChevronDown size={17} /></summary><div><p>{issuer}</p><p>{detail}</p><span className="private"><ShieldCheck size={14} /> {t.private}</span></div></details>)}</div></div></section>

      <section className="contact-panel section-shell"><div><p className="section-no inverse">CONTACT / NEXT STEP</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p></div><div className="contact-actions"><a href="mailto:cherkielmehdi@outlook.com?subject=Discussion%20doctorale"><Mail size={17} /> cherkielmehdi@outlook.com</a><button onClick={() => window.location.href = "mailto:cherkielmehdi@outlook.com?subject=Discussion%20doctorale"}>{t.message} <Send size={16} /></button><p><Languages size={14} /> {t.languageNote}</p></div></section>
      <footer><span>CHERKI EL MEHDI / RESEARCH PROFILE</span><button onClick={() => go("overview")}>↑</button></footer>
    </main>
  </div>;
}

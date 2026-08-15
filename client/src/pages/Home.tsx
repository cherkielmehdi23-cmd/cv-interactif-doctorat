/* Style reminder: Archive de recherche vivante — éditorial académique, ivoire, encre et vert oxyde. */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Download,
  FileText,
  Globe2,
  GraduationCap,
  Languages,
  Mail,
  Menu,
  Network,
  Printer,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Locale = "fr" | "en" | "ar" | "es" | "nl" | "de";

const heroImage = "/manus-storage/cv-doctorat-hero_c7ed87fd.jpg";
const researchImage = "/manus-storage/cv-doctorat-research_05a63b31.jpg";
const projectImage = "/manus-storage/cv-doctorat-project_6aa1fae9.jpg";
const monogram = "/manus-storage/cv-doctorat-monogram_a19cbfdb.png";

const localeOptions: { code: Locale; label: string; native: string }[] = [
  { code: "fr", label: "Français", native: "FR" },
  { code: "en", label: "English", native: "EN" },
  { code: "ar", label: "العربية", native: "AR" },
  { code: "es", label: "Español", native: "ES" },
  { code: "nl", label: "Nederlands", native: "NL" },
  { code: "de", label: "Deutsch", native: "DE" },
];

const copy: Record<
  Locale,
  {
    nav: string[];
    menu: string;
    close: string;
    heroEyebrow: string;
    heroTitle: string;
    heroLead: string;
    researchCta: string;
    contactCta: string;
    verified: string;
    phd: string;
    scroll: string;
    dossier: string;
    profileTitle: string;
    profileLead: string;
    readMemoir: string;
    researchTitle: string;
    researchLead: string;
    method: string;
    field: string;
    results: string;
    projectTitle: string;
    projectLead: string;
    modules: string;
    trajectoryTitle: string;
    credentialsTitle: string;
    credentialsLead: string;
    filters: string[];
    publicationsTitle: string;
    publicationsLead: string;
    manuscript: string;
    skillsTitle: string;
    contactTitle: string;
    contactLead: string;
    contactButton: string;
    print: string;
    available: string;
    private: string;
    footer: string;
    evidence: string;
    languageNotice: string;
  }
> = {
  fr: {
    nav: ["Profil", "Recherche", "Mémoire", "Projet", "Parcours", "Preuves"],
    menu: "Menu", close: "Fermer", heroEyebrow: "Portfolio doctoral · Oujda, Maroc",
    heroTitle: "Relier les systèmes intelligents à une gouvernance plus traçable.",
    heroLead: "Parcours en audit, contrôle de gestion et systèmes d’information intelligents. Recherche appliquée sur l’IA documentaire et la gouvernance hospitalière.",
    researchCta: "Explorer mes travaux", contactCta: "Échanger sur un doctorat", verified: "preuves documentaires", phd: "Candidat au doctorat", scroll: "Faire défiler", dossier: "Dossier de recherche",
    profileTitle: "Une trajectoire entre gestion, données et terrain hospitalier.",
    profileLead: "Le profil associe une expérience au CHU Mohammed VI d’Oujda à un parcours en management des systèmes d’information intelligents, avec une attention constante à l’auditabilité et à la responsabilité des organisations.",
    readMemoir: "Lire le mémoire", researchTitle: "Axes de recherche", researchLead: "Des problèmes documentaires réels aux systèmes de décision responsables.", method: "Méthode", field: "Terrain", results: "Résultats",
    projectTitle: "SII-ML CHU : du document à une décision auditable.", projectLead: "Un projet de recherche appliquée sur le suivi intelligent de la commande publique hospitalière, articulant traitement documentaire, validation humaine et traçabilité.", modules: "Explorer le pipeline", trajectoryTitle: "Formation & expérience", credentialsTitle: "Certificats et engagements", credentialsLead: "Une sélection de preuves publiques ; les originaux sensibles restent disponibles sur demande.", filters: ["Tous", "Formation", "Engagement", "Distinction"], publicationsTitle: "Communications scientifiques", publicationsLead: "Travaux académiques et textes en cours, avec un statut toujours explicite.", manuscript: "Manuscrit / statut à vérifier", skillsTitle: "Méthodes et outils", contactTitle: "Ouvrir une discussion de recherche.", contactLead: "Pour une candidature doctorale, un projet de recherche appliquée ou une demande de documents vérifiés.", contactButton: "Écrire un message", print: "Imprimer le CV", available: "Disponible sur demande", private: "Document privé", footer: "Portfolio académique fondé sur des preuves documentaires.", evidence: "Preuve vérifiée", languageNotice: "Langue d’interface — ne reflète pas une compétence linguistique déclarée."
  },
  en: {
    nav: ["Profile", "Research", "Thesis", "Project", "Journey", "Evidence"],
    menu: "Menu", close: "Close", heroEyebrow: "PhD portfolio · Oujda, Morocco",
    heroTitle: "Connecting intelligent systems to more traceable governance.",
    heroLead: "A background in audit, management control and intelligent information systems. Applied research on document AI and hospital governance.",
    researchCta: "Explore my work", contactCta: "Discuss a PhD", verified: "documentary evidence", phd: "PhD applicant", scroll: "Scroll", dossier: "Research dossier",
    profileTitle: "A path across management, data and hospital practice.", profileLead: "This profile combines experience at Mohammed VI University Hospital in Oujda with training in intelligent information systems management, with a sustained focus on auditability and organisational accountability.", readMemoir: "Read the thesis", researchTitle: "Research areas", researchLead: "From real document challenges to responsible decision systems.", method: "Method", field: "Fieldwork", results: "Results",
    projectTitle: "SII-ML CHU: from document to auditable decision.", projectLead: "An applied research project on intelligent monitoring of hospital public procurement, combining document processing, human validation and traceability.", modules: "Explore the pipeline", trajectoryTitle: "Education & experience", credentialsTitle: "Certificates & engagement", credentialsLead: "A selection of public evidence; sensitive originals remain available on request.", filters: ["All", "Training", "Engagement", "Distinction"], publicationsTitle: "Scientific communications", publicationsLead: "Academic work and developing texts, with an explicit status at all times.", manuscript: "Manuscript / status to verify", skillsTitle: "Methods & tools", contactTitle: "Start a research conversation.", contactLead: "For a PhD application, applied research project or request for verified documents.", contactButton: "Write a message", print: "Print CV", available: "Available on request", private: "Private document", footer: "Academic portfolio grounded in documentary evidence.", evidence: "Verified evidence", languageNotice: "Interface language — not a statement of declared language proficiency."
  },
  ar: {
    nav: ["الملف", "البحث", "الأطروحة", "المشروع", "المسار", "الأدلة"],
    menu: "القائمة", close: "إغلاق", heroEyebrow: "ملف دكتوراه · وجدة، المغرب",
    heroTitle: "ربط الأنظمة الذكية بحوكمة أكثر قابلية للتتبع.",
    heroLead: "مسار في التدقيق ومراقبة التسيير وأنظمة المعلومات الذكية، مع بحث تطبيقي حول ذكاء الوثائق وحوكمة المستشفيات.",
    researchCta: "استكشاف الأعمال", contactCta: "مناقشة الدكتوراه", verified: "أدلة وثائقية", phd: "مترشح للدكتوراه", scroll: "مرّر", dossier: "ملف البحث",
    profileTitle: "مسار يجمع بين التسيير والبيانات والميدان الاستشفائي.", profileLead: "يجمع هذا الملف بين تجربة في المركز الاستشفائي الجامعي محمد السادس بوجدة وتكوين في تدبير أنظمة المعلومات الذكية، مع اهتمام دائم بقابلية التدقيق ومسؤولية المنظمات.", readMemoir: "قراءة المذكرة", researchTitle: "محاور البحث", researchLead: "من إشكالات الوثائق الواقعية إلى أنظمة قرار مسؤولة.", method: "المنهج", field: "الميدان", results: "النتائج",
    projectTitle: "SII-ML CHU: من الوثيقة إلى قرار قابل للتدقيق.", projectLead: "مشروع بحث تطبيقي حول التتبع الذكي للصفقات العمومية الاستشفائية، يجمع معالجة الوثائق والتحقق البشري وقابلية التتبع.", modules: "استكشاف المسار", trajectoryTitle: "التكوين والخبرة", credentialsTitle: "الشهادات والالتزامات", credentialsLead: "مجموعة من الأدلة العامة؛ تبقى الأصول الحساسة متاحة عند الطلب.", filters: ["الكل", "تكوين", "التزام", "تميّز"], publicationsTitle: "مساهمات علمية", publicationsLead: "أعمال أكاديمية ونصوص قيد التطوير، مع إظهار الحالة بوضوح.", manuscript: "مخطوط / الحالة تحتاج إلى تحقق", skillsTitle: "المناهج والأدوات", contactTitle: "ابدأ حواراً بحثياً.", contactLead: "لطلب الدكتوراه أو مشروع بحث تطبيقي أو وثائق موثقة.", contactButton: "اكتب رسالة", print: "طباعة السيرة", available: "متاح عند الطلب", private: "وثيقة خاصة", footer: "ملف أكاديمي يستند إلى أدلة وثائقية.", evidence: "دليل موثّق", languageNotice: "لغة الواجهة — لا تمثل تصريحاً بمستوى لغوي."
  },
  es: {
    nav: ["Perfil", "Investigación", "Memoria", "Proyecto", "Trayectoria", "Pruebas"],
    menu: "Menú", close: "Cerrar", heroEyebrow: "Portafolio doctoral · Oujda, Marruecos",
    heroTitle: "Conectar sistemas inteligentes con una gobernanza más trazable.",
    heroLead: "Trayectoria en auditoría, control de gestión y sistemas de información inteligentes. Investigación aplicada sobre IA documental y gobernanza hospitalaria.",
    researchCta: "Explorar mis trabajos", contactCta: "Hablar de doctorado", verified: "pruebas documentales", phd: "Candidato doctoral", scroll: "Desplazar", dossier: "Dossier de investigación",
    profileTitle: "Una trayectoria entre gestión, datos y práctica hospitalaria.", profileLead: "El perfil combina experiencia en el CHU Mohammed VI de Oujda con formación en gestión de sistemas de información inteligentes, con atención a la auditabilidad y la responsabilidad organizativa.", readMemoir: "Leer la memoria", researchTitle: "Líneas de investigación", researchLead: "De retos documentales reales a sistemas de decisión responsables.", method: "Método", field: "Campo", results: "Resultados",
    projectTitle: "SII-ML CHU: del documento a la decisión auditable.", projectLead: "Proyecto de investigación aplicada sobre el seguimiento inteligente de la contratación pública hospitalaria, que combina procesamiento documental, validación humana y trazabilidad.", modules: "Explorar el flujo", trajectoryTitle: "Formación y experiencia", credentialsTitle: "Certificados y compromisos", credentialsLead: "Una selección de pruebas públicas; los originales sensibles quedan disponibles bajo solicitud.", filters: ["Todo", "Formación", "Compromiso", "Distinción"], publicationsTitle: "Comunicaciones científicas", publicationsLead: "Trabajos académicos y textos en desarrollo, con un estado siempre explícito.", manuscript: "Manuscrito / estado por verificar", skillsTitle: "Métodos y herramientas", contactTitle: "Abrir una conversación de investigación.", contactLead: "Para una candidatura doctoral, un proyecto de investigación aplicada o una solicitud de documentos verificados.", contactButton: "Escribir un mensaje", print: "Imprimir CV", available: "Disponible bajo solicitud", private: "Documento privado", footer: "Portafolio académico basado en pruebas documentales.", evidence: "Prueba verificada", languageNotice: "Idioma de interfaz: no refleja una competencia lingüística declarada."
  },
  nl: {
    nav: ["Profiel", "Onderzoek", "Scriptie", "Project", "Loopbaan", "Bewijs"],
    menu: "Menu", close: "Sluiten", heroEyebrow: "Doctoraatsportfolio · Oujda, Marokko",
    heroTitle: "Intelligente systemen verbinden met beter traceerbaar bestuur.",
    heroLead: "Achtergrond in audit, managementcontrol en intelligente informatiesystemen. Toegepast onderzoek naar document-AI en ziekenhuisbestuur.",
    researchCta: "Mijn werk bekijken", contactCta: "Doctoraat bespreken", verified: "documentair bewijs", phd: "Doctoraatskandidaat", scroll: "Scroll", dossier: "Onderzoeksdossier",
    profileTitle: "Een traject tussen management, data en ziekenhuispraktijk.", profileLead: "Dit profiel combineert ervaring in het Mohammed VI Universitair Ziekenhuis in Oujda met opleiding in het beheer van intelligente informatiesystemen, met aandacht voor controleerbaarheid en organisatorische verantwoordelijkheid.", readMemoir: "Scriptie lezen", researchTitle: "Onderzoeksgebieden", researchLead: "Van reële documentuitdagingen naar verantwoorde beslissystemen.", method: "Methode", field: "Terrein", results: "Resultaten",
    projectTitle: "SII-ML CHU: van document naar controleerbare beslissing.", projectLead: "Een toegepast onderzoeksproject rond intelligente opvolging van ziekenhuisaanbestedingen, met documentverwerking, menselijke validatie en traceerbaarheid.", modules: "Pipeline bekijken", trajectoryTitle: "Opleiding en ervaring", credentialsTitle: "Certificaten en engagement", credentialsLead: "Een selectie van openbaar bewijs; gevoelige originelen zijn op aanvraag beschikbaar.", filters: ["Alles", "Opleiding", "Engagement", "Onderscheiding"], publicationsTitle: "Wetenschappelijke bijdragen", publicationsLead: "Academisch werk en teksten in ontwikkeling, steeds met een expliciete status.", manuscript: "Manuscript / status te verifiëren", skillsTitle: "Methoden en tools", contactTitle: "Start een onderzoeksgesprek.", contactLead: "Voor een doctoraatsaanvraag, een toegepast onderzoeksproject of een verzoek om geverifieerde documenten.", contactButton: "Bericht schrijven", print: "CV afdrukken", available: "Beschikbaar op aanvraag", private: "Privédocument", footer: "Academisch portfolio gebaseerd op documentair bewijs.", evidence: "Geverifieerd bewijs", languageNotice: "Interfacetaal — geen verklaring van taalvaardigheid."
  },
  de: {
    nav: ["Profil", "Forschung", "Abschlussarbeit", "Projekt", "Werdegang", "Nachweise"],
    menu: "Menü", close: "Schließen", heroEyebrow: "Promotionsportfolio · Oujda, Marokko",
    heroTitle: "Intelligente Systeme mit nachvollziehbarer Governance verbinden.",
    heroLead: "Erfahrung in Audit, Controlling und intelligenten Informationssystemen. Angewandte Forschung zu Dokumenten-KI und Krankenhaus-Governance.",
    researchCta: "Arbeiten entdecken", contactCta: "Promotion besprechen", verified: "dokumentarische Nachweise", phd: "Promotionsbewerber", scroll: "Scrollen", dossier: "Forschungsdossier",
    profileTitle: "Ein Weg zwischen Management, Daten und Krankenhauspraxis.", profileLead: "Das Profil verbindet Erfahrung am Universitätsklinikum Mohammed VI in Oujda mit einer Ausbildung im Management intelligenter Informationssysteme und einem Fokus auf Prüfbarkeit und organisationale Verantwortung.", readMemoir: "Abschlussarbeit lesen", researchTitle: "Forschungsfelder", researchLead: "Von realen Dokumentherausforderungen zu verantwortungsvollen Entscheidungssystemen.", method: "Methode", field: "Feld", results: "Ergebnisse",
    projectTitle: "SII-ML CHU: vom Dokument zur prüfbaren Entscheidung.", projectLead: "Ein angewandtes Forschungsprojekt zur intelligenten Nachverfolgung der öffentlichen Krankenhausbeschaffung, das Dokumentenverarbeitung, menschliche Validierung und Rückverfolgbarkeit verbindet.", modules: "Pipeline erkunden", trajectoryTitle: "Ausbildung und Erfahrung", credentialsTitle: "Zertifikate und Engagement", credentialsLead: "Eine Auswahl öffentlicher Nachweise; sensible Originale sind auf Anfrage verfügbar.", filters: ["Alle", "Weiterbildung", "Engagement", "Auszeichnung"], publicationsTitle: "Wissenschaftliche Beiträge", publicationsLead: "Akademische Arbeiten und Texte in Entwicklung – stets mit eindeutigem Status.", manuscript: "Manuskript / Status zu prüfen", skillsTitle: "Methoden und Werkzeuge", contactTitle: "Ein Forschungsgespräch beginnen.", contactLead: "Für eine Promotionsbewerbung, ein angewandtes Forschungsprojekt oder die Anfrage verifizierter Dokumente.", contactButton: "Nachricht schreiben", print: "CV drucken", available: "Auf Anfrage verfügbar", private: "Privates Dokument", footer: "Akademisches Portfolio auf Grundlage dokumentarischer Nachweise.", evidence: "Verifizierter Nachweis", languageNotice: "Sprache der Oberfläche – keine Erklärung über Sprachkenntnisse."
  }
};

const researchAxes = [
  { icon: Network, title: "Systèmes d’information intelligents", text: "Conception de systèmes qui articulent données, règles, apprentissage et validation humaine." },
  { icon: FileText, title: "IA documentaire", text: "OCR, extraction d’entités, classification et traitement de documents administratifs." },
  { icon: ShieldCheck, title: "Auditabilité", text: "Traçabilité, responsabilité réglementaire et journalisation des décisions." },
  { icon: Sparkles, title: "Transformation organisationnelle", text: "Recherche-intervention, adoption des outils et co-construction avec les acteurs." },
];

const pipeline = [
  { code: "M1", title: "OCR", text: "Lecture et pré-extraction des documents numérisés." },
  { code: "M2", title: "NLP", text: "Identification d’entités et analyse du texte extrait." },
  { code: "M3", title: "Classification", text: "Catégorisation documentaire et détection d’anomalies." },
  { code: "M4", title: "Validation", text: "Workflow humain à plusieurs niveaux de responsabilité." },
  { code: "M5", title: "Génération", text: "Production de documents et de rapports de suivi." },
  { code: "M6", title: "Audit", text: "Traçabilité cryptographique et journalisation des opérations." },
];

const credentials = [
  { category: "Formation", year: "2025", title: "Management de projet : de l’idée au projet", issuer: "Agence Universitaire de la Francophonie · IFIC", detail: "Objectifs SMART, structuration et transformation d’une idée en projet.", tint: "teal" },
  { category: "Engagement", year: "2025", title: "12e édition du Festival des sciences", issuer: "Fondation Omar Ibn Abdelaziz · Oujda", detail: "Participation en qualité d’animateur et organisateur, sous réserve de vérification finale.", tint: "paper" },
  { category: "Formation", year: "2024", title: "Styles et bonnes pratiques de management", issuer: "Agence Universitaire de la Francophonie · IFIC", detail: "Atelier de formation sur les rôles, styles de management et animation d’équipe.", tint: "ink" },
  { category: "Distinction", year: "À vérifier", title: "Participation à un hackathon", issuer: "Attestation présente dans le dossier", detail: "Statut et classement à confirmer avant toute communication publique.", tint: "sand" },
];

const timeline = [
  { date: "2024–2026", title: "Master d’excellence", place: "Management des Systèmes d’Information Intelligents · FSJES Oujda", tag: "Formation" },
  { date: "2019–aujourd’hui", title: "Audit interne & contrôle de gestion", place: "CHU Mohammed VI d’Oujda", tag: "Expérience" },
  { date: "2024", title: "Licence d’excellence", place: "Analyse économique et management des systèmes d’information · FSJES Oujda", tag: "Formation" },
  { date: "2016", title: "Brevet de technicien supérieur", place: "Gestion des entreprises · Lycée Mehdi Ben Barka, Oujda", tag: "Formation" },
];

const skills = [
  { title: "Recherche", items: ["Recherche-intervention", "Triangulation", "Entretiens", "Analyse documentaire"] },
  { title: "Données & IA", items: ["Python", "R / RStudio", "Machine Learning", "OCR & NLP"] },
  { title: "Gouvernance", items: ["Audit interne", "Contrôle de gestion", "Reporting", "Processus hospitaliers"] },
  { title: "Outils", items: ["HOSIX", "SPHINX", "SAGE", "Excel · Word · PowerPoint · Access"] },
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [credentialFilter, setCredentialFilter] = useState("Tous");
  const [selectedCredential, setSelectedCredential] = useState<(typeof credentials)[number] | null>(null);
  const [selectedModule, setSelectedModule] = useState(0);
  const t = copy[locale];
  const isRtl = locale === "ar";
  const visibleCredentials = useMemo(() => {
    const filterIndex = t.filters.indexOf(credentialFilter);
    const key = filterIndex === 1 ? "Formation" : filterIndex === 2 ? "Engagement" : filterIndex === 3 ? "Distinction" : "Tous";
    return key === "Tous" ? credentials : credentials.filter((credential) => credential.category === key);
  }, [credentialFilter, t.filters]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [locale, isRtl]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const navIds = ["profil", "recherche", "memoire", "projet", "parcours", "preuves"];

  return (
    <div className={isRtl ? "site-shell rtl" : "site-shell"}>
      <header className="topbar">
        <button className="brand" onClick={() => jump("top")} aria-label="Retour à l’accueil">
          <img src={monogram} alt="Monogramme CEM" />
          <span><strong>CHERKI</strong><em>EL MEHDI</em></span>
        </button>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {t.nav.map((label, index) => (
            <button key={label} onClick={() => jump(navIds[index])}>{label}</button>
          ))}
        </nav>
        <div className="topbar-actions">
          <div className="language-control" aria-label="Sélection de la langue">
            <Languages size={15} aria-hidden="true" />
            <select value={locale} onChange={(event) => { setLocale(event.target.value as Locale); setCredentialFilter(copy[event.target.value as Locale].filters[0]); }}>
              {localeOptions.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}
            </select>
          </div>
          <Button className="print-button" variant="outline" onClick={() => window.print()}><Printer size={15} /> {t.print}</Button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={t.menu}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label={t.menu}>
          <div className="mobile-menu-inner">
            <div className="menu-kicker">{t.dossier}</div>
            {t.nav.map((label, index) => <button key={label} onClick={() => jump(navIds[index])}>{String(index + 1).padStart(2, "0")} <span>{label}</span><ChevronRight size={17} /></button>)}
            <Button className="mobile-contact" onClick={() => jump("contact")}>{t.contactCta}<ArrowUpRight size={16} /></Button>
          </div>
        </div>
      )}

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={heroImage} alt="Dossiers de recherche et matérialité documentaire" />
          <div className="hero-overlay" />
          <div className="hero-content container">
            <div className="hero-meta"><span className="status-dot" /> {t.heroEyebrow}</div>
            <p className="hero-index">01—06 / <span>{t.dossier}</span></p>
            <h1 id="hero-title">{t.heroTitle}</h1>
            <p className="hero-lead">{t.heroLead}</p>
            <div className="hero-actions">
              <Button className="primary-action" onClick={() => jump("memoire")}>{t.researchCta} <ArrowDown size={17} /></Button>
              <Button className="secondary-action" variant="outline" onClick={() => jump("contact")}>{t.contactCta} <ArrowUpRight size={17} /></Button>
            </div>
          </div>
          <div className="hero-foot container">
            <span>{t.phd}</span><span className="hero-rule" /><span><ShieldCheck size={15} /> {t.verified}</span><button onClick={() => jump("profil")}>{t.scroll} <ArrowDown size={15} /></button>
          </div>
        </section>

        <section id="profil" className="section profile-section container" aria-labelledby="profile-heading">
          <aside className="section-marker"><span>01</span><p>{t.nav[0]}</p></aside>
          <div className="profile-grid">
            <div className="profile-heading-block">
              <p className="eyebrow"><CircleDot size={13} /> {t.evidence}</p>
              <h2 id="profile-heading">{t.profileTitle}</h2>
            </div>
            <div className="profile-copy">
              <p>{t.profileLead}</p>
              <div className="profile-note"><span>NOTE / 2026</span><p>Master d’excellence en Management des Systèmes d’Information Intelligents · Parcours documenté dans les CV, le mémoire et les lettres de recommandation.</p></div>
              <button className="text-link" onClick={() => jump("memoire")}>{t.readMemoir} <ArrowUpRight size={16} /></button>
            </div>
          </div>
        </section>

        <section id="recherche" className="section research-section" aria-labelledby="research-heading">
          <div className="container section-split">
            <aside className="section-marker"><span>02</span><p>{t.nav[1]}</p></aside>
            <div className="research-body">
              <div className="research-intro">
                <p className="eyebrow"><BookOpen size={13} /> {t.dossier}</p>
                <h2 id="research-heading">{t.researchTitle}</h2>
                <p>{t.researchLead}</p>
              </div>
              <div className="axis-grid">
                {researchAxes.map((axis, index) => {
                  const Icon = axis.icon;
                  return <article className="axis-card" key={axis.title}><span>0{index + 1}</span><Icon size={24} /><h3>{axis.title}</h3><p>{axis.text}</p></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="memoire" className="section memoir-section container" aria-labelledby="memoir-heading">
          <aside className="section-marker"><span>03</span><p>{t.nav[2]}</p></aside>
          <div className="memoir-layout">
            <div className="memoir-visual"><img src={researchImage} alt="Métaphore visuelle de recherche, traçabilité et intervention" /><div className="visual-caption">MÉMOIRE / SYSTÈMES INTELLIGENTS & GOUVERNANCE</div></div>
            <article className="memoir-content">
              <p className="eyebrow"><GraduationCap size={13} /> MÉMOIRE DE MASTER · 2026</p>
              <h2 id="memoir-heading">Machine Learning et gouvernance de la commande publique hospitalière.</h2>
              <p className="memoir-subtitle">Co-construction d’un système de suivi intelligent et auditable au CHU Mohammed VI d’Oujda.</p>
              <div className="memoir-stats">
                <div><strong>75</strong><span>{t.field}<br />bons de livraison</span></div>
                <div><strong>91,8%</strong><span>{t.results}<br />taux d’extraction</span></div>
                <div><strong>18</strong><span>{t.method}<br />entretiens</span></div>
                <div><strong>1,5M</strong><span>MAD/an<br />coûts cachés estimés</span></div>
              </div>
              <p className="memoir-footnote">Ces données sont présentées avec leur contexte de recherche : étude de cas, tests préliminaires et limites explicitement documentées dans le mémoire.</p>
            </article>
          </div>
        </section>

        <section id="projet" className="project-section" aria-labelledby="project-heading">
          <img className="project-image" src={projectImage} alt="Modèle abstrait d’un système de traitement documentaire intelligent" />
          <div className="project-overlay" />
          <div className="container project-inner">
            <aside className="section-marker inverse"><span>04</span><p>{t.nav[3]}</p></aside>
            <div className="project-copy">
              <p className="eyebrow inverse"><Network size={13} /> CASE STUDY / SII-ML CHU</p>
              <h2 id="project-heading">{t.projectTitle}</h2>
              <p>{t.projectLead}</p>
            </div>
            <div className="pipeline-shell">
              <div className="pipeline-title"><span>{t.modules}</span><strong>{pipeline[selectedModule].code} / {pipeline[selectedModule].title}</strong></div>
              <div className="pipeline-track">
                {pipeline.map((module, index) => <button className={selectedModule === index ? "module active" : "module"} key={module.code} onClick={() => setSelectedModule(index)}><span>{module.code}</span><b>{module.title}</b></button>)}
              </div>
              <p className="module-detail">{pipeline[selectedModule].text}</p>
              <div className="project-proof"><ShieldCheck size={15} /><span>Prototype académique · données brutes et documents hospitaliers non publiés</span></div>
            </div>
          </div>
        </section>

        <section id="parcours" className="section journey-section container" aria-labelledby="journey-heading">
          <aside className="section-marker"><span>05</span><p>{t.nav[4]}</p></aside>
          <div className="journey-content">
            <div className="journey-head"><h2 id="journey-heading">{t.trajectoryTitle}</h2><p>Une chronologie courte des étapes documentées, complétée par un CV téléchargeable sur demande.</p></div>
            <div className="timeline">
              {timeline.map((item, index) => <article className="timeline-item" key={item.title}><div className="timeline-dot"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-date">{item.date}<em>{item.tag}</em></div><div className="timeline-main"><h3>{item.title}</h3><p>{item.place}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="preuves" className="section credentials-section" aria-labelledby="credentials-heading">
          <div className="container section-split">
            <aside className="section-marker"><span>06</span><p>{t.nav[5]}</p></aside>
            <div className="credentials-body">
              <div className="credentials-intro"><p className="eyebrow"><CheckCircle2 size={13} /> {t.evidence}</p><h2 id="credentials-heading">{t.credentialsTitle}</h2><p>{t.credentialsLead}</p></div>
              <div className="credential-filters" role="tablist" aria-label="Filtres des attestations">
                {t.filters.map((filter) => <button key={filter} className={credentialFilter === filter ? "active" : ""} onClick={() => setCredentialFilter(filter)}>{filter}</button>)}
              </div>
              <div className="credential-grid">
                {visibleCredentials.map((credential) => <button className={`credential-card ${credential.tint}`} key={credential.title} onClick={() => setSelectedCredential(credential)}><div className="credential-top"><span>{credential.category}</span><em>{credential.year}</em></div><div className="credential-seal"><CheckCircle2 size={20} /></div><h3>{credential.title}</h3><p>{credential.issuer}</p><span className="credential-link">{t.available} <ArrowUpRight size={14} /></span></button>)}
              </div>
            </div>
          </div>
        </section>

        <section className="publications-section container" aria-labelledby="publications-heading">
          <div className="publication-paper">
            <div className="paper-top"><span>07 / RESEARCH NOTE</span><span>{t.manuscript}</span></div>
            <div className="paper-body"><div><p className="eyebrow"><FileText size={13} /> LURIGOR · FSJES OUJDA</p><h2 id="publications-heading">{t.publicationsTitle}</h2><p>{t.publicationsLead}</p></div><article><p className="article-type">MANUSCRIT SCIENTIFIQUE</p><h3>De l’opacité à la transparence : la modernisation des fondations comptables comme prérequis à la politique financière du CHU Mohammed VI d’Oujda.</h3><p>Management · gouvernance · économie de la santé</p><span className="text-link static">{t.private} / statut éditorial à confirmer</span></article></div>
          </div>
        </section>

        <section className="skills-section" aria-labelledby="skills-heading"><div className="container skills-layout"><div><p className="eyebrow"><Sparkles size={13} /> PRATIQUE & MÉTHODES</p><h2 id="skills-heading">{t.skillsTitle}</h2><p className="skills-intro">Les compétences sont présentées avec leur contexte : projet, formation ou expérience professionnelle. Elles ne sont pas exprimées par des jauges artificielles.</p></div><div className="skills-grid">{skills.map((skill) => <article key={skill.title}><h3>{skill.title}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

        <section id="contact" className="contact-section container" aria-labelledby="contact-heading">
          <div className="contact-card"><div><p className="eyebrow inverse"><Mail size={13} /> CONTACT</p><h2 id="contact-heading">{t.contactTitle}</h2><p>{t.contactLead}</p></div><div className="contact-actions"><a href="mailto:cherkielmehdi@outlook.com" className="email-link">cherkielmehdi@outlook.com <ArrowUpRight size={18} /></a><Button onClick={() => window.location.href = "mailto:cherkielmehdi@outlook.com?subject=Discussion%20doctorale"}>{t.contactButton}<Mail size={16} /></Button><p><Globe2 size={15} /> {t.languageNotice}</p></div></div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div className="footer-brand"><img src={monogram} alt="" /><span>CHERKI EL MEHDI</span></div><p>{t.footer}</p><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button></div></footer>

      <Dialog open={!!selectedCredential} onOpenChange={(open) => !open && setSelectedCredential(null)}>
        <DialogContent className="credential-dialog">
          {selectedCredential && <><DialogHeader><span className="dialog-kicker">{selectedCredential.category} · {selectedCredential.year}</span><DialogTitle>{selectedCredential.title}</DialogTitle><DialogDescription>{selectedCredential.issuer}</DialogDescription></DialogHeader><div className="dialog-proof"><ShieldCheck size={17} /><p>{selectedCredential.detail}</p></div><div className="dialog-private"><span>{t.private}</span><p>La miniature, le scan complet, les signatures, codes et identifiants ne sont pas affichés publiquement. Une preuve peut être transmise dans le cadre d’une candidature.</p></div></>}
        </DialogContent>
      </Dialog>
    </div>
  );
}

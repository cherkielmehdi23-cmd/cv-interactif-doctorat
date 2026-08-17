/* Style reminder: Research IDE — terminal de contact clair, crédible et direct, avec des coordonnées vérifiées issues du CV. */
import { ArrowUpRight, FileText, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Locale, messages } from "@/lib/archiveData";
import { useContentTranslation } from "@/lib/translation";

const contactDetails = [
  { id:"email", value:"cherkielmehdi@outlook.com", href:"mailto:cherkielmehdi@outlook.com?subject=Candidature%20doctorale%20%E2%80%94%20prise%20de%20contact", icon:Mail },
  { id:"phone", value:"+212 6 43 61 75 45", href:"tel:+212643617545", icon:Phone },
  { id:"location", value:"Oujda, Maroc", href:"https://www.google.com/maps/search/?api=1&query=Oujda%2C%20Morocco", icon:MapPin, external:true },
];

export default function Contact({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const localized = useContentTranslation(locale, [
    { key:"contact-title", text:"Contact académique" },
    { key:"contact-lead", text:"Pour un échange académique, une demande de pièces complémentaires ou la préparation d’un dossier de candidature doctorale, vous pouvez me contacter directement." },
    { key:"contact-panel-title", text:"Coordonnées essentielles" },
    { key:"contact-email-label", text:"E-mail" },
    { key:"contact-phone-label", text:"Téléphone" },
    { key:"contact-location-label", text:"Localisation" },
    { key:"contact-panel-note", text:"Les coordonnées ci-dessous proviennent du CV fourni. L’adresse postale complète n’est pas affichée afin de préserver la confidentialité du dossier public." },
    { key:"contact-mail-action", text:"Écrire un e-mail" },
    { key:"contact-phone-action", text:"Appeler" },
    { key:"contact-availability-title", text:"Échange et transmission de pièces" },
    { key:"contact-availability-body", text:"Les documents complémentaires, références et justificatifs à accès contrôlé peuvent être communiqués sur demande, dans le cadre d’une candidature ou d’un échange académique identifié." },
    { key:"contact-back", text:"Consulter le dossier documentaire" },
  ]);

  return <main className="contact-page">
    <section className="contact-hero">
      <div className="contact-copy">
        <p className="module-path">// profile/contact.channel</p>
        <p className="crumb">{t.contact} / DIRECT.LINE</p>
        <h1>{localized("contact-title", "Contact académique")}</h1>
        <p className="contact-lead">{localized("contact-lead", "Pour un échange académique, une demande de pièces complémentaires ou la préparation d’un dossier de candidature doctorale, vous pouvez me contacter directement.")}</p>
        <div className="contact-actions">
          <a href={contactDetails[0].href}><Send size={15} /> {localized("contact-mail-action", "Écrire un e-mail")}</a>
          <a className="outline" href={contactDetails[1].href}><Phone size={15} /> {localized("contact-phone-action", "Appeler")}</a>
        </div>
      </div>
      <aside className="contact-terminal" aria-label="Coordonnées de contact">
        <header><span>contact.metadata</span><i>INDEXED</i></header>
        <div className="contact-terminal-lines"><span><b>SOURCE</b><i>CV FR / CV EN</i></span><span><b>OBJECT</b><i>CANDIDATURE DOCTORALE</i></span><span><b>CHANNEL</b><i>CONTACT DIRECT</i></span><span><b>LOCATION</b><i>OUJDA, MA</i></span></div>
        <footer><ShieldCheck size={15} /> SOURCE VÉRIFIÉE / PUBLIC</footer>
      </aside>
    </section>

    <section className="contact-directory">
      <div className="contact-directory-heading"><p className="crumb">01 / DIRECTORY</p><h2>{localized("contact-panel-title", "Coordonnées essentielles")}</h2></div>
      <div className="contact-details">{contactDetails.map(detail => {
        const Icon = detail.icon;
        const label = localized(`contact-${detail.id}-label`, { email:"E-mail", phone:"Téléphone", location:"Localisation" }[detail.id] ?? "Contact");
        return <a className="contact-detail" key={detail.id} href={detail.href} {...(detail.external ? { target:"_blank", rel:"noreferrer" } : {})}>
          <div><Icon size={20} /><span>{label}</span></div>
          <p>{detail.value}</p><small>SOURCE / CV · PUBLIC</small><ArrowUpRight size={17} />
        </a>;
      })}</div>
      <p className="contact-privacy-note"><ShieldCheck size={15} /> {localized("contact-panel-note", "Les coordonnées ci-dessous proviennent du CV fourni. L’adresse postale complète n’est pas affichée afin de préserver la confidentialité du dossier public.")}</p>
    </section>

    <section className="contact-availability">
      <div><p className="crumb inverse">02 / CONTROLLED.EXCHANGE</p><h2>{localized("contact-availability-title", "Échange et transmission de pièces")}</h2></div>
      <div><p>{localized("contact-availability-body", "Les documents complémentaires, références et justificatifs à accès contrôlé peuvent être communiqués sur demande, dans le cadre d’une candidature ou d’un échange académique identifié.")}</p><Link href="/registre-des-pieces"><FileText size={15} /> {localized("contact-back", "Consulter le dossier documentaire")}</Link></div>
    </section>
  </main>;
}

/* Style reminder: Research IDE — formulaire de contact structuré, coordonnées vérifiées et message préparé pour un échange académique. */
import { ArrowUpRight, FileText, Linkedin, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import { Locale, messages } from "@/lib/archiveData";
import { useContentTranslation } from "@/lib/translation";

const contactDetails = [
  { id:"email", value:"cherkielmehdi@outlook.com", href:"mailto:cherkielmehdi@outlook.com?subject=Candidature%20doctorale%20%E2%80%94%20prise%20de%20contact", icon:Mail },
  { id:"phone", value:"+212 6 43 61 75 45", href:"tel:+212643617545", icon:Phone },
  { id:"linkedin", value:"linkedin.com/in/cherki-elmehdi-2babb5336", href:"https://www.linkedin.com/in/cherki-elmehdi-2babb5336/", icon:Linkedin, external:true },
  { id:"location", value:"Oujda, Maroc", href:"https://www.google.com/maps/search/?api=1&query=Oujda%2C%20Morocco", icon:MapPin, external:true },
];

export default function Contact({ locale }: { locale: Locale }) {
  const t = messages[locale];
  const [form, setForm] = useState({ name:"", email:"", subject:"Candidature doctorale — prise de contact", message:"" });
  const localized = useContentTranslation(locale, [
    { key:"contact-title", text:"Contact" },
    { key:"contact-lead", text:"Préparez une transmission liée au dossier doctoral : le message est remis à votre application e-mail, sans stockage sur cette interface." },
    { key:"contact-form-header", text:"TRANSMISSION / REQUEST.DRAFT" },
    { key:"contact-form-status", text:"CHANNEL / CONTROLLED" },
    { key:"contact-form-name", text:"Votre nom" },
    { key:"contact-form-email", text:"Votre e-mail" },
    { key:"contact-form-subject", text:"Objet" },
    { key:"contact-form-message", text:"Votre message" },
    { key:"contact-form-submit", text:"Préparer l’e-mail" },
    { key:"contact-form-note", text:"Le formulaire ouvre votre application e-mail avec votre message prérempli ; aucune donnée n’est stockée sur ce site." },
    { key:"contact-panel-title", text:"Registre des canaux" },
    { key:"contact-email-label", text:"E-mail" },
    { key:"contact-phone-label", text:"Téléphone" },
    { key:"contact-linkedin-label", text:"Profil LinkedIn" },
    { key:"contact-location-label", text:"Localisation" },
    { key:"contact-panel-note", text:"Les coordonnées ci-dessous proviennent du CV fourni. L’adresse postale complète n’est pas affichée afin de préserver la confidentialité du dossier public." },
    { key:"contact-mail-action", text:"Écrire un e-mail" },
    { key:"contact-phone-action", text:"Appeler" },
    { key:"contact-availability-title", text:"Échange et transmission de pièces" },
    { key:"contact-availability-body", text:"Les documents complémentaires, références et justificatifs à accès contrôlé peuvent être communiqués sur demande, dans le cadre d’une candidature ou d’un échange académique identifié." },
    { key:"contact-back", text:"Consulter le dossier documentaire" },
  ]);
  const submitMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `Nom : ${form.name}\nE-mail : ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:cherkielmehdi@outlook.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return <main className="contact-page">
    <section className="contact-hero">
      <div className="contact-copy">
        <p className="module-path">// profile/contact.channel</p>
        <p className="crumb">{t.contact} / DIRECT.LINE</p>
        <h1>{localized("contact-title", "Contact")}</h1>
        <p className="contact-lead">{localized("contact-lead", "Préparez une transmission liée au dossier doctoral : le message est remis à votre application e-mail, sans stockage sur cette interface.")}</p>
        <form className="contact-message-form" onSubmit={submitMessage}>
          <div className="contact-form-header"><span>{localized("contact-form-header", "TRANSMISSION / REQUEST.DRAFT")}</span><i>{localized("contact-form-status", "CHANNEL / CONTROLLED")}</i></div>
          <div className="contact-form-row"><label><span>{localized("contact-form-name", "Votre nom")}</span><input required value={form.name} onChange={event => setForm({ ...form, name:event.target.value })} /></label><label><span>{localized("contact-form-email", "Votre e-mail")}</span><input required type="email" value={form.email} onChange={event => setForm({ ...form, email:event.target.value })} /></label></div>
          <label><span>{localized("contact-form-subject", "Objet")}</span><input required value={form.subject} onChange={event => setForm({ ...form, subject:event.target.value })} /></label>
          <label><span>{localized("contact-form-message", "Votre message")}</span><textarea required value={form.message} onChange={event => setForm({ ...form, message:event.target.value })} /></label>
          <div className="contact-form-submit"><button type="submit"><Send size={15} /> {localized("contact-form-submit", "Préparer l’e-mail")}</button><small>{localized("contact-form-note", "Le formulaire ouvre votre application e-mail avec votre message prérempli ; aucune donnée n’est stockée sur ce site.")}</small></div>
        </form>
      </div>
      <aside className="contact-terminal" aria-label="Coordonnées de contact">
        <header><span>contact.metadata</span><i>VERIFIED</i></header>
        <div className="contact-terminal-lines"><span><b>SOURCE</b><i>CV FR / CV EN</i></span><span><b>OBJECT</b><i>CANDIDATURE DOCTORALE</i></span><span><b>CHANNEL</b><i>CONTACT DIRECT</i></span><span><b>LOCATION</b><i>OUJDA, MA</i></span></div>
        <footer><ShieldCheck size={15} /> SOURCE / CV · ACCESS / PUBLIC</footer>
      </aside>
    </section>

    <section className="contact-directory">
      <div className="contact-directory-heading"><p className="crumb">01 / CHANNEL.REGISTRY</p><h2>{localized("contact-panel-title", "Registre des canaux")}</h2></div>
      <div className="contact-details">{contactDetails.map(detail => {
        const Icon = detail.icon;
        const label = localized(`contact-${detail.id}-label`, { email:"E-mail", phone:"Téléphone", linkedin:"Profil LinkedIn", location:"Localisation" }[detail.id] ?? "Contact");
        return <a className="contact-detail" key={detail.id} href={detail.href} {...(detail.external ? { target:"_blank", rel:"noreferrer" } : {})}>
          <div><Icon size={20} /><span>{label}</span></div>
          <p>{detail.value}</p><small>TYPE / {detail.id.toUpperCase()} · VERIFIED / CV SOURCE</small><ArrowUpRight size={17} />
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

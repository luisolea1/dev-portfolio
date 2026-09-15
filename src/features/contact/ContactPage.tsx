import { profile } from '../profile/profile.data'
import './ContactPage.css'

export function ContactPage() {
  const channels = [
    { label: 'Email', value: profile.email, url: profile.email ? `mailto:${profile.email}` : null, placeholder: '[EMAIL]', external: false },
    { label: 'LinkedIn', value: profile.linkedInUrl, url: profile.linkedInUrl, placeholder: '[PERFIL DE LINKEDIN]', external: true },
    { label: 'GitHub', value: profile.githubUrl, url: profile.githubUrl, placeholder: '[PERFIL DE GITHUB]', external: true },
  ]

  return (
    <div className="contact-page container">
      <header className="page-heading">
        <p className="page-heading__eyebrow">Contacto</p>
        <h1 className="page-heading__title">Conéctate conmigo<span className="contact-page__dot">.</span></h1>
      </header>
      <dl className="contact-page__channels">
        {channels.map((channel) => <div className="contact-page__channel" key={channel.label}>
          <dt className="contact-page__label">{channel.label.toLowerCase()} :</dt>
          <dd className="contact-page__value">
            {channel.url ? <a className="contact-page__link" href={channel.url} target={channel.external ? '_blank' : undefined} rel={channel.external ? 'noreferrer' : undefined}>{channel.value} <span aria-hidden="true">↗</span></a> : <><span className="pending-field">{channel.placeholder}</span><span className="contact-page__pending">Pendiente de completar</span></>}
          </dd>
        </div>)}
      </dl>
    </div>
  )
}

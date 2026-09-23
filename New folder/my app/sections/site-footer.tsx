import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { contactInfo } from '@/constants/site';

const footerLinks = [
  { key: 'home', href: '#home' },
  { key: 'aboutUs', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'team', href: '#team' },
  { key: 'vision', href: '#vision' },
  { key: 'contact', href: '#contact' },
] as const;

export function SiteFooter() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navigation');
  const contact = useTranslations('Contact');

  return (
    <footer className="bg-slate-950 pt-12 text-slate-300">
      <div className="container-site grid gap-9 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-white">
            <span dir="ltr">
              <span className="text-red-400">MEGA</span> POWER
            </span>
          </p>
          <p className="mt-4 text-sm leading-6">{t('tagline')}</p>
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-white">
            {t('quickLinks')}
          </h3>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((link) => (
              <a
                className="text-sm hover:text-white"
                href={link.href}
                key={link.key}
              >
                {nav(link.key)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-white">{t('contact')}</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
              <span dir="ltr">{contactInfo.phone}</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="shrink-0" />
              <span dir="ltr">{contactInfo.email}</span>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} className="shrink-0" />
              {contact('address')}
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-white">{t('follow')}</h3>
          <div className="mt-4 flex gap-3">
            <a
              className="bg-primary rounded-full p-2 text-white"
              href="#contact"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              className="bg-primary rounded-full p-2 text-white"
              href="#contact"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        {t('copyright', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}

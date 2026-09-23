import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { imageCredits, navItems } from '@/lib/site';

export function SiteFooter() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navigation');
  const brand = useTranslations('Brand');
  const contact = useTranslations('Contact');
  return (
    <footer className="bg-forest-dark text-white/70">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="bg-copper grid size-11 place-items-center rounded-br-2xl text-sm font-black text-white">
              DA
            </span>
            <div>
              <strong className="block text-sm text-white">
                {brand('name')}
              </strong>
              <span className="text-[10px] font-bold">
                {brand('descriptor')}
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7">{t('tagline')}</p>
        </div>
        <div>
          <h3 className="text-xs font-extrabold text-white">
            {t('navigation')}
          </h3>
          <div className="mt-4 grid gap-2.5">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="hover:text-copper text-sm transition"
              >
                {nav(item)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-extrabold text-white">{t('services')}</h3>
          <div className="mt-4 grid gap-2.5 text-sm">
            <a href="#services">{t('electrical')}</a>
            <a href="#services">{t('fire')}</a>
            <a href="#services">{t('maintenance')}</a>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-extrabold text-white">{t('contact')}</h3>
          <div className="mt-4 grid gap-3 text-sm">
            <p className="flex gap-2">
              <Phone size={16} className="text-copper shrink-0" />
              <span dir="ltr">{contact('phone')}</span>
            </p>
            <p className="flex gap-2">
              <Mail size={16} className="text-copper shrink-0" />
              <span dir="ltr">{contact('email')}</span>
            </p>
            <p className="flex gap-2">
              <MapPin size={16} className="text-copper shrink-0" />
              {contact('address')}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="shell flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <details className="relative">
            <summary className="cursor-pointer">{t('credits')}</summary>
            <div className="sm:text-ink mt-2 grid gap-1 sm:absolute sm:end-0 sm:bottom-6 sm:w-52 sm:rounded-xl sm:bg-white sm:p-3">
              {imageCredits.map(([name, url]) => (
                <a key={url} href={url} target="_blank" rel="noreferrer">
                  {name} / Unsplash
                </a>
              ))}
            </div>
          </details>
        </div>
      </div>
    </footer>
  );
}

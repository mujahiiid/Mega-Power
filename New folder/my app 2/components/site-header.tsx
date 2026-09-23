'use client';

import { Menu, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { navItems } from '@/lib/site';

function Brand() {
  const t = useTranslations('Brand');
  return (
    <a href="#home" className="focus-ring flex items-center gap-3 rounded-sm">
      <span className="bg-forest grid size-11 place-items-center rounded-br-2xl text-sm font-black text-white">
        DA
      </span>
      <span className="leading-tight">
        <strong className="text-ink block text-sm tracking-[.08em]">
          {t('name')}
        </strong>
        <span className="text-copy block text-[10px] font-bold">
          {t('descriptor')}
        </span>
      </span>
    </a>
  );
}

function LanguageSwitch() {
  const locale = useLocale();
  const t = useTranslations('Navigation');
  return (
    <div
      className="border-forest/15 flex rounded-full border p-1 text-[11px] font-extrabold"
      dir="ltr"
      aria-label={t('language')}
    >
      <Link
        href="/"
        locale="en"
        aria-label={t('english')}
        className={`rounded-full px-2.5 py-1 ${locale === 'en' ? 'bg-forest text-white' : 'text-forest'}`}
      >
        EN
      </Link>
      <Link
        href="/"
        locale="ar"
        aria-label={t('arabic')}
        className={`rounded-full px-2.5 py-1 ${locale === 'ar' ? 'bg-forest text-white' : 'text-forest'}`}
      >
        AR
      </Link>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Navigation');
  return (
    <header className="border-forest/10 bg-cream/95 sticky top-0 z-50 border-b backdrop-blur-lg">
      <nav className="shell flex h-20 items-center justify-between">
        <Brand />
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="focus-ring text-ink hover:text-copper rounded-sm text-xs font-extrabold transition"
            >
              {t(item)}
            </a>
          ))}
          <LanguageSwitch />
          <a
            href="#contact"
            className="focus-ring bg-copper rounded-full px-5 py-3 text-xs font-extrabold text-white transition hover:brightness-90"
          >
            {t('quote')}
          </a>
        </div>
        <button
          type="button"
          className="focus-ring text-forest rounded-lg p-2 lg:hidden"
          aria-label={t('toggle')}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-nav"
          className="border-forest/10 bg-cream border-t px-4 pb-5 lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="text-ink border-forest/10 block border-b py-3 text-sm font-bold"
            >
              {t(item)}
            </a>
          ))}
          <div className="mt-4 flex items-center justify-between gap-3">
            <LanguageSwitch />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="bg-copper rounded-full px-4 py-2.5 text-xs font-extrabold text-white"
            >
              {t('quote')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

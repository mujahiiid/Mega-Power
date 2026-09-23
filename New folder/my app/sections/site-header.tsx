'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';
import logo from '../src/assets/logo.jpg';

const links = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'team', href: '#team' },
  { key: 'vision', href: '#vision' },
  { key: 'contact', href: '#contact' },
] as const;

function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('Navigation');

  return (
    <div
      className="text-heading flex items-center gap-1 rounded-md border px-2 py-1.5 text-xs font-bold"
      dir="ltr"
      role="group"
      aria-label={t('language')}
    >
      <Link
        href="/"
        locale="en"
        lang="en"
        aria-label={t('english')}
        aria-current={locale === 'en' ? 'page' : undefined}
        className={
          locale === 'en' ? 'text-primary px-1' : 'hover:text-accent px-1'
        }
      >
        EN
      </Link>
      <span className="text-slate-300" aria-hidden="true">
        /
      </span>
      <Link
        href="/"
        locale="ar"
        lang="ar"
        aria-label={t('arabic')}
        aria-current={locale === 'ar' ? 'page' : undefined}
        className={
          locale === 'ar' ? 'text-primary px-1' : 'hover:text-accent px-1'
        }
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-site flex h-18 items-center justify-between md:h-20">
        <Image src={logo} className="h-[80px] w-[100px]" alt="Mega Power" />
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              className="text-heading hover:text-accent text-xs font-bold transition"
              href={link.href}
              key={link.key}
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageSwitcher />
          <a href="#contact">
            <Button variant="secondary" className="px-4 py-2.5 text-xs">
              <Phone size={14} /> {t('getInTouch')}
            </Button>
          </a>
        </div>
        <button
          className="text-primary rounded-lg p-2 lg:hidden"
          aria-label={t('toggle')}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-navigation"
          className="border-t bg-white px-4 py-3 lg:hidden"
        >
          {links.map((link) => (
            <a
              className="text-heading block py-3 text-sm font-bold"
              onClick={() => setOpen(false)}
              href={link.href}
              key={link.key}
            >
              {t(link.key)}
            </a>
          ))}
          <div className="mt-2 flex items-center justify-between gap-3">
            <LanguageSwitcher />
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button variant="secondary" className="text-xs">
                <Phone size={15} /> {t('getInTouch')}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import logo from '../src/assets/logo.jpg';
import Image from 'next/image';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Vision', href: '#vision' },
  { label: 'Contact Us', href: '#contact' },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-site flex h-18 items-center justify-between md:h-20">
        <Image src={logo} className='w-[100px] h-[80px]' alt='logo'/>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              className="text-heading hover:text-accent text-xs font-bold transition"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
          <button className="flex items-center gap-1 rounded-md border px-3 py-2 text-xs font-bold">
            EN <ChevronDown size={13} />
          </button>
          <a href="#contact">
            <Button variant="secondary" className="px-4 py-2.5 text-xs">
              <Phone size={14} /> Get In Touch
            </Button>
          </a>
        </div>
        <button
          className="text-primary rounded-lg p-2 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <a
              className="text-heading block py-3 text-sm font-bold"
              onClick={() => setOpen(false)}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <Button variant="secondary" className="mt-2 w-full">
              <Phone size={15} /> Get In Touch
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}

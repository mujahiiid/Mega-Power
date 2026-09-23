import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { About } from '@/sections/about';
import { Clients } from '@/sections/clients';
import { Contact } from '@/sections/contact';
import { Hero } from '@/sections/hero';
import { Services } from '@/sections/services';
import { SiteFooter } from '@/sections/site-footer';
import { SiteHeader } from '@/sections/site-header';
import { Team } from '@/sections/team';
import { Vision } from '@/sections/vision';
import { WhyChooseUs } from '@/sections/why-choose-us';
import { routing } from '@/i18n/routing';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Clients />
        <Team />
        <Vision />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/reveal';
import { QuoteForm } from '@/components/quote-form';
import { capabilities, engagements, sectors, services } from '@/lib/site';

const steps = ['survey', 'proposal', 'delivery', 'handover'] as const;

export function HomeContent() {
  const locale = useLocale();
  const hero = useTranslations('Hero');
  const about = useTranslations('About');
  const serviceText = useTranslations('Services');
  const sectorText = useTranslations('Sectors');
  const work = useTranslations('Work');
  const process = useTranslations('Process');
  const contact = useTranslations('Contact');
  const arrowClass = locale === 'ar' ? '-scale-x-100' : undefined;

  return (
    <main>
      <section id="home" className="bg-forest overflow-hidden text-white">
        <div className="shell grid min-h-[680px] items-stretch lg:grid-cols-[1.04fr_.96fr]">
          <div className="flex items-center py-20 lg:py-24">
            <Reveal>
              <p className="text-copper text-xs font-extrabold tracking-[.18em]">
                {hero('eyebrow')}
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl leading-[1.05] font-black tracking-tight sm:text-5xl lg:text-7xl">
                {hero('title')}{' '}
                <span className="text-sand block">{hero('highlight')}</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/70 lg:text-lg">
                {hero('description')}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-copper focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-extrabold text-white"
                >
                  {hero('primary')}
                  <ArrowUpRight size={18} className={arrowClass} />
                </a>
                <a
                  href="#services"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-extrabold text-white"
                >
                  {hero('secondary')}
                  <ArrowDown size={18} />
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[430px] lg:min-h-full">
            <Image
              src="/images/hero.jpg"
              alt="Industrial electrical control equipment"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="from-forest from-forest/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent lg:bg-gradient-to-r" />
            <div className="absolute end-5 bottom-5 max-w-sm rounded-2xl border border-white/15 bg-black/45 p-5 backdrop-blur-md sm:end-8 sm:bottom-8">
              <p className="text-copper text-[10px] font-extrabold tracking-[.16em]">
                {hero('panelLabel')}
              </p>
              <h2 className="mt-2 text-xl font-extrabold">
                {hero('panelTitle')}
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/70">
                {hero('panelText')}
              </p>
            </div>
          </div>
        </div>
        <div className="shell grid border-t border-white/10 sm:grid-cols-3">
          {capabilities.map(({ id, icon: Icon }) => (
            <div
              key={id}
              className="flex items-center gap-3 border-white/10 px-1 py-5 sm:border-e sm:px-5"
            >
              <span className="bg-copper/15 text-copper grid size-10 place-items-center rounded-full">
                <Icon size={19} />
              </span>
              <span className="text-sm font-bold">
                {hero(`capabilities.${id}`)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-pad bg-cream">
        <div className="shell grid items-center gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[80px] rounded-br-[80px]">
              <Image
                src="/images/engineer.jpg"
                alt={about('imageAlt')}
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
              />
              <div className="border-copper/60 absolute inset-5 rounded-t-[65px] rounded-br-[65px] border" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow">{about('eyebrow')}</p>
            <h2 className="text-ink mt-4 max-w-2xl text-3xl leading-tight font-black sm:text-5xl">
              {about('title')}
            </h2>
            <div className="text-copy mt-7 grid gap-5 text-base leading-8">
              <p>{about('textOne')}</p>
              <p>{about('textTwo')}</p>
            </div>
            <p className="border-copper text-forest mt-7 border-s-4 bg-white px-5 py-4 text-sm font-bold">
              {about('note')}
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-pad bg-white">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">{serviceText('eyebrow')}</p>
                <h2 className="text-ink mt-4 max-w-2xl text-3xl font-black sm:text-5xl">
                  {serviceText('title')}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7">
                {serviceText('intro')}
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, icon: Icon, image }, index) => (
              <Reveal key={id} delay={(index % 3) * 0.06}>
                <article className="group border-forest/10 h-full overflow-hidden rounded-[24px] border bg-[#fbfaf7]">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="bg-forest absolute start-5 bottom-0 grid size-12 translate-y-1/2 place-items-center rounded-xl text-white">
                      <Icon size={21} />
                    </span>
                  </div>
                  <div className="flex min-h-52 flex-col p-6 pt-10">
                    <h3 className="text-ink text-lg font-extrabold">
                      {serviceText(`items.${id}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-7">
                      {serviceText(`items.${id}.text`)}
                    </p>
                    <a
                      href="#contact"
                      className="text-copper mt-auto flex w-fit items-center gap-1 pt-5 text-xs font-extrabold"
                    >
                      {serviceText('learn')}
                      <ArrowUpRight size={16} className={arrowClass} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sectors" className="section-pad bg-forest-dark text-white">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">{sectorText('eyebrow')}</p>
            <div className="mt-4 grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
              <h2 className="max-w-3xl text-3xl font-black sm:text-5xl">
                {sectorText('title')}
              </h2>
              <p className="self-end text-sm leading-7 text-white/65">
                {sectorText('intro')}
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map(({ id, icon: Icon }) => (
              <div
                key={id}
                className="bg-forest-dark hover:bg-forest p-6 transition"
              >
                <Icon className="text-copper" size={28} />
                <p className="mt-8 text-sm font-extrabold">
                  {sectorText(`items.${id}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section-pad bg-cream">
        <div className="shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">{work('eyebrow')}</p>
              <h2 className="text-ink mt-4 text-3xl font-black sm:text-5xl">
                {work('title')}
              </h2>
              <p className="mt-5 text-sm leading-7">{work('intro')}</p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {engagements.map((id, index) => (
              <Reveal key={id} delay={index * 0.06}>
                <article className="border-forest/10 group grid gap-5 rounded-[22px] border bg-white p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <span className="text-copper text-4xl font-black" dir="ltr">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-copper text-[10px] font-extrabold tracking-[.14em]">
                      {work('scope')} • {work(`items.${id}.category`)}
                    </p>
                    <h3 className="text-ink mt-2 text-xl font-extrabold">
                      {work(`items.${id}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-7">
                      {work(`items.${id}.text`)}
                    </p>
                  </div>
                  <ArrowUpRight
                    className={`text-forest group-hover:text-copper transition ${arrowClass ?? ''}`}
                  />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">{process('eyebrow')}</p>
            <h2 className="text-ink mt-4 max-w-2xl text-3xl font-black sm:text-5xl">
              {process('title')}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step} className="border-copper/30 border-t pt-5">
                <span className="text-copper text-xs font-black" dir="ltr">
                  {process(`steps.${step}.number`)}
                </span>
                <h3 className="text-ink mt-8 text-lg font-extrabold">
                  {process(`steps.${step}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-7">
                  {process(`steps.${step}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-sand/55">
        <div className="shell grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
          <Reveal>
            <p className="eyebrow">{contact('eyebrow')}</p>
            <h2 className="text-ink mt-4 text-3xl font-black sm:text-5xl">
              {contact('title')}
            </h2>
            <p className="mt-5 max-w-lg leading-8">{contact('intro')}</p>
            <div className="mt-8 grid gap-4 text-sm">
              <p className="text-copper text-xs font-extrabold">
                {contact('demo')}
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-forest" />
                <span dir="ltr">{contact('phone')}</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail size={18} className="text-forest" />
                <span dir="ltr">{contact('email')}</span>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-forest" />
                {contact('address')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

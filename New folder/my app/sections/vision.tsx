import { Award, Eye, Handshake, Lightbulb, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/motion/reveal';
import { useTranslations } from 'next-intl';

const pillars = [
  {
    number: '01',
    id: 'vision',
    icon: Eye,
  },
  {
    number: '02',
    id: 'mission',
    icon: Award,
  },
];

const values = [
  { id: 'integrity', icon: Handshake },
  { id: 'safety', icon: ShieldCheck },
  { id: 'quality', icon: Award },
  { id: 'innovation', icon: Lightbulb },
];

export function Vision() {
  const t = useTranslations('Vision');
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="section-space bg-[#f4f8fd]"
    >
      <div className="container-site">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-accent text-xs font-extrabold tracking-[.2em]">
                {t('eyebrow')}
              </p>
              <h2
                id="vision-heading"
                className="text-heading mt-4 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl"
              >
                {t('titleFirst')}{' '}
                <span className="text-primary">{t('titleHighlight')}</span>
              </h2>
            </div>
            <p className="text-body max-w-lg text-sm leading-7 md:text-base">
              {t('intro')}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal delay={index * 0.1} key={pillar.id}>
                <article className="text-heading relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#d7e5f5] bg-[#eaf2fc] p-7 sm:p-9">
                  <div className="bg-primary absolute inset-x-0 top-0 h-1" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="bg-primary grid size-14 place-items-center rounded-2xl text-white">
                      <Icon size={28} aria-hidden="true" />
                    </span>
                    <span
                      className="text-5xl leading-none font-extrabold text-[#bdd3ed]"
                      dir="ltr"
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold">
                    {t(`${pillar.id}Title`)}
                  </h3>
                  <p className="text-body mt-4 max-w-xl text-sm leading-7 sm:text-base">
                    {t(`${pillar.id}Text`)}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-5 rounded-[24px] border border-[#d7e5f5] bg-[#eaf2fc] p-7 sm:p-9">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-accent text-xs font-extrabold tracking-[.2em]">
                  {t('foundation')}
                </p>
                <h3 className="text-heading mt-2 text-2xl font-extrabold">
                  {t('valuesTitle')}
                </h3>
              </div>
              <p className="text-body text-sm">{t('valuesIntro')}</p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    className="text-heading flex items-center gap-3 rounded-2xl border border-[#cbdff3] bg-[#dceaf9] px-4 py-5"
                    key={value.id}
                  >
                    <Icon
                      className="text-primary shrink-0"
                      size={24}
                      aria-hidden="true"
                    />
                    <span className="text-sm font-bold sm:text-base">
                      {t(`values.${value.id}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

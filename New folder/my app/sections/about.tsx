import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';

export function About() {
  const t = useTranslations('About');
  const locale = useLocale();

  return (
    <section id="about" className="section-space">
      <div className="container-site grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="rounded-card relative overflow-hidden">
            <div
              className="h-[360px] bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1100&q=85')] bg-cover bg-center"
              role="img"
              aria-label={t('imageAlt')}
            />
            <div className="rounded-card bg-accent shadow-card absolute end-5 bottom-5 px-6 py-5 text-white">
              <p className="text-3xl font-extrabold">
                <span dir="ltr">3+</span>
              </p>
              <p className="text-xs font-bold">{t('years')}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-accent text-xs font-extrabold tracking-[.18em]">
            {t('eyebrow')}
          </p>
          <h2 className="text-heading mt-3 max-w-lg text-3xl font-extrabold tracking-tight md:text-4xl">
            {t('titleFirst')}
            <br />
            {t('titleSecond')}{' '}
            <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
          <p className="mt-6 leading-7">{t('descriptionOne')}</p>
          <p className="mt-4 leading-7">{t('descriptionTwo')}</p>
          <a href="#vision" className="mt-7 inline-block">
            <Button variant="outline">
              {t('button')}{' '}
              <ArrowRight
                size={17}
                className={locale === 'ar' ? 'rotate-180' : undefined}
              />
            </Button>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

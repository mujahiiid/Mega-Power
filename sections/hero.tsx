import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

const stats = [
  { number: '3+', key: 'experience' },
  { number: '100+', key: 'projects' },
  { number: '50+', key: 'clients' },
  { number: '24/7', key: 'support' },
] as const;

export function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const arrowClass = locale === 'ar' ? 'rotate-180' : undefined;

  return (
    <section id="home" className="bg-primary relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center" />
      <div
        className={
          locale === 'ar'
            ? 'to-primary/20 absolute inset-0 bg-gradient-to-l from-white via-white/92'
            : 'to-primary/20 absolute inset-0 bg-gradient-to-r from-white via-white/92'
        }
      />
      <div className="from-primary/75 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      <div className="container-site relative py-24 md:py-32">
        <Reveal>
          <p className="text-primary mb-5 flex items-center gap-2 text-xs font-extrabold tracking-[.18em]">
            <span className="bg-accent h-0.5 w-7" />
            <ShieldCheck size={16} />
            <span dir="ltr">{t('eyebrow')}</span>
          </p>
          <h1 className="text-heading max-w-3xl text-4xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
            {t('titleFirst')}
            <br />
            <span className="text-accent">{t('titleHighlight')}</span>{' '}
            {t('titleLast')}
          </h1>
          <p className="text-body mt-6 max-w-xl text-base leading-7 md:text-lg">
            {t('description')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services">
              <Button>
                {t('servicesButton')}{' '}
                <ArrowRight size={17} className={arrowClass} />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline">
                {t('contactButton')}{' '}
                <ArrowRight size={17} className={arrowClass} />
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
      <div className="container-site relative">
        <div className="rounded-t-card shadow-card grid max-w-3xl grid-cols-2 bg-white/95 backdrop-blur md:grid-cols-4">
          {stats.map(({ number, key }) => (
            <div className="p-5 md:p-6" key={key}>
              <p className="text-primary text-2xl font-extrabold">
                <span dir="ltr">{number}</span>
              </p>
              <p className="text-body mt-1 text-xs font-semibold">
                {t(`stats.${key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

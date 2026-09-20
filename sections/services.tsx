import { ServiceCard } from '@/components/service-card';
import { Reveal } from '@/components/motion/reveal';
import { services } from '@/constants/site';
import { useTranslations } from 'next-intl';

export function Services() {
  const t = useTranslations('Services');
  return (
    <section
      id="services"
      className="section-space"
      aria-labelledby="services-heading"
    >
      <div className="container-site">
        <Reveal>
          <div className="text-center">
            <p className="text-accent text-xs font-extrabold tracking-[.18em]">
              {t('eyebrow')}
            </p>
            <h2
              id="services-heading"
              className="text-heading mt-3 text-3xl font-extrabold tracking-tight md:text-4xl"
            >
              {t('titleFirst')}{' '}
              <span className="text-primary">{t('titleHighlight')}</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal delay={index * 0.04} key={service.id}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

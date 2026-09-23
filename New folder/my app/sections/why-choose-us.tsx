import { useTranslations } from 'next-intl';
import { features } from '@/constants/site';
import { Reveal } from '@/components/motion/reveal';

export function WhyChooseUs() {
  const t = useTranslations('WhyChooseUs');

  return (
    <section className="bg-primary py-12 text-white">
      <div className="container-site grid gap-8 lg:grid-cols-[1fr_2.5fr]">
        <Reveal>
          <p className="text-xs font-extrabold tracking-[.18em] text-red-300">
            {t('eyebrow')}
          </p>
          <h2 className="mt-3 text-2xl leading-tight font-extrabold">
            {t('title')}
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              className="border-white/20 px-4 text-center sm:border-s"
              key={feature.id}
            >
              <feature.icon className="mx-auto text-red-300" size={28} />
              <p className="mt-3 text-sm font-bold">
                {t(`features.${feature.id}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

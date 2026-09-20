import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import type { Service } from '@/constants/site';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const t = useTranslations('Services');
  const locale = useLocale();
  const Icon = service.icon;
  const title = t(`items.${service.id}.title`);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgb(15_23_42/0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgb(15_23_42/0.16)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={service.image}
          alt={t(`items.${service.id}.imageAlt`)}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
      </div>
      <div className="relative flex min-h-56 flex-1 flex-col p-6 pt-10">
        <div className="bg-primary absolute start-6 -top-6 grid size-12 place-items-center rounded-full border-4 border-white text-white shadow-lg">
          <Icon size={21} aria-hidden="true" />
        </div>
        <h3 className="text-heading text-lg font-extrabold tracking-tight">
          {title}
        </h3>
        <p className="text-body mt-3 text-sm leading-6">
          {t(`items.${service.id}.description`)}
        </p>
        <a
          href="#contact"
          className={`text-primary mt-auto inline-flex w-fit pt-6 transition-transform duration-300 ${locale === 'ar' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
          aria-label={t('contactAria', { service: title })}
        >
          <ArrowUpRight
            size={20}
            className={locale === 'ar' ? 'scale-x-[-1]' : undefined}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
}

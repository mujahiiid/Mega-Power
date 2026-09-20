import { team } from '@/constants/site';
import { Reveal } from '@/components/motion/reveal';
import { useTranslations } from 'next-intl';
export function Team() {
  const t = useTranslations('Team');
  return (
    <section id="team" className="section-space">
      <div className="container-site">
        <Reveal>
          <p className="text-accent text-xs font-extrabold tracking-[.18em]">
            {t('eyebrow')}
          </p>
          <h2 className="text-heading mt-3 text-3xl font-extrabold">
            {t('titleFirst')}{' '}
            <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
        </Reveal>
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal delay={index * 0.08} key={person.id}>
              <article className="rounded-card overflow-hidden border bg-white shadow-sm">
                <div
                  className="aspect-[4/4.5] bg-cover bg-center"
                  role="img"
                  aria-label={t(`people.${person.id}.name`)}
                  style={{
                    backgroundImage: `url(${person.image})`,
                    backgroundPosition: index === 1 ? 'center 20%' : 'center',
                  }}
                />
                <div className="p-4">
                  <h3 className="text-heading text-sm font-extrabold">
                    {t(`people.${person.id}.name`)}
                  </h3>
                  <p className="text-body mt-1 text-xs">
                    {t(`people.${person.id}.role`)}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

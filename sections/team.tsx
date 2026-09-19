import { team } from '@/constants/site';
import { Reveal } from '@/components/motion/reveal';
export function Team() {
  return (
    <section id="team" className="section-space">
      <div className="container-site">
        <Reveal>
          <p className="text-accent text-xs font-extrabold tracking-[.18em]">
            OUR TEAM
          </p>
          <h2 className="text-heading mt-3 text-3xl font-extrabold">
            The People Behind <span className="text-primary">Our Success</span>
          </h2>
        </Reveal>
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person, index) => (
            <Reveal delay={index * 0.08} key={person.name}>
              <article className="rounded-card overflow-hidden border bg-white shadow-sm">
                <div
                  className="aspect-[4/4.5] bg-cover bg-center"
                  role="img"
                  aria-label={person.name}
                  style={{
                    backgroundImage: `url(${person.image})`,
                    backgroundPosition: index === 1 ? 'center 20%' : 'center',
                  }}
                />
                <div className="p-4">
                  <h3 className="text-heading text-sm font-extrabold">
                    {person.name}
                  </h3>
                  <p className="text-body mt-1 text-xs">{person.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import publicationsData from '@/lib/publications.json';

interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  image?: string;
  links: { pdf?: string; code?: string; source?: string };
}

const publications: Publication[] = [...publicationsData].sort((a, b) => Number(b.id) - Number(a.id));
const hasLink = (link?: string) => Boolean(link && link !== '#');

export default function PublicationsSection() {
  return (
    <section id="publications" className="research-section" aria-labelledby="publications-heading">
      <h2 id="publications-heading">Selected Publications</h2>
      <div className="publication-list">
        {publications.map((pub) => (
          <article key={pub.id} className={`publication${pub.image ? ' publication-with-image' : ''}`}>
            {pub.image && (
              <div className="publication-image">
                <Image src={pub.image} alt={`Overview of ${pub.title}`} fill sizes="(max-width: 520px) calc(100vw - 40px), 180px" />
              </div>
            )}
            <div className="publication-copy">
              <h3>{pub.title}</h3>
              {pub.authors && <p className="publication-authors">
                {pub.authors.split(', ').map((author, index, authors) => (
                  <span key={`${author}-${index}`}>
                    {author.includes('Gyusam Chang') ? <strong>{author}</strong> : author}{index < authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>}
              <p className="publication-venue">
                <em>{pub.venue.replace(/\s+\d{4}$/, '')}, {pub.year}.</em>
              </p>
              {Object.values(pub.links).some(hasLink) ? (
                <ul className="publication-links" aria-label={`Links for ${pub.title}`}>
                  {hasLink(pub.links.pdf) && <li><a href={pub.links.pdf} target="_blank" rel="noreferrer">paper</a></li>}
                  {hasLink(pub.links.code) && <li><a href={pub.links.code} target="_blank" rel="noreferrer">code</a></li>}
                  {!hasLink(pub.links.pdf) && hasLink(pub.links.source) && <li><a href={pub.links.source} target="_blank" rel="noreferrer">details</a></li>}
                </ul>
              ) : <p className="publication-links">TBD</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

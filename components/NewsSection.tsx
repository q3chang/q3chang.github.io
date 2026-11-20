import newsData from '@/lib/news.json';

interface NewsItem {
  id: string;
  date: string;
  dateTime?: string;
  category: string;
  title: string;
  description: string;
  paper?: string;
  venue?: string;
  organizations?: string[];
}

function NewsDescription({ item }: { item: NewsItem }) {
  const terms = [
    ...(item.paper ? [{ text: item.paper, className: 'news-paper' }] : []),
    ...(item.venue ? [{ text: item.venue, className: 'news-venue' }] : []),
    ...(item.organizations ?? []).map((text) => ({ text, className: 'news-organization' })),
  ].sort((a, b) => b.text.length - a.text.length);

  if (terms.length === 0) return item.description;

  const pattern = new RegExp(`(${terms.map(({ text }) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return item.description.split(pattern).map((part, index) => {
    const term = terms.find(({ text }) => text === part);
    return term ? <strong key={index} className={term.className}>{part}</strong> : part;
  });
}

export default function NewsSection() {
  const sortedNews: NewsItem[] = [...newsData].sort((a, b) => (b.dateTime ?? '').localeCompare(a.dateTime ?? ''));

  return (
    <section id="news" className="news-section" aria-labelledby="news-heading">
      <h2 id="news-heading">News</h2>
      <ul className="news-list">
        {sortedNews.map((item) => (
          <li key={item.id} className="news-row">
            <time dateTime={item.dateTime}>{item.date}</time>
            <p>
              <span className="news-symbol" aria-hidden="true">{item.category === 'Award' ? '🏆' : item.category === 'Publication' ? '🎉' : '🎓'}</span>
              <NewsDescription item={item} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

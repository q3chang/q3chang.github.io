import newsData from '@/lib/news.json';

const visibleNewsCount = 5;
const newsSymbols: Record<string, string> = { Award: '🏆', Publication: '🎉', Talk: '🎤' };

interface NewsItem {
  id: string;
  date: string;
  dateTime?: string;
  category: string;
  title: string;
  description: string;
  paper?: string;
  venue?: string | string[];
  organizations?: string[];
}

function NewsDescription({ item }: { item: NewsItem }) {
  const venues = Array.isArray(item.venue) ? item.venue : item.venue ? [item.venue] : [];
  const terms = [
    ...(item.paper ? [{ text: item.paper, className: 'news-paper' }] : []),
    ...venues.map((text) => ({ text, className: 'news-venue' })),
    ...(item.organizations ?? []).map((text) => ({ text, className: 'news-organization' })),
  ].sort((a, b) => b.text.length - a.text.length);

  if (terms.length === 0) return item.description;

  const pattern = new RegExp(`(${terms.map(({ text }) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'g');
  return item.description.split(pattern).map((part, index) => {
    const term = terms.find(({ text }) => text === part);
    return term ? <strong key={index} className={term.className}>{part}</strong> : part;
  });
}

function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="news-list">
      {items.map((item) => (
        <li key={item.id} className="news-row">
          <time dateTime={item.dateTime}>{item.date}</time>
          <p>
            <span className="news-symbol" aria-hidden="true">{newsSymbols[item.category] ?? '🎓'}</span>
            <NewsDescription item={item} />
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function NewsSection() {
  // Keep the order from news.json within each displayed month.
  const sortedNews = [...newsData].sort((a, b) =>
    (b.dateTime ?? '').slice(0, 7).localeCompare((a.dateTime ?? '').slice(0, 7))
  );
  const olderNews = sortedNews.slice(visibleNewsCount);

  return (
    <section id="news" className="news-section" aria-labelledby="news-heading">
      <h2 id="news-heading">News</h2>
      <NewsList items={sortedNews.slice(0, visibleNewsCount)} />
      {olderNews.length > 0 && (
        <details className="older-news">
          <summary>
            <span className="news-show-more">Show more</span>
            <span className="news-show-less">Show less</span>
          </summary>
          <NewsList items={olderNews} />
        </details>
      )}
    </section>
  );
}

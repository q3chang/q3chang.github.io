import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import PublicationsSection from '@/components/PublicationsSection';

export default function Home() {
  return (
    <main id="main-content" className="page-shell">
      <AboutSection />
      <NewsSection />
      <ExperiencesSection />
      <PublicationsSection />
    </main>
  );
}

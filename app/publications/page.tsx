import publicationsData from '@/lib/publications.json';
import PublicationCard from '@/components/PublicationCard';

export const metadata = {
  title: 'Publications | Gyusam Chang',
  description: 'Research publications by Gyusam Chang',
};

export default function PublicationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        
        {/* 헤더 섹션 */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Publications</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Selected research papers on Neural Architecture Search, Continual Learning, and Computer Vision.
          </p>
        </div>

        {/* 논문 리스트 (JSON 데이터 맵핑) */}
        <div className="grid gap-6">
          {publicationsData.map((pub, index) => (
            <PublicationCard key={pub.id} data={pub} index={index} />
          ))}
        </div>

      </div>
    </main>
  );
}
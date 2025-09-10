
import Footer from '../../../components/Footer';
import NewsArticle from './NewsArticle';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
  ];
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <NewsArticle articleId={params.id} />
      <Footer />
    </div>
  );
}

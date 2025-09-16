

import Footer from '../../components/Footer';
import NewsDetail from './NewsDetail';
import { microcms } from "../../libs/microcms";
import type { News } from "../../types/news";

export default async function NewsPage() {
  const { contents } = await microcms.get<{ contents: News[] }>({
    endpoint: "news",
    queries: { limit: 50, orders: "-date,-publishedAt" },
  });
  return (
    <div className="min-h-screen">
      <NewsDetail initialNews={contents} />
      <Footer />
    </div>
  );
}




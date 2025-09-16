// src/app/news/[id]/page.tsx
import Footer from '../../../components/Footer';
import { notFound } from "next/navigation";
import Link from "next/link";
import { microcms } from "../../../libs/microcms";
import type { News } from "../../../types/news";

type Props = { params: { id: string } };

// （静的エクスポート/SSGを使う場合は必須）
export async function generateStaticParams() {
  const { contents } = await microcms.get<{ contents: News[] }>({
    endpoint: "news",
    queries: { limit: 100 },
  });
  return contents.map(({ id }) => ({ id }));
}

// ISRしたいなら（任意）
export const revalidate = 60;

export default async function NewsDetailPage({ params }: Props) {
  // ← ここが“詳細データの持ってき方”
    const article = await microcms
    .get<News>({ endpoint: "news", contentId: params.id })
    .catch(() => null);

    if (!article) notFound();

    return (
        <div>
            <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('/mk-s-WHf1wtNMMLU-unsplash.jpg')` }}
                >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">お知らせ</h1>
                    <p className="text-xl">協会からの最新情報</p>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="mb-8">
                <Link
                    href="../news"
                    className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                    <i className="ri-arrow-left-line mr-2" />
                    ホームに戻る
                </Link>
                </div>
                <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
                <p className="text-sm text-gray-500 mb-6">
                {(article.date ?? article.publishedAt)?.slice(0, 10)}
                </p>
            {/* microCMSのリッチテキストをそのまま描画 */}
                <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: article.body ?? "" }}
                />
            </div>
            <Footer />
    </div>
    );
}

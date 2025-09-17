import Footer from "../../../components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { microcms } from "../../../libs/microcms";
import type { News } from "../../../types/news";

// SSG 用（静的エクスポートなら必須）
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const { contents } = await microcms.get<{ contents: News[] }>({
    endpoint: "news",
    queries: { limit: 100 },
    customRequestInit: { next: { revalidate: 60 } },
  });
  return (contents ?? []).map(({ id }) => ({ id }));
}

export const revalidate = 60;

export default async function NewsDetailPage({
  params, // ★ Promise にしないこと！
}: {
  params: { id: string };
}) {
  const { id } = params;

  const article = await microcms
    .get<News>({ endpoint: "news", contentId: id })
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
          <Link href="/news" className="inline-flex items-center text-green-600 hover:text-green-700">
            <i className="ri-arrow-left-line mr-2" />
            お知らせ一覧に戻る
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {(article.date ?? article.publishedAt)?.slice(0, 10)}
        </p>

        {article.image?.url && (
          <div className="mb-6">
            <Image
              src={article.image.url}
              alt={article.title}
              width={article.image.width || 800}
              height={article.image.height || 450}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>
        )}

        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.body ?? "" }}
        />
      </div>

      <Footer />
    </div>
  );
}

// src/app/news/[id]/page.tsx
import Footer from "../../../components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { microcms } from "../../../libs/microcms";
import type { News } from "../../../types/news";

// SSG 用（静的書き出し時に必要）
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  const { contents } = await microcms.get<{ contents: News[] }>({
    endpoint: "news",
    queries: { limit: 100 },
  });
  return (contents ?? []).map(({ id }) => ({ id }));
}

// ISR（任意）
export const revalidate = 60;

// JSTで YYYY.MM.DD のみ表示
const formatJstDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const s = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d); // 例 "2025/01/02"
  return s.replace(/\//g, ".");
};

export default async function NewsDetailPage({
  params,
}: {
  // ★ Next.js 15 の型：Promise を受ける
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = await microcms
    .get<News>({ endpoint: "news", contentId: id })
    .catch(() => null);

  if (!article) notFound();

  const displayDate = formatJstDate(article.date ?? article.publishedAt);

  return (
    <div>
      {/* ヒーロー */}
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

      {/* 本文 */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            href="/news"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <i className="ri-arrow-left-line mr-2" />
            お知らせ一覧に戻る
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-3">{article.title}</h1>
        {displayDate && (
          <p className="text-sm text-gray-500 mb-6">{displayDate}</p>
        )}

        {/* ★ 画像（あれば表示） */}
        {article.image?.url && (
          <div className="mb-6">
            <Image
              src={article.image.url}
              alt={article.title}
              width={article.image.width || 1200}
              height={article.image.height || 630}
              className="rounded-lg object-cover w-full h-auto"
              priority
            />
          </div>
        )}

        {/* 本文（リッチテキスト） */}
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.body ?? "" }}
        />
      </div>

      <Footer />
    </div>
  );
}

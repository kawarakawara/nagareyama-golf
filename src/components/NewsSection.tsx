import { microcms } from "../libs/microcms";
import type { News } from "../types/news";
import Link from 'next/link';

// microCMSの型が手元と違っても動くように最小限で受ける

const CATEGORY_CLASS: Record<string, string> = {
  "イベント": "bg-blue-100 text-blue-700",
  "お知らせ": "bg-gray-100 text-gray-700",
};

// カテゴリ名を安全に取得
// category が string / string[] / undefined でも安全に扱う
const getCategoryLabel = (v: unknown): string => {
  if (typeof v === "string") return v.trim();
  if (Array.isArray(v) && v.length) {
    const first = v[0];
    return typeof first === "string" ? first.trim() : String(first);
  }
  if (v == null) return "お知らせ";
  return String(v);
};

const getCategoryClass = (label: string) =>
  CATEGORY_CLASS[label] ?? "bg-gray-100 text-gray-700";

// 日付を YYYY.MM.DD にフォーマット（時間は出さない）
// JSTに変換して YYYY.MM.DD を返す
const formatDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const p = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d); // 例: "2025/01/01"
  return p.replace(/\//g, "."); // "2025.01.01"
};



export default async function NewsSection() {
  const { contents } = await microcms.get<{ contents: News[] }>({
    endpoint: "news",
    queries: { limit: 6, orders: "-date,-publishedAt" },
    customRequestInit: { next: { revalidate: 60 } },
  });

  return (
    <section id="news" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            お知らせ
          </h2>
          <p className="text-gray-600 text-lg">協会からの最新情報をお届けします</p>
        </div>

        {/* 一覧 */}
        <div className="grid gap-6">
          {(contents ?? []).map((item) => {
            const label = getCategoryLabel(item.category);
            const badge = getCategoryClass(label);
            const date = item.date ? formatDate(item.date) : formatDate(item.publishedAt);

            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* 日付とカテゴリ */}
                  <div className="flex items-center gap-4">
                    <div className="text-green-600 font-semibold text-sm">
                      {date}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${badge}`}>
                      {label}
                    </span>
                  </div>

                  {/* タイトルと本文冒頭 */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    {item.body && (
                      <p className="text-gray-600 line-clamp-2">
                        {item.body.replace(/<[^>]+>/g, "")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* もっと見る */}
        <div className="text-center mt-8">
          <Link href="/news" className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block">
            過去のお知らせを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import type { News } from "../../types/news";
import Image from "next/image";


export default function NewsList({ initialNews }: { initialNews: News[] }) {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const categories = ["すべて"];

  const filteredNews =
    selectedCategory === "すべて"
      ? initialNews
      : initialNews.filter((n) => n.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダー画像 */}
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
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* 戻るリンク */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <i className="ri-arrow-left-line mr-2" />
            ホームに戻る
          </Link>
        </div>

        {/* カテゴリフィルタ */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                selectedCategory === c
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 一覧表示 */}
        <div className="grid gap-6">
          {filteredNews.map((news) => (
            <Link
              key={news.id}
              href={`/news/${news.id}`} // ← ここで詳細ページへリンク
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500"
            >
            <article className="flex gap-6 p-6 items-start">
              {/* 画像（左側） */}
              {news.image?.url && (
                <div className="flex-shrink-0 w-40 h-28 relative">
                  <Image
                    src={`${news.image.url}?w=400&h=280&fit=crop`} // microCMSで小さめに取得
                    alt={news.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
              )}

              {/* テキスト（右側） */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-green-600 font-semibold text-sm">{news.date}</div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      news.category === "イベント"
                        ? "bg-blue-100 text-blue-700"
                        : news.category === "競技会"
                        ? "bg-yellow-100 text-yellow-700"
                        : news.category === "講習会"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {news.category}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {news.title}
                </h2>

                <div className="text-green-600 flex items-center text-sm">
                  <i className="ri-arrow-right-line mr-1" />
                  詳細を見る
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>

        {/* 該当なし */}
        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-information-line text-gray-400 text-3xl mb-4" />
            <p className="text-gray-500">該当するお知らせがありません</p>
          </div>
        )}
      </div>
    </div>
  );
}

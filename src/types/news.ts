export type News = {
　id: string;
  title: string;
  body?: string;
  image?: { url: string; width: number; height: number };
  date?: string;      // 公開日/開催日
  category?: string;  // "イベント" / "お知らせ" など
  publishedAt?: string;
};

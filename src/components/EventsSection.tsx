import { microcms } from "../libs/microcms";
import type { EventItem } from "../types/items";


const MONTHS = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"] as const;

const TYPE_CLASS: Record<string, string> = {
  "競技会": "bg-red-100 text-red-700",
  "親睦会": "bg-blue-100 text-blue-700",
  "講習会": "bg-yellow-100 text-yellow-700",
  "記念行事": "bg-purple-100 text-purple-700",
  "懇親会": "bg-pink-100 text-pink-700",
  "新年行事": "bg-orange-100 text-orange-700",
  "月例":   "bg-green-100 text-green-700",
};

const normalizeType = (v: unknown): string => {
  if (typeof v === "string") return v.trim();
  if (Array.isArray(v)) return v.map((x) => (typeof x === "string" ? x.trim() : String(x ?? ""))).join(",");
  if (v == null) return "";
  return String(v).trim();
};

const getTypeColor = (raw: unknown): string => {
  const key = normalizeType(raw);
  return TYPE_CLASS[key] ?? "bg-gray-100 text-gray-700";
};

// 全角→半角（数字・スペース）に変換
const toHalfWidth = (s: string) =>
  s.replace(/[０-９]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xFEE0))
   .replace(/\u3000/g, " "); // 全角スペース→半角

// "４月" / "０１月" / "１" / "  １  月" / 1 → "1月"
const normalizeMonth = (m: unknown): string => {
  if (typeof m === "string") {
    const hw = toHalfWidth(m).trim();         // 全角→半角してトリム
    // すでに "1月" 形式ならそのまま（01月もOKにしたいなら Number に寄せる）
    if (/^\d{1,2}月$/.test(hw)) return `${Number(hw.replace("月",""))}月`;
    // 数字だけなら "1月" に
    if (/^\d{1,2}$/.test(hw)) return `${Number(hw)}月`;
  }
  if (typeof m === "number" && m >= 1 && m <= 12) return `${m}月`;
  return "";
};

// 日付を YYYY.MM.DD に整形
const formatDate = (iso?: string) => {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso; // 不正な場合はそのまま
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};



export default async function EventsSection() {
  let events: EventItem[] = [];

  try {
    const res = await microcms.get<{ contents: EventItem[] }>({
      endpoint: "events",
      queries: { limit: 100, orders: "order,month" },
    });
    events = res.contents ?? [];

    if (process.env.NODE_ENV === "development") {
      console.log("[EventsSection] fetched", events.length, "items");
      for (const e of events) {
        const typeLabel = normalizeType(e.type);
        console.log(
          `[event] id=${e.id}, month=${e.month}, name=${e.name}, typeRaw=`,
          e.type,
          " -> typeLabel=",
          typeLabel,
          " -> class=",
          getTypeColor(e.type)
        );
      }
    }
  } catch (err) {
    console.error("[EventsSection] microCMS fetch error:", err);
  }

  const grouped: Record<string, EventItem[]> = Object.fromEntries(
    MONTHS.map((m) => [m, [] as EventItem[]]),
  );

  for (const e of events) {
    const m = normalizeMonth(e.month);
    if (grouped[m]) grouped[m].push(e);
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[EventsSection] grouped result", grouped);
  }

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">年間行事・競技会</h2>
          <p className="text-gray-600 text-lg">最新スケジュール</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MONTHS.map((m) => {
            const list = grouped[m];

            return (
              <div key={m} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-green-800">{m}</div>
                </div>

                {list.length === 0 ? (
                  <p className="text-sm text-gray-500">予定はありません</p>
                ) : (
                  <ul className="space-y-4">
                    {list.map((ev) => {
                      const typeLabel = normalizeType(ev.type) || "未分類";
                      const badgeClass = getTypeColor(ev.type);

                      return (
                        <li key={ev.id}>
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{ev.name}</h3>
                            <span
                              className={`px-2 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}
                              title={`type="${typeLabel}"`}
                            >
                              {typeLabel}
                            </span>
                          </div>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <i className="ri-calendar-line text-green-600" />
                              <span>{formatDate(ev.date)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <i className="ri-map-pin-line text-green-600" />
                              <span>{ev.venue}</span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div className="bg-green-50 p-8 rounded-lg mt-12">
          <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">
            競技会参加について
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-3">
                参加資格
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 当協会会員であること</li>
                <li>• 年会費を納入済みであること</li>
                <li>• 各競技のハンディキャップ制限内であること</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-700 mb-3">
                申込方法
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• 開催1ヶ月前から受付開始</li>
                <li>• 電話またはメールでお申し込み</li>
                <li>• 参加費は当日会場にてお支払い</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

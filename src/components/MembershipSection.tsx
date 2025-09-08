// components/MembershipSection.tsx
export default function MembershipSection() {
  return (
    <section id="membership" className="py-16 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* 見出し */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            入会案内
          </h2>
          <p className="text-gray-600 text-lg">
            流山市アマチュアゴルフ協会へのご入会をお考えの皆様へ
          </p>
        </div>

        {/* ポリシーに合わせた要点（3カラム） */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 text-white font-bold">
              ①
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">対象</h3>
            <p className="text-gray-700">
              流山市在住・在勤・在学の方、またはゴルフを愛好し当協会の趣旨に賛同される方
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 text-white font-bold">
              ②
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">入会タイミング</h3>
            <p className="text-gray-700">
              年間の行事および競技会の<strong className="font-semibold">ご参加時に入会受付</strong>いたします。
              事前の個別入会は行っておりません。
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4 text-white font-bold">
              ③
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-3">お問い合わせ</h3>
            <p className="text-gray-700">
              入会方法の詳細やご質問は<strong className="font-semibold">お問い合わせ</strong>よりご連絡ください。
            </p>
          </div>
        </div>

        {/* 入会の流れ（イベント当日基準） */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-800 mb-6">入会の流れ</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
              <h4 className="font-semibold mb-2">行事・競技会へ参加</h4>
              <p className="text-sm text-gray-600">年間行事をご確認のうえ当日受付へ</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
              <h4 className="font-semibold mb-2">申込書記入</h4>
              <p className="text-sm text-gray-600">会場で必要事項をご記入</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
              <h4 className="font-semibold mb-2">審査・年会費</h4>
              <p className="text-sm text-gray-600">簡易審査後、年会費をご案内</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
              <h4 className="font-semibold mb-2">入会完了</h4>
              <p className="text-sm text-gray-600">会員登録・活動開始</p>
            </div>
          </div>

          {/* 重要メッセージ */}
          <p className="text-sm text-gray-500 mt-6">
            ※ 入会は<strong>行事・競技会参加時のみ</strong>受け付けています。事前のお手続きは行っておりません。詳細はお問い合わせください。
          </p>
        </div>

        {/* CTA：行事へ/お問い合わせへ */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#events"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-center"
          >
            年間行事を見る
          </a>
          <a
            href="#contact"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold text-center"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}

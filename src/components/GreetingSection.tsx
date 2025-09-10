
'use client';

export default function GreetingSection() {
  return (
    <section id="greeting" className="py-16 relative overflow-hidden bg-green-50  border-b border-gray-200">
      {/* 左側のゴルフ画像 */}


      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center">
          <p className="text-3xl md:text-4xl font-bold text-green-800 mb-8">ごあいさつ</p>
          <div className="p-8 md:p-12 bg-white bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                流山市アマチュアゴルフ協会のホームページをご覧いただきまして、誠にありがとうございます。
              </p>
              <p>
                当協会は、流山市におけるゴルフ愛好家の皆様が、技術向上を図りながら、健全なスポーツマンシップのもとでゴルフを楽しみ、会員相互の親睦と交流を深めることを目的として活動しております。
              </p>
              <p>
                年間を通じて様々な競技会やイベントを開催し、初心者から上級者まで、すべてのレベルの方々にゴルフの楽しさを感じていただけるよう心がけております。
              </p>
              <p>
                ぜひ、私たちと一緒にゴルフを通じた素晴らしい仲間づくりをしませんか。
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-green-200">
              <div className="flex items-center justify-center gap-6">
                <div className="text-left">
                  <p className="text-green-800 font-semibold text-lg">
                    流山市アマチュアゴルフ協会
                  </p>
                  <p className="text-green-700 font-medium text-center">
                        齋藤浩継
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

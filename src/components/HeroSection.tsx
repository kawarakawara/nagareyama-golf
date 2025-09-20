
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative -mt-16 h-[600px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url('/herosectionIMG.jpg')`
      }}
    >
      <div className="w-full px-6 md:px-12 mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="text-white">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl text-white font-bold"
              style={{fontFamily:"Yu Mincho"}}>
                流山市アマチュアゴルフ協会
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl pt-5 font-bold"
            style={{ fontFamily: "Yu Mincho" }}
  >
              ゴルフを楽しみ、
            </h1>
            <h1 className="text-4xl md:text-5xl  pl-40 py-5 font-bold"
            style={{ fontFamily: "Yu Mincho" }}>
              仲間と育む。
            </h1>
            <p className="mt-4 text-lg"
            style={{ fontFamily: "Yu Mincho" }}>
              流山市ゴルフ界の発展と、交流の輪を広げることを目的としています
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-5">
              <a href="#events" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                年間行事を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

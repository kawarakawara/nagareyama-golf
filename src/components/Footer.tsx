
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              流山市アマチュアゴルフ協会
            </h3>
            <p className="text-green-100 mb-4">
              流山市ゴルフ界の振興と会員相互の親睦を図ることを目的としています 
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">メニュー</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#greeting" className="text-green-100 hover:text-white transition-colors cursor-pointer">
                  ごあいさつ
                </Link>
              </li>
              <li>
                <Link href="#membership" className="text-green-100 hover:text-white transition-colors cursor-pointer">
                  入会案内
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-green-100 hover:text-white transition-colors cursor-pointer">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-green-100 hover:text-white transition-colors cursor-pointer">
                  年間行事
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-green-100 hover:text-white transition-colors cursor-pointer">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <i className="ri-mail-line text-green-300"></i>
                <a　href="mailto:info@nagareyama-ama-golf.com"
                className="hover:underline">
                  info@nagareyama-ama-golf.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">関連団体</h4>
          <ul className="flex flex-wrap gap-4 text-sm">
            <li><a href="https://www.jga.or.jp/" target="_blank" className="hover:underline">JGA日本ゴルフ協会</a></li>
            <li><a href="https://www.kga.gr.jp/" target="_blank" className="hover:underline">関東ゴルフ連盟</a></li>
            <li><a href="https://chiba-amagolf.jp/" target="_blank" className="hover:underline">千葉県アマチュアゴルフ協会</a></li>
            <li><a href="http://www.pgs.or.jp/user/about/index.jsp" target="_blank" className="hover:underline">日本パブリックゴルフ協会</a></li>
            <li><a href="http://3-shine.jp/" target="_blank" className="hover:underline">初石サンシャインゴルフ</a></li>
            <li><a href="http://nagareyama-golf.co.jp/" target="_blank" className="hover:underline">流山ゴルフセンター</a></li>
            <li><a href="https://rockystadium.jp/" target="_blank" className="hover:underline">ロッキースタジアム</a></li>
          </ul>
        </div>


        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100 text-sm">
            © 2025 流山市アマチュアゴルフ協会. All rights reserved.
          </p>
          <p className="text-green-100 text-xs">
            画像提供:
            <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%97%A5%E4%B8%AD%E3%81%AE%E5%B7%9D%E6%B2%BF%E3%81%84%E3%81%AE%E7%B7%91%E3%81%AE%E6%9C%A8%E3%80%85%E3%81%AE%E7%A9%BA%E4%B8%AD%E5%86%99%E7%9C%9F-08Ipbe8GpWw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@________________1a?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Welcome</a>が撮影した写真<br />
            <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%B4%E3%83%AB%E3%83%95%E3%82%92%E3%81%99%E3%82%8B%E4%BA%BA-LUPJoR3OfEg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@mickdepaola?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mick De Paola</a>が撮影した写真<br />
            <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E9%BB%92%E3%81%84t%E3%82%B7%E3%83%A3%E3%83%84%E3%81%A8%E7%99%BD%E3%81%84%E3%82%BA%E3%83%9C%E3%83%B3%E3%82%92%E7%9D%80%E3%81%9F%E4%BA%BA%E3%81%8C%E3%82%B4%E3%83%AB%E3%83%95%E3%82%AF%E3%83%A9%E3%83%96%E3%82%92%E6%8C%81%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B-L0TtxTPYEqg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@pjdrewww24?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Peter Drew</a>が撮影した写真
            <a href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E7%B7%91%E3%81%AE%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%81%AE%E4%B8%8A%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%84%E3%82%8B%E3%82%B4%E3%83%AB%E3%83%95%E3%83%9C%E3%83%BC%E3%83%AB-WHf1wtNMMLU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>の<a href="https://unsplash.com/ja/@mk__s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">mk. s</a>が撮影した写真
          </p>
        </div>
      </div>
    </footer>
  );
}

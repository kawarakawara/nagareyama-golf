
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface NewsArticleProps {
  articleId: string;
}

export default function NewsArticle({ articleId }: NewsArticleProps) {
  const [article, setArticle] = useState<any>(null);

  const allArticles = [
    {
      id: 1,
      date: '2024.03.15',
      category: 'イベント',
      title: '第45回流山市アマチュアゴルフ選手権大会開催のお知らせ',
      summary: '4月20日（土）に開催予定の選手権大会の詳細が決定いたしました。',
      content: '流山市アマチュアゴルフ選手権大会を下記の通り開催いたします。多くの皆様のご参加をお待ちしております。\n\n【開催概要】\n開催日時：2024年4月20日（土）午前7:30受付開始\n開催場所：流山カントリークラブ\n参加資格：流山市アマチュアゴルフ協会会員\n参加費：8,000円（プレー費・昼食代込み）\n申込締切：4月10日（水）\n\n【競技方法】\n・18ホールストロークプレー\n・ハンディキャップ戦\n・優勝者には賞金3万円とトロフィーを贈呈\n・上位入賞者には賞品を用意\n\n【お申し込み方法】\n事務局まで電話またはメールにてお申し込みください。\n多くの皆様のご参加をお待ちしております。',
      isImportant: true,
      image: 'https://readdy.ai/api/search-image?query=Professional%20golf%20tournament%20setup%20with%20golf%20flags%20and%20players%20on%20a%20beautiful%20green%20golf%20course%2C%20championship%20atmosphere%2C%20morning%20sunlight%2C%20organized%20golf%20competition%20with%20scoreboard%20in%20background&width=800&height=400&seq=golf-tournament&orientation=landscape'
    },
    {
      id: 2,
      date: '2024.03.10',
      category: 'お知らせ',
      title: '新年度会員募集開始について',
      summary: '2024年度の新規会員募集を開始いたします。詳細は入会案内をご確認ください。',
      content: '2024年度の新規会員募集を開始いたします。\n\n【会員特典】\n・各種競技会への参加資格\n・技術講習会の受講\n・会員限定イベントへの参加\n・協会ニュースレターの配信\n・提携ゴルフ場での優待料金\n\n【入会条件】\n年会費：12,000円\n入会金：5,000円\n申込方法：入会申込書に必要事項をご記入の上、事務局までご提出ください。\n\n【必要書類】\n・入会申込書\n・身分証明書のコピー\n・ゴルフ経験証明書（任意）\n\nゴルフを愛する皆様のご入会をお待ちしております。詳細については事務局までお問い合わせください。',
      image: 'https://readdy.ai/api/search-image?query=Golf%20club%20membership%20welcome%20scene%20with%20golf%20equipment%20and%20membership%20cards%20on%20elegant%20wooden%20table%2C%20professional%20golf%20club%20atmosphere%2C%20welcoming%20environment&width=800&height=400&seq=membership&orientation=landscape'
    },
    {
      id: 3,
      date: '2024.03.05',
      category: 'イベント',
      title: '春季親睦ゴルフコンペ開催報告',
      summary: '3月3日に開催された親睦コンペは好天に恵まれ、盛況のうちに終了いたしました。',
      content: '3月3日（日）に開催されました春季親睦ゴルフコンペは、絶好のゴルフ日和に恵まれ、会員42名の参加により盛況のうちに終了いたしました。\n\n【競技結果】\n優勝：田中太郎様（グロス78、ネット68.4）\n準優勝：佐藤花子様（グロス82、ネット69.2）\n第3位：山田次郎様（グロス85、ネット70.1）\n\n【特別賞】\nベストグロス賞：田中太郎様（78）\nニアピン賞：鈴木一郎様、高橋美代子様\nドラコン賞：【男性】伊藤次郎様、【女性】渡辺京子様\n\n【懇親会】\n競技終了後の懇親会では多くの方にご参加いただき、和やかな雰囲気の中で交流を深めることができました。次回の親睦コンペは秋季に開催予定です。',
      image: 'https://readdy.ai/api/search-image?query=Happy%20golf%20players%20celebrating%20after%20tournament%20on%20beautiful%20golf%20course%2C%20group%20photo%20with%20trophies%20and%20awards%2C%20spring%20season%20golf%20competition%20atmosphere&width=800&height=400&seq=spring-competition&orientation=landscape'
    },
    {
      id: 4,
      date: '2024.02.28',
      category: 'お知らせ',
      title: '年間行事スケジュール更新',
      summary: '2024年度の年間行事スケジュールを更新いたしました。',
      content: '2024年度の年間行事スケジュールを更新いたしました。主な変更点は以下の通りです。\n\n【主な変更点】\n・夏季競技会の開催日を7月15日から7月22日に変更\n・秋季親睦コンペの会場をパインバレーゴルフクラブに変更\n・新春初打ち会を1月14日に開催予定\n・技術講習会を年4回から年6回に増回\n\n【2024年度主要行事】\n4月：春季親睦コンペ、選手権大会\n6月：技術講習会、月例競技会\n8月：夏季競技会、納涼ゴルフ大会\n10月：秋季親睦コンペ、シニア大会\n12月：年末競技会、忘年会\n1月：新春初打ち会、新年会\n\n詳細につきましては、年間行事・競技会のページをご確認ください。',
      image: 'https://readdy.ai/api/search-image?query=Golf%20tournament%20schedule%20calendar%20with%20golf%20course%20background%2C%20organized%20golf%20events%20planning%2C%20professional%20golf%20club%20administration&width=800&height=400&seq=schedule-update&orientation=landscape'
    },
    {
      id: 5,
      date: '2024.02.20',
      category: 'イベント',
      title: 'ゴルフ技術講習会開催報告',
      summary: 'プロによる技術指導講習会を開催し、多くの会員の皆様にご参加いただきました。',
      content: '2月18日（日）にプロゴルファーの鈴木プロをお招きし、技術講習会を開催いたしました。\n\n【講習会概要】\n参加者：28名\n講師：鈴木プロ（PGAティーチングプロ）\n会場：流山ゴルフ練習場\n時間：午前10時〜午後3時\n\n【講習内容】\n・ドライバーショットの基本とコツ\n・アプローチテクニックの向上\n・パッティングの極意\n・コースマネジメントの基礎\n・メンタル面でのアドバイス\n\n【参加者の声】\n「とても分かりやすい指導でした」\n「すぐに実践できる内容でした」\n「スコアアップのヒントがたくさんありました」\n\n次回の講習会は5月に開催予定です。詳細が決まり次第お知らせいたします。',
      image: 'https://readdy.ai/api/search-image?query=Golf%20instruction%20lesson%20with%20professional%20golf%20instructor%20teaching%20students%20on%20driving%20range%2C%20golf%20coaching%20session%2C%20learning%20golf%20techniques&width=800&height=400&seq=golf-lesson&orientation=landscape'
    },
    {
      id: 6,
      date: '2024.02.15',
      category: 'お知らせ',
      title: '協会ニュースレター第15号発行',
      summary: '会員の皆様の活動報告や今後の予定をまとめたニュースレターを発行いたしました。',
      content: '協会ニュースレター第15号を発行いたしました。\n\n【今号の主な内容】\n・会長からの新年のご挨拶\n・2023年度活動報告\n・会員の皆様からの投稿\n・2024年度行事予定\n・新入会員のご紹介\n・技術向上のためのワンポイントアドバイス\n・提携ゴルフ場からのお知らせ\n\n【配信について】\nニュースレターは会員の皆様に郵送でお届けしております。また、当協会ウェブサイトでもPDF版をご覧いただけます。\n\n【投稿募集】\n次号では会員の皆様からの投稿を募集しております。ゴルフに関するエピソードや体験談、技術向上のコツなど、どのような内容でも構いません。事務局までお寄せください。',
      image: 'https://readdy.ai/api/search-image?query=Golf%20club%20newsletter%20publication%20with%20golf%20course%20background%2C%20professional%20golf%20association%20communication%2C%20newsletter%20design%20with%20golf%20themes&width=800&height=400&seq=newsletter&orientation=landscape'
    }
  ];

  useEffect(() => {
    const foundArticle = allArticles.find(a => a.id.toString() === articleId);
    setArticle(foundArticle);
  }, [articleId]);

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <i className="ri-information-line text-gray-400 text-3xl"></i>
          </div>
          <p className="text-gray-500">記事が見つかりません</p>
          <Link href="/news" className="text-green-600 hover:text-green-700 mt-4 inline-block cursor-pointer">
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('${article.image}')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-sm font-semibold">
                {article.date}
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                article.category === 'イベント' 
                  ? 'bg-blue-100 text-blue-700'
                  : article.category === '競技会'
                  ? 'bg-yellow-100 text-yellow-700'
                  : article.category === '講習会'
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {article.category}
              </span>
              {article.isImportant && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                  重要
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">{article.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        <div className="mb-8">
          <Link href="/news" className="inline-flex items-center text-green-600 hover:text-green-700 cursor-pointer">
            <i className="ri-arrow-left-line mr-2"></i>
            お知らせ一覧に戻る
          </Link>
        </div>

        <article className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line text-base">
              {article.content}
            </div>
          </div>
        </article>

        <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            お問い合わせ
          </h3>
          <p className="text-gray-600">
            このお知らせに関するご質問やお問い合わせは、事務局までお気軽にご連絡ください。
          </p>
          <div className="mt-4 text-sm text-gray-600">
            <div>Email: info@nagareyama-ama-golf.com</div>
            <div>電話: 04-7123-4567</div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-block">
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

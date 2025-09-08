


import Header from '@/src/components/Header';
import HeroSection from '@/src/components/HeroSection';
import GreetingSection from '@/src/components/GreetingSection';
import MembershipSection from '@/src/components/MembershipSection';
import NewsSection from '@/src/components/NewsSection';
import EventsSection from '@/src/components/EventsSection';
import ContactSection from '@/src/components/ContactSection';
import Footer from '@/src/components/Footer';
import StickyLinksBar from '@/src/components/StickyLinksBar';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-3 items-center h-16">
        {/* 左: Header */}
        <div className="justify-self-start px-4">
          <Header />
        </div>

        {/* 中央: StickyLinksBar */}
        <div className="justify-self-center">
          <div className="fixed top-0 left-1/2 -translate-x-1/2 z-40">
            <div className="flex items-center px-4  ">
              <StickyLinksBar />
            </div>
          </div>
        </div>

        {/* 右: 空き or 追加メニュー */}
        <div className="justify-self-end px-4 z-50">
          <p className="font-bold">Email</p>
          <p>info@nagareyama-ama-golf.com</p>
        </div>
      </div>
      <HeroSection />
      <GreetingSection />
      <NewsSection />
      <MembershipSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

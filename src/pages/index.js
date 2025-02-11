import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import ManinBanner from '@/components/layouts/MainBanner.js';

export default function Home() {
  return (
    <>
      <div className="index-page">
      <Header/>
      <ManinBanner/>
      </div>
        <Footer/>
    </>
  );
}

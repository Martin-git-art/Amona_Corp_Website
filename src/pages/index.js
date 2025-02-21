import About from '@/components/About';
import Products from '@/components/Products.js';
import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import ManinBanner from '@/components/layouts/MainBanner.js';

export default function Home() {
  return (
    <>
      <div className="index-page">
      <Header/>
      <ManinBanner/>
      <About/>
      <Products/>
      </div>
        <Footer/>
    </>
  );
}

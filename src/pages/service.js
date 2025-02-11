import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';

export default function Service() {
  return (
    <>
      <div className="index-page">
      <Header />
      <Banner
        title="Service"
        description="porro placeat quibusdam quia assumenda numquam molestias."
        breadcrumbs={[
          { href: '/', text: 'Home' },
          { href: '/service', text: 'Service', current: true },
        ]}
      />
 
      </div>
        <Footer/>
    </>
  );
}

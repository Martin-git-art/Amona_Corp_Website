import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';
import ServiceDetail from '@/components/ServiceDetail';

export default function Service() {
  return (
    <>
      <div className="index-page">
      <Header />
      <Banner
        title="Service"
        description="Upgrade Your Business Communication Today!"
        breadcrumbs={[
          { href: '/', text: 'Home' },
          { href: '/service', text: 'Service', current: true },
        ]}
      />
 
      </div>
      <ServiceDetail/>
        <Footer/>
    </>
  );
}

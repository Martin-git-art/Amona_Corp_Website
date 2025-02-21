import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';
import ContactForm from '@/components/ContactForm.js';

export default function Contact() {
  return (
    <>
      <div className="index-page">
      <Header />
      <Banner
        title="Contact Us"
        description="Get in Touch – We're Here to Help!"
        breadcrumbs={[
          { href: '/', text: 'Home' },
          { href: '/contact', text: 'Contact Us', current: true },
        ]}
      />
      <ContactForm/>
      </div>
        <Footer/>
    </>
  );
}

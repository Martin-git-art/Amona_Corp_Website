import Footer from '@/components/layouts/Footer.js';
import Header from '@/components/layouts/Header.js';
import Banner from '@/components/layouts/Banner.js';
import Products from '@/components/Products';
export default function Product() {
    return (
        <>
            <div className="index-page">
                <Header />
                <Banner
                    title="Products"
                    description="Smart solutions designed for you."
                    breadcrumbs={[
                        { href: '/', text: 'Home' },
                        { href: '/products', text: 'Products', current: true },
                    ]}
                />
                <Products />
            </div>
            <Footer />
        </>
    );
}

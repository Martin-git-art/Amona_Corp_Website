
import Link from 'next/link';
import Menu from './Menu';
import { useRouter } from 'next/router';

export default function Header() {
  const {basePath} = useRouter();
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          <img src={`${basePath}/assets/img/logo.png`} alt="Logo" />
        </Link>
        <Menu />
      </div>
    </header>

  );
}

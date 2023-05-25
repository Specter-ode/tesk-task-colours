import s from './Header.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={s.header}>
    <Link href="/" className={s.link}>
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={117}
        height={28}
      />
    </Link>
    </header>
  );
};

export default Header;

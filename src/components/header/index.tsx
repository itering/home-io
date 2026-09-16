'use client';

import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './mobile-nav';
import LanguageSwitcher from './language-switcher';
import { useLanguage } from '@/lib/language';

export default function Header() {
  const { copy } = useLanguage();

  return (
    <header className="container h-[50px] md:h-[100px]">
      <nav className="flex h-full w-full items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            className="h-[16px] w-[105.21px] flex-shrink-0 md:h-[26px] md:w-[170.961px]"
            width={105.21}
            height={26}
          />
        </Link>

        <div className="hidden items-center gap-[34px] md:flex">
          <Link
            href="#products-services"
            className="relative hidden text-[16px] leading-6 font-normal tracking-[1px] text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
          >
            {copy.nav.products}
          </Link>
          <Link
            href="#team"
            className="relative hidden text-[16px] leading-6 font-normal tracking-[1px] text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
          >
            {copy.nav.team}
          </Link>
          <Link
            href="mailto:contact@itering.com"
            className="relative hidden text-[16px] leading-6 font-normal tracking-[1px] text-white uppercase after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
          >
            {copy.nav.contact}
          </Link>
          <LanguageSwitcher />
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}

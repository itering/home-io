'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileNav from './mobile-nav';

export default function Header() {
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = usePathname() === href;

    console.log('isActive', isActive, usePathname(), href);

    return (
      <Link
        href={href}
        className={`relative hidden text-[16px] font-normal uppercase leading-6 text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 md:block ${isActive ? 'after:scale-x-100' : ''} tracking-[1px]`}
      >
        {children}
      </Link>
    );
  };
  return (
    <header className="container h-[50px] md:h-[100px]">
      <nav className="flex h-full w-full items-center justify-between gap-10">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="logo"
            className="h-[16px] w-[105.21px] flex-shrink-0 md:h-[26px] md:w-[170.961px]"
            width={105.21}
            height={26}
          />
        </Link>

        <NavLink href="/portfolio">Portfolio</NavLink>

        <Link
          href="https://hirevise.com/itering"
          target="_blank"
          rel="noopener noreferrer"
          className="relative hidden text-[16px] font-normal uppercase leading-6 tracking-[1px] text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
        >
          Careers
        </Link>
        <Link
          href="mailto:contact@itering.io"
          className="relative hidden text-[16px] font-normal uppercase leading-6 tracking-[1px] text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 md:block"
        >
          Contact Us
        </Link>
        <MobileNav />
      </nav>
    </header>
  );
}

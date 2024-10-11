import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        className="relative hidden h-[255px] w-full md:block"
        style={{
          background: 'url(/images/footer.svg) no-repeat center top / cover'
        }}
      >
        <div className="md: container absolute bottom-0 left-0 right-0 flex h-[100px] flex-row items-center justify-between gap-0 py-0">
          <span className="text-[20px] font-light uppercase leading-[32px] text-white/70">
            &copy; {currentYear} ITERING TECH PTE. LTD.
          </span>
          <nav>
            <ul className="flex items-center gap-[20px]">
              <li>
                <Link
                  href="https://www.figma.com/design/kF5iQjdHCGovKMApZiaOE5/Brands?node-id=471-9&node-type=frame&t=Dk1xCG4itI5BbRsx-0"
                  className="text-[20px] font-light uppercase leading-[32px] text-white/70 transition-opacity duration-300 hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brand Kit
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/itering_io"
                  className="text-[20px] font-light uppercase leading-[32px] text-white/70 transition-opacity duration-300 hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/pages/index/social/x.svg" alt="x" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@itering.io"
                  className="text-[20px] font-light uppercase leading-[32px] text-white/70 transition-opacity duration-300 hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/pages/index/social/email.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
      <footer className="relative flex h-[calc(95px+14.67vw)] w-full flex-col justify-end md:hidden">
        <Image
          src="/images/footer-mobile.svg"
          alt="footer"
          className="absolute left-0 top-0 h-[14.67vw] w-full"
          width={375}
          height={55}
        />

        <div className="container flex h-[95px] flex-col items-center justify-between gap-[20px] py-[16px]">
          <span className="order-2 text-[16px] font-light uppercase leading-[32px] text-white/70">
            &copy; {currentYear} ITERING TECH PTE. LTD.
          </span>
          <nav className="order-1">
            <ul className="flex items-center gap-[20px]">
              <li>
                <Link
                  href="https://x.com/itering_io"
                  className="text-[20px] font-light uppercase leading-[32px] text-white/70 transition-opacity duration-300 hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/images/pages/index/social/x.svg" alt="x" width={20} height={20} />
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@itering.io"
                  className="text-[20px] font-light uppercase leading-[32px] text-white/70 transition-opacity duration-300 hover:opacity-70"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/pages/index/social/email.svg"
                    alt="email"
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

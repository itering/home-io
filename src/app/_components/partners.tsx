'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Partners() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();

  return (
    <section className="container pb-[100px] pt-0 lg:py-[100px]" ref={ref1} style={styles1}>
      <div className="hidden grid-cols-5 items-center gap-[20px] bg-gradient-to-r from-transparent via-[rgba(0,119,255,0.3)] to-transparent py-[20px] backdrop-blur-md md:grid lg:gap-[30px] 2xl:gap-[40px]">
        <Image
          src="/images/pages/index/partners/snz.svg"
          alt="SNZ"
          className="h-auto w-[86.925px] max-w-full justify-self-center"
          width={86.925}
          height={45.75}
        />
        <Image
          src="/images/pages/index/partners/hashkey.svg"
          alt="HASHKEY"
          className="h-auto w-[180.712px] max-w-full justify-self-center"
          width={180.712}
          height={28.975}
        />
        <Image
          src="/images/pages/index/partners/web3-foundation.svg"
          alt="Web3 Foundation"
          className="h-auto w-[144.112px] max-w-full justify-self-center"
          width={144.112}
          height={61}
        />
        <Image
          src="/images/pages/index/partners/parity.svg"
          alt="Parity"
          className="h-auto w-[199.012px] max-w-full justify-self-center"
          width={199.012}
          height={50.325}
        />
        <Image
          src="/images/pages/index/partners/helixbox.svg"
          alt="Helixbox"
          className="h-auto w-[233.13px] max-w-full justify-self-center"
          width={233.13}
          height={45.75}
        />
      </div>

      <div className="w-full space-y-[20px] md:hidden">
        <div className="flex items-center justify-center gap-[30px]">
          <Image
            src="/images/pages/index/partners/snz.svg"
            alt="SNZ"
            className="h-[22.875px] w-[43.463px] flex-shrink-0"
            width={43.463}
            height={22.875}
          />
          <Image
            src="/images/pages/index/partners/hashkey.svg"
            alt="HASHKEY"
            className="h-[14.487px] w-[90.356px] flex-shrink-0"
            width={90.356}
            height={14.487}
          />
        </div>
        <div className="flex items-center justify-center gap-[30px]">
          <Image
            src="/images/pages/index/partners/web3-foundation.svg"
            alt="Web3 Foundation"
            className="h-[30.5px] w-[72.056px] flex-shrink-0"
            width={72.056}
            height={30.5}
          />
          <Image
            src="/images/pages/index/partners/parity.svg"
            alt="Parity"
            className="h-[25.162px] w-[99.506px] flex-shrink-0"
            width={99.506}
            height={25.162}
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/pages/index/partners/helixbox.svg"
            alt="Helixbox"
            className="h-[22.875px] w-[116.57px] flex-shrink-0"
            width={116.57}
            height={22.875}
          />
        </div>
      </div>
    </section>
  );
}

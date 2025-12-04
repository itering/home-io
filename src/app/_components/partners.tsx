'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Partners() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();

  return (
    <section className="container pb-[100px] pt-0 lg:py-[100px]" ref={ref1} style={styles1}>
      <div className="scrollbar-hide hidden items-center justify-between overflow-auto bg-gradient-to-r from-transparent via-[rgba(0,119,255,0.3)] to-transparent py-[20px] backdrop-blur-md md:flex md:gap-[50px]">
        <Image
          src="/images/pages/index/partners/snz.svg"
          alt="SNZ"
          className="h-[45.75px] w-[86.925px] flex-shrink-0"
          width={86.925}
          height={45.75}
        />
        <Image
          src="/images/pages/index/partners/degate.svg"
          alt="DeGate"
          className="h-[30.5px] w-[149.45px] flex-shrink-0"
          width={149.45}
          height={30.5}
        />
        <Image
          src="/images/pages/index/partners/hashkey.svg"
          alt="HASHKEY"
          className="h-[28.975px] w-[180.712px] flex-shrink-0"
          width={180.712}
          height={28.975}
        />
        <Image
          src="/images/pages/index/partners/web3-foundation.svg"
          alt="3"
          className="h-[61px] w-[144.112px] flex-shrink-0"
          width={144.112}
          height={61}
        />
        <Image
          src="/images/pages/index/partners/parity.svg"
          alt="Parity"
          className="h-[50.325px] w-[199.012px] flex-shrink-0"
          width={199.012}
          height={50.325}
        />
        <Image
          src="/images/pages/index/partners/ringdao.svg"
          alt="RingDAO"
          className="h-[45.75px] w-[199px] flex-shrink-0"
          width={199}
          height={45.75}
        />
        <Image
          src="/images/pages/index/partners/helixbox.svg"
          alt="Helixbox"
          className="h-[45.75px] w-[233.13px] flex-shrink-0"
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
            src="/images/pages/index/partners/degate.svg"
            alt="DeGate"
            className="h-[15.25px] w-[74.725px] flex-shrink-0"
            width={74.725}
            height={15.25}
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
            alt="3"
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
          <Image
            src="/images/pages/index/partners/ringdao.svg"
            alt="RingDAO"
            className="h-[22.875px] w-[99.5px] flex-shrink-0"
            width={99.5}
            height={22.875}
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

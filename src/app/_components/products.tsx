'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Products() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({
    delay: 0.2,
    opacityValue: 0.9
  });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({
    delay: 0.3,
    opacityValue: 0.9
  });
  const { ref: ref5, animatedStyles: styles5 } = useScrollAnimation({ delay: 0.3 });

  return (
    <section className="container space-y-[60px] py-[100px] lg:space-y-[100px]">
      <h2
        className="hidden text-[110px] font-normal uppercase leading-normal lg:block"
        ref={ref1}
        style={styles1}
      >
        WE&apos;RE BUILDING
      </h2>
      <h2 className="flex flex-col items-center justify-center text-[50px] font-normal uppercase leading-normal lg:hidden">
        <span>WE&apos;RE</span>
        <span>ENABLING</span>
      </h2>
      <div className="flex flex-col gap-[60px] lg:gap-[100px]">
        <div className="flex flex-col items-center justify-between gap-0 lg:flex-row lg:gap-[50px]">
          <div
            className="border-container hidden w-full flex-shrink-0 items-center justify-center rounded-[35px] lg:flex lg:h-[15.86vw] lg:max-h-[274px] lg:w-[49.18vw] lg:max-w-[850px]"
            ref={ref2}
            style={styles2}
          >
            <div className="flex h-full w-full items-center justify-center bg-black">
              <Image
                src="/images/pages/index/products-1.png"
                alt="Data"
                className="image-scale-hover h-[116px] w-[335px] lg:h-[12.384vw] lg:max-h-[214px] lg:w-[35.7vw] lg:max-w-[617px]"
                width={617}
                height={214}
              />
            </div>
          </div>
          <Image
            src="/images/pages/index/products-1.png"
            alt="Data"
            className="image-scale-hover mb-[50px] h-[116px] w-[335px] lg:hidden"
            width={335}
            height={116}
          />

          <div className="space-y-[10px]" ref={ref3} style={styles3}>
            <h3 className="text-center text-[34px] font-medium capitalize leading-normal tracking-[2px] lg:text-left lg:text-[54px]">
              Data
            </h3>
            <p className="text-center text-[16px] font-light leading-[32px] text-white/70 lg:text-left lg:text-[24px]">
              Delivering comprehensive blockchain data query and exploration services, combined with
              scenario-based intelligent analysis to unlock deeper data applications across various
              contexts.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-[10px] lg:flex-row lg:gap-[50px]">
          <div className="order-2 space-y-[10px] lg:order-1" ref={ref4} style={styles4}>
            <h3 className="text-center text-[34px] font-medium capitalize leading-normal tracking-[2px] lg:text-left lg:text-[54px]">
              DeFAI
            </h3>
            <p className="text-center text-[16px] font-light leading-[32px] text-white/70 lg:text-left lg:text-[24px]">
             Redefining decentralized finance by integrating AI-driven intent detection and execution logic—making liquidity access smarter, faster, and more transparent.
            </p>
          </div>
          <div
            className="border-container order-1 hidden w-full flex-shrink-0 items-center justify-center rounded-[35px] opacity-90 lg:order-2 lg:flex lg:h-[19.56vw] lg:max-h-[338px] lg:w-[49.18vw] lg:max-w-[850px]"
            ref={ref5}
            style={styles5}
          >
            <div className="flex h-full w-full items-center justify-center bg-black">
              <Image
                src="/images/pages/index/products-2.png"
                alt="DeFi"
                className="image-scale-hover mb-[50px] h-[117.886px] w-[335px] lg:h-[16.088vw] lg:max-h-[278px] lg:w-[45.72vw] lg:max-w-[790px]"
                width={790}
                height={278}
              />
            </div>
          </div>
          <Image
            src="/images/pages/index/products-2.png"
            alt="DeFi"
            className="image-scale-hover h-[117.886px] w-[335px] lg:hidden"
            width={335}
            height={117.886}
          />
        </div>
      </div>
    </section>
  );
}

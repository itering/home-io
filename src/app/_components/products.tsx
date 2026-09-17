'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/lib/language';
import { cn } from '@/lib/utils';

export default function Products() {
  const { copy, language } = useLanguage();
  const [aip, fde, agent] = copy.products.items;
  const bodyClassName = cn(
    'text-center font-light text-white/70 lg:text-left',
    language === 'zh-HK'
      ? 'text-[15px] leading-[30px] lg:text-[19px] lg:leading-[38px]'
      : 'text-[15px] leading-[28px] lg:text-[20px] lg:leading-[34px]'
  );
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

  const { ref: ref6, animatedStyles: styles6 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref7, animatedStyles: styles7 } = useScrollAnimation({ delay: 0.2 });

  return (
    <section
      id="products-services"
      className="container scroll-mt-[80px] space-y-[50px] py-[80px] lg:scroll-mt-[120px] lg:space-y-[70px] lg:py-[90px]"
    >
      <h2
        className="flex flex-col text-center text-[50px] leading-normal font-normal uppercase lg:text-left lg:text-[90px]"
        ref={ref1}
        style={styles1}
      >
        <span>{copy.products.headingDesktop}</span>
        <span
          className="mx-auto inline-block h-[8px] w-[192px] rounded-[40px] lg:mx-0"
          style={{
            background: 'linear-gradient(90deg, #0000C8 0%, #6AC6FF 100%)'
          }}
        ></span>
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
                src="/images/pages/index/hast-aip-v2.png"
                alt={aip.title}
                className="image-scale-hover h-auto w-[335px] lg:w-[45.72vw] lg:max-w-[790px]"
                width={2304}
                height={800}
              />
            </div>
          </div>
          <Image
            src="/images/pages/index/hast-aip-v2.png"
            alt={aip.title}
            className="image-scale-hover mb-[50px] h-auto w-[335px] lg:hidden"
            width={2304}
            height={800}
          />

          <div className="space-y-[10px]" ref={ref3} style={styles3}>
            <h3 className="text-center text-[34px] leading-normal font-medium tracking-[2px] lg:text-left lg:text-[54px]">
              {aip.title}
            </h3>
            <p className={bodyClassName}>{aip.body}</p>
            <a
              href={aip.href}
              className="block text-center text-[16px] text-white/70 underline underline-offset-4 hover:text-white lg:text-left"
            >
              {copy.products.learnMore}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-[10px] lg:flex-row lg:gap-[50px]">
          <div className="order-2 space-y-[10px] lg:order-1" ref={ref4} style={styles4}>
            <h3 className="text-center text-[34px] leading-normal font-medium tracking-[2px] lg:text-left lg:text-[54px]">
              {fde.title}
            </h3>
            <p className={bodyClassName}>{fde.body}</p>
            <a
              href={fde.href}
              className="block text-center text-[16px] text-white/70 underline underline-offset-4 hover:text-white lg:text-left"
            >
              {copy.products.learnMore}
            </a>
          </div>
          <div
            className="border-container order-1 hidden w-full flex-shrink-0 items-center justify-center rounded-[35px] opacity-90 lg:order-2 lg:flex lg:h-[19.56vw] lg:max-h-[338px] lg:w-[49.18vw] lg:max-w-[850px]"
            ref={ref5}
            style={styles5}
          >
            <div className="flex h-full w-full items-center justify-center bg-black">
              <Image
                src="/images/pages/index/hast-fde.png"
                alt={fde.title}
                className="image-scale-hover mb-[50px] h-auto w-[335px] lg:w-[45.72vw] lg:max-w-[790px]"
                width={2304}
                height={800}
              />
            </div>
          </div>
          <Image
            src="/images/pages/index/hast-fde.png"
            alt={fde.title}
            className="image-scale-hover h-auto w-[335px] lg:hidden"
            width={2304}
            height={800}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-0 lg:flex-row lg:gap-[50px]">
          <div
            className="border-container hidden w-full flex-shrink-0 items-center justify-center rounded-[35px] lg:flex lg:h-[15.86vw] lg:max-h-[274px] lg:w-[49.18vw] lg:max-w-[850px]"
            ref={ref6}
            style={styles6}
          >
            <div className="flex h-full w-full items-center justify-center bg-black">
              <Image
                src="/images/pages/index/hast-agent-v6.png"
                alt={agent.title}
                className="image-scale-hover h-auto w-[285px] lg:w-[38.86vw] lg:max-w-[672px]"
                width={2304}
                height={800}
              />
            </div>
          </div>
          <Image
            src="/images/pages/index/hast-agent-v6.png"
            alt={agent.title}
            className="image-scale-hover mb-[50px] h-auto w-[285px] lg:hidden"
            width={2304}
            height={800}
          />

          <div className="space-y-[10px]" ref={ref7} style={styles7}>
            <h3 className="text-center text-[34px] leading-normal font-medium tracking-[2px] lg:text-left lg:text-[54px]">
              {agent.title}
            </h3>
            <p className={bodyClassName}>{agent.body}</p>
            <a
              href={agent.href}
              className="block text-center text-[16px] text-white/70 underline underline-offset-4 hover:text-white lg:text-left"
            >
              {copy.products.learnMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

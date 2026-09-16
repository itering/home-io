'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/lib/language';
import { cn } from '@/lib/utils';

export default function Hero() {
  const { copy, language } = useLanguage();
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.3 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.6 });

  return (
    <section className="container flex min-h-[calc(100svh-50px)] w-full flex-col items-center justify-center gap-[24px] pt-[10px] pb-[40px] md:min-h-[calc(100svh-100px)] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px] lg:pt-0 lg:pb-[40px]">
      <Image
        src="/images/pages/index/hero.png"
        alt={copy.hero.imageAlt}
        className="3xl:max-h-[760px] 3xl:max-w-[700px] ml-0 h-[315px] w-[335px] object-contain lg:-ml-[30px] lg:h-[44vw] lg:max-h-[700px] lg:w-[40vw] lg:max-w-[650px] lg:object-contain 2xl:-ml-[70px]"
        ref={ref1}
        style={styles1}
        width={763}
        height={876}
      />

      <div className="flex flex-col items-center gap-[24px] leading-normal font-bold lg:items-end">
        <p
          className={cn(
            '3xl:text-[32px] font-sans text-[13px] font-medium text-white/60 lg:text-[27px]',
            language === 'en' ? 'tracking-[4.612px]' : 'tracking-[2px]'
          )}
          ref={ref2}
          style={styles2}
        >
          {copy.hero.eyebrow}
        </p>
        <h1 className="flex flex-col items-center lg:items-end" ref={ref3} style={styles3}>
          {copy.hero.titleLines.map((line) => (
            <span
              key={line}
              className={cn(
                'block font-sans font-extrabold text-white',
                language === 'en'
                  ? '3xl:text-[80px] 3xl:leading-[100px] text-[36px] tracking-[4.612px] lg:text-[60px] lg:leading-[80px]'
                  : '3xl:text-[92px] 3xl:leading-[108px] text-[32px] leading-[46px] tracking-[2px] whitespace-nowrap sm:text-[38px] lg:text-[72px] lg:leading-[88px]',
                language === 'en' && line.includes('AI NATIVE') ? 'whitespace-nowrap' : ''
              )}
            >
              {line}
            </span>
          ))}
          <span
            className="mt-[22px] inline-block h-[8px] w-[256px] rounded-[104px] bg-white"
            style={{
              boxShadow: '0px 0px 52.161px 16.692px #2D7AFF'
            }}
          ></span>
          <span className="mt-[18px] block font-sans text-[11px] font-medium tracking-[3px] text-white/55 uppercase lg:text-[13px]">
            {copy.hero.studio}
          </span>
        </h1>
      </div>
    </section>
  );
}

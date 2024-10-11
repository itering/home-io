'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.3 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.6 });

  return (
    <section className="container flex w-full flex-col items-center justify-center gap-[30px] py-[40px] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:py-[50px]">
      <Image
        src="/images/pages/index/hero.png"
        alt="hero"
        className="ml-0 h-[353px] w-[335px] object-cover lg:-ml-[50px] lg:h-[50.69vw] lg:max-h-[876px] lg:w-[44.15vw] lg:max-w-[763px] 2xl:-ml-[100px]"
        ref={ref1}
        style={styles1}
        width={763}
        height={876}
      />

      <div className="flex flex-col items-end gap-[26px] font-bold uppercase leading-normal">
        <p
          className="font-sans text-[13px] font-medium tracking-[4.612px] text-white/60 lg:text-[28px] 3xl:text-[32px]"
          ref={ref2}
          style={styles2}
        >
          Research, invest, build The
        </p>
        <h1
          className="flex flex-col items-center uppercase lg:items-end"
          ref={ref3}
          style={styles3}
        >
          <span className="block whitespace-nowrap font-sans text-[45px] font-extrabold tracking-[4.612px] text-white lg:text-[80px] lg:leading-[80px] 3xl:text-[100px] 3xl:leading-[100px]">
            TRUST-FREE
          </span>
          <span className="block font-sans text-[45px] font-extrabold tracking-[4.612px] text-white lg:text-[80px] lg:leading-[80px] 3xl:text-[100px] 3xl:leading-[100px]">
            FUTURE
          </span>
          <span
            className="mt-[26px] inline-block h-[8.346px] w-[256.632px] rounded-[104.322px] bg-white"
            style={{
              boxShadow: '0px 0px 52.161px 16.692px #2D7AFF'
            }}
          ></span>
        </h1>
      </div>
    </section>
  );
}

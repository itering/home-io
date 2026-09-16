'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Culture() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.3 });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({ delay: 0.4 });

  const { ref: ref5, animatedStyles: styles5 } = useScrollAnimation({ delay: 0.5 });

  return (
    <section className="container space-y-[60px] py-[100px] lg:space-y-[100px]">
      <h2
        className="hidden text-[110px] leading-normal font-normal uppercase lg:block"
        ref={ref1}
        style={styles1}
      >
        Company Culture
      </h2>
      <h2 className="flex flex-col items-center justify-center text-[50px] leading-normal font-normal uppercase lg:hidden">
        <span>Company</span>
        <span>Culture</span>
      </h2>
      <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 lg:gap-[100px]">
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref2}
          style={styles2}
        >
          <Image
            src="/images/pages/index/culture-1.png"
            alt="Human + Agent team"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">
            Human + Agent team
          </h3>
          <p className="text-center text-[16px] leading-[22px] font-light text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            Humans and agent colleagues work at roughly a 1:1 ratio. Agents are part of daily work,
            pairing human judgment with agent execution. We practice this model ourselves and bring
            it to our clients.
          </p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref3}
          style={styles3}
        >
          <Image
            src="/images/pages/index/culture-2.png"
            alt="Built to deliver"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">Built to deliver</h3>
          <p className="text-center text-[16px] leading-[22px] font-light text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            Research matters, but delivery matters more. We take ideas through engineering,
            real-world validation, and production deployment.
          </p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref4}
          style={styles4}
        >
          <Image
            src="/images/pages/index/culture-3.png"
            alt="Battle-tested experience"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">
            Battle-tested experience
          </h3>
          <p className="text-center text-[16px] leading-[22px] font-light text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            Our team brings real experience from traditional industries and from building and
            operating complex Web3 products, enabling us to put AI to work across sectors.
          </p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref5}
          style={styles5}
        >
          <Image
            src="/images/pages/index/vision-2.png"
            alt="Rooted in Asia"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">Rooted in Asia</h3>
          <p className="text-center text-[16px] leading-[22px] font-light text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            Headquartered in Singapore and active across Asia, we connect frontier technology with
            local operations and collaborate across markets, cultures, and industries.
          </p>
        </article>
      </div>
    </section>
  );
}

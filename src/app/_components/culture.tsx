'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Culture() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.3 });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({ delay: 0.4 });

  return (
    <section className="container space-y-[60px] py-[100px] lg:space-y-[100px]">
      <h2
        className="hidden text-[110px] font-normal uppercase leading-normal lg:block"
        ref={ref1}
        style={styles1}
      >
        Company Culture
      </h2>
      <h2 className="flex flex-col items-center justify-center text-[50px] font-normal uppercase leading-normal lg:hidden">
        <span>Company</span>
        <span>Culture</span>
      </h2>
      <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-3 lg:gap-[160px]">
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref2}
          style={styles2}
        >
          <Image
            src="/images/pages/index/culture-1.png"
            alt="Professionalism"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] font-bold leading-normal tracking-[2px]">Professionalism</h3>
          <p className="text-center text-[16px] font-light leading-[22px] text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            We prioritize professionalism by expecting every team member to be highly skilled and
            fully committed to excellence. Individuals take ownership of their expertise,
            continuously striving for growth, improvement, and delivering their best.
          </p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref3}
          style={styles3}
        >
          <Image
            src="/images/pages/index/culture-2.png"
            alt="Collaboration"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] font-bold leading-normal tracking-[2px]">Collaboration</h3>
          <p className="text-center text-[16px] font-light leading-[22px] text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            Our culture centers on continuous learning and enhancing knowledge to make better
            decisions. We value communication and collaboration, which empower self-driven teams to
            work together towards shared goals, focusing on sustainable growth and long-term
            success.
          </p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref4}
          style={styles4}
        >
          <Image
            src="/images/pages/index/culture-3.png"
            alt="Innovation"
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <h3 className="text-[34px] font-bold leading-normal tracking-[2px]">Innovation</h3>
          <p className="text-center text-[16px] font-light leading-[22px] text-white/70 lg:text-left lg:text-[24px] lg:leading-[32px]">
            As a Crypto Native organization, we don’t just observe Web3 trends; we actively shape
            them. Our commitment lies in driving forward the transformative movement of this new
            era, creating value by staying ahead of the curve.
          </p>
        </article>
      </div>
    </section>
  );
}

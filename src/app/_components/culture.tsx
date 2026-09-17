'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/lib/language';
import { cn } from '@/lib/utils';

export default function Culture() {
  const { copy, language } = useLanguage();
  const [humanAgent, delivery, experience, asia] = copy.culture.items;
  const bodyClassName = cn(
    'text-center font-light text-white/70 lg:text-left',
    language === 'zh-HK'
      ? 'text-[15px] leading-[30px] lg:text-[19px] lg:leading-[38px]'
      : 'text-[15px] leading-[28px] lg:text-[20px] lg:leading-[34px]'
  );
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.3 });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({ delay: 0.4 });

  const { ref: ref5, animatedStyles: styles5 } = useScrollAnimation({ delay: 0.5 });

  return (
    <section
      id="team"
      className="container scroll-mt-[80px] space-y-[50px] py-[80px] lg:scroll-mt-[120px] lg:space-y-[70px] lg:py-[90px]"
    >
      <h2
        className="flex flex-col text-center text-[50px] leading-normal font-normal uppercase lg:text-left lg:text-[90px]"
        ref={ref1}
        style={styles1}
      >
        <span>{copy.culture.headingDesktop}</span>
        <span
          className="mx-auto inline-block h-[8px] w-[192px] rounded-[40px] lg:mx-0"
          style={{
            background: 'linear-gradient(90deg, #0000C8 0%, #6AC6FF 100%)'
          }}
        ></span>
      </h2>
      <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 lg:gap-[100px]">
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref2}
          style={styles2}
        >
          <Image
            src="/images/pages/index/culture-1.png"
            alt={humanAgent.imageAlt}
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <div className="space-y-[10px] text-center lg:text-left">
            <span className="block text-[20px] leading-normal font-light tracking-[2px] text-white/70">
              {humanAgent.number}
            </span>
            <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">
              {humanAgent.title}
            </h3>
          </div>
          <p className={bodyClassName}>{humanAgent.body}</p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref3}
          style={styles3}
        >
          <Image
            src="/images/pages/index/culture-2.png"
            alt={delivery.imageAlt}
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <div className="space-y-[10px] text-center lg:text-left">
            <span className="block text-[20px] leading-normal font-light tracking-[2px] text-white/70">
              {delivery.number}
            </span>
            <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">
              {delivery.title}
            </h3>
          </div>
          <p className={bodyClassName}>{delivery.body}</p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref4}
          style={styles4}
        >
          <Image
            src="/images/pages/index/culture-3.png"
            alt={experience.imageAlt}
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <div className="space-y-[10px] text-center lg:text-left">
            <span className="block text-[20px] leading-normal font-light tracking-[2px] text-white/70">
              {experience.number}
            </span>
            <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">
              {experience.title}
            </h3>
          </div>
          <p className={bodyClassName}>{experience.body}</p>
        </article>
        <article
          className="flex w-full flex-col items-center justify-center space-y-[40px] lg:block"
          ref={ref5}
          style={styles5}
        >
          <Image
            src="/images/pages/index/vision-2.png"
            alt={asia.imageAlt}
            className="image-scale-hover size-[180px]"
            width={180}
            height={180}
          />
          <div className="space-y-[10px] text-center lg:text-left">
            <span className="block text-[20px] leading-normal font-light tracking-[2px] text-white/70">
              {asia.number}
            </span>
            <h3 className="text-[34px] leading-normal font-bold tracking-[2px]">{asia.title}</h3>
          </div>
          <p className={bodyClassName}>{asia.body}</p>
        </article>
      </div>
    </section>
  );
}

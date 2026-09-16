'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const beliefs = [
  {
    text: 'AI Native is not a feature. It changes how organizations bring together talent, knowledge, and execution.',
    imagePath: '/images/pages/index/beliefs-1.png'
  },
  {
    text: 'The next generation of companies will be built by hybrid teams of humans and agents.',
    imagePath: '/images/pages/index/beliefs-2.png'
  }
];

export default function Beliefs() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  const imageOpacity1 = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1]);
  const imageOpacities = [imageOpacity1, imageOpacity2];

  const titleTranslateY = useTransform(scrollYProgress, [0.96, 1], [0, -50]);
  const titleOpacity = useTransform(scrollYProgress, [0.96, 1], [1, 0]);

  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({
    delay: 0.2
  });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({
    delay: 0.3
  });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({
    delay: 0.4
  });

  return (
    <section ref={containerRef} className="relative py-[100px] lg:py-0">
      <motion.div
        className="sticky top-0 hidden bg-transparent pb-[20px] backdrop-blur-[50px] lg:block"
        style={{ y: titleTranslateY, opacity: titleOpacity }}
      >
        <h2
          className="container flex flex-col text-[110px] leading-normal font-normal uppercase"
          ref={ref1}
          style={styles1}
        >
          <span>WE BELIEVE</span>
          <span
            className="inline-block h-[9px] w-[192px] rounded-[40px]"
            style={{
              background: 'linear-gradient(90deg, #0000C8 0%, #6AC6FF 100%)'
            }}
          ></span>
        </h2>
      </motion.div>
      <div className="container hidden justify-between lg:flex lg:gap-[100px]">
        <div className="w-[44.21vw] max-w-[764px]">
          {beliefs.map((belief, index) => (
            <div key={index} className="flex h-screen items-center">
              <p className="text-[44px] leading-[60px] font-normal">{belief.text}</p>
            </div>
          ))}
        </div>
        <div className="sticky top-0 h-screen w-[29.98vw] max-w-[518px]">
          <div className="relative flex h-full w-full items-center justify-center">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  opacity: imageOpacities[index],
                  backgroundImage: `url(${belief.imagePath})`
                }}
              ></motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <h2
        className="container mb-[50px] text-center text-[50px] leading-normal font-normal uppercase lg:hidden"
        ref={ref2}
        style={styles2}
      >
        WE BELIEVE
      </h2>
      <div className="container flex w-full flex-col items-center gap-[50px] lg:hidden">
        <div
          className="flex flex-col items-center justify-center gap-[50px]"
          ref={ref3}
          style={styles3}
        >
          <Image
            src="/images/pages/index/beliefs-1.png"
            alt="belief"
            className="size-[275px]"
            width={275}
            height={275}
          />
          <p className="text-center text-[20px] leading-[30px] font-medium">{beliefs[0].text}</p>
        </div>

        <div
          className="flex flex-col items-center justify-center gap-[50px]"
          ref={ref4}
          style={styles4}
        >
          <Image
            src="/images/pages/index/beliefs-2.png"
            alt="belief"
            className="size-[275px]"
            width={275}
            height={275}
          />
          <p className="text-center text-[20px] leading-[30px] font-medium">{beliefs[1].text}</p>
        </div>
      </div>
    </section>
  );
}

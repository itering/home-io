'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/lib/language';

const beliefImages = [
  '/images/pages/index/beliefs-1.png',
  '/images/pages/index/beliefs-2.png',
  '/images/pages/index/beliefs-3.png'
];

export default function Beliefs() {
  const { copy } = useLanguage();
  const beliefs = copy.beliefs.statements.map((text, index) => ({
    text,
    imagePath: beliefImages[index]
  }));
  const beliefCount = beliefs.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({
    delay: 0.2
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % beliefCount);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [beliefCount]);

  return (
    <section className="container py-[70px] lg:py-[90px]">
      <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-[80px]">
        <div ref={ref1} style={styles1} className="space-y-[40px]">
          <h2 className="flex flex-col text-center text-[50px] leading-normal font-normal uppercase lg:text-left lg:text-[90px]">
            <span>{copy.beliefs.heading}</span>
            <span
              className="mx-auto inline-block h-[8px] w-[192px] rounded-[40px] lg:mx-0"
              style={{
                background: 'linear-gradient(90deg, #0000C8 0%, #6AC6FF 100%)'
              }}
            ></span>
          </h2>
          <div className="relative min-h-[180px] lg:min-h-[220px]" aria-live="polite">
            {beliefs.map((belief, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center"
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : 18
                }}
                initial={false}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <p className="text-center text-[24px] leading-[36px] font-normal lg:text-left lg:text-[34px] lg:leading-[48px]">
                  {belief.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div ref={ref2} style={styles2} className="relative mx-auto h-[300px] w-full max-w-[430px]">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.imagePath}
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                scale: activeIndex === index ? 1 : 0.96
              }}
              initial={false}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <Image
                src={belief.imagePath}
                alt={copy.beliefs.imageAlt}
                className="size-[260px] object-contain lg:size-[360px]"
                width={360}
                height={360}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

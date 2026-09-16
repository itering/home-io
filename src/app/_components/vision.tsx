'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Vision() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.1 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.1 });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref5, animatedStyles: styles5 } = useScrollAnimation({ delay: 0.3 });

  return (
    <motion.section className="container space-y-0 py-[100px] lg:space-y-[50px]">
      <h2
        className="mb-[20px] text-center text-[50px] leading-normal font-normal uppercase lg:mb-0 lg:text-end lg:text-[110px]"
        ref={ref1}
        style={styles1}
      >
        Our Studio
      </h2>
      <p
        className="pb-[60px] text-center text-[20px] leading-[30px] font-medium lg:mb-0 lg:text-end lg:text-[34px] lg:leading-[44px] lg:font-normal"
        ref={ref2}
        style={styles2}
      >
        Itering was built for an age where humans and agents work together.
      </p>
      <div className="grid grid-cols-1 gap-[50px] lg:grid-cols-3 lg:justify-items-center lg:py-[50px]">
        <div
          className="relative flex h-auto w-full flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[40px] bg-transparent px-0 py-0 text-center lg:w-full lg:max-w-[420px] lg:bg-[#161B26] lg:px-[30px] lg:py-[50px]"
          ref={ref3}
          style={styles3}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: hoveredIndex === 0 ? 1 : 0,
              y: hoveredIndex === 0 ? 0 : 20
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 hidden h-full w-full items-center justify-center rounded-[40px] bg-[#161b26]/70 px-[20px] text-[16px] leading-[32px] font-normal backdrop-blur-[5px] lg:flex lg:px-[30px] xl:text-[20px]"
          >
            <p>Agents are part of daily work, pairing human judgment with agent execution.</p>
          </motion.div>
          <Image
            src="/images/pages/index/vision-1.png"
            alt="Human + Agent team"
            className="h-[230px] w-[230px] lg:h-[13.31vw] lg:max-h-[230px] lg:w-[13.31vw] lg:max-w-[230px]"
            width={230}
            height={230}
          />
          <h3
            className="lead-[40px] text-[28px] font-medium lg:h-[84px] lg:text-[30px] lg:leading-[44px]"
            title="Human + Agent team"
          >
            Human + Agent team
          </h3>
          <p className="block text-[16px] leading-[26px] font-normal lg:hidden">
            Agents are part of daily work, pairing human judgment with agent execution.
          </p>
        </div>

        <div
          className="relative flex h-auto w-full flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[40px] bg-transparent px-0 py-0 text-center lg:w-full lg:max-w-[420px] lg:bg-[#161B26] lg:px-[30px] lg:py-[50px]"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
          ref={ref4}
          style={styles4}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: hoveredIndex === 1 ? 1 : 0,
              y: hoveredIndex === 1 ? 0 : 20
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 hidden h-full w-full items-center justify-center rounded-[40px] bg-[#161b26]/70 px-[20px] text-[16px] leading-[32px] font-normal backdrop-blur-[5px] lg:flex lg:px-[30px] xl:text-[20px]"
          >
            <p>Research matters, but delivery matters more.</p>
          </motion.div>
          <Image
            src="/images/pages/index/vision-2.png"
            alt="Built to deliver"
            className="h-[230px] w-[230px] lg:h-[13.31vw] lg:max-h-[230px] lg:w-[13.31vw] lg:max-w-[230px]"
            width={230}
            height={230}
          />
          <h3
            className="lead-[40px] text-[28px] font-medium lg:h-[84px] lg:text-[30px] lg:leading-[44px]"
            title="Built to deliver"
          >
            Built to deliver
          </h3>
          <p className="block text-[16px] leading-[26px] font-normal lg:hidden">
            Research matters, but delivery matters more.
          </p>
        </div>

        <div
          className="relative flex h-auto w-full flex-col items-center justify-center gap-[20px] overflow-hidden rounded-[40px] bg-transparent px-0 py-0 text-center lg:w-full lg:max-w-[420px] lg:bg-[#161B26] lg:px-[30px] lg:py-[50px]"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
          ref={ref5}
          style={styles5}
        >
          <motion.div
            initial={false}
            animate={{
              opacity: hoveredIndex === 2 ? 1 : 0,
              y: hoveredIndex === 2 ? 0 : 20
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-0 hidden h-full w-full items-center justify-center rounded-[40px] bg-[#161b26]/70 px-[20px] text-[16px] leading-[32px] font-normal backdrop-blur-[5px] lg:flex lg:px-[30px] xl:text-[20px]"
          >
            <p>
              Our team brings real experience from traditional industries and from building and
              operating complex Web3 products, enabling us to put AI to work across sectors.
            </p>
          </motion.div>
          <Image
            src="/images/pages/index/vision-3.png"
            alt="Battle-tested experience"
            className="h-[230px] w-[230px] lg:h-[13.31vw] lg:max-h-[230px] lg:w-[13.31vw] lg:max-w-[230px]"
            width={230}
            height={230}
          />
          <h3
            className="lead-[40px] text-[28px] font-medium lg:h-[84px] lg:text-[30px] lg:leading-[44px]"
            title="Battle-tested experience"
          >
            Battle-tested experience
          </h3>
          <p className="block text-[16px] leading-[26px] font-normal lg:hidden">
            Our team brings real experience from traditional industries and from building and
            operating complex Web3 products, enabling us to put AI to work across sectors.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

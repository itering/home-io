'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const positions = [
  {
    final: { left: '-21.58%', top: '17.97%' },
    initial: { left: '-9.58%', top: '24.97%' },
    size: { maxHeight: 328, maxWidth: 328, height: '18.98vw', width: '18.98vw' },
    zIndex: 20
  },
  {
    final: { left: '8.65%', top: '-18%' },
    initial: { left: '12.65%', top: '-8%' },
    size: { maxHeight: 228, maxWidth: 228, height: '13.19vw', width: '13.19vw' },
    zIndex: 0
  },
  {
    final: { left: '50%', top: '50%', x: '-50%', y: '-50%' },
    initial: { left: '50%', top: '50%', x: '-50%', y: '-50%' },
    size: { maxHeight: 412, maxWidth: 412, height: '23.89vw', width: '23.89vw' },
    zIndex: 0
  },
  {
    final: { right: '0.16%', bottom: '-12.4%' },
    initial: { right: '10.32%', bottom: '-3.6%' },
    size: { maxHeight: 164.418, maxWidth: 164.418, height: '9.46vw', width: '9.46vw' },
    zIndex: 0
  },
  {
    final: { right: '-17.1%', top: '-10.4%' },
    initial: { right: '-11.1%', top: '3.2%' },
    size: { maxHeight: 346.489, maxWidth: 346.489, height: '20.03vw', width: '20.03vw' },
    zIndex: 20
  }
];
export default function Title() {
  const [isHovering, setIsHovering] = useState(false);
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();
  const imageVariants = {
    initial: (i: number) => ({
      ...positions[i].initial,
      scale: 1,
      opacity: 1
    }),

    hover: (i: number) => ({
      ...positions[i].final,
      scale: 1.2,
      opacity: 1
    })
  };

  return (
    <motion.section
      ref={ref1}
      style={styles1}
      className="container relative my-[100px] hidden md:block"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      initial="initial"
      animate={isHovering ? 'hover' : 'initial'}
    >
      <div className="relative mx-auto flex h-[28.94vw] max-h-[500px] w-[63.19vw] max-w-[1092px] items-center justify-center">
        <h1 className="z-10 text-center font-sans text-[45px] font-bold uppercase leading-[100px] tracking-[5px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px]">
          OUR PORTFOLIO
        </h1>

        {positions.map((_, i) => (
          <motion.img
            key={i}
            src={`/images/pages/portfolio/hero/object-${i + 1}.png`}
            alt={`3D Object ${i + 1}`}
            className="absolute"
            custom={i}
            variants={imageVariants}
            style={{
              height: positions[i].size.height,
              width: positions[i].size.width,
              maxHeight: positions[i].size.maxHeight,
              maxWidth: positions[i].size.maxWidth,
              zIndex: positions[i].zIndex
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </motion.section>
  );
}

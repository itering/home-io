'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const positions = [
  {
    size: { height: 185, width: 113 },
    zIndex: 20,
    src: '/images/pages/portfolio/hero/mobile/object-1.png'
  },
  {
    position: { left: '50%', top: '50%', transform: 'translate(-50%, -50%)' },
    size: { height: 262, width: 262 },
    zIndex: 0,
    src: '/images/pages/portfolio/hero/mobile/object-2.png'
  },
  {
    size: { height: 174, width: 106 },
    zIndex: 0,
    src: '/images/pages/portfolio/hero/mobile/object-3.png'
  }
];
export default function TitleMobile() {
  const { ref: ref1, animatedStyles: styles1 } = useScrollAnimation();

  return (
    <section ref={ref1} style={styles1} className="container relative my-[50px] block md:hidden">
      <div className="relative mx-auto flex h-[188px] w-full items-center justify-center">
        <h1 className="z-10 flex flex-col text-center font-sans text-[45px] font-extrabold uppercase leading-normal tracking-[5px] lg:hidden">
          <span>OUR</span>
          <span>PORTFOLIO</span>
        </h1>
        <Image
          src={positions[0].src}
          alt={`3D Object`}
          width={positions[0].size.width}
          height={positions[0].size.height}
          className="absolute -bottom-[35%] -left-[20px] sm:-left-[68px]"
          style={{
            height: positions[0].size.height,
            width: positions[0].size.width,
            zIndex: positions[0].zIndex
          }}
        />
        <Image
          src={positions[1].src}
          alt={`3D Object`}
          width={positions[1].size.width}
          height={positions[1].size.height}
          className="absolute"
          style={{
            height: positions[1].size.height,
            width: positions[1].size.width,
            ...positions[1].position,
            zIndex: positions[1].zIndex
          }}
        />
        <Image
          src={positions[2].src}
          width={positions[2].size.width}
          height={positions[2].size.height}
          alt={`3D Object`}
          className="pointer-events-none absolute -right-[20px] -top-[40%] sm:-right-[68px]"
          style={{
            height: positions[2].size.height,
            width: positions[2].size.width,
            zIndex: positions[2].zIndex
          }}
        />
      </div>
    </section>
  );
}

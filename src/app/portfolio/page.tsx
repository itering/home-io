'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MagicCard } from '@/components/magic-card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Title from '@/app/portfolio/_components/title';
import TitleMobile from '@/app/portfolio/_components/title-mobile';
import { StructuredData } from '@/components/StructuredData';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://itering.io/#organization',
      name: 'Itering',
      url: 'https://itering.io/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://itering.io/images/favicon/favicon512.png'
      },
      description: 'Itering - Research, Invest, Build The Trust-Free Future.',
      sameAs: ['https://x.com/itering_io', 'https://github.com/itering']
    },
    {
      '@type': 'WebPage',
      '@id': 'https://itering.io/',
      url: 'https://itering.io/',
      name: 'Itering - Research, Invest, Build The Trust-Free Future.',
      isPartOf: { '@id': 'https://itering.io/#organization' },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://itering.io/'
      },
      description: 'Itering - Research, Invest, Build The Trust-Free Future.'
    },
    {
      '@type': 'WebPage',
      '@id': 'https://itering.io/portfolio#webpage',
      url: 'https://itering.io/portfolio.html',
      name: 'Itering - Research, Invest, Build The Trust-Free Future.',
      isPartOf: { '@id': 'https://itering.io/#website' },
      about: { '@id': 'https://itering.io/#organization' },
      description:
        "Explore Itering's innovative blockchain projects: Subscan, Helixbox, and RingDAO."
    },
    {
      '@type': 'Project',
      name: 'Subscan',
      description:
        'Subscan Is A Robust Multi-Chain Explorer For Polkadot, Kusama, And EVM-Compatible Networks.',
      url: 'https://www.subscan.io/'
    },
    {
      '@type': 'Project',
      name: 'Helixbox',
      description: 'A Multi-Chain DeFi Application Suite Built On EVM Infrastructure',
      url: 'https://helix.box/'
    },
    {
      '@type': 'Project',
      name: 'RingDAO',
      description: 'Empowering Chains To Communicate, Powering Abstraction To Innovate.',
      url: 'https://www.ringdao.org/'
    }
  ]
};

export default function Work() {
  const { ref: ref2, animatedStyles: styles2 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref3, animatedStyles: styles3 } = useScrollAnimation({ delay: 0.2 });
  const { ref: ref4, animatedStyles: styles4 } = useScrollAnimation({ delay: 0.2 });

  return (
    <>
      <Title />
      <TitleMobile />
      <section className="container mb-[50px] space-y-[50px] lg:mb-[100px] lg:space-y-[100px]">
        <MagicCard
          className="flex flex-col items-center justify-center gap-[50px] rounded-[35px] bg-black/10 px-[20px] py-[20px] opacity-90 backdrop-blur-[28px] lg:px-[50px] lg:py-[30px]"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.30)',
            ...styles2
          }}
          ref={ref2}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <Image
                src="/images/pages/work/subscan.svg"
                alt="Subscan Logo"
                className="hidden size-[55px] rounded-full lg:inline lg:size-[110px]"
                width={110}
                height={110}
              />
              <div className="space-y-[20px] lg:space-y-[10px]">
                <div className="flex items-center gap-[20px]">
                  <Image
                    src="/images/pages/work/subscan.svg"
                    alt="Subscan Logo"
                    className="size-[55px] rounded-full lg:hidden"
                    width={55}
                    height={55}
                  />
                  <h2 className="text-[26px] font-bold leading-normal lg:text-[50px]">Subscan</h2>
                </div>
                <p className="text-[18px] font-semibold leading-[26px] tracking-[1px] text-white lg:text-[24px] lg:font-medium lg:leading-[30px] lg:text-white/70">
                  Web3 Portal to the Substrate & EVM Ecosystems
                </p>
              </div>
            </div>
            <Link
              href="https://www.subscan.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[52px] w-[170px] items-center justify-center gap-[10px] rounded-[32px] bg-gradient-to-br from-[#FF99B9] to-[#D030DD] text-[18px] font-bold capitalize leading-[32px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 lg:flex"
            >
              Learn More ›
            </Link>
          </div>
          <div className="my-[20px] h-[1px] w-full bg-white/30 lg:my-[50px]"></div>
          <div className="flex flex-col items-start gap-[20px]">
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
              Subscan is a robust multi-chain explorer for Polkadot, Kusama, and EVM-compatible
              networks.
            </p>
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
              With Subscan, our goal is to enable users to easily explore transactions, accounts,
              blocks, and network statuses across both Substrate and EVM environments. Through
              advanced data analytics and real-time insights, Subscan empowers developers,
              validators, and the Web3 community to dive deeper into blockchain activities.
            </p>
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
              Offering advanced data analytics and real-time insights, Subscan empowers developers,
              validators, and the Web3 community to dive deeper into blockchain activities. With
              ongoing support for new networks, Subscan ensures reliable infrastructure for the
              evolving Web3 ecosystem.
            </p>
            <Link
              href="https://www.subscan.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex h-[34px] w-[160px] items-center justify-center gap-[10px] rounded-[32px] bg-gradient-to-br from-[#FF99B9] to-[#D030DD] text-[16px] font-bold capitalize leading-[32px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 lg:hidden"
            >
              Learn More ›
            </Link>
          </div>
        </MagicCard>

        <MagicCard
          className="flex flex-col items-center justify-center gap-[50px] rounded-[35px] bg-black/10 px-[20px] py-[20px] opacity-90 backdrop-blur-[28px] lg:px-[50px] lg:py-[30px]"
          ref={ref3}
          style={{
            border: '1px solid rgba(255, 255, 255, 0.30)',
            ...styles3
          }}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <Image
                src="/images/pages/work/helixbox.svg"
                alt="Helixbox Logo"
                className="hidden size-[55px] rounded-full lg:inline lg:size-[110px]"
                width={110}
                height={110}
              />
              <div className="space-y-[20px] lg:space-y-[10px]">
                <div className="flex items-center gap-[20px]">
                  <Image
                    src="/images/pages/work/helixbox.svg"
                    alt="Helixbox Logo"
                    className="size-[55px] rounded-full lg:hidden"
                    width={55}
                    height={55}
                  />
                  <h2 className="text-[26px] font-bold leading-normal lg:text-[50px]">Helixbox</h2>
                </div>
                <p className="text-[18px] font-semibold leading-[26px] tracking-[1px] text-white lg:text-[24px] lg:font-medium lg:leading-[30px] lg:text-white/70">
                  An AI-driven DeFi Terminal for intent-based, seamless interaction.
                </p>
              </div>
            </div>
            <Link
              href="https://helix.box/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[52px] w-[170px] items-center justify-center gap-[10px] rounded-[32px] bg-gradient-to-br from-[#0085FF] to-[#0085FF] text-[18px] font-bold capitalize leading-[32px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 lg:flex"
            >
              Learn More ›
            </Link>
          </div>
          <div className="my-[20px] h-[1px] w-full bg-white/30 lg:my-[50px]"></div>

          <div className="flex flex-col items-start gap-[20px]">
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
              Helixbox offers services such as cross-chain token bridge, liquidity aggregation and
              sharing, asset swaps, lending, and a variety of DeFi product combinations. It provides
              users with a secure, fast, low-cost, and low-slippage interaction experience.
            </p>
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
              The currently launched cross-chain token bridge service features a fully
              decentralized, secure, and efficient protocol for self-custodied asset transfers,
              seamlessly integrating with other DeFi protocols.
            </p>
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
              Helixbox&apos;s DEX and other DeFi services gather diverse liquidity sources to reduce
              transaction fees, minimize slippage, and prevent MEV attacks. By integrating with
              high-quality DeFi applications, Helixbox maximizes user returns and minimizes costs while
              ensuring transaction security.
            </p>
            <Link
              href="https://helixbridge.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex h-[34px] w-[160px] items-center justify-center gap-[10px] rounded-[32px] bg-gradient-to-br from-[#0085FF] to-[#0085FF] text-[16px] font-bold capitalize leading-[32px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 lg:hidden"
            >
              Learn More ›
            </Link>
          </div>
        </MagicCard>

        <MagicCard
          className="flex flex-col items-center justify-center gap-[50px] rounded-[35px] bg-black/10 px-[20px] py-[20px] opacity-90 backdrop-blur-[28px] lg:px-[50px] lg:py-[30px]"
          ref={ref4}
          style={{
            border: '1px solid rgba(255, 255, 255, 0.30)',
            ...styles4
          }}
        >
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-[50px]">
              <Image
                src="https://degov.ai/icon.png"
                alt="degov.ai Logo"
                className="hidden size-[55px] rounded-full lg:inline lg:size-[110px]"
                width={110}
                height={110}
              />
              <div className="space-y-[20px] lg:space-y-[10px]">
                <div className="flex items-center gap-[20px]">
                  <Image
                    src="https://degov.ai/icon.png"
                    alt="degov.ai Logo"
                    className="size-[55px] rounded-full lg:hidden"
                    width={55}
                    height={55}
                  />
                  <h2 className="text-[26px] font-bold leading-normal lg:text-[50px]">DEGOV.AI</h2>
                </div>
                <p className="text-[18px] font-semibold leading-[26px] tracking-[1px] text-white lg:text-[24px] lg:font-medium lg:leading-[30px] lg:text-white/70">
                  A AI-powered platform for decentralized governance, built on the Openzeppelin contracts.
                </p>
              </div>
            </div>
            <Link
              href="https://degov.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-[52px] w-[170px] items-center justify-center gap-[10px] rounded-[32px] bg-gradient-to-br from-[#fff] to-[#fff] text-[18px] font-bold capitalize leading-[32px] text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 lg:flex"
            >
              Learn More ›
            </Link>
          </div>
          <div className="my-[20px] h-[1px] w-full bg-white/30 lg:my-[50px]"></div>

          <div className="flex flex-col items-start gap-[20px]">
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
             
            </p>
            <p className="text-left text-[16px] font-light leading-[26px] text-white/70 lg:text-[20px] lg:leading-[32px]">
             
            </p>
            <Link
              href="https://degov.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex h-[34px] w-[160px] items-center justify-center gap-[10px] rounded-[32px] bg-gradient-to-br from-[#fff] to-[#fff] text-[16px] font-bold capitalize leading-[32px] text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110 lg:hidden"
            >
              Learn More ›
            </Link>
          </div>
        </MagicCard>
      </section>
      <StructuredData data={structuredData} />
    </>
  );
}

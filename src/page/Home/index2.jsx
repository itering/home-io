import React from 'react';
import styles from './styles2.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
// import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import iteringHero from './img2/itering-hero.png';
import iteringHeroM from './img2/itering-hero-m.svg';
// import iteringHeroSectionLogo from './img2/itering-hero-section-logo.svg';

import subscanSectionSymbol from './img2/subscan-section-symbol.svg';
import subscanSectionSymbolM from './img2/subscan-section-symbol-m.svg';

// import darwiniaProjectIcon from './img2/darwinia-project-icon.svg';
// import helixProjectIcon from './img2/helix-project-icon.png';
// import evolutionProjectIcon from './img2/evolution-project-icon.svg';

import portfolioSubscan from './img2/portfolio-subscan.png';
import portfolioHelix from './img2/portfolio-helix.png';
import portfolioRingDao from './img2/portfolio-ringdao.png';

import projectsSectionCardWebsiteIcon from './img2/projects-section-card-website-icon.svg';
import projectsSectionCardTwitterIcon from './img2/projects-section-card-twitter-icon.svg';
// import projectsSectionCardTelegramIcon from './img2/projects-section-card-telegram-icon.svg';
// import projectsSectionCardGithubIcon from './img2/projects-section-card-github-icon.svg';

// import ecoFriendsSectionPolkadot from './img2/eco-friend-polkadot.svg';
import ecoFriendsSectionWeb3Foundation from './img2/eco-friend-web3-foundation.svg';
import ecoFriendsSectionParity from './img2/eco-friend-parity.svg';
import ecoFriendsSectionHashkey from './img2/eco-friend-hashkey.svg';
import ecoFriendsSectionSNZ from './img2/eco-friend-snz.svg';
// import ecoFriendsSectionMathWallet from './img2/eco-friend-math-wallet.svg';
// import ecoFriendsSectionImToken from './img2/eco-friend-imtoken.svg';
// import ecoFriendsSectionDarwinia from './img2/eco-friend-darwinia.svg';
// import ecoFriendsSectionWormhole from './img2/eco-friend-wormhole.svg';
// import ecoFriendsSectionEvolution from './img2/eco-friend-evolution.svg';
import ecoPartnersDeGate from './img2/eco-partners-degate.svg';
import ecoPartnersRingDao from './img2/eco-partners-ringdao.svg';

// import ecoFriendsSectionPolkadotM from './img2/eco-friend-polkadot-m.svg';
import ecoFriendsSectionWeb3FoundationM from './img2/eco-friend-web3-foundation-m.svg';
import ecoFriendsSectionParityM from './img2/eco-friend-parity-m.svg';
import ecoFriendsSectionHashkeyM from './img2/eco-friend-hashkey-m.svg';
import ecoFriendsSectionSNZM from './img2/eco-friend-snz-m.svg';
// import ecoFriendsSectionMathWalletM from './img2/eco-friend-math-wallet-m.svg';
// import ecoFriendsSectionImTokenM from './img2/eco-friend-imtoken-m.svg';
// import ecoFriendsSectionDarwiniaM from './img2/eco-friend-darwinia-m.svg';
// import ecoFriendsSectionWormholeM from './img2/eco-friend-wormhole-m.svg';
// import ecoFriendsSectionEvolutionM from './img2/eco-friend-evolution-m.svg';

const cx = classNames.bind(styles);

const ecosystemFriendsData = [{
  icon: ecoFriendsSectionWeb3Foundation,
}, {
  icon: ecoFriendsSectionParity,
}, {
  icon: ecoFriendsSectionHashkey,
}, {
  icon: ecoFriendsSectionSNZ,
}, {
  icon: ecoPartnersDeGate,
}, {
  icon: ecoPartnersRingDao
}];

const ecosystemFriendsDataM = [{
  icon: ecoFriendsSectionWeb3FoundationM,
}, {
  icon: ecoFriendsSectionParityM,
}, {
  icon: ecoFriendsSectionHashkeyM,
}, {
  icon: ecoFriendsSectionSNZM,
}, {
  icon: ecoPartnersDeGate,
}, {
  icon: ecoPartnersRingDao
}];

const Home = () => {
  const { t } = useTranslation();
  console.log('t', t('cc'));

  return (
    <div className={cx('page-main')}>
      <div className={cx('page-header')}>
        <PageHeader />
      </div>

      <div className={cx('itering-hero-section-wrap')}>
        <Container>
          <div className={cx('itering-hero-section-container')}>
            <div className={cx('itering-hero-section-container-content')}>
              {/* <img alt='...' src={iteringHeroSectionLogo} className={cx('itering-hero-section-container-content-logo')} /> */}
              <h3 className={cx('itering-hero-section-container-content-title')}>Research, Invest, Build The Trust-Free Future</h3>
              <p className={cx('itering-hero-section-container-content-desc')}>As a forward-looking Venture Production Studio, Itering is dedicated to building and incubating products that achieve both product-market fit and team-product fit, driving the adoption of Web3 and blockchain technology. We believe that trust-free systems will fundamentally transform the global business, finance, and data landscapes.</p>
              <p className={cx('itering-hero-section-container-content-desc')}>Based in Asia but connected to the world, we operate with a global perspective, driving the adoption and evolution of blockchain technology on an international scale. Itering believes in the power of expertise and knowledge to lead innovation and transformation across the industry.</p>
            </div>
            <img alt='...' src={iteringHero} className={cx('itering-hero-section-container-symbol')} />
            <img alt='...' src={iteringHeroM} className={cx('itering-hero-section-container-symbol-m')} />
          </div>
        </Container>
      </div>

      <div className={cx('subscan-section-wrap')}>
        <Container>
          <div className={cx('subscan-section-container')}>
            <h3 className={cx('subscan-section-container-content-title-m')}>We're Building</h3>
            <img alt='...' src={subscanSectionSymbol} className={cx('subscan-section-container-symbol')} />
            <img alt='...' src={subscanSectionSymbolM} className={cx('subscan-section-container-symbol-m')} />
            <div className={cx('subscan-section-container-content')}>
              <h3 className={cx('subscan-section-container-content-title')}>We're Building</h3>
              <p className={cx('subscan-section-container-content-desc')}>Data: Delivering comprehensive blockchain data query and exploration services, combined with scenario-based intelligent analysis to unlock deeper data applications across various contexts.</p>
              <p className={cx('subscan-section-container-content-desc')}>DeFi: Integrating order flow and liquidity to lead the next wave of decentralized finance, improving market transparency and enhancing liquidity.</p>
              {/* <a href='https://www.subscan.io/' target='_blank' rel='noopener noreferrer' className={cx('subscan-section-container-content-learn-more')}>
                <span>{t('home_page:learn_more')}</span>
              </a> */}
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('projects-section-wrap')}>
        <Container>
          <div className={cx('projects-section-container')}>
            <h3 className={cx('projects-section-container-title')} id="our_portfolio">Our Portfolio</h3>
            <div className={cx('projects-section-container-cards')}>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={portfolioSubscan} className={cx('projects-section-container-card-icon')} style={{ width: 110, borderRadius: 9999 }} />
                <h5 className={cx('projects-section-container-card-title')}>Subscan</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>Web3 Portal to the Substrate & EVM Ecosystems</h6>
                {/* <p className={cx('projects-section-container-card-desc')}>{t('home_page:projects_section_desc_darwinia')}</p> */}
                <div className={cx('projects-section-container-card-social-links')}>
                  <a href='https://www.subscan.io/' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardWebsiteIcon} /></a>
                  <a href='https://x.com/subscan_io' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTwitterIcon} /></a>
                  {/* <a href='https://t.me/DarwiniaNetwork' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTelegramIcon} /></a>
                  <a href='https://github.com/darwinia-network' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardGithubIcon} /></a> */}
                </div>
              </div>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={portfolioHelix} className={cx('projects-section-container-card-icon')} style={{ width: 110, borderRadius: 9999 }} />
                <h5 className={cx('projects-section-container-card-title')}>Helix</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>A multi-chain DeFi application suite built on EVM infrastructure</h6>
                {/* <p className={cx('projects-section-container-card-desc')}>{t('home_page:projects_section_desc_helix')}</p> */}
                <div className={cx('projects-section-container-card-social-links')}>
                  <a href='https://bridge.helix.box' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardWebsiteIcon} /></a>
                  <a href='https://x.com/HelixOfficialX' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTwitterIcon} /></a>
                  {/* <a href='https://t.me/DarwiniaNetwork' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTelegramIcon} /></a>
                  <a href='https://github.com/helix-bridge' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardGithubIcon} /></a> */}
                </div>
              </div>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={portfolioRingDao} className={cx('projects-section-container-card-icon')} style={{ width: 110, borderRadius: 9999 }} />
                <h5 className={cx('projects-section-container-card-title')}>RingDAO</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>Empowering chains to communicate and powering abstraction to innovate</h6>
                {/* <p className={cx('projects-section-container-card-desc')}>{t('home_page:projects_section_desc_evolution')}</p> */}
                <div className={cx('projects-section-container-card-social-links')}>
                  <a href='https://ringdao.com/' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardWebsiteIcon} /></a>
                  <a href='https://x.com/ringecosystem' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTwitterIcon} /></a>
                  {/* <a href='https://t.me/evolutionland9' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTelegramIcon} /></a>
                  <a href='https://github.com/evolutionlandorg' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardGithubIcon} /></a> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('eco-friends-section-wrap')}>
        <Container>
          <div className={cx('eco-friends-section-container')}>
            <h3 className={cx('eco-friends-section-container-title')}>Ecosystem Partners</h3>
            <div className={cx('eco-friends-section-container-friends')}>
              {ecosystemFriendsData.map((value, idx) => (
                <div className={cx('eco-friends-section-container-friend')} key={idx}>
                  <img alt='...' src={value.icon} />
                </div>
              ))}
            </div>
            <div className={cx('eco-friends-section-container-friends-m')}>
              {ecosystemFriendsDataM.map((value, idx) => (
                <div className={cx('eco-friends-section-container-friend')} key={idx}>
                  <img alt='...' src={value.icon} style={{ maxWidth: 120 }} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('join-us-section-wrap')}>
        <Container>
          <div className={cx('join-us-section-container')}>
            {/* <h3 className={cx('join-us-section-container-title')}>{t('home_page:join_us_section_title')}</h3>
            <h5 className={cx('join-us-section-container-subtitle')}>{t('home_page:join_us_section_subtitle')}</h5>
            <p className={cx('join-us-section-container-desc')}>{t('home_page:join_us_section_desc_1')}</p>
            <p className={cx('join-us-section-container-desc')}>{t('home_page:join_us_section_desc_2')}</p>
            <p className={cx('join-us-section-container-desc')}>{t('home_page:join_us_section_desc_3')}</p>
            <Link to='/jobs' className={cx('join-us-section-container-view-post')}>
              <span>{t('home_page:view_posts')}</span>
            </Link> */}
          </div>
        </Container>
      </div>

      <div className={cx('page-footer')}>
        <PageFooter style={{ background: 'transparent' }} />
      </div>
    </div>
  );
};

export default React.memo(Home);

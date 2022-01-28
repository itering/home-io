import React from 'react';
import styles from './styles2.module.scss';
import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import iteringHero from './img2/itering-hero.png';
import iteringHeroM from './img2/itering-hero-m.svg';
import iteringHeroSectionLogo from './img2/itering-hero-section-logo.svg';

import subscanSectionSymbol from './img2/subscan-section-symbol.svg';
import subscanSectionSymbolM from './img2/subscan-section-symbol-m.svg';

import darwiniaProjectIcon from './img2/darwinia-project-icon.svg';
import wormholeProjectIcon from './img2/wormhole-project-icon.svg';
import evolutionProjectIcon from './img2/evolution-project-icon.svg';

import projectsSectionCardWebsiteIcon from './img2/projects-section-card-website-icon.svg';
import projectsSectionCardTwitterIcon from './img2/projects-section-card-twitter-icon.svg';
import projectsSectionCardTelegramIcon from './img2/projects-section-card-telegram-icon.svg';
import projectsSectionCardGithubIcon from './img2/projects-section-card-github-icon.svg';

import ecoFriendsSectionPolkadot from './img2/eco-friend-polkadot.svg';
import ecoFriendsSectionWeb3Foundation from './img2/eco-friend-web3-foundation.svg';
import ecoFriendsSectionParity from './img2/eco-friend-parity.svg';
import ecoFriendsSectionHashkey from './img2/eco-friend-hashkey.svg';
import ecoFriendsSectionSNZ from './img2/eco-friend-snz.svg';
import ecoFriendsSectionMathWallet from './img2/eco-friend-math-wallet.svg';
import ecoFriendsSectionImToken from './img2/eco-friend-imtoken.svg';
import ecoFriendsSectionDarwinia from './img2/eco-friend-darwinia.svg';
import ecoFriendsSectionWormhole from './img2/eco-friend-wormhole.svg';
import ecoFriendsSectionEvolution from './img2/eco-friend-evolution.svg';

import ecoFriendsSectionPolkadotM from './img2/eco-friend-polkadot-m.svg';
import ecoFriendsSectionWeb3FoundationM from './img2/eco-friend-web3-foundation-m.svg';
import ecoFriendsSectionParityM from './img2/eco-friend-parity-m.svg';
import ecoFriendsSectionHashkeyM from './img2/eco-friend-hashkey-m.svg';
import ecoFriendsSectionSNZM from './img2/eco-friend-snz-m.svg';
import ecoFriendsSectionMathWalletM from './img2/eco-friend-math-wallet-m.svg';
import ecoFriendsSectionImTokenM from './img2/eco-friend-imtoken-m.svg';
import ecoFriendsSectionDarwiniaM from './img2/eco-friend-darwinia-m.svg';
import ecoFriendsSectionWormholeM from './img2/eco-friend-wormhole-m.svg';
import ecoFriendsSectionEvolutionM from './img2/eco-friend-evolution-m.svg';

const cx = classNames.bind(styles);

const ecosystemFriendsData = [{
  icon: ecoFriendsSectionPolkadot,
}, {
  icon: ecoFriendsSectionWeb3Foundation,
}, {
  icon: ecoFriendsSectionParity,
}, {
  icon: ecoFriendsSectionHashkey,
}, {
  icon: ecoFriendsSectionSNZ,
}, {
  icon: ecoFriendsSectionMathWallet,
}, {
  icon: ecoFriendsSectionImToken,
}, {
  icon: ecoFriendsSectionDarwinia,
}, {
  icon: ecoFriendsSectionWormhole,
}, {
  icon: ecoFriendsSectionEvolution,
}];

const ecosystemFriendsDataM = [{
  icon: ecoFriendsSectionPolkadotM,
}, {
  icon: ecoFriendsSectionWeb3FoundationM,
}, {
  icon: ecoFriendsSectionParityM,
}, {
  icon: ecoFriendsSectionHashkeyM,
}, {
  icon: ecoFriendsSectionSNZM,
}, {
  icon: ecoFriendsSectionMathWalletM,
}, {
  icon: ecoFriendsSectionImTokenM,
}, {
  icon: ecoFriendsSectionDarwiniaM,
}, {
  icon: ecoFriendsSectionWormholeM,
}, {
  icon: ecoFriendsSectionEvolutionM,
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
              <img alt='...' src={iteringHeroSectionLogo} className={cx('itering-hero-section-container-content-logo')} />
              <h3 className={cx('itering-hero-section-container-content-title')}>{t('home_page:slogan')}</h3>
              <p className={cx('itering-hero-section-container-content-desc')}>{t('home_page:itering_hero_section_content_desc_1')}</p>
              <p className={cx('itering-hero-section-container-content-desc')}>{t('home_page:itering_hero_section_content_desc_2')}</p>
              <p className={cx('itering-hero-section-container-content-desc')}>{t('home_page:itering_hero_section_content_desc_3')}</p>
            </div>
            <img alt='...' src={iteringHero} className={cx('itering-hero-section-container-symbol')} />
            <img alt='...' src={iteringHeroM} className={cx('itering-hero-section-container-symbol-m')} />
          </div>
        </Container>
      </div>

      <div className={cx('subscan-section-wrap')}>
        <Container>
          <div className={cx('subscan-section-container')}>
            <h3 className={cx('subscan-section-container-content-title-m')}>Subscan Explorer</h3>
            <img alt='...' src={subscanSectionSymbol} className={cx('subscan-section-container-symbol')} />
            <img alt='...' src={subscanSectionSymbolM} className={cx('subscan-section-container-symbol-m')} />
            <div className={cx('subscan-section-container-content')}>
              <h3 className={cx('subscan-section-container-content-title')}>Subscan Explorer</h3>
              <p className={cx('subscan-section-container-content-desc')}>{t('home_page:subscan_section_content_decs_1')}</p>
              <p className={cx('subscan-section-container-content-desc')}>{t('home_page:subscan_section_content_decs_2')}</p>
              <p className={cx('subscan-section-container-content-desc')}>{t('home_page:subscan_section_content_decs_3')}</p>
              <a href='https://www.subscan.io/' target='_blank' rel='noopener noreferrer' className={cx('subscan-section-container-content-learn-more')}>
                <span>{t('home_page:learn_more')}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('projects-section-wrap')}>
        <Container>
          <div className={cx('projects-section-container')}>
            <h3 className={cx('projects-section-container-title')}>{t('home_page:projects_section_title')}</h3>
            <div className={cx('projects-section-container-cards')}>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={darwiniaProjectIcon} className={cx('projects-section-container-card-icon')} />
                <h5 className={cx('projects-section-container-card-title')}>Darwinia Network</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>Cross-chain Message Delivery Service</h6>
                <p className={cx('projects-section-container-card-desc')}>{t('home_page:projects_section_desc_darwinia')}</p>
                <div className={cx('projects-section-container-card-social-links')}>
                  <a href='https://darwinia.network' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardWebsiteIcon} /></a>
                  <a href='https://twitter.com/DarwiniaNetwork' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTwitterIcon} /></a>
                  <a href='https://t.me/DarwiniaNetwork' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTelegramIcon} /></a>
                  <a href='https://github.com/darwinia-network' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardGithubIcon} /></a>
                </div>
              </div>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={wormholeProjectIcon} className={cx('projects-section-container-card-icon')} />
                <h5 className={cx('projects-section-container-card-title')}>Wormhole</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>Cross-chain Bridge</h6>
                <p className={cx('projects-section-container-card-desc')}>{t('home_page:projects_section_desc_wormhole')}</p>
                <div className={cx('projects-section-container-card-social-links')}>
                  <a href='https://wormhole.darwinia.network' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardWebsiteIcon} /></a>
                  <a href='https://twitter.com/DarwiniaNetwork' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTwitterIcon} /></a>
                  <a href='https://t.me/DarwiniaNetwork' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTelegramIcon} /></a>
                  <a href='https://github.com/darwinia-network/wormhole-ui' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardGithubIcon} /></a>
                </div>
              </div>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={evolutionProjectIcon} className={cx('projects-section-container-card-icon')} />
                <h5 className={cx('projects-section-container-card-title')}>Evolution Land</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>DeFi  NFT Game</h6>
                <p className={cx('projects-section-container-card-desc')}>{t('home_page:projects_section_desc_evolution')}</p>
                <div className={cx('projects-section-container-card-social-links')}>
                  <a href='https://www.evolution.land' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardWebsiteIcon} /></a>
                  <a href='https://twitter.com/Evolution_Land' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTwitterIcon} /></a>
                  <a href='https://t.me/evolutionland9' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardTelegramIcon} /></a>
                  <a href='https://github.com/evolutionlandorg' target='_blank' rel='noopener noreferrer'><img alt='...' src={projectsSectionCardGithubIcon} /></a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('eco-friends-section-wrap')}>
        <Container>
          <div className={cx('eco-friends-section-container')}>
            <h3 className={cx('eco-friends-section-container-title')}>Ecosystem Firends</h3>
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
                  <img alt='...' src={value.icon} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('join-us-section-wrap')}>
        <Container>
          <div className={cx('join-us-section-container')}>
            <h3 className={cx('join-us-section-container-title')}>Join us</h3>
            <h5 className={cx('join-us-section-container-subtitle')}>Come join us and create a reliable future together!</h5>
            <p className={cx('join-us-section-container-desc')}>The team has many senior experts engaged in the development and technical research of the blockchain field, and has participated in the development of many blockchain open source projects including Bitshares, Ethereum, NEO and so on.</p>
            <p className={cx('join-us-section-container-desc')}>We have maintained cooperation with many companies in the industry and have won web3 foundation grant. Our team is located in Singapore, but we have partner companies in Shanghai and Nanjing, China, which can provide multiple jobs.</p>
            <Link to='/jobs' className={cx('join-us-section-container-view-post')}>
              <span>{t('home_page:view_posts')}</span>
            </Link>
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

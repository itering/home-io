import React from 'react';
import styles from './styles2.module.scss';
import classNames from 'classnames/bind';
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

const cx = classNames.bind(styles);

const Home = () => {
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
              <h3 className={cx('itering-hero-section-container-content-title')}>Promote the massive adoption of blockchain and iterate to a trust-free future</h3>
              <p className={cx('itering-hero-section-container-content-desc')}>Itering is a blockchain technology company, established in Singapore,2018. The blockchain explorer Subscan we developed is a high-precision Web3 explorer which can quickly support Substrate ecological networks. In addition to searching for Block, Extrinsic, Event, and Account, it provides a user-friendly interactive experience in Staking, EVM, Parachain, and other modules. And we also provide customized services for unique functions. We focus on the research and development of blockchain infrastructure, and currently provide technical service for the Darwinia network developed based on the Substrate framework and its ecological applications Wormhole, Evolution Land, etc.</p>
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
              <p className={cx('subscan-section-container-content-desc')}>Subscan is a high-precision Web3 explorer that aggregates Substrate ecological network. As a multi-chain explorer, subscan has supported dozens of excellent networks. Users can use Subscan to conveniently search and view blockchain data.</p>
              <p className={cx('subscan-section-container-content-desc')}>The Subscan APIs are safe and stable, rich in types and easy to use, which can meet the requirements of different fields of projects. We provide developers with a higher free rate limit, and for the users who have higher requirements for APIs, provide advanced customized API services.</p>
              <p className={cx('subscan-section-container-content-desc')}>Subscan also provides users with tools such as multi-signature, account format conversion, and analysis charts. In addition to supporting the Substrate native module, we have custom functionality tailored for multiple networks.</p>
              <a href='https://www.subscan.io/' target='_blank' rel='noopener noreferrer' className={cx('subscan-section-container-content-learn-more')}>
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className={cx('projects-section-wrap')}>
        <Container>
          <div className={cx('projects-section-container')}>
            <h3 className={cx('projects-section-container-title')}>Some of the organizations using our tech</h3>
            <div className={cx('projects-section-container-cards')}>
              <div className={cx('projects-section-container-card')}>
                <img alt='...' src={darwiniaProjectIcon} className={cx('projects-section-container-card-icon')} />
                <h5 className={cx('projects-section-container-card-title')}>Darwinia Network</h5>
                <h6 className={cx('projects-section-container-card-subtitle')}>Cross-chain Message Delivery Service</h6>
                <p className={cx('projects-section-container-card-desc')}>Darwinia Network built on Substrate, focusing on the construction of future Internet of tokens, has supplied Cross-Chain Message Delivery Service that can be used for any token bridge.</p>
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
                <p className={cx('projects-section-container-card-desc')}>Cross-chain transfer of assets between multiple blockchains can be realized through Wormhole.</p>
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
                <p className={cx('projects-section-container-card-desc')}>The first DeFi+NFT cross-chain game with each continent built on different blockchain networks.</p>
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

      <PageFooter />
    </div>
  );
};

export default React.memo(Home);

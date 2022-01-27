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
              <a href='/' target='_blank' rel='noopener noreferrer' className={cx('subscan-section-container-content-learn-more')}>
                <span>Learn More</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <PageFooter />
    </div>
  );
};

export default React.memo(Home);

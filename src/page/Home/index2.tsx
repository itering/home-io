import React from 'react';
import styles from './styles2.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import iteringHero from './img2/itering-hero.png';
import iteringHeroM from './img2/itering-hero-m.svg';
import iteringHeroSectionLogo from './img2/itering-hero-section-logo.svg';

const cx = classNames.bind(styles);

type Props = {
  className?: string;
}

const Home: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx(className, 'page-main')}>
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

      <PageFooter />
    </div>
  );
};

export default React.memo<Props>(Home);

import React, {Component} from "react";
import {Container, Row, Col, Image, Nav, Dropdown, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'

import styles from './style.module.scss';
import './index.scss';
import Deck from '../../components/Deck/deck';
import cube from "./img/section-1-cube.gif"
import cube_static from "./img/section-1-cube-static.png"
import cube_png from "./img/section-1-cube.png"
import section_1_logo from "./img/section-1-logo.png"
import section_2_item_1 from "./img/section-2-item-1.gif"
import section_2_item_1_static from "./img/section-2-item-1-static.png"
import section_2_item_1_png from "./img/section-2-item-1.png"
import section_2_item_2 from "./img/section-2-item-2.gif"
import section_2_item_2_static from "./img/section-2-item-2-static.png"
import section_2_item_2_png from "./img/section-2-item-2.png"
import section_2_item_3 from "./img/section-2-item-3.gif"
import section_2_item_3_static from "./img/section-2-item-3-static.png"
import section_2_item_3_png from "./img/section-2-item-3.png"
import section_3_evo from "./img/section-3-evo.gif"
import section_3_evo_static from "./img/section-3-evo-static.png"
import section_3_evo_png from "./img/section-3-evo.png"
import section_4_item_1 from "./img/section-4-item-1.png"
import section_4_item_2 from "./img/section-4-item-2.png"
import section_5_item_1 from "./img/section-5-item-1.png"
import section_5_item_2 from "./img/section-5-item-2.png"
import section_5_item_3 from "./img/section-5-item-3.png"
import section_5_item_4 from "./img/section-5-item-4.png"
import section_5_item_5 from "./img/section-5-item-5.png"
import section_5_item_6 from "./img/section-5-item-6.png"
import section_5_item_7 from "./img/section-5-item-7.png"
import section_5_item_8 from "./img/section-5-item-8.png"
import section_5_item_9 from "./img/section-5-item-9.png"
import section_5_item_10 from "./img/section-5-item-10.png"
import section_5_item_11 from "./img/section-5-item-11.png"
import section_5_item_12 from "./img/section-5-item-12.png"
import section_6_item_1 from "./img/section-6-item-1.png"
import section_6_item_2 from "./img/section-6-item-2.png"
import section_6_item_3 from "./img/section-6-item-3.png"
import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";
import logo_light from "../../logo-light.svg";
import logo from "../../logo.svg";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            current: 0,
            horizontal: false,
            swipe: true,
            wheel: true,
            index: 0,
            total: 6
        };
        this.change = this.change.bind(this);
        this.onSwitching = this.onSwitching.bind(this);
        this.onSwitchDone = this.onSwitchDone.bind(this);
        this.animate = this.animate.bind(this);
    }

    change({target}) {
        const current = Array.prototype.indexOf.call(target.parentElement.children, target);
        this.setState({current});
    }

    animate() {
        this.setState({animate: !this.state.animate});
    }

    onSwitching(factor, deck) {
        const current = deck.state.current;
        this.setState({current});
    }

    onSwitchDone(state) {
        this.setState({
            index: state.current,
            status: 'switchdone',
            indicatorLineLeft: state.current * 25 + '%'
        });
    }

    componentDidMount() {
        archorsComponent();
        this.archorDeck();
        document.addEventListener("keydown", this.debounce(this._handleKeyDown, 300));
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.debounce(this._handleKeyDown, 300));
    }

    archorDeck = () => {
        setTimeout(
            () => {
                let {hash} = window.location;
                const id = hash.replace('#', '');
                switch (id) {
                    case 'product':
                        this.setState({current: 0});
                        break;
                    case 'news':
                        this.setState({current: 5});
                        break;
                    default:
                        break;
                }
            },
            0
        );
    }
    debounce = (fn, delay) => {
        let timer = null;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        }
    }

    _handleKeyDown = (e) => {
        const {current, total} = this.state;
        if (e.key === "ArrowDown") {
            this.setState({current: Math.min(total, current + 1)});
        } else if (e.key === "ArrowUp") {
            this.setState({current: Math.max(0, current - 1)});
        }
    }

    areaMapHandle = (key, status) => {
        this.setState({
            [key]: status
        })
    }

    changeCurrent(number) {
        if (number) {
            this.setState({current: number - 1});
        }
    }

    render() {
        const {t} = this.props
        const {current} = this.state
        const slideClasses = {
            current: 'slideCurrent',
            entering: 'slideCurrentEntering',
            prev: 'slidePrev',
            leaving: 'slidePrevLeaving'
        };
        let filled = Array.from(Array(7), (v, k) => k + 1);
        return (
            <div className='home'>
                <Deck
                    // className='deck'
                    className={`${styles.deckPc} deck`}
                    wheel={this.state.wheel}
                    current={this.state.current}
                    horizontal={this.state.horizontal}
                    swipe={this.state.swipe}
                    onSwitching={this.onSwitching}
                    // onSwitchDone={this.onSwitchDone}
                    slideClasses={slideClasses}
                    dura={800}
                >
                    <Deck.Slide className='first slide'>
                        <div className={styles.section1}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={7}>
                                        <div className={styles.sectionWrapper}>
                                            <img className={styles.logo} src={section_1_logo}/>
                                            <div className={styles.subTitle}>
                                                {t('home_page:section_1_subtitle')}
                                            </div>
                                            <div className={styles.detail}>
                                                <p>{t('home_page:section_1_p_1')}</p>
                                                <p>{t('home_page:section_1_p_2')}</p>
                                                <p>{t('home_page:section_1_p_3')}</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={5}>
                                        <img src={cube}/>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Deck.Slide>
                    <Deck.Slide className='second slide'>
                        <div className={styles.section2}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.title}>
                                            {t('home_page:section_2_title')}
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                    </Col>
                                </Row>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section2_item_1}>
                                            <div className={styles.gifPlayer}>
                                                <img className={styles.static} src={section_2_item_1_static}/>
                                                <img src={section_2_item_1}/>
                                            </div>
                                            <p>{t('home_page:section_2_item_1')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section2_item_2}>
                                            <div className={styles.gifPlayer}>
                                                <img className={styles.static} src={section_2_item_2_static}/>
                                                <img src={section_2_item_2}/>
                                            </div>
                                            <p>{t('home_page:section_2_item_2')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section2_item_3}>
                                            <div className={styles.gifPlayer}>
                                                <img className={styles.static} src={section_2_item_3_static}/>
                                                <img src={section_2_item_3}/>
                                            </div>
                                            <p>{t('home_page:section_2_item_3')}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={4}>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.linkBtns}>
                                            <a className={styles.linkBtn} href="https://darwinia.network/"
                                            target="_blank">{t('home_page:learn_more')}</a>
                                            <a className={styles.linkBtn} href={t('home_page:section_2_paper')}
                                            target="_blank">{t('home_page:white_paper')}</a>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Deck.Slide>
                    <Deck.Slide className='third slide'>
                        <div className={styles.section3}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.sectionWrapper}>
                                            <div className={styles.title}>
                                                {t('home_page:section_3_title')}
                                            </div>
                                            <div className={styles.detail}>
                                                <p>{t('home_page:section_3_p_1')}</p>
                                                <p>{t('home_page:section_3_p_2')}</p>
                                            </div>
                                            <a className={styles.linkBtn} href="https://www.evolution.land/"
                                               target="_blank">{t('home_page:learn_more')}</a>
                                            <a className={styles.linkBtn} href={t('home_page:section_3_paper')}
                                               target="_blank">{t('home_page:white_paper')}</a>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={8}>
                                        <div className={styles.imgWrapper}>
                                            <img src={section_3_evo}/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Deck.Slide>
                    <Deck.Slide className='fourth slide'>
                        <div className={styles.section4}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={6}>
                                        <div className={styles.section4_item}>
                                            <img src={section_4_item_1}/>
                                            <div className={styles.title}>{t('home_page:section_4_item_1_title')}</div>
                                            <p>{t('home_page:section_4_item_1_detail')}</p>
                                            <a className={styles.linkBtn} href="https://id.itering.com/"
                                               target="_blank">{t('home_page:learn_more')}</a>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={6}>
                                        <div className={styles.section4_item}>
                                            <img src={section_4_item_2}/>
                                            <div className={styles.title}>{t('home_page:section_4_item_2_title')}</div>
                                            <p>{t('home_page:section_4_item_2_detail')}</p>
                                            <a className={styles.linkBtn} href="https://nft.itering.com/"
                                               target="_blank">{t('home_page:learn_more')}</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Deck.Slide>
                    <Deck.Slide className='fifth slide'>
                        <div className={styles.section5}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12}>
                                        <div>
                                            <div className={styles.title}>{t('home_page:section_5_title')}</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={styles.row}>
                                    {/* <Col className={styles.col} xs={6} sm={3}>
                                        <div className={styles.section5_item}>
                                            <img src={section_5_item_1}/>
                                        </div>
                                    </Col> */}
                                    <Col className={styles.col} xs={12}>
                                        <ul className={styles.section5_item}>
                                            <li>
                                                <img src={section_5_item_1}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_2}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_3}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_4}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_5}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_6}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_7}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_8}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_9}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_10}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_11}/>
                                            </li>
                                            <li>
                                                <img src={section_5_item_12}/>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Deck.Slide>
                    <Deck.Slide className='sixth slide'>
                        <div className={styles.section6}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12}>
                                        <div>
                                            <div className={styles.title}>{t('home_page:section_6_title')}</div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section6_item_1}>
                                            <a className="news-link"
                                                href="https://mp.weixin.qq.com/s/PTGocYpIf0v2-IgJFzQE6Q"
                                                target="_blank">
                                                <img src={section_6_item_1}/>
                                                <div
                                                    className={styles.subTitle}>{t('home_page:section_6_item_1_title')}</div>
                                                <p>{t('home_page:section_6_item_1_detail')}</p>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section6_item_2}>
                                            <a className="news-link"
                                               href="https://mp.weixin.qq.com/s/MZRZC9UDkXzmBCd-GWIRmw"
                                               target="_blank">
                                                <img src={section_6_item_2}/>
                                                <div
                                                    className={styles.subTitle}>{t('home_page:section_6_item_2_title')}</div>
                                                <p>{t('home_page:section_6_item_2_detail')}</p>
                                            </a>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section6_item_3}>
                                            <a className="news-link"
                                               href="https://mp.weixin.qq.com/s/6tZFYa3d7ujpas2XJ30rbw"
                                               target="_blank">
                                                <img src={section_6_item_3}/>
                                                <div
                                                    className={styles.subTitle}>{t('home_page:section_6_item_3_title')}</div>
                                                <p>{t('home_page:section_6_item_3_detail')}</p>
                                            </a>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12}>
                                        <div className={styles.btns}>
                                            <a className={styles.linkBtn} href="/news">{t('home_page:view_more')}</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Deck.Slide>
                    <Deck.Slide className='seventh slide'>
                        <div className={styles.section7}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12}>
                                        <div className={styles.section7_item}>
                                            <div className={styles.title}>{t('home_page:section_7_title')}</div>
                                            <div className={styles.subTitle}>{t('home_page:section_7_subtitle')}</div>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={{span: 12}}>
                                        <div className={styles.section7_detail}>
                                            <p>{t('home_page:section_7_detail_1')}</p>
                                            <p>{t('home_page:section_7_detail_2')}</p>
                                            <p>{t('home_page:section_7_detail_3')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12}>
                                        <div className={styles.section7_item}>
                                            <a className={styles.linkBtn} href="/about">{t('home_page:view_posts')}</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className={styles.pageFooter}>
                            <PageFooter/>
                        </div>
                    </Deck.Slide>
                </Deck>
                <div className={styles.homeBannerArea}>
                    <PageHeader className={styles.pageHeader} handleAnchor={this.archorDeck}/>
                </div>
                <ul className={styles.sliderIndicator}>
                    {
                        filled.map((number) => <li className={number === (current + 1) ? styles.current : ''}
                                                   key={number.toString()}
                                                   onClick={() => this.changeCurrent(number)}></li>)
                    }
                </ul>
                <div className={styles.deckMobile}>
                    <div className={styles.section1}>
                        <a id="product"></a>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12} sm={5}>
                                    <Col className={styles.col} xs={{span: 8, offset: 2}}>
                                        <div className={styles.imgWrapper}>
                                            <img src={cube_png}/>
                                        </div>
                                    </Col>
                                </Col>
                                <Col className={styles.col} xs={12} sm={7}>
                                    <div className={styles.sectionWrapper}>
                                        <img className={styles.logo} src={section_1_logo}/>
                                        <div className={styles.subTitle}>
                                            {t('home_page:section_1_subtitle')}
                                        </div>
                                        <div className={styles.detail}>
                                            <p>{t('home_page:section_1_p_1')}</p>
                                            <p>{t('home_page:section_1_p_2')}</p>
                                            <p>{t('home_page:section_1_p_3')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section2}>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.title}>
                                        {t('home_page:section_2_title')}
                                    </div>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                </Col>
                            </Row>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.section2_item}>
                                        <div className={styles.imgWrapper1}>
                                            <img src={section_2_item_1_png}/>
                                        </div>
                                        <p>{t('home_page:section_2_item_1')}</p>
                                    </div>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.section2_item}>
                                        <div className={styles.imgWrapper2}>
                                            <img src={section_2_item_2_png}/>
                                        </div>
                                        <p>{t('home_page:section_2_item_2')}</p>
                                    </div>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.section2_item}>
                                        <div className={styles.imgWrapper3}>
                                            <img src={section_2_item_3_png}/>
                                        </div>
                                        <p>{t('home_page:section_2_item_3')}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12} sm={4}>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <a className={styles.linkBtn} href="https://darwinia.network/"
                                       target="_blank">{t('home_page:learn_more')}</a>
                                    <a className={styles.linkBtn} href={t('home_page:section_2_paper')}
                                       target="_blank">{t('home_page:white_paper')}</a>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section3}>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12}>
                                    <div className={styles.sectionWrapper}>
                                        <div className={styles.title}>
                                            {t('home_page:section_3_title')}
                                        </div>
                                        <div className={styles.imgWrapper}>
                                            <img src={section_3_evo_png}/>
                                        </div>
                                        <div className={styles.detail}>
                                            <p>{t('home_page:section_3_p_1')}</p>
                                            <p>{t('home_page:section_3_p_2')}</p>
                                        </div>
                                        <a className={styles.linkBtn} href="https://www.evolution.land/"
                                           target="_blank">{t('home_page:learn_more')}</a>
                                        <a className={styles.linkBtn} href={t('home_page:section_3_paper')}
                                           target="_blank">{t('home_page:white_paper')}</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section4}>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12} sm={6}>
                                    <div className={styles.section4_item}>
                                        <img src={section_4_item_1}/>
                                        <div className={styles.title}>{t('home_page:section_4_item_1_title')}</div>
                                        <p>{t('home_page:section_4_item_1_detail')}</p>
                                        <a className={styles.linkBtn} href="https://id.itering.com/"
                                           target="_blank">{t('home_page:learn_more')}</a>
                                    </div>
                                </Col>
                                <Col className={styles.col} xs={12} sm={6}>
                                    <div className={styles.section4_item}>
                                        <img src={section_4_item_2}/>
                                        <div className={styles.title}>{t('home_page:section_4_item_2_title')}</div>
                                        <p>{t('home_page:section_4_item_2_detail')}</p>
                                        <a className={styles.linkBtn} href="https://nft.itering.com/"
                                           target="_blank">{t('home_page:learn_more')}</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section5}>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12}>
                                    <div>
                                        <div className={styles.title}>{t('home_page:section_5_title')}</div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles.row}>
                                {/* <Col className={styles.col} xs={6} sm={3}>
                                        <div className={styles.section5_item}>
                                            <img src={section_5_item_1}/>
                                        </div>
                                    </Col> */}
                                <Col className={styles.col} xs={12}>
                                    <ul className={styles.section5_item}>
                                        <li>
                                            <img src={section_5_item_1}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_2}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_3}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_4}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_5}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_6}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_7}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_8}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_9}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_10}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_11}/>
                                        </li>
                                        <li>
                                            <img src={section_5_item_12}/>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section6}>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12}>
                                    <div>
                                        <div className={styles.title}>{t('home_page:section_6_title')}</div>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.section6_item_1}>
                                        <a className="news-link"
                                           href="https://mp.weixin.qq.com/s/PTGocYpIf0v2-IgJFzQE6Q"
                                           target="_blank">
                                            <img src={section_6_item_1}/>
                                            <div
                                                className={styles.subTitle}>{t('home_page:section_6_item_1_title')}</div>
                                            <p>{t('home_page:section_6_item_1_detail')}</p>
                                        </a>
                                    </div>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.section6_item_2}>
                                        <a className="news-link"
                                           href="https://mp.weixin.qq.com/s/MZRZC9UDkXzmBCd-GWIRmw"
                                           target="_blank">
                                            <img src={section_6_item_2}/>
                                            <div
                                                className={styles.subTitle}>{t('home_page:section_6_item_2_title')}</div>
                                            <p>{t('home_page:section_6_item_2_detail')}</p>
                                        </a>
                                    </div>
                                </Col>
                                <Col className={styles.col} xs={12} sm={4}>
                                    <div className={styles.section6_item_3}>
                                        <a className="news-link"
                                           href="https://mp.weixin.qq.com/s/6tZFYa3d7ujpas2XJ30rbw"
                                           target="_blank">
                                            <img src={section_6_item_3}/>
                                            <div
                                                className={styles.subTitle}>{t('home_page:section_6_item_3_title')}</div>
                                            <p>{t('home_page:section_6_item_3_detail')}</p>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12}>
                                    <div className={styles.btns}>
                                        <a className={styles.linkBtn}>{t('home_page:view_more')}</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={styles.section7}>
                        <Container>
                            <Row className={styles.row}>
                                <Col className={styles.col} xs={12}>
                                    <div className={styles.section7_item}>
                                        <div className={styles.title}>{t('home_page:section_7_title')}</div>
                                        <div className={styles.subTitle}>{t('home_page:section_7_subtitle')}</div>
                                        <p>{t('home_page:section_7_detail_1')}</p>
                                        <p>{t('home_page:section_7_detail_2')}</p>
                                        <p>{t('home_page:section_7_detail_3')}</p>
                                        <a className={styles.linkBtn}>{t('home_page:view_posts')}</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className={styles.pageFooterMobile}>
                    <PageFooter/>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Home);

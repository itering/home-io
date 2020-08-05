import React, {Component} from "react";
import {Container, Row, Col, Image, Nav, Dropdown, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import './index.scss';
import Deck from '../../components/Deck/deck';
import cube from "./img/section-1-cube.gif"
import section_1_logo from "./img/section-1-logo.png"
import section_2_item_1 from "./img/section-2-item-1.gif"
import section_2_item_2 from "./img/section-2-item-2.gif"
import section_2_item_3 from "./img/section-2-item-3.gif"
import section_3_evo from "./img/section-3-evo.gif"
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
            current: 6,
            horizontal: false,
            swipe: true,
            wheel: true,
            index: 0
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
        const prev = this.state.index, current = deck.state.current;
        //let indicatorLineLeft = 25 * index + '%';
        const indicatorLineLeft = (prev + (current - prev) * factor) * 25 + '%';
        const status = 'switching...';
        this.setState({indicatorLineLeft, current, status, progress: factor});
    }

    onSwitchDone(state) {
        this.setState({
            index: state.current,
            status: 'switchdone',
            indicatorLineLeft: state.current * 25 + '%'
        });
    }

    componentDidMount() {
        archorsComponent()
    }

    areaMapHandle = (key, status) => {
        this.setState({
            [key]: status
        })
    }

    toIteringID = () => {
    }

    render() {
        const {t} = this.props
        const {area1, area2, area3} = this.state
        const slideClasses = {
            current: 'slideCurrent',
            entering: 'slideCurrentEntering',
            prev: 'slidePrev',
            leaving: 'slidePrevLeaving'
        };
        return (
            <div className='App'>
                <div className={styles.homeBannerArea}>
                    <PageHeader className={styles.pageHeader}/>
                </div>
                <Deck
                    className='deck'
                    wheel={this.state.wheel}
                    current={this.state.current}
                    horizontal={this.state.horizontal}
                    swipe={this.state.swipe}
                    // onSwitching={this.onSwitching}
                    // onSwitchDone={this.onSwitchDone}
                    slideClasses={slideClasses}
                    dura={1000}
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
                                        <div className={styles.section2_item}>
                                            <img src={section_2_item_1}/>
                                            <p>{t('home_page:section_2_item_1')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section2_item}>
                                            <img src={section_2_item_2}/>
                                            <p>{t('home_page:section_2_item_2')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section2_item}>
                                            <img src={section_2_item_3}/>
                                            <p>{t('home_page:section_2_item_3')}</p>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12} sm={4}>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <a className={styles.linkBtn}>{t('home_page:learn_more')}</a>
                                        <a className={styles.linkBtn}>{t('home_page:white_paper')}</a>
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
                                            <a className={styles.linkBtn}>{t('home_page:learn_more')}</a>
                                            <a className={styles.linkBtn}>{t('home_page:white_paper')}</a>
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
                                            <a className={styles.linkBtn}>{t('home_page:learn_more')}</a>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={6}>
                                        <div className={styles.section4_item}>
                                            <img src={section_4_item_2}/>
                                            <div className={styles.title}>{t('home_page:section_4_item_2_title')}</div>
                                            <p>{t('home_page:section_4_item_2_detail')}</p>
                                            <a className={styles.linkBtn}>{t('home_page:learn_more')}</a>
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
                                        <div className={styles.section6_item}>
                                            <img src={section_6_item_1}/>
                                            <div
                                                className={styles.subTitle}>{t('home_page:section_6_item_1_title')}</div>
                                            <p>{t('home_page:section_6_item_1_detail')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section6_item}>
                                            <img src={section_6_item_2}/>
                                            <div
                                                className={styles.subTitle}>{t('home_page:section_6_item_2_title')}</div>
                                            <p>{t('home_page:section_6_item_2_detail')}</p>
                                        </div>
                                    </Col>
                                    <Col className={styles.col} xs={12} sm={4}>
                                        <div className={styles.section6_item}>
                                            <img src={section_6_item_3}/>
                                            <div
                                                className={styles.subTitle}>{t('home_page:section_6_item_3_title')}</div>
                                            <p>{t('home_page:section_6_item_3_detail')}</p>
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
                    </Deck.Slide>
                    <Deck.Slide className='seventh slide'>
                        <div className={styles.section7}>
                            <Container>
                                <Row className={styles.row}>
                                    <Col className={styles.col} xs={12}>
                                        <div className={styles.section7_item}>
                                            <div className={styles.title}>{t('home_page:section_7_title')}</div>
                                            <div className={styles.subTitle}>{t('home_page:section_7_subtitle')}</div>
                                            <p>{t('home_page:section_7_detail')}</p>
                                            <a className={styles.linkBtn}>{t('home_page:view_posts')}</a>
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
                {/*<PageFooter/>*/}
            </div>
        );
    }
}

export default withTranslation()(Home);

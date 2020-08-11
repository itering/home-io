import React, {Component} from "react";
import {Container, Row, Col, Image, Nav, Dropdown, Button} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import archorsComponent from '../../components/anchorsComponent'
import section_6_item_1 from "../Home/img/section-6-item-1.png"
import section_6_item_2 from "../Home/img/section-6-item-2.png"
import section_6_item_3 from "../Home/img/section-6-item-3.png"
import about_png from "../About/img/about.png"
import {withTranslation} from "react-i18next";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    componentDidMount() {
        archorsComponent()
    }

    render() {
        const {t} = this.props
        return (
            <div className={styles.about}>
                <div className={styles.aboutBg}></div>
                <div className={styles.homeBannerArea}>
                    <PageHeader className={styles.pageHeader}/>
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
                                    <a className="news-link" href="https://mp.weixin.qq.com/s/PTGocYpIf0v2-IgJFzQE6Q"
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
                                    <a className="news-link" href="https://mp.weixin.qq.com/s/MZRZC9UDkXzmBCd-GWIRmw"
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
                                    <a className="news-link" href="https://mp.weixin.qq.com/s/6tZFYa3d7ujpas2XJ30rbw"
                                       target="_blank">
                                        <img src={section_6_item_3}/>
                                        <div
                                            className={styles.subTitle}>{t('home_page:section_6_item_3_title')}</div>
                                        <p>{t('home_page:section_6_item_3_detail')}</p>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <PageFooter/>
            </div>
        );
    }
}

export default withTranslation()(Home);

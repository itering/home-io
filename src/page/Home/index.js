import React, {Component} from "react";
import {Container, Row, Col, Image, Nav, Dropdown} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import section2_denny from './img/section-2-denny.png'
import section2_alex from './img/section-2-alex.png'

import archorsComponent from '../../components/anchorsComponent'
import {withTranslation} from "react-i18next";

class Home extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            area1: false,
            area2: false,
            area3: false,
        }
    }

    componentDidMount(){
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
        return (
            <div>
                <div className={styles.homeBannerArea}>
                    <PageHeader className={styles.pageHeader} theme="dark"/>
                    <Container>
                        <Row className={styles.row}>
                            <Col md={10} xs={12} className={styles.col}>
                                <div className={`${styles.promoteContentArea}`}>
                                    <p>{t('home_page:slogan')}</p>
                                    <div className={styles.line}></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <a id="product"></a>
                <div className={styles.section1}>
                    <Container>
                        <Row className={styles.row}>
                            <Col className={styles.col}>
                                <div className={styles.sectionWrapper}>
                                    <div className={styles.sectionTitle}>
                                        <div className={styles.darkTitle}>{t('home_page:section_1_title')}</div>
                                        <div className={styles.line}></div>
                                    </div>
                                    <ul>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer"  href="https://darwinia.network/">
                                                <div className={`${styles.productImg} ${styles.darwinia}`}></div>
                                                <div className={styles.productTitle}>{t('home_page:section_1_darwinia')}</div>
                                                <div className={styles.productInfo}>{t('home_page:section_1_darwinia_content')}</div>
                                                <div className={styles.viewMore}>{t('home_page:view_more')}</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/">
                                                <div className={`${styles.productImg} ${styles.evoland}`}></div>
                                                <div className={styles.productTitle}>{t('home_page:section_1_evoland')}</div>
                                                <div className={styles.productInfo}>{t('home_page:section_1_evoland_content')}</div>
                                                <div className={styles.viewMore}>{t('home_page:view_more')}</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href="https://id.itering.com/">
                                                <div className={`${styles.productImg} ${styles.itering}`}></div>
                                                <div className={styles.productTitle}>{t('home_page:section_1_itering')}</div>
                                                <div className={styles.productInfo}>{t('home_page:section_1_itering_content')}</div>
                                                <div className={styles.viewMore}>{t('home_page:view_more')}</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer"  href="https://nft.itering.com/">
                                                <div className={`${styles.productImg} ${styles.nft}`}></div>
                                                <div className={styles.productTitle}>{t('home_page:section_1_nft')}</div>
                                                <div className={styles.productInfo}>{t('home_page:section_1_nft_content')}</div>
                                                <div className={styles.viewMore}>{t('home_page:view_more')}</div>
                                            </a>
                                        </li>
                                    </ul> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                {/* <a id="funder"></a>
                <div className={styles.section2}>
                <Container>
                    <Row className={styles.row}>
                        <Col className={styles.col}>
                        <div className={styles.sectionWrapper}>
                            <div className={styles.sectionTitle}>
                                <div className={styles.darkTitle}>{t('home_page:section_2_title')}</div>
                                <div className={styles.line}></div>
                            </div>
                            <ul>
                                <li>
                                    <Image className={styles.funderImage} src={section2_alex}/>
                                    <div className={styles.funderTitleWrapper}>
                                        <p className={styles.funderTitle}>{t('home_page:section_2_alex')}</p>
                                        <p>{t('home_page:section_2_job')}</p>
                                    </div>
                                    <div className={styles.funderIntro}>{t('home_page:section_2_alex_intro')}</div>
                                </li>
                                <li>
                                <Image className={styles.funderImage} src={section2_denny}/>
                                <div className={styles.funderTitleWrapper}>
                                    <p className={styles.funderTitle}>{t('home_page:section_2_denny')}</p>
                                    <p>{t('home_page:section_2_job')}</p>
                                </div>
                                <div className={styles.funderIntro}>{t('home_page:section_2_denny_intro')}</div>
                            </li>
                        </ul>
                        </div>
                        </Col>
                    </Row>
                </Container>
                </div> */}

                <Container>
                    <Row className={styles.row}>
                        <Col className={styles.col}>
                        </Col>
                    </Row>
                </Container>

                <a id="partner"></a>
                <div className={styles.section3}>
                <Container>
                    <Row className={styles.row}>
                        <Col className={styles.col}>
                            <div className={styles.sectionWrapper}>
                                <div className={styles.sectionTitle}>
                                    <div className={styles.lightTitle}>{t('home_page:section_3_title')}</div>
                                    <div className={styles.line}></div>
                                </div>
                                <div className={styles.partnerImageWrapper}>
                                    <div className={styles.partnerImage}></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                
                <a id="location"></a>
                <div className={styles.section4}>
                    <Container>
                        <Row className={styles.row}>
                            <Col className={styles.col}>
                                <div className={styles.sectionWrapper}>
                                    <div className={styles.sectionTitle}>
                                        <div className={styles.lightTitle}>{t('home_page:section_4_title')}</div>
                                        <div className={styles.line}></div>
                                    </div>
                                    <div className={styles.locationImageWrapper}>
                                        <div className={styles.locationImage}></div>
                                    </div>
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

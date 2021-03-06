import React, {Component} from "react";
import {Container, Row, Col} from 'react-bootstrap'
import {PageHeader} from '../../components/PageHeader'
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import archorsComponent from '../../components/anchorsComponent'

import about_png from "./img/about.png"
import {withTranslation, Trans} from "react-i18next";
import i18n from '../../locales/i18n';

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
            <div className='about'>
                <div className={styles.aboutBg}></div>
                <div className={styles.homeBannerArea}>
                    <PageHeader className={styles.pageHeader}/>
                </div>
                <div className={styles.section}>
                    <Container>
                        <Row className={styles.row}>
                            <Col className={styles.col} xs={0} sm={1}>
                            </Col>
                            <Col className={styles.col} xs={12} sm={6}>
                                <div className={styles.aboutSection}>
                                    <div className={styles.aboutUsBg}></div>
                                    <div className={styles.title}>
                                        {t('about_page:about_us')}
                                    </div>
                                    <div className={styles.aboutP}>
                                        <p>{t('about_page:about_p_1')}</p>
                                        <p>{t('about_page:about_p_2')}</p>
                                    </div>
                                </div>
                                <div className={styles.joinSection}>
                                    <div className={styles.joinBg}></div>
                                    <div className={styles.title}>
                                        {t('about_page:join_us')}
                                    </div>
                                    <div className={styles.joinSubTitle}>
                                        {t('about_page:join_subtitle')}
                                    </div>
                                    <div className={styles.joinP}>
                                        <p>{t('about_page:join_p_1')}</p>
                                        <p>{t('about_page:join_p_2')}</p>
                                    </div>

                                    <div className={styles.jobTitle}>
                                        {t('about_page:rust')}
                                    </div>
                                    <div className={styles.subTitle}>
                                        {t('about_page:about_the_post')}
                                    </div>
                                    <p>
                                        <Trans i18nKey="userMessagesUnread">
                                            {t('about_page:rust_post1')} 
                                            <a href='https://github.com/darwinia-network' rel='noopener'>https://github.com/darwinia-network</a>
                                            {t('about_page:rust_post2')}
                                        </Trans>
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:job_des')}
                                    </div>
                                    <p>
                                        {t('about_page:rust_1')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_2')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_3')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_4')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_5')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:bonus')}
                                    </div>
                                    <p>
                                        {t('about_page:rust_bonus_1')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_bonus_2')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_bonus_3')}
                                    </p>
                                    <p>
                                        {t('about_page:rust_bonus_4')}
                                    </p>
                                    <div className={styles.rustBtn}>
                                        <a className={styles.linkBtn} target="_blank"
                                           rel="noopener noreferrer"
                                           href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                    </div>

                                    <div className={styles.jobTitle}>
                                        {t('about_page:go')}
                                    </div>
                                    <div className={styles.subTitle}>
                                        {t('about_page:about_the_post')}
                                    </div>
                                    <p>
                                        {t('about_page:go_post')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:job_des')}
                                    </div>
                                    <p>
                                        {t('about_page:go_1')}
                                    </p>
                                    <p>
                                        {t('about_page:go_2')}
                                    </p>
                                    <p>
                                        {t('about_page:go_3')}
                                    </p>
                                    <p>
                                        {t('about_page:go_4')}
                                    </p>
                                    <p>
                                        {t('about_page:go_5')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:bonus')}
                                    </div>
                                    <p>
                                        {t('about_page:go_bonus_1')}
                                    </p>
                                    <p>
                                        {t('about_page:go_bonus_2')}
                                    </p>
                                    <p>
                                        {t('about_page:go_bonus_3')}
                                    </p>
                                    <p>
                                        {t('about_page:go_bonus_4')}
                                    </p>
                                    <div className={styles.rustBtn}>
                                        <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                    </div>

                                    <div className={styles.jobTitle}>
                                        {t('about_page:frontend')}
                                    </div>
                                    <div className={styles.subTitle}>
                                        {t('about_page:about_the_post')}
                                    </div>
                                    <p>
                                        {t('about_page:frontend_post')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:job_des')}
                                    </div>
                                    <p>
                                        {t('about_page:frontend_1')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_2')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_3')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_4')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_5')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:bonus')}
                                    </div>
                                    <p>
                                        {t('about_page:frontend_bonus_1')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_bonus_2')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_bonus_3')}
                                    </p>
                                    <p>
                                        {t('about_page:frontend_bonus_4')}
                                    </p>
                                    <div className={styles.rustBtn}>
                                        <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                    </div>

                                    {i18n.language.indexOf('en') > -1 ? <div/> :
                                        <div>
                                            <div className={styles.jobTitle}>
                                                {t('about_page:test')}
                                            </div>
                                            <div className={styles.subTitle}>
                                                {t('about_page:about_the_post')}
                                            </div>
                                            <p>
                                                {t('about_page:test_post_1')}
                                            </p>
                                            <p>
                                                {t('about_page:test_post_2')}
                                            </p>
                                            <p>
                                                {t('about_page:test_post_3')}
                                            </p>
                                            <p>
                                                {t('about_page:test_post_4')}
                                            </p>
                                            <div className={styles.subTitle}>
                                                {t('about_page:job_des')}
                                            </div>
                                            <p>
                                                {t('about_page:test_1')}
                                            </p>
                                            <p>
                                                {t('about_page:test_2')}
                                            </p>
                                            <p>
                                                {t('about_page:test_3')}
                                            </p>
                                            <p>
                                                {t('about_page:test_4')}
                                            </p>
                                            <p>
                                                {t('about_page:test_5')}
                                            </p>
                                            <p>
                                                {t('about_page:test_6')}
                                            </p>
                                            <div className={styles.techBtn}>
                                                <a className={styles.linkBtn} target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                            </div>
                                        </div>
                                    }

                                    <div className={styles.jobTitle}>
                                        {t('about_page:tech')}
                                    </div>
                                    <div className={styles.subTitle}>
                                        {t('about_page:about_the_post')}
                                    </div>
                                    <p>
                                        {t('about_page:tech_post')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:job_des')}
                                    </div>
                                    <p>
                                        {t('about_page:tech_1')}
                                    </p>
                                    <p>
                                        {t('about_page:tech_2')}
                                    </p>
                                    <p>
                                        {t('about_page:tech_3')}
                                    </p>
                                    <p>
                                        {t('about_page:tech_4')}
                                    </p>
                                    <p>
                                        {t('about_page:tech_5')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:bonus')}
                                    </div>
                                    <p>
                                        {t('about_page:tech_bonus_1')}
                                    </p>
                                    <p>
                                        {t('about_page:tech_bonus_2')}
                                    </p>
                                    <p>
                                        {t('about_page:tech_bonus_3')}
                                    </p>
                                    <div className={styles.techBtn}>
                                        <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                    </div>

                                    <div className={styles.jobTitle}>
                                        {t('about_page:edu')}
                                    </div>
                                    <div className={styles.subTitle}>
                                        {t('about_page:about_the_post')}
                                    </div>
                                    <p>
                                        {t('about_page:edu_post_1')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_post_2')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:job_des')}
                                    </div>
                                    <p>
                                        {t('about_page:edu_1')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_2')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_3')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_4')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_5')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:bonus')}
                                    </div>
                                    <p>
                                        {t('about_page:edu_bonus_1')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_bonus_2')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_bonus_3')}
                                    </p>
                                    <p>
                                        {t('about_page:edu_bonus_4')}
                                    </p>
                                    <div className={styles.techBtn}>
                                        <a className={styles.linkBtn} target="_blank"
                                           rel="noopener noreferrer"
                                           href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                    </div>

                                    <div className={styles.jobTitle}>
                                        {t('about_page:oper')}
                                    </div>
                                    <div className={styles.subTitle}>
                                        {t('about_page:about_the_post')}
                                    </div>
                                    <p>
                                        {t('about_page:oper_post_1')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_post_2')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_post_3')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:job_des')}
                                    </div>
                                    <p>
                                        {t('about_page:oper_1')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_2')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_3')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_4')}
                                    </p>
                                    <div className={styles.subTitle}>
                                        {t('about_page:bonus')}
                                    </div>
                                    <p>
                                        {t('about_page:oper_bonus_1')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_bonus_2')}
                                    </p>
                                    <p>
                                        {t('about_page:oper_bonus_3')}
                                    </p>
                                    <div className={styles.techBtn}>
                                        <a className={styles.linkBtn} target="_blank"
                                           rel="noopener noreferrer"
                                           href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                    </div>

                                </div>
                                <div className={styles.tips}>
                                    <div>{t('about_page:tip_1')}</div>
                                    <div>{t('about_page:tip_2')}<a href="mailto:contact@itering.com">contact@itering.com</a></div>
                                </div>


                            </Col>
                            <Col className={styles.col} xs={0} sm={5}>
                                <div className={styles.imgWrapper}>
                                    <img alt="about" src={about_png}/>
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

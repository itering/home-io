import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import styles from "./style.module.scss";
import archorsComponent from "../../components/anchorsComponent";

import about_png from "./img/about.png";
import { withTranslation } from "react-i18next";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount() {
    archorsComponent();
  }

  render() {
    const { t } = this.props;
    return (
      <div className="about">
        <div className={styles.aboutBg}></div>
        <div className={styles.homeBannerArea}>
          <PageHeader className={styles.pageHeader} />
        </div>
        <div className={styles.section}>
          <Container>
            <Row className={styles.row}>
              <Col className={styles.col} xs={0} sm={1}></Col>
              <Col className={styles.col} xs={12} sm={6}>
                <div className={styles.aboutSection}>
                  <div className={styles.aboutUsBg}></div>
                  <div className={styles.title}>{t("about_page:about_us")}</div>
                  <div className={styles.aboutP}>
                    <p>{t("about_page:about_p_1")}</p>
                    <p>{t("about_page:about_p_2")}</p>
                    <p>{t("about_page:about_p_3")}</p>
                  </div>
                </div>
                <div className={styles.joinSection}>
                  <div className={styles.joinBg}></div>
                  <div className={styles.title}>{t("about_page:join_us")}</div>
                  <div className={styles.joinSubTitle}>{t("about_page:join_subtitle")}</div>
                  <div className={styles.joinP}>
                    <p>{t("about_page:join_p_1")}</p>
                    <p>{t("about_page:join_p_2")}</p>
                  </div>

                  {/* <>
                                        <div className={styles.jobTitle}>
                                            {t('about_page:jobs_golang')}
                                        </div>
                                        <div className={styles.subTitle}>
                                            {t('about_page:what_will_you_be_doing')}
                                        </div>
                                        <p>
                                            {t('about_page:what_will_you_be_doing_golang_1')}
                                        </p>
                                        <p>
                                            {t('about_page:what_will_you_be_doing_golang_2')}
                                        </p>
                                        <p>
                                            {t('about_page:what_will_you_be_doing_golang_3')}
                                        </p>
                                        <div className={styles.subTitle}>
                                            {t('about_page:are_you_the_right_person_for_this_role')}
                                        </div>
                                        <p>
                                            {t('about_page:are_you_the_right_person_for_this_role_golang_1')}
                                        </p>
                                        <p>
                                            {t('about_page:are_you_the_right_person_for_this_role_golang_2')}
                                        </p>
                                        <p>
                                            {t('about_page:are_you_the_right_person_for_this_role_golang_3')}
                                        </p>
                                        <p>
                                            {t('about_page:are_you_the_right_person_for_this_role_golang_4')}
                                        </p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_5')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_6')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_7')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_8')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_9')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_10')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_11')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_12')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_13')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_14')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_15')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_golang_16')}</p>
                                        <div className={styles.rustBtn}>
                                            <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                        </div>
                                    </> */}

                  {/* <>
                                        <div className={styles.jobTitle}>
                                            {t('about_page:jobs_dba')}
                                        </div>
                                        <div className={styles.subTitle}>
                                            {t('about_page:what_will_you_be_doing')}
                                        </div>
                                        <p>{t('about_page:what_will_you_be_doing_dba_1')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_dba_2')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_dba_3')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_dba_4')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_dba_5')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_dba_6')}</p>
                                        <div className={styles.subTitle}>
                                            {t('about_page:are_you_the_right_person_for_this_role')}
                                        </div>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_1')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_2')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_3')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_4')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_5')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_6')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_7')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_8')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_9')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_10')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_11')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_12')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_dba_13')}</p>
                                        <div className={styles.rustBtn}>
                                            <a className={styles.linkBtn} target="_blank"
                                                rel="noopener noreferrer"
                                                href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                        </div>
                                    </> */}

                  {/* <>
                                        <div className={styles.jobTitle}>
                                            {t('about_page:jobs_contract_dev')}
                                        </div>
                                        <div className={styles.subTitle}>
                                            {t('about_page:what_will_you_be_doing')}
                                        </div>
                                        <p>{t('about_page:what_will_you_be_doing_contract_dev_1')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_contract_dev_2')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_contract_dev_3')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_contract_dev_4')}</p>
                                        <div className={styles.subTitle}>
                                            {t('about_page:are_you_the_right_person_for_this_role')}
                                        </div>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_1')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_2')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_3')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_4')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_5')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_6')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_contract_dev_7')}</p>
                                        <div className={styles.rustBtn}>
                                            <a className={styles.linkBtn} target="_blank"
                                                rel="noopener noreferrer"
                                                href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                        </div>
                                    </> */}

                  <>
                    <div className={styles.jobTitle}>
                      Web3 Technical Blockchain Evangelist (Darwinia Network - Darwinia Ecosystem Growth)
                    </div>
                    <div className={styles.subTitle}>{t("about_page:what_will_you_be_doing")}</div>
                    <p>
                      1. Engage the Darwinia community through presentations and speaking engagements and represent the
                      company at all developer-focused Hackathons, Conferences, and Online Events
                    </p>
                    <p>
                      2. Support translating the engineering team's progress and development into simple concepts for a
                      global community Telegram Channel, Discord server, Twitter + Medium Blogs, and YouTube explainer
                      videos
                    </p>
                    <p>
                      3. Host regular video sessions explaining recent changes, progress, and why they are essential,
                      with an ability to highlight the most positive aspects of each
                    </p>
                    <p>
                      4. Create written tutorials and guides, conduct live workshops, and write out intelligent,
                      well-thought-out answers to technical questions
                    </p>
                    <p>5. Provide support for integration partners</p>
                    <div className={styles.subTitle}>{t("about_page:are_you_the_right_person_for_this_role")}</div>
                    <div style={{ marginTop: 10 }}>
                      <span>The ideal candidate for us has:</span>
                    </div>
                    <p>1. 1+ years experience in blockchain community engagement and management</p>
                    <p>2. Excellent writing/speaking/listening communication skills in English</p>
                    <p>3. Public speaking experience</p>
                    <p>4. An excellent communicator and can swiftly liaise between engineering and marketing teams</p>
                    <p>
                      5. Passionate about the crypto-asset industry, is eager to improve and hone their knowledge in the
                      crypto space
                    </p>
                    <p>6. A problem solver and proactively troubleshoot issues blocking your path</p>
                    <p>
                      7. Entrepreneurial mindset with a strong sense of ownership, empathy, and determination to get
                      things done
                    </p>
                    <p>
                      8. Direct experience working in a remote-first environment and being able to work independently
                      while collaborating closely with a fast-growing team
                    </p>
                    <p>9. Bonus: Familiar with blockchain-related technical principles</p>
                    <p>10. Bonus: Understand Substrate and have experience working with this framework</p>
                    <p>
                      11. Bonus: Follow open source communities, provide GitHub accounts or other technical forum
                      accounts, and personal technical blog addresses
                    </p>
                    <div className={styles.techBtn}>
                      <a
                        className={styles.linkBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:contact@itering.com"
                      >
                        {t("about_page:apply_now")}
                      </a>
                    </div>
                  </>

                  {/* <>
                    <div className={styles.jobTitle}>{t("about_page:jobs_front_end")}</div>
                    <div className={styles.subTitle}>{t("about_page:what_will_you_be_doing")}</div>
                    <p>{t("about_page:what_will_you_be_doing_front_end_1")}</p>
                    <div className={styles.subTitle}>{t("about_page:are_you_the_right_person_for_this_role")}</div>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_1")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_2")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_3")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_4")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_5")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_6")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_7")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_8")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_9")}</p>
                    <p>{t("about_page:are_you_the_right_person_for_this_role_front_end_10")}</p>
                    <div className={styles.techBtn}>
                      <a
                        className={styles.linkBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:contact@itering.com"
                      >
                        {t("about_page:apply_now")}
                      </a>
                    </div>
                  </> */}

                  {/* <>
                                        <div className={styles.jobTitle}>
                                            {t('about_page:jobs_full_stack_dev')}
                                        </div>
                                        <div className={styles.subTitle}>
                                            {t('about_page:what_will_you_be_doing')}
                                        </div>
                                        <p>{t('about_page:what_will_you_be_doing_full_stack_dev_1')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_full_stack_dev_2')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_full_stack_dev_3')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_full_stack_dev_4')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_full_stack_dev_5')}</p>
                                        <div className={styles.subTitle}>
                                            {t('about_page:are_you_the_right_person_for_this_role')}
                                        </div>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_1')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_2')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_3')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_4')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_5')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_6')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_7')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_8')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_full_stack_dev_9')}</p>
                                        <div className={styles.techBtn}>
                                            <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                        </div>
                                    </> */}

                  {/* <>
                                        <div className={styles.jobTitle}>
                                            {t('about_page:jobs_sdk_dev')}
                                        </div>
                                        <div className={styles.subTitle}>
                                            {t('about_page:what_will_you_be_doing')}
                                        </div>
                                        <p>
                                            {t('about_page:what_will_you_be_doing_sdk_dev_1')}
                                        </p>
                                        <p>
                                            {t('about_page:what_will_you_be_doing_sdk_dev_2')}
                                        </p>
                                        <div className={styles.subTitle}>
                                            {t('about_page:are_you_the_right_person_for_this_role')}
                                        </div>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_sdk_dev_1')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_sdk_dev_2')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_sdk_dev_3')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_sdk_dev_4')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_sdk_dev_5')}</p>
                                        <div className={styles.techBtn}>
                                            <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}</a>
                                        </div>
                                    </> */}

                  {/* <>
                                        <div className={styles.jobTitle}>{t('about_page:jobs_ui_ux')}</div>
                                        <div className={styles.subTitle}>{t('about_page:what_will_you_be_doing')}</div>
                                        <p>{t('about_page:what_will_you_be_doing_ui_ux_1')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_ui_ux_2')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_ui_ux_3')}</p>
                                        <p>{t('about_page:what_will_you_be_doing_ui_ux_4')}</p>
                                        <div className={styles.subTitle}>{t('about_page:are_you_the_right_person_for_this_role')}</div>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_ui_ux_1')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_ui_ux_2')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_ui_ux_3')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_ui_ux_4')}</p>
                                        <p>{t('about_page:are_you_the_right_person_for_this_role_ui_ux_5')}</p>
                                        <div className={styles.techBtn}>
                                            <a className={styles.linkBtn} target="_blank"
                                            rel="noopener noreferrer"
                                            href="mailto:contact@itering.com">{t('about_page:apply_now')}
                                            </a>
                                        </div>
                                    </> */}
                </div>
                <div className={styles.tips}>
                  <div>{t("about_page:tip_1")}</div>
                  <div>
                    {t("about_page:tip_2")}
                    <a href="mailto:contact@itering.com">contact@itering.com</a>
                  </div>
                </div>
              </Col>
              <Col className={styles.col} xs={0} sm={5}>
                <div className={styles.imgWrapper}>
                  <img alt="about" src={about_png} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <PageFooter />
      </div>
    );
  }
}

export default withTranslation()(Home);

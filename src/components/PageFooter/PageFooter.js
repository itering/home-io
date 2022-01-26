import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'

class PageFooter extends Component {
    render() {
        const {t} = this.props

        return (
            <div className={styles.navFooter}>
                <div className={`${styles.recordPC}`}>
                    <div className={styles.recordText}>{t('footer:record_1', {year: 2022})}</div>
                    <div className={`${styles.social}`}>
                        <a href="https://github.com/itering" target="_blank" rel="noopener noreferrer">
                            <div className={styles.githubIcon}></div>
                        </a>
                        <a href="https://twitter.com/IteringTech" target="_blank" rel="noopener noreferrer">
                            <div className={styles.twitterIcon}></div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(PageFooter);

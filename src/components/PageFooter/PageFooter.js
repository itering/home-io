import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import styles from './style.module.scss'

class PageFooter extends Component {
    render() {
        const {t, className, style} = this.props;

        return (
            <div className={`${styles.navFooter} ${className}`} style={style}>
                <div className={`${styles.recordPC}`}>
                    <div className={styles.recordText}>{t('footer:record_1', {year: new Date().getFullYear()})}</div>
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

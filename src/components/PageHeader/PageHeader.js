import React, {Component} from "react";
import {Navbar, Nav, Form, Container, Row, Col} from 'react-bootstrap'
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';

import styles from './style.module.scss'
import logo from '../../logo.svg'
import logo_light from '../../logo-light.svg'
import closeIcon from './img/close.png'
import {withTranslation} from "react-i18next";

const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
    <div
        ref={ref}
        onMouseEnter={e => {
            e.preventDefault();
            onClick(e);
        }}
        onClick={e => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </div>
));

class PageHeader extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    targetElement = null;

    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        this.targetElement = document.querySelector('body');
    }

    componentWillUnmount() {
        // 5. Useful if we have called disableBodyScroll for multiple target elements,
        // and we just want a kill-switch to undo all that.
        // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
        // clicks a link which takes him/her to a different page within the app.
        clearAllBodyScrollLocks();
    }

    changeLng = lng => {
        const {i18n} = this.props;
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    }

    showTargetElement = () => {
        // ... some logic to show target element

        // 3. Disable body scroll
        this.setState({open: true})
        disableBodyScroll(this.targetElement);
    };

    hideTargetElement = () => {
        // ... some logic to hide target element

        // 4. Re-enable body scroll
        this.setState({open: false})
        enableBodyScroll(this.targetElement);
    }


    render() {
        const {theme, t, i18n} = this.props
        let curLang = i18n.language;
        return (
            <div className={theme}>
                <Container>
                    <Row>
                        <Col>
                            <Navbar className={`${styles.Navbar} cs-header`}>
                                <Navbar.Brand href="/">
                                    <img src={theme === 'dark' ? logo_light : logo}/>
                                </Navbar.Brand>
                                <Nav>
                                    <Nav.Link href="#product"><span className={styles.NavLink}>{t('header:product')}</span></Nav.Link>
                                    <Nav.Link href="#news"><span className={styles.NavLink}>{t('header:news')}</span></Nav.Link>
                                    <Nav.Link href="#about"><span className={styles.NavLink}>{t('header:about')}</span></Nav.Link>
                                    {curLang.toLowerCase()==='zh-cn' ? <div className={styles.Language} onClick={() => this.changeLng('en-us')}>English</div> : <div className={styles.Language} onClick={() => this.changeLng('zh-cn')}>中文</div>}
                                </Nav>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default withTranslation()(PageHeader);

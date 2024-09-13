import React, {Component} from "react";
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import {disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import {Drawer} from 'antd';
import {PageFooter} from '../../components/PageFooter'
import styles from './style.module.scss'
import logo from '../../logo.svg'
import logo_light from '../../logo-light.svg'
import menu_icon from './img/menu.png'
import close_icon from './img/close.png'
import {withTranslation} from "react-i18next";
import i18n from '../../locales/i18n';

// const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
//     <div
//         ref={ref}
//         onMouseEnter={e => {
//             e.preventDefault();
//             onClick(e);
//         }}
//         onClick={e => {
//             e.preventDefault();
//             onClick(e);
//         }}
//     >
//         {children}
//     </div>
// ));

class PageHeader extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            visible: false,
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

    showDrawer = () => {
        this.setState({visible: true})
    };

    onClickAnchor = () => {
        const {handleAnchor} = this.props;
        handleAnchor && handleAnchor();
    }

    onClose = () => {
        this.setState({visible: false})
    };


    render() {
        const {theme, t} = this.props
        const {visible} = this.state
        let curLang = i18n.language;
        return (
            <div className={theme}>
                <Container>
                    <Row>
                        <Col>
                            <Navbar className={`${styles.Navbar} cs-header`}>
                                <Navbar.Brand href="/">
                                    <img alt="logo" src={theme === 'dark' ? logo_light : logo}/>
                                </Navbar.Brand>
                                <Nav className={styles.navLinks}>
                                    <Nav.Link href="/#product" onClick={this.onClickAnchor}><span
                                        className={styles.NavLink}>{t('header:product')}</span></Nav.Link>
                                    <a rel="noopener noreferrer" target="_blank" href="https://apply.workable.com/itering" className={styles.NavLink}>Careers</a>
                                </Nav>
                                <div className={styles.mobileMenu} onClick={this.showDrawer}>
                                    <img alt="menu" className={styles.menuIcon} src={menu_icon}/>
                                </div>
                                <Drawer
                                    placement="right"
                                    closable={false}
                                    onClose={this.onClose}
                                    visible={visible}
                                    bodyStyle={{padding: '0'}}
                                >
                                    <div className={styles.drawer}>
                                        <div className={styles.closeBtn}>
                                            <img alt="close" onClick={this.onClose} src={close_icon}/>
                                        </div>
                                        <Nav className={styles.linkContent}>
                                            <Nav.Link href="/#product" onClick={this.onClose}><span
                                                className={styles.NavLink}>{t('header:product')}</span></Nav.Link>
                                            <a rel="noopener noreferrer" target="_blank" href="https://apply.workable.com/itering" className={styles.NavLink}>Careers</a>
                                        </Nav>
                                        <PageFooter/>
                                    </div>
                                </Drawer>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default withTranslation()(PageHeader);

import HeaderSection from '../shared/header-section';
import styles from "./layout.module.css";
import { Container, Header, Sticky, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Head from 'next/head';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleSidebar } from '../../redux/mobile/mobile.actions';
import { sidebarStatus } from '../../redux/mobile/mobile.selectors';
import MobileMenu from '../shared/mobile-menu';

const Layout = ({ children, pageTitle, visible, toggleSidebar }) => {
    return ( 
        <div className={styles.layout}>
            <Head>
                <title>{ pageTitle === 'Home' ? '' : pageTitle + ' | ' }Armin Basirian</title>
            </Head>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => toggleSidebar(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <MobileMenu />
                </Sidebar>
                <Sidebar.Pusher dimmed={visible}>
                    <header>
                        <Sticky className="sticky-header">
                            <Container>
                                <HeaderSection />
                            </Container>
                        </Sticky>
                    </header>
                    <Container>
                        <div className={ styles.bodyDesign }>
                            { children }
                        </div>
                    </Container>
                </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    toggleSidebar: status => dispatch(toggleSidebar(status)),
});

const mapStateToProps = createStructuredSelector({
    visible: sidebarStatus
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
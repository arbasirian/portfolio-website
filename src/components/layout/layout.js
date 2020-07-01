import HeaderSection from '../shared/header-section';
import styles from "./layout.module.css";
import { Container, Header, Sticky } from 'semantic-ui-react'
import Head from 'next/head';

const Layout = ({ children, pageTitle }) => ( 
    <div className={styles.layout}>
        <Head>
            <title>{ pageTitle === 'Home' ? '' : pageTitle + ' | ' }Armin Basirian</title>
        </Head>
        <header>
            <Sticky className="sticky-header">
                <Container>
                    <HeaderSection />
                </Container>
            </Sticky>
            
        </header>
        <Container>
            <div className="bodyDesign">
                { children }
            </div>
        </Container>
        
    </div>
);

export default Layout;
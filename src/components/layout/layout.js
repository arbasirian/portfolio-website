import HeaderSection from '../shared/header-section';
import styles from "./layout.module.css";
import { Container, Header } from 'semantic-ui-react'
import Head from 'next/head';

const Layout = ({ children, pageTitle }) => ( 
    <div className={styles.layout}>
        <Head>
            <title>{ pageTitle === 'Home' ? '' : pageTitle + ' | ' }Armin Basirian</title>
        </Head>
        <header>
            <Container>
                <HeaderSection />
            </Container>
        </header>
        <Container>
            <div className="bodyDesign">
                { children }
            </div>
        </Container>
        
    </div>
);

export default Layout;
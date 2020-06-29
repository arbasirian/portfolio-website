import HeaderSection from '../shared/header-section';
import styles from "./layout.module.css";
import { Container, Header } from 'semantic-ui-react'

const Layout = ({ children, pageTitle }) => ( 
    <div className={styles.layout}>
        <head>
            <title>{ pageTitle === 'Home' ? '' : pageTitle + ' | ' }Armin Basirian</title>
        </head>
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
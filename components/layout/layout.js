import HeaderSection from '../shared/header-section';

const Layout = ({ children, pageTitle }) => ( 
    <div>
        <head>
            <title>{ pageTitle === 'Home' ? '' : pageTitle + ' | ' }Armin Basirian</title>
        </head>
        <header>
            <HeaderSection />
        </header>
        <div className="bodyDesign">
            { children }
        </div>
    </div>
);

export default Layout;
import MainMenu from './main-menu';
import Link from 'next/link';

const HeaderSection = () => (
    <div className="header-section">
        <div className="logo-wrapper">
            <Link href="/"><a>Armin Basirian</a></Link>
        </div>
        <MainMenu />
    </div>
);

export default HeaderSection;
import MainMenu from './main-menu';
import Link from 'next/link';

const HeaderSection = () => (
    <div className="header-section">
        <div className="logo-wrapper">
            <Link href="/"><a>Armin Basirian</a></Link>
        </div>
        <MainMenu />
        <style jsx>{`
            .header-section {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .logo-wrapper a {
                font-family: 'Dancing Script', cursive;
                font-weight: 900;
                font-size: 31px;
                text-decoration: none;
                color: #c82127;
                line-height: normal;

            }
        `}</style>
    </div>
);

export default HeaderSection;
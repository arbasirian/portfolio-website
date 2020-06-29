import Link from 'next/link';

const MainMenu = () => (
    <div className="main-menu">
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/articles"><a>Articles</a></Link>
        <Link href="/books"><a>Books</a></Link>
        <Link href="/"><a>Philanthropy</a></Link>
        <Link href="/"><a>About</a></Link>
        <Link href="/"><a>Contact</a></Link>
        <style jsx>{`
            .main-menu {
                display: flex;
                justify-content: space-between;
            }
            .main-menu a {
                padding: 20px 10px;
                color: #000;
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 1px;

            }
            .main-menu a:hover { color: #c82127 }
        `}</style>
    </div>
);

export default MainMenu;
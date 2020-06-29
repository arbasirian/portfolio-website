import Link from 'next/link';

const MainMenu = () => (
    <div className="main-menu">
        <Link href="/portfolio"><a>Portfolio</a></Link>
        <Link href="/articles"><a>Articles</a></Link>
        <Link href="/books"><a>Books</a></Link>
        <Link href="/"><a>Philanthropy</a></Link>
        <Link href="/"><a>About</a></Link>
        <Link href="/"><a>Contact</a></Link>
    </div>
);

export default MainMenu;
import Link from 'next/link';
import { Dropdown } from 'semantic-ui-react'

const MainMenu = () => (
    <div className="main-menu">
        <Dropdown text='Portfolio'>
            <Dropdown.Menu>
                <Dropdown.Item><Link href="/portfolio"><a>All Items</a></Link></Dropdown.Item >
            </Dropdown.Menu>
        </Dropdown>
        <Link href="/articles"><a>Articles</a></Link>
        <Link href="/books"><a>Books</a></Link>
        <Link href="/"><a>Philanthropy</a></Link>
        <Link href="/"><a>About</a></Link>
        <Link href="/"><a>Contact</a></Link>
        <style jsx>{`
            .main-menu {
                display: flex;
                justify-content: space-between;
                align-items: center;
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
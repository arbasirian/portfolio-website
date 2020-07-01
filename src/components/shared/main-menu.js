import Link from 'next/link';
import { Dropdown, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPortfolioList } from '../../redux/portfolio/portfolio.selectors';
import { selectPortfolio } from '../../redux/portfolio/portfolio.actions';
import { toggleSidebar } from '../../redux/mobile/mobile.actions';
import { MobileScreen, DesktopScreen } from 'react-responsive-redux'


const MainMenu = ({ portfolioList, selectPortfolio, toggleSidebar }) => (
    <div className="main-menu">
        <MobileScreen>
            <Icon onClick={ () => toggleSidebar(true) } name="content" size='large'/>
        </MobileScreen>
        <DesktopScreen>
            <Dropdown text='Portfolio'>
                <Dropdown.Menu>
                    <Dropdown.Item><Link href="/portfolio"><a>All Items</a></Link></Dropdown.Item >
                    {
                        portfolioList.map((item) => (
                            <Dropdown.Item key={ item.id }>
                                <Link href={{ pathname: '/portfolio-view', query: { portfolioId: item.id } }}>
                                    <a onClick={ () => selectPortfolio(item.id) }>{ item.title } </a>
                                </Link>
                            </Dropdown.Item>
                        ))
                    }
                    
                </Dropdown.Menu>
            </Dropdown>
            <Link href="/articles"><a>Articles</a></Link>
            <Link href="/books"><a>Books</a></Link>
            <Link href="/"><a>Philanthropy</a></Link>
            <Link href="/"><a>About</a></Link>
            <Link href="/"><a>Contact</a></Link>
        </DesktopScreen>
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

const mapDispatchToProps = dispatch => ({
    selectPortfolio: item => dispatch(selectPortfolio(item)),
    toggleSidebar: status => dispatch(toggleSidebar(status)),
});
const mapStateToProps = createStructuredSelector({
    portfolioList: selectPortfolioList
});
export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
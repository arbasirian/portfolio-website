import Link from 'next/link';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPortfolioList } from '../../redux/portfolio/portfolio.selectors';
import { selectPortfolio } from '../../redux/portfolio/portfolio.actions';
import { toggleSidebar, toggleMobileMenuItem } from '../../redux/mobile/mobile.actions';
import { checkActiveIndex } from '../../redux/mobile/mobile.selectors';
import { Accordion, Menu } from 'semantic-ui-react';


const MobileMenu = ({ portfolioList, selectPortfolio, toggleSidebar, toggleMobileMenuItem, activeIndex }) => (
    <div className="mobile-menu">
        <Accordion vertical="true">
            <Accordion.Title
                active={activeIndex === 0}
                content='Portfolio'
                index={0}
                onClick={() => { activeIndex === 0 ? toggleMobileMenuItem(null) : toggleMobileMenuItem(0) }}
            />
            <Accordion.Content active={activeIndex === 0} className="accordion-menu">
                <Link href="/portfolio"><a onClick={ () =>  toggleSidebar(false)}>All Items</a></Link>
                {
                    portfolioList.map((item) => (
                        <Link key={ item.id } href={{ pathname: '/portfolio-view', query: { portfolioId: item.id } }}>
                            <a onClick={ () => { 
                                selectPortfolio(item.id);
                                toggleSidebar(false);
                            } }>{ item.title } </a>
                        </Link>
                    ))
                }
            </Accordion.Content>
        </Accordion>
        
        <Link href="/articles"><a onClick={ () =>  toggleSidebar(false)}>Articles</a></Link>
        <Link href="/books"><a onClick={ () =>  toggleSidebar(false)}>Books</a></Link>
        <Link href="/"><a onClick={ () =>  toggleSidebar(false)}>Philanthropy</a></Link>
        <Link href="/"><a onClick={ () =>  toggleSidebar(false)}>About</a></Link>
        <Link href="/"><a onClick={ () =>  toggleSidebar(false)}>Contact</a></Link>
        <style jsx>{`
            .mobile-menu{
                display: flex;
                justify-content: start;
                /* align-items: start; */
                flex-direction: column;
                margin-top: 30px
            }
            .mobile-menu a {
                padding: 10px 20px;
                color: #fff;
                font-size: 15px;
                font-weight: 400;
                letter-spacing: 1px;
                text-align: left;
            }
            .mobile-menu a:hover { color: #c82127 }
            
        `}</style>
    </div>
);

const mapDispatchToProps = dispatch => ({
    selectPortfolio: item => dispatch(selectPortfolio(item)),
    toggleSidebar: status => dispatch(toggleSidebar(status)),
    toggleMobileMenuItem: index => dispatch(toggleMobileMenuItem(index)),

});
const mapStateToProps = createStructuredSelector({
    portfolioList: selectPortfolioList,
    activeIndex: checkActiveIndex

});
export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);
import Layout from '../components/layout/layout';
import PortfolioItem from '../components/portfolio-item/portfolio-item';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { selectPortfolioSlide, selectPortfolioList } from '../redux/portfolio/portfolio.selectors';
import { createStructuredSelector } from 'reselect';
import { selectSlide } from '../redux/portfolio/portfolio.actions';

const Portfolio = ({activeSlide, list, selectSlide}) => (
    <Layout pageTitle="Portfolio">
        <div>
            <Carousel 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false} 
                useKeyboardArrows 
                autoPlay="true"
                className="presentation-mode"
                selectedItem={activeSlide}
                onChange={(change) => selectSlide(change)}
            >
                {
                    list.map((item) => (
                        <PortfolioItem key={ item.id }/>
                    ))
                }
            </Carousel>
        </div>
    </Layout>
    
);
const mapDispatchToProps = dispatch => ({
    selectSlide: item => dispatch(selectSlide(item)),
});
const mapStateToProps = createStructuredSelector({
    activeSlide: selectPortfolioSlide,
    list: selectPortfolioList
});
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
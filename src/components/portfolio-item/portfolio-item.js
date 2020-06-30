import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectPortfolioSlide, selectPortfolioList } from "../../redux/portfolio/portfolio.selectors";

const PortfolioItem = ({activeSlide, list}) => {
    const { title,  description, image_url} = list[activeSlide];
    return (
        <div className="portfolio-item">
            <div className="info  slideInLeft">
                <div className="title">{title}</div>
                <div className="devider" />
                <div className="description">{description}</div>
                <a className="more">See More</a>
            </div>
            <div className="slideInRight image">
                <img src={image_url}/>
            </div>
            <style jsx>{`
                .portfolio-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 93vh;
                }
                .portfolio-item .info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    width: 60%;
                    padding: 0 20px;
                }
                .portfolio-item .info .title {
                    font-size: 30px;
                    line-height: initial;
                    font-weight: 300;
                }
                .portfolio-item .info .devider {
                    background-image: linear-gradient(93deg,#c82127 1%,#ff656b 119%);
                    height: 5px;
                    width: 44px;
                    border-radius: 30px;
                    margin-top: 0.5em;
                    margin-bottom: 1em;
                }
                .portfolio-item .info .description {
                    text-align: right;
                    margin-bottom: 1em;
                    font-size: 15px;
                    line-height: initial;
                    font-weight: 300;
                    color: #000000a1;
                    padding-left: 40px;
                }
                .portfolio-item .info .more { 
                    font-family: inherit;
                    border: 1px solid #000;
                    padding: 10px 36px;
                    background-color: transparent;
                    border-radius: 3px;
                    cursor: pointer;
                    color: #000;
                    transition: background-color 0.5s;
                    transition: color 0.5s;
                }
                .portfolio-item .info .more:hover {
                    background-color: #000;
                    color: #fff;
                }
                .portfolio-item .image {
                    width: 40%;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .portfolio-item .image img {
                    width: 250px;
                }
            `}</style>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    activeSlide: selectPortfolioSlide,
    list: selectPortfolioList
});
export default connect(mapStateToProps)(PortfolioItem);
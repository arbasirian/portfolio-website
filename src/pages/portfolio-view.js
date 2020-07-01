import React from 'react'
import Layout from '../components/layout/layout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';
import { selectPortfolio } from '../redux/portfolio/portfolio.actions';
import { selectCurrentPortfolio } from '../redux/portfolio/portfolio.selectors';

const PortfolioView = ({ portfolio, selectPortfolio }) => {
    const router = useRouter();
    const { portfolioId } = router.query;
    const { id, title, image_url, description } = portfolio;
    if(!id && portfolioId) {
        selectPortfolio(Number(portfolioId))
    }
    return (
        <Layout pageTitle={title}>
            <div className="portfolio-view">
                <div className="header-wrapper">
                    <div className="image-container">
                        <img src={ image_url } />
                    </div>
                    <div className="title"> {title} </div>
                </div> 
                <div className="text-wrapper">
                    <div className="title"> {description} </div>
                </div>
            </div>
            <style jsx>{`
                .portfolio-view {
                    margin: 30px auto;
                }
                .header-wrapper {
                    display: flex;
                    align-items: center;
                    background-color: #c82127;
                    border-radius: 7px;
                    justify-content: space-evenly;
                    padding: 40px;
                    flex-wrap: wrap;
                }
                .header-wrapper .image-container {
                    width: 150px;
                    height: 150px;
                    background-color: #fff;
                    border-radius: 50%;
                    overflow: hidden;
                }
                .header-wrapper .image-container img { 
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .header-wrapper .title {
                    font-size: 45px;
                    line-height: initial;
                    font-weight: 900;
                    color: #fff;
                    padding: 30px 0;
                }
                .text-wrapper {
                    padding: 30px;
                }
            `}</style>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    selectPortfolio: item => dispatch(selectPortfolio(item)),
});
const mapStateToProps = createStructuredSelector({
    portfolio: selectCurrentPortfolio,
});
export default connect(mapStateToProps, mapDispatchToProps)(PortfolioView);
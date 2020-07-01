import React from 'react'
import Layout from '../components/layout/layout';
import { connect } from 'react-redux';
import { selectCurrentArticle } from '../redux/article/article.selectors';
import { createStructuredSelector } from 'reselect';
import { selectArticle } from '../redux/article/article.actions';
import { useRouter } from 'next/router';
import { Icon } from 'semantic-ui-react';

const ArticleView = ({ article, selectArticle }) => {
    const router = useRouter();
    const { articleId } = router.query;
    const { id, title, image_url, author, summary, text } = article;
    if(!id && articleId) {
        selectArticle(Number(articleId))
    }

    return (
        <Layout pageTitle={title}>
            <div className="article-view">
                <div className="image-wrapper">
                    <img src={ image_url } />
                </div> 
                <div className="text-wrapper">
                    <div className="title"> {title} </div>
                    <div className="author">
                        <Icon circular name='user' />
                        <span>{author}</span> 
                    </div>
                    <div className="summary">{summary} </div>
                    <div className="text">{text} </div>
                </div>
            </div>
            <style jsx>{`
                .article-view {
                    width: 80%;
                    margin: 30px auto;
                }
                .image-wrapper, .image-wrapper img { width: 100% }
                .text-wrapper {
                    background-color: #fff;
                    margin: -50px 30px 20px;
                    position: relative;
                    border: 1px solid #f1f1f1;
                    padding: 30px;
                }
                .title {
                    font-size: 22px;
                    line-height: initial;
                    font-weight: 700;
                    color: #c82127;
                    margin-bottom: 0.5em;
                }
                .author { 
                    margin-bottom: 1em; 
                    display: flex;
                    align-items: center;
                }
                .author span{  padding-left: 10px }
                .summary {
                    border: 1px solid#f1f1f1;
                    padding: 15px;
                    margin: .5em 0;
                    text-align: center;
                    font-size: 16px;
                    color: #777;
                    line-height: initial;
                }
                .text {
                    text-align: justify;
                    font-size: 17px;
                    color: #3a3a3a;
                    line-height: 2rem;
                    font-weight: 300;
                }
            `}</style>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    selectArticle: item => dispatch(selectArticle(item)),
});
const mapStateToProps = createStructuredSelector({
    article: selectCurrentArticle,
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
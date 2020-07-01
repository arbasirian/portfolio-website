import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { selectArticleSlide, selectArticles } from "../../redux/article/article.selectors";
import Link from "next/link";
import { selectArticle } from "../../redux/article/article.actions";

const ArticleItem = ({activeSlide, articles, selectArticle}) => {
    const { id, title,  summary, image_url} = articles[activeSlide];
    return (
        <div className="article-item">
            <div className="image">
                <img src={image_url}/>
            </div>
            <div className="info">
                <div className="title">{title}</div>
                <div className="description">{summary}</div>
                <Link href={{ pathname: '/article-view', query: { articleId: id } }}>
                    <button onClick={ () => selectArticle(id) } className="more">See More</button>
                </Link>
            </div>
            <style jsx>{`
                .article-item {
                    display: flex;
                    align-items: center;
                    min-height: 80vh;
                    flex-wrap: wrap;
                }
                .article-item .info {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0 20px;
                    flex: 1;
                }
                .article-item .info .title {
                    font-size: 20px;
                    line-height: initial;
                    font-weight: 500;
                    text-align: left;
                    margin-bottom: 0.5em;
                }
                .article-item .info .description {
                    text-align: justify;
                    margin-bottom: 1em;
                    font-size: 15px;
                    line-height: initial;
                    font-weight: 300;
                    color: #000000a1;
                    padding-right: 40px;
                }
                .article-item .info .more { 
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
                .article-item .info .more:hover {
                    background-color: #000;
                    color: #fff;
                }
                .article-item .image {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    padding: 0 20px;
                    flex: 1;
                    min-width: 250px;
                }
                .article-item .image img {
                    border-top-right-radius: 20px;
                    border-bottom-left-radius: 20px;
                }
            `}</style>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    selectArticle: item => dispatch(selectArticle(item)),
});
const mapStateToProps = createStructuredSelector({
    activeSlide: selectArticleSlide,
    articles: selectArticles
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleItem);
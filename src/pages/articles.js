import Layout from '../components/layout/layout';
import ArticleItem from '../components/article-item/article-item';
import { Carousel } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { selectArticleSlide, selectArticles} from '../redux/article/article.selectors';
import { createStructuredSelector } from 'reselect';
import { setArticleSlide } from '../redux/article/article.actions';

const Articles = ({ activeSlide, articles, setArticleSlide }) => (
    <Layout pageTitle="Articles">
        <div>
            <Carousel 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false} 
                useKeyboardArrows 
                // autoPlay="true"
                className="presentation-mode"
                selectedItem={activeSlide}
                onChange={(change) => setArticleSlide(change)}
            >
                {
                    articles.map((item) => (
                        <ArticleItem key={ item.id }/>
                    ))
                }
            </Carousel>
        </div>
    </Layout>
    
);

const mapDispatchToProps = dispatch => ({
    setArticleSlide: item => dispatch(setArticleSlide(item)),
});
const mapStateToProps = createStructuredSelector({
    activeSlide: selectArticleSlide,
    articles: selectArticles
});
export default connect(mapStateToProps, mapDispatchToProps)(Articles);

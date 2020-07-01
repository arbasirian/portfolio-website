import Layout from '../components/layout/layout';
import BookItem from '../components/book-item/book-item';
import { createStructuredSelector } from 'reselect';
import { selectBookList } from '../redux/book/book.selectors';
import { connect } from 'react-redux';

const Books = ({ booksList }) => {
    
    return(
        <Layout pageTitle="Books">
            <div className="book-container">
                {
                    booksList.map((bookInfo) => (
                        <div className="item" key={ bookInfo.id }>
                            <BookItem key={ bookInfo.id }  details={ bookInfo } />
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
                .book-container {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    align-items: center;
                    min-height: 90vh;
                } 
                .book-container .item { 
                    width: 350px;
                    margin: 2em 0;
                }
            `}</style>
        </Layout>
    )
};
const mapStateToProps = createStructuredSelector({
    booksList: selectBookList
});
export default connect(mapStateToProps)(Books);
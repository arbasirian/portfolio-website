import Layout from '../components/layout/layout';
import BookItem from '../components/book-item/book-item';

const Books = () => {
    const bookInfo = { bookId: 1, bookImage: '/static/1.jpg', bookTitle: 'test', description: 'test2' };
    return(
        <Layout pageTitle="Books">
            <div className="book-container">
                <div className="item">
                    <BookItem  details={ bookInfo } />
                </div>
                <div className="item">
                    <BookItem  details={ bookInfo } />
                </div>
            </div>
            <style jsx>{`
                .book-container {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    align-items: center;
                    height: 93vh;
                } 
                .book-container .item { 
                    width: 40%;
                    max-width: 300px;
                }
            `}</style>
        </Layout>
    )
};

export default Books;
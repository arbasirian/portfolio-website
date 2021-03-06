import React, { Component } from 'react'
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import { selectCurrentBook } from '../redux/book/book.selectors';
import { createStructuredSelector } from 'reselect';
import { selectBook } from '../redux/book/book.actions';

const BookDetails = ({ bookDetails, selectBook }) => {
    const router = useRouter();
    const { bookId } = router.query;

    const { id, title, image_url, author, description, price, amazoon_url } = bookDetails;
    if(!id && bookId) {
        selectBook(Number(bookId))
    }
    return (
        <Layout pageTitle={ title }>
            <div className="book-details">
                <div className="left-container">
                    <img src={ image_url ? image_url : '' }/>
                    <div className="price">Price: { price}</div>
                    <a className="action-button" href={ amazoon_url }>Buy From Amazon</a>
                </div>
                <div className="detail-wrapper">
                    <div className="title">{ title }</div>
                    <div className="author">By { author }</div>
                    <p className="description">{ description }</p>
                </div>
            </div>
            <style jsx>{`
                .book-details {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 50px;
                    flex-wrap:wrap;
                }    
                .book-details .left-container { 
                    flex: 1;
                    min-width: 250px;
                    margin-bottom: 2em;
                 }  
                .book-details .left-container img { width: 100% }   
                .book-details .left-container .price{
                    font-size: 20px;
                    line-height: initial;
                    font-weight: 900;
                    margin: 1em auto;
                } 
                .detail-wrapper { 
                    padding: 0 20px; 
                    flex: 3;
                    margin-bottom: 2em;
                }
                .detail-wrapper .title {
                    font-size: 30px;
                    font-weight: 700;
                    line-height: initial;
                    margin-bottom: 1em;
                }
                .detail-wrapper .author {
                    color: #000000;
                    font-weight: 300;
                    font-size: 15px;
                    margin-bottom: .5em;
                }
                .detail-wrapper p {
                    font-size: 18px;
                    font-weight: 300;
                    line-height: initial;
                    text-align: justify;
                }

            `}</style>
        </Layout>
    )
}

const mapDispatchToProps = dispatch => ({
    selectBook: book => dispatch(selectBook(book)),
});

const mapStateToProps = createStructuredSelector({
    bookDetails: selectCurrentBook
});
export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
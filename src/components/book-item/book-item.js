import React, { Component } from 'react'
import Link from 'next/link'
import styles from './book-item.module.css';
import { connect } from 'react-redux';
import { selectBook } from '../../redux/book/book.actions';

const BookItem = ({ details, selectBook }) => {
        const { id, title, image_url, description, release_date } = details;
        return (
            <div className={ styles.bookItem }>
                <div className={ styles.imageContainer }>
                    <img src={ image_url ? image_url : '' }/>
                </div>
                <div className={ styles.details }>
                    <div className={ styles.title }>{ title ? title.substring(0, 50) + ' ...' : '' }</div>
                    <div className={ styles.description }>{ description ? description.substring(0, 250) + ' ...' : '' }</div>
                    <Link href={{ pathname: '/book-details', query: { bookId: id } }}>
                        <button onClick={ () => selectBook(details.id) } className="action-button">More Details</button>
                    </Link>
                </div>
            </div>
        )
}
const mapDispatchToProps = dispatch => ({
    selectBook: book => dispatch(selectBook(book)),
});
export default connect(null, mapDispatchToProps)(BookItem);
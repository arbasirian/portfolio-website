import React, { Component } from 'react'
import Link from 'next/link'
import styles from './book-item.module.css';

const BookItem = ({ details }) => {
        const { bookId, bookImage, bookTitle, description } = details;
        return (
            <div className={ styles.bookItem }>
                <div className={ styles.imageContainer }>
                    <img src={ bookImage ? bookImage : '' }/>
                </div>
                <div className={ styles.details }>
                    <div className={ styles.title }>{ bookTitle ? bookTitle : '' }</div>
                    <div className={ styles.description }>{ description ? description : '' }</div>
                    <Link href={{ pathname: '/book-details', query: { bookId: 1 } }} as={`/book-details/${bookTitle}`}>
                        <button className="action-button">More Details</button>
                    </Link>
                </div>
            </div>
        )
}

export default BookItem;
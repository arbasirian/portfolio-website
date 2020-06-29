import React, { Component } from 'react'
import Layout from '../components/layout/layout';
import { useRouter } from 'next/router'

const BookDetails = () => {
    const router = useRouter();
    const { bookId } = router.query;

    return (
        <Layout>
           test 
        </Layout>
    )
}

export default BookDetails;
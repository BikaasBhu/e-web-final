import React from 'react'
import Navbar from './Navbar'
import Product from './Products'
import Aids from './Aids'
import FeatureProduct from './view/FeatureProduct'

const Home = () => {
    return (
        <>
            <Navbar />
            <Product />
            <FeatureProduct />
        </>
    )
}

export default Home
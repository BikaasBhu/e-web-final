import React, { useContext, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import { Store } from './Context/dataContext'
import Navbar from './Navbar'

const Catogery = () => {
    const { catogeryname } = useParams()
    const navigate = useNavigate()
    const [productId, setPRoductId] = useState()

    const { productData } = useContext(Store)


    const handleDetail = ({ id }) => {
        navigate(`/detail/${id}`)
    }

    const handleAddToCart = async ({ productName, productPrice, img }) => {
        navigate('/cart')
    }

    return (
        <div class="font-[sans-serif]">
            <button className='align-middle p-2 m-3 rounded-md bg-transparent' onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                </svg>
            </button>
            <h2 className='p-2 text-4xl font-bold text-gray-800 capitalize'> here your products by {catogeryname}</h2>
            <div class="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        productData.map((product) => {
                            if (product.catogery === catogeryname) {
                                return (
                                    <>
                                        <div onClick={() => handleDetail({ id: product.id, })} class="bg-gray-100 rounded-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
                                            <div class="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                                                    <path
                                                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                                        data-original="#000000"></path>
                                                </svg>
                                            </div>
                                            <div class="max-lg:w-11/12 w-4/5 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                                <img src={product.imageUrl} alt="Product 1" class="h-full w-full object-contain" />
                                            </div>
                                            <div class="text-center mt-4">
                                                <h3 class="text-lg font-bold text-gray-800">{product.productName}</h3>
                                                <h4 class="text-xl text-gray-700 font-bold mt-4">${product.productPrice} <span class="text-gray-400 ml-2 font-medium">{product.productPrice - (product.productPrice * 0.15)}</span></h4>
                                                <button type="button" class="w-full mt-6 px-4 py-3 bg-[#333] hover:bg-[#222] text-white rounded-full" onClick={() => handleAddToCart({ productName: product.productName, productPrice: product.productPrice, img: product.imageUrl })}>Add to cart</button>
                                            </div>
                                        </div >
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Catogery
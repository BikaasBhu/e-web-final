import React, { useContext } from 'react'
import { Store } from './Context/dataContext'
import { useParams } from "react-router-dom"
import Navbar from './Navbar'

const ProductDetail = () => {
    const { id } = useParams()
    const { productData } = useContext(Store)
    return (
        <div class="font-[sans-serif] bg-gray-200">
            <Navbar />
            {productData.map((product) => {
                if (product.id === id) {
                    return (
                        <>
                            <div class="p-6 my-5 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                                    <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
                                        <div class="bg-gray-300 px-4 py-10 rounded-xl">
                                            <img src={product.imageUrl} alt="Product" class="w-4/5 rounded object-cover" />
                                        </div>

                                    </div>
                                    <div class="lg:col-span-2">
                                        <h2 class="text-2xl font-extrabold text-gray-800">{product.productName}</h2>
                                        <div class="flex flex-wrap gap-4 mt-4">
                                            <p class="text-gray-800 text-4xl font-bold">${product.productPrice - product.productPrice * 0.1}</p>
                                            <p class="text-gray-600 text-xl"><strike>${product.productPrice}</strike> <span class="text-sm ml-1">Tax included</span></p>
                                        </div>
                                        <div class="flex space-x-2 mt-4">
                                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <h4 class="text-gray-900 text-base">500 Reviews</h4>
                                        </div>
                                        <div class="flex flex-wrap gap-4 mt-8">
                                            <button type="button" class="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-bold rounded">Buy now</button>
                                            <button type="button" class="min-w-[200px] px-4 py-2.5 border border-gray-900 bg-transparent text-gray-800 text-sm font-bold rounded">Add to cart</button>
                                        </div>
                                        <div class="mt-8">
                                            <h3 class="text-lg font-bold text-gray-800">About the {product.productName}</h3>
                                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                                                <p>{product.productDesc}</p>
                                            </ul>
                                        </div>
                                        <button type="button" class="w-full mt-8 px-4 py-2 bg-transparent border-2 border-yellow-300 text-yellow-300 font-bold rounded">Read all reviews</button>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }


            })
            }
        </div >
    )
}

export default ProductDetail
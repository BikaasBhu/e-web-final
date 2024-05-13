import React, { useContext } from 'react'
import { Store } from './Context/dataContext'
import Navbar from './Navbar';

const Cart = () => {
  const { cart, total } = useContext(Store)

  return (
    <>
      <Navbar />
      <section
        class=" overflow-hidden justify-around md:items-start lg:items-start items-center flex lg:flex-row md:flex-col flex-col p-2 my-3">

        <div class="container w-full bg-rd-500">
          {
            cart.map((c) => {
              return (
                <div
                  class=" md:w-[800px] col-span-12 xl:col-span-8 md:pr-8 pt-14 pb-2 bg-red-400 lg:py-2 max-xl:max-w-3xl max-xl:mx-auto">
                  <div
                    class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                    <div class="w-full md:max-w-[126px]">
                      <img src="https://pagedone.io/asset/uploads/1701162880.png" alt="perfume bottle image"
                        class="mx-auto" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div class="md:col-span-2">
                        <div class="flex flex-col max-[500px]:items-center gap-3">
                          <h6 class="font-semibold text-base leading-7 text-black">{c.name}</h6>
                          <h6 class="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                          <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">$120.00</h6>
                        </div>
                      </div>
                      <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                        <div class="flex items-center h-full">
                          <button
                            class="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                              viewBox="0 0 22 22" fill="none">
                              <path d="M16.5 11H5.5" stroke="" stroke-width="1.6"
                                stroke-linecap="round" />
                              <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                              <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                stroke-linecap="round" />
                            </svg>
                          </button>
                          <input type="text"
                            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                            placeholder="1" />
                          <button
                            class="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                              xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                              viewBox="0 0 22 22" fill="none">
                              <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                stroke-linecap="round" />
                              <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                stroke-width="1.6" stroke-linecap="round" />
                              <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2"
                                stroke-width="1.6" stroke-linecap="round" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                        <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">$120.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="container ">
          <div
            class="col-span-12 z-10 xl:col-span-4 bg-gray-50  max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Order Summary</h2>
            <div class="mt-8">

              <form>

                <div class="flex items-center justify-between py-8">
                  <p class="font-medium text-xl leading-8 text-black">3 Items</p>
                  <p class="font-semibold text-xl leading-8 text-indigo-600">${total}</p>
                </div>
                <button
                  class="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">Checkout</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
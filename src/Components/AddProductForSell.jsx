import React, { useEffect, useState } from 'react'
import { addDoc, collection } from "firebase/firestore"
import { db, storage } from "../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
const AddProductForSell = () => {

    const [productName, setProductName] = useState("")
    const [productDesc, setProductDesc] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [warenty, setWarenty] = useState("")
    const [brand, setBrand] = useState("")
    const [madeIn, setMadeIn] = useState("")
    const [catogery, setCatogery] = useState("")
    const [quantity, setQuantity] = useState("")
    const [quantityChange, setQuantityChange] = useState(1)
    const [image, setImage] = useState(null)
    const [imageUrl, setImageUrl] = useState()
    const [removedBg, setRemovedBg] = useState()

    const handlePlusQuantity = () => {
        setQuantityChange(quantityChange + 1)

    }
    const handleminusQuantity = () => {
        if (quantityChange <= 1) {
            return
        } else {
            setQuantityChange(quantityChange - 1)
        }
    }
    useEffect(() => {
        if (!image) {
            return
        } {
            const apiKey = "tkvpygjSkaSThMEpHKiP2MLg"
            const url = 'https://api.remove.bg/v1.0/removebg'
            const formData = new FormData();
            formData.append('size', 'auto');
            formData.append('image_file', image);

            fetch((url), {
                method: 'post',
                headers: {

                    'X-Api-Key': apiKey,
                },
                body: formData


            })
                .then((res) => res.blob()).then((blob) => {
                    const reader = new FileReader()
                    reader.onloadend = () => setRemovedBg(reader.result)
                    reader.readAsDataURL(blob)
                })
                .catch((e) => console.log(e))

        }
    }, [image])
    console.log(removedBg);

    const handleAddProduct = async () => {
        if (productName && productDesc && productPrice, brand && catogery) {

            if (productName, productDesc, productPrice, image) {
                addDoc(collection(db, "products"), {
                    productName: productName,
                    productDesc,
                    productPrice,
                    brand,
                    catogery,
                    imageUrl: removedBg
                }).then((res) => {
                    alert("succesfully added data", res)
                    setCatogery('')
                    setBrand('')
                    setProductPrice('')
                    setProductDesc('')
                    setProductName('')
                }).catch((e) => {
                    alert(e)
                })
                return
            } else {
                alert("opps! something missing, try later")
            }


        } else {
            alert("opps! something went missed, please fill form properly ")
        }
    }

    return (
        <>

            <section class="h-screen">
                <div class="h-full">
                    <h3 className='font-bold text-2xl capitalize p-2 '>add product for sales </h3>
                    <p className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at veritatis architecto eum magnam dolores esse minima consequatur eius rerum.</p>
                    <div
                        class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <input className='block w-full text-sm p-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input' onChange={e => setImage(e.target.files[0])} type="file" placeholder='choose image for product ' />
                            <div className="w-full h-[60vh] bg-gray-200">
                                {removedBg ? <img
                                    src={removedBg}
                                    class="w-full h-full"
                                    alt="Sample image" /> : <span></span>}
                            </div>
                        </div>
                        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>

                                <div class="relative mb-6 shadow-md bg-gray-200" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-1"
                                        id="exampleFormControlInput2"
                                        onChange={(e) => setProductName(e.target.value)}
                                        value={productName}
                                        placeholder="product name ....." />
                                    <label
                                        for="exampleFormControlInput2"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div class="relative mb-6 shadow-lg bg-gray-200" data-te-input-wrapper-init>
                                    <input
                                        placeholder='product price .....'
                                        onChange={(e) => setProductPrice(e.target.value)}
                                        type="number"
                                        value={productPrice}
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                                        id="exampleFormControlInput22" />
                                    <label
                                        for="exampleFormControlInput22"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div class="relative mb-6 shadow-lg bg-gray-200" data-te-input-wrapper-init>
                                    <input
                                        placeholder='brand......'
                                        onChange={(e) => setBrand(e.target.value)}
                                        type="text"
                                        value={brand}
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                                        id="exampleFormControlInput22" />
                                    <label
                                        for="exampleFormControlInput22"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>
                                <div class="relative mb-6 shadow-lg bg-gray-200" data-te-input-wrapper-init>
                                    <form class="max-w-sm mx-auto">
                                        <select onChange={e => setCatogery(e.target.value)} id="catogreies" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Choose a catogery of your product </option>
                                            <option value="mobile">mobile</option>
                                            <option value="laptop">laptop</option>
                                            <option value="clothes">clothes</option>
                                            <option value="furniture">furniture</option>
                                        </select>
                                    </form>
                                </div>
                                <div class="relative mb-6 shadow-lg bg-gray-200" data-te-input-wrapper-init>
                                    <textarea
                                        placeholder='about product.......'
                                        onChange={(e) => setProductDesc(e.target.value)}
                                        value={productDesc}
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                                        id="exampleFormControlInput22" />
                                    <label
                                        for="exampleFormControlInput22"
                                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >
                                    </label>
                                </div>

                                <div class="text-center lg:text-left">
                                    <button
                                        type="button"
                                        onClick={handleAddProduct}
                                        class="inline-block rounded bg-purple-700 hover:bg-purple-800 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                        data-te-ripple-init
                                        data-te-ripple-color="light">
                                        Add
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddProductForSell
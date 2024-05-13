import { collection, getDocs, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Store } from './Context/dataContext';

const Navbar = () => {
    const navigate = useNavigate()
    const { userData, catogaries, cart } = useContext(Store)

    const [profile, setProfile] = useState()
    const [show, setShow] = useState(false)
    const [catogerySelect, setCatogerySelect] = useState(false)
    const [c, setC] = useState()
    auth.onAuthStateChanged((user) => {
        if (user) {
            userData.map((val) => {
                if (val.email === user.email) {
                    setProfile(val.profilePic)
                } else {
                }
            })
        } else {
        }
    })


    const signout = async () => {

        await signOut(auth)
            .then(() => navigate("/login"))
    }


    const handleShow = () => {
        setShow(true)
    }

    const handleHide = () => {
        setShow(false)
    }

    return (
        <>
            {/* <!-- component --> */}
            <header class="bg-white">
                <div class=" container mx-auto flex items-center">

                    {/* <!-- logo --> */}
                    <div class="mr-auto md:w-48 flex-shrink-0">
                        <img onClick={() => navigate("/")} class="h-8 md:h-10 cursor-pointer" src="https://i.ibb.co/98pHdFq/2021-10-27-15h51-15.png" alt="" />
                    </div>

                    {/* <!-- search --> */}
                    <div class="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
                        <div className="relative px-1 cursor-pointer" onMouseEnter={() => setCatogerySelect(true)} onMouseLeave={() => setCatogerySelect(false)}>
                            select catogery
                            <div className={catogerySelect ? "bg-white rounded-sm shadow-2xl p-4 absolute top-5 right-5 z-10" : "invisible bg-white rounded-sm shadow-2xl p-4 absolute top-10 right-5 z-10"}>

                                {
                                    catogaries.map((catogarie) => {
                                        return (
                                            <span className='py-1  capitalize text-gray-800 cursor-pointer font-semibold hover:text-gray-600' onClick={() => navigate(`/catogery/${catogarie.name}`)}> {catogarie.name} </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <input class="border-l outline-none hover:outline-none border-gray-300 bg-transparent font-semibold text-sm pl-4 p-2" type="text" placeholder="I'm searching for ..." />
                        <svg width="26" height="26" className="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16 fa-9x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg>
                    </div>
                    <div class="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
                        <span class="font-bold md:text-xl">8 800 332 65-66</span>
                        <span class="font-semibold text-sm text-gray-400">Support 24/7</span>
                    </div>
                    <nav class="contents">
                        <ul class="ml-4 xl:w-48 flex items-center justify-end">
                            <li class="ml-2 lg:ml-4 relative inline-block">
                                <span class="">
                                    {auth.currentUser ?
                                        <div className="relative" onMouseEnter={handleShow} onMouseLeave={handleHide}>
                                            <img role='select' className='rounded-[150%] w-[40px] h-[40px]' src={profile} alt={'h'} />
                                            <div className={show ? "bg-white rounded-sm shadow-2xl p-4 absolute top-10 right-5 z-10" : "invisible bg-white rounded-sm shadow-2xl p-4 absolute top-10 right-5 z-10"}>
                                                <li className='py-1  capitalize text-gray-800 cursor-pointer font-semibold hover:text-gray-600' onClick={signout}> logout</li>
                                                <li className='py-1  capitalize text-gray-800 cursor-pointer font-semibold hover:text-gray-600'> settings</li>
                                            </div>
                                        </div>
                                        :
                                        <svg onClick={() => navigate("/login")} width="26" height="26" className="h-9 lg:h-10 p-2 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-user fa-w-14 fa-9x"><path fill="currentColor" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>

                                    }
                                </span>
                            </li>

                            <li class="ml-2 lg:ml-4 relative inline-block">
                                <a class="" onClick={() => navigate("/cart")}>
                                    <div class="absolute -top-4 -right-1 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">{cart.length}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="ml-4 hidden sm:flex flex-col font-bold">
                        <span class="text-xs text-gray-400">Your Cart</span>
                        <span>$2,650,59</span>
                    </div>
                </div>

                <hr />
            </header >

        </>
    )
}

export default Navbar
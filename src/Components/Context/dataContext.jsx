import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";



export const Store = createContext()

export const StoreProvider = ({ children }) => {

    const [userData, setuserData] = useState([])
    const [productData, setProductData] = useState([])
    const [cart, setCart] = useState([])


    useEffect(() => {
        const q = query(collection(db, "users"))
        const Unsubscribe = onSnapshot(q, (snapshot) => {
            setuserData(snapshot.docs.map((doc) => (doc.data())))
        })

    }, [])
    useEffect(() => {
        const q = query(collection(db, "products"))
        const Unsubscribe = onSnapshot(q, (snapshot) => {
            setProductData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })

    }, [])
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            const q = query(collection(db, `cart_${user.uid}`))
            const Unsubscribe = onSnapshot(q, (snapshot) => {
                setCart(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
        })

    }, [])

    const total = cart.map((c) => ~~c.price).reduce((p, i) => p + i, 0)
    const cartId = cart.map((c) => c.id)

    const catogaries = [
        {
            name: "mobile"
        },
        {
            name: "laptop"
        },
        {
            name: "clothes"
        },
        {
            name: "furniture"
        },
    ]





    return <Store.Provider value={{ userData, productData, catogaries, cart, cartId, total }}>{children}</Store.Provider>
}
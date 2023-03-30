import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
import CheckoutBlock from "../components/checkoutBlock/checkoutBlock";
import EnquiryBlock from "../components/enquiryBlock/enquiryBlock";
import { useEffect, useState } from 'react';


export default function Checkout() {

    const [cartItems, setCartItems] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
   

    useEffect(()=>{
        const storedIds = window.localStorage.getItem('ids');
        // console.log('STORED==',);
        setCartItems(JSON.parse(storedIds || '{}'));
        
    },[])

    console.log('CITEM==',cartItems)

    // useEffect(()=>{
        
    //     // const ids = window.localStorage.getItem('ids');
    //     // console.log('idds==',ids)
    //     const cartIds = JSON.parse(storedIds);
    //     if(cartIds){
    //         // console.log(ids); 
    //      setCartItems(JSON.parse(ids));
    //      console.log('IIII==',cartItems);
    //     }   
        
    //  },[])
  

//    const productIds = window.localStorage.getItem('ids');

    //  console.log('CARTITMEMEM==',cartProducts)


    return (
        <div>
            <MainNav/>
            <CheckoutBlock cartItems={cartItems}/>
            <EnquiryBlock/>
            <FooterSection/>

        </div>
    )
}

import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
import CheckoutBlock from "../components/checkoutBlock/checkoutBlock";
import { useEffect, useState } from 'react';
import { ApiService } from "../services/api.service";

export default function Checkout(props:any) {

    const [cartItems, setCartItems] = useState([]);
    
    useEffect(()=>{
        const storedIds = window.localStorage.getItem('ids');
        ///console.log('SS=',storedIds)
        // setCartItems(JSON.parse(storedIds));
        setCartItems(JSON.parse(storedIds || '[]'));
        
    },[])

    return (
        <div>
            <MainNav categories={props.menuCats} products={props.products} brands={props.brands} cartItems={''} menu={props.menu} />
            <CheckoutBlock cartItems={cartItems}/>
            <FooterSection/>
        </div>
    )
}

export async function getServerSideProps() {

    const baseUrl = new ApiService();
    
    const brand = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?acf_format=standard`);
    const brands = await brand.json(); 
      
    const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc&per_page=6`);
    const menuCats = await cat.json();
  
    const product =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard&per_page=4`);
    const products = await product.json();

    const mainmenu = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/menu?_fields=acf&acf_format=standard`);
    const menu =  await mainmenu.json();
  
    return { props: { brands, menuCats, products, menu } }
    
}

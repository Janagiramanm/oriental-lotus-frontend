import MainNav from "../../../components/nav/MainNav";
import React, { useState, useEffect} from 'react'
import ServiceSection from "../../../components/serviceSection/ServiceSection";
import BrandSection from "../../../components/brandSection/BrandSection";
import FooterSection from "../../../components/footerSection/footerSection";
import ProductHeroSection from "../../../components/productHeroSection/productHeroSection";
import ProductIntroSection from "../../../components/productIntroSection/productIntroSection";
import ProductListSection from "../../../components/productListSection/productListSection";
import { ApiService } from "../../../services/api.service";
import axios from 'axios';
import ProductDetails from "../../../components/productDetails/productDetails";

export default function Product(props: any) {

    const [productIds, setProductIds] = useState([]);
    const [cart, setCart] = useState('cart');
    const [cartCount, setCartCount] = useState('');

    const addToCart = (pId:never,image:any, title:any) =>{


        const storedIds = window.localStorage.getItem('ids');
        const ids = storedIds ? JSON.parse(storedIds) : [];
        if(ids.indexOf(pId) == -1){
            ids.push(pId);
            window.localStorage.setItem('ids', JSON.stringify(ids));
        }
        setProductIds(ids);
        window.localStorage.setItem('cartCount', ids.length);

        var cartItem = {
            "id": pId,
            "name": title,
            "image": image
        }
        window.localStorage.setItem(pId,JSON.stringify(cartItem));
       
    }

    useEffect(()=>{
        // localStorage.clear();
         const cartItems = window.localStorage.getItem('ids');
         if(cartItems){
                setProductIds(JSON.parse(cartItems));
         }

    },[])
    
    
    return (
        <div>
            <MainNav brands={props.brands} categories={props.categories} products={props.menuProducts} cartItems={productIds}/>
            <ProductDetails productDetails={props.productDetails} addToCart={addToCart} />
            <FooterSection/>
        </div>
    )
}

export async function getServerSideProps(context: { query: { product: any } }) {

    const baseUrl = new ApiService();
    const { product } = context.query; 
       
    // const category =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/categories?orderby=id&order=asc`);
    // const categories = await category.json();

    // const productOverview =  await axios.get(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?slug=${product}&acf_format=standard`);
    // const heroProducts = productOverview.data[0].acf;  
    // const heroProductId = productOverview.data[0].id;  

    const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc&per_page=6`);
    const menuCats = await cat.json();

    const brand = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?acf_format=standard`);
    const brands = await brand.json();

    const prod =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard&per_page=4`);
    const products = await prod.json();

    const allProd =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?acf_format=standard&slug==${product}`);
    const productDetails = await allProd.json();
    
    if (menuCats && menuCats.length > 0) {
    //   const brands = res[0].acf.brands;
        return { props: { brands:brands, categories:menuCats, menuProducts:products, productDetails: productDetails } }
    } else {
        return {
            props: {}
        }
    }
  }

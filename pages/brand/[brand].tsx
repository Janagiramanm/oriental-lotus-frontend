import next from "next";
import MainNav from "../../components/nav/MainNav";
import FooterSection from "../../components/footerSection/footerSection";
import ProductIntroSection from "../../components/productIntroSection/productIntroSection";
import ProductListSection from "../../components/productListSection/productListSection";
import InsightSection from "../../components/insightSection/InsightSection";
import BrandHeroSection from "../../components/brandHeroSection/brandHeroSection";
import BrandContentBlock from "../../components/BrandContentBlock/BrandContentBlock";
import BrandLeftBlock from "../../components/BrandLeftBlock/BrandLeftBlock";
import BrandSingleImageBlock from "../../components/BrandSingleImageBlock/BrandSingleImageBlock";
import { ApiService } from "../../services/api.service";
import axios from 'axios';


export default function Brand(props: any) {

    console.log('Brands==',props);
    return (
        <div>
            <MainNav categories={props.categories} products={[]}/>
            <BrandHeroSection heroSection={props.brands.brand_banner} hereProduct={props.brands.brand_hero_product}/>
            <ProductIntroSection introContent={props.brands.brand_intro}/>
            <ProductListSection/>
            <BrandContentBlock content={props.brands.content_section}/>
            {/* <BrandLeftBlock/> */}
            <BrandSingleImageBlock brandSingleImage = {props.brands.brand_single_image}/>
            {/* <InsightSection/> */}
            <FooterSection/>
        </div>
    )
}

export async function getServerSideProps(context: { query: { brand: any; }; }) {

    const baseUrl = new ApiService();
    const { brand } = context.query; 
    
    const res = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?slug=${brand}&_fields=acf&acf_format=standard`);
    const result = await res.json();

    const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc`);
    const menuCats = await cat.json();

    const product =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard`);
    const products = await product.json();


    // const product =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wl/v1/products`);
    // const products = await product.json();
    
    if (result && result.length > 0) {
      const brands = result[0].acf.brands;
        return { props: { brands:brands, categories:menuCats, products:products } }
    } else {
        return {
            props: {}
        }
    }
  }

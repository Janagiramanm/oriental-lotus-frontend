import MainNav from "../../components/nav/MainNav";
import ServiceSection from "../../components/serviceSection/ServiceSection";
import BrandSection from "../../components/brandSection/BrandSection";
import FooterSection from "../../components/footerSection/footerSection";
import ProductHeroSection from "../../components/productHeroSection/productHeroSection";
import ProductIntroSection from "../../components/productIntroSection/productIntroSection";
import ProductListSection from "../../components/productListSection/productListSection";
import { ApiService } from "../../services/api.service";
import axios from 'axios';

export default function Product(props: any) {

    console.log('PROD==',props.heroProduct);
    // console.log('CATS==',props.cats);
    console.log('SLUG==',props.slug);
    
    return (
        <div>
            <MainNav categories={props.categories} products={[]}/>
            <ProductHeroSection heroProduct={props.heroProduct}/>
            <ProductIntroSection introContent={props.heroProduct.content_section}/>
            <ProductListSection/>
            {/* <BrandSection/> */}
            <ServiceSection/>
            <FooterSection/>


        </div>
    )
}

export async function getServerSideProps(context: { query: { product: any } }) {

    const baseUrl = new ApiService();
    const { product } = context.query; 
       
    const category =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/categories?orderby=id&order=asc`);
    const categories = await category.json();

    const menuProduct =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard`);
    const menuProducts = await menuProduct.json();

    const heroProduct =  await axios.get(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?slug=${product}&_fields=acf&acf_format=standard`);
    const heroProducts = heroProduct.data[0].acf;
    

    const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc`);
    const menuCats = await cat.json();

    const prod =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard`);
    const products = await prod.json();
    
    if (categories && categories.length > 0) {
    //   const brands = res[0].acf.brands;
        return { props: { categories:menuCats, menuProducts:products, heroProduct:heroProducts } }
    } else {
        return {
            props: {}
        }
    }
  }

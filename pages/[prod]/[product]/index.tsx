import MainNav from "../../../components/nav/MainNav";
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

    // console.log('PROD==',props.heroProduct);
    // console.log('CATS==',props.cats);
    // console.log('PRODLIST==',props.productList);
    
    return (
        <div>
            <MainNav brands={props.brands} categories={props.categories} products={props.menuProducts}/>
            <ProductDetails/>

            <FooterSection/>
        </div>
    )
}

// export async function getServerSideProps(context: { query: { product: any } }) {

//     const baseUrl = new ApiService();
//     const { product } = context.query; 
       
//     // const category =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/categories?orderby=id&order=asc`);
//     // const categories = await category.json();

//     const productOverview =  await axios.get(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?slug=${product}&acf_format=standard`);
//     const heroProducts = productOverview.data[0].acf;  
//     const heroProductId = productOverview.data[0].id;  

//     const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc&per_page=6`);
//     const menuCats = await cat.json();

//     const brand = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?acf_format=standard`);
//     const brands = await brand.json();

//     const prod =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard&per_page=4`);
//     const products = await prod.json();

//     const allProd =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wl/v1/products?meta_key=product_overview&meta_value=${heroProductId}`);
//     const productList = await allProd.json();
    
//     if (menuCats && menuCats.length > 0) {
//     //   const brands = res[0].acf.brands;
//         return { props: { brands:brands, categories:menuCats, menuProducts:products, heroProduct:heroProducts, productList:productList, heroProductId:heroProductId } }
//     } else {
//         return {
//             props: {}
//         }
//     }
//   }

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

    console.log('PRODSUASADA==',props);
    return (
        <div>
            <MainNav cartItem={''} menu={props.menu} />
            {/* <MainNav brands={props.menuBrand} categories={props.categories} products={props.menuProducts}/> */}
            <BrandHeroSection logo={props.brands.brand_logo} heroSection={props.brands.brand_banner} hereProduct={props.brands.brand_hero_product}/>
            <ProductIntroSection introContent={props.brands.brand_intro}/>
            <ProductListSection productList={props.productList} mainId={props.brandId} parent={'brand'} prodCat={props.prodCat}/>
            <BrandContentBlock content={props.brands.content_section}/>
            <BrandSingleImageBlock brandSingleImage = {props.brands.brand_single_image}/>
            {/* <InsightSection/> */}
            <FooterSection/> 
        </div>
    )
}

export async function getServerSideProps(context: { query: { brand: any; }; }) {

    const baseUrl = new ApiService();
    const { brand } = context.query; 
    
    const res = await axios.get(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?slug=${brand}&acf_format=standard&per_page=6`);
    // const result =  res.acf;
    const brandId = res.data[0].id;

    // const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc&per_page=6`);
    // const menuCats = await cat.json();

    // const brands = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?acf_format=standard`);
    // const menuBrand = await brands.json();

    // const prod =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?_fields=acf&acf_format=standard&per_page=4`);
    // const products = await prod.json();

    const product =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wl/v1/products?meta_key=brand&meta_value=${brandId}`);
    const productList = await product.json();


    // const product =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wl/v1/products`);
    // const products = await product.json();
    const mainmenu = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/menu?_fields=acf&acf_format=standard`);
    const menu =  await mainmenu.json();
    
    if (res ) {
      const brands = res.data[0].acf.brands;
        return { props: { brands:brands,   productList:productList, brandId:brandId, prodCat:brand, menu:menu  } }
    } else {
        return {
            props: {}
        }
    }
  }

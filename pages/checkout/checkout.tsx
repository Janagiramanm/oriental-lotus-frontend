import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../../components/nav/MainNav";

import ServiceSection from "../../components/serviceSection/ServiceSection";
import BrandSection from "../../components/brandSection/BrandSection";
import FooterSection from "../../components/footerSection/footerSection";
import ProductHeroSection from "../../components/productHeroSection/productHeroSection";
import ProductIntroSection from "../../components/productIntroSection/productIntroSection";
import ProductListSection from "../../components/productListSection/productListSection";


export default function Checkout() {
    return (
        <div>
            <MainNav/>
            <ProductHeroSection/>
            <ProductIntroSection/>
            <ProductListSection/>
            <BrandSection/>
            <ServiceSection/>
            <FooterSection/>

        </div>
    )
}

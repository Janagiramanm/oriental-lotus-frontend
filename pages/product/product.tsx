import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/themes/styles.module.scss'
import MainNav from "../../components/nav/MainNav";
import HeroSlider from "../../components/heroSlider/HeroSlider";
import AboutSection from "../../components/aboutSection/AboutSection";
import FeaturedProductSection from "../../components/featuredProductSection/FeaturedProductSection";
import FeaturedProductSlider from "../../components/featuredProductSlider/FeaturedProductSlider";
import ServiceSection from "../../components/serviceSection/ServiceSection";
import BrandSection from "../../components/brandSection/BrandSection";
import InsightSection from "../../components/insightSection/InsightSection";
import FooterSection from "../../components/footerSection/footerSection";
import ProductHeroSection from "../../components/productHeroSection/productHeroSection";
import ProductIntroSection from "../../components/productIntroSection/productIntroSection";
import ProductListSection from "../../components/productListSection/productListSection";


export default function Product() {
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

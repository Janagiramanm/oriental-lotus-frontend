import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/themes/styles.module.scss'
import MainNav from "../components/nav/MainNav";
import HeroSlider from "../components/heroSlider/HeroSlider";
import AboutSection from "../components/aboutSection/AboutSection";
import FeaturedProductSection from "../components/featuredProductSection/FeaturedProductSection";
import FeaturedProductSlider from "../components/featuredProductSlider/FeaturedProductSlider";
import ServiceSection from "../components/serviceSection/ServiceSection";
import BrandSection from "../components/brandSection/BrandSection";
import InsightSection from "../components/insightSection/InsightSection";
import FooterSection from "../components/footerSection/footerSection";
import ComingSoon from "../components/comingSoon/comingSoon";
import { ApiService } from "../services/api.service";
import axios from 'axios';
import SplashHero from "../components/splashHero/splashHero";
import React from "react";

export default function Home(props: any) {
  return (
    <div>
        <MainNav cartItems={''} menu={props.menu}/>
        <SplashHero/>
        <div className={`animate__animated animate__delay-4s animate__fadeInUp`}>
            <FooterSection/>
        </div>

    </div>
  )
}

export async function getServerSideProps() {

  const baseUrl = new ApiService();
  const response = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/home-page?_fields=acf&acf_format=standard`);
  const res = await response.json();

  const brand = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?acf_format=standard`);
  const brands = await brand.json(); 

  
  const cat =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/product-overview?acf_format=standard&orderby=id&order=asc&per_page=6`);
  const menuCats = await cat.json();

  const product =  await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/products?acf_format=standard&per_page=4`);
  const products = await product.json();


  const mainmenu = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/menu?_fields=acf&acf_format=standard`);
  const menu =  await mainmenu.json();


 
  
  if (res && res.length > 0) {
    const acf = res[0].acf;
      return { props: { acf, brands, menuCats, products, menu } }
  } else {
      return {
          props: {}
      }
  }
}


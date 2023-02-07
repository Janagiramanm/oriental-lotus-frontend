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

export default function Home(props: any) {

  //  console.log('RES==',props);
  return (
    <div>
        <MainNav/>
        <HeroSlider heroSlider={props.acf.hero_section} heroProduct={props.acf.hero_product}/>
        <AboutSection aboutUs={props.acf.about_section}/>
        <FeaturedProductSection featureProduct={props.acf.feature_product}/>
        <FeaturedProductSlider productSlider={props.acf.feature_product_slider}/>
        <ServiceSection service={props.acf.service_section}/>
        <BrandSection brandTitle={props.acf.brand_section.title} brands={props.brands}/>
        <InsightSection insight={props.acf.insight_section}/>
        <FooterSection/>
    </div>
  )
}

export async function getServerSideProps() {

  const baseUrl = new ApiService();
  const response = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/home-page?_fields=acf&acf_format=standard`);
  const res = await response.json();

  const brand = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/brand-page?_fields=acf&acf_format=standard`);
  const brands = await brand.json();
  
  if (res && res.length > 0) {
    const acf = res[0].acf;
      return { props: { acf, brands } }
  } else {
      return {
          props: {}
      }
  }
}


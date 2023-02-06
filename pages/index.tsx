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
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
        </Head>
        <MainNav/>
        <HeroSlider heroSlider={props.acf.hero_section}/>
        <AboutSection/>
        <FeaturedProductSection/>
        <FeaturedProductSlider/>
        <ServiceSection/>
        <BrandSection/>
        <InsightSection/>
        <FooterSection/>
    </div>
  )
}

export async function getServerSideProps() {

  const baseUrl = new ApiService();
  const response = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/home-page`);
  const res = await response.json();
  
  if (res && res.length > 0) {
    const acf = res[0].acf;
      return { props: { acf } }
  } else {
      return {
          props: {}
      }
  }
}


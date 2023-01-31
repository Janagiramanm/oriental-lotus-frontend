import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/themes/styles.module.scss'
import MainNav from "../components/nav/MainNav";
import HeroSlider from "../components/heroSlider/HeroSlider";
import AboutSection from "../components/aboutSection/AboutSection";
import FeaturedProductSection from "../components/featuredProductSection/FeaturedProductSection";
import FeaturedProductSlider from "../components/featuredProductSlider/FeaturedProductSlider";


export default function Home() {
  return (
    <div>
        <MainNav/>
        <HeroSlider/>
        <AboutSection/>
        <FeaturedProductSection/>
        <FeaturedProductSlider/>
    </div>
  )
}

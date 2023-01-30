import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/themes/styles.module.scss'
import MainNav from "../components/nav/MainNav";
import HeroSlider from "../components/heroSlider/HeroSlider";


export default function Home() {
  return (
    <div>
        <MainNav/>
        <HeroSlider/>
    </div>
  )
}

import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
import AboutBlock from "../components/aboutBlock/aboutBlock";


export default function Aboutus() {
    return (
        <div>
            <MainNav/>
            <AboutBlock/>
            <FooterSection/>
        </div>
    )
}

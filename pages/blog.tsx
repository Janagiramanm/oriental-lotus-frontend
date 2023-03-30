import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
import InsightSection from "../components/insightSection/InsightSection";


export default function Checkout(props: any)  {
    return (
        <div>
            <MainNav/>
            <InsightSection insight={props.acf.insight_section}/>
            <FooterSection/>

        </div>
    )
}

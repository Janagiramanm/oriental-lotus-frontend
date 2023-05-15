import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
import AboutBlock from "../components/aboutBlock/aboutBlock";
import { ApiService } from "../services/api.service";


export default function Aboutus(props: any) {
    return (
        <div>
            <MainNav categories={''} products={''} brands={''} menu={props.menu}/>
            <AboutBlock/>
            <FooterSection/>
        </div>
    )
}
export async function getServerSideProps() {

    const baseUrl = new ApiService();
     
    const mainmenu = await fetch(baseUrl.getBaseUrl() + `/wp-json/wp/v2/menu?_fields=acf&acf_format=standard`);
    const menu =  await mainmenu.json();
  
  
   
    
    if (menu && menu.length > 0) {
     /// const acf = res[0].acf;
        return { props: { menu } }
    } else {
        return {
            props: {}
        }
    }
  }

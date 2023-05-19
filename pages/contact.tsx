import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
// import CheckoutBlock from "../components/checkoutBlock/checkoutBlock";
import { useEffect, useState } from 'react';
import { ApiService } from "../services/api.service";
import ContactFormBlock from "../components/contactFormBlock/contactFormBlock";

export default function Contact(props:any){

    return (
        <div>
            <MainNav  cartItems={''} menu={props.menu} />
            <ContactFormBlock/>
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
        return { props: { menu:menu } }
    } else {
        return {
            props: {}
        }
    }
  }

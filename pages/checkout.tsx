import Head from 'next/head'
import Image from 'next/image'
import MainNav from "../components/nav/MainNav";
import FooterSection from "../components/footerSection/footerSection";
import CheckoutBlock from "../components/checkoutBlock/checkoutBlock";
import EnquiryBlock from "../components/enquiryBlock/enquiryBlock";


export default function Checkout() {
    return (
        <div>
            <MainNav/>
            <CheckoutBlock/>
            <EnquiryBlock/>
            <FooterSection/>

        </div>
    )
}

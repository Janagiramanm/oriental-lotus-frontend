import next from "next";
import MainNav from "../../components/nav/MainNav";
import FooterSection from "../../components/footerSection/footerSection";
import ProductIntroSection from "../../components/productIntroSection/productIntroSection";
import ProductListSection from "../../components/productListSection/productListSection";
import InsightSection from "../../components/insightSection/InsightSection";
import BrandHeroSection from "../../components/brandHeroSection/brandHeroSection";
import BrandRightBlock from "../../components/BrandRightBlock/BrandRightBlock";
import BrandLeftBlock from "../../components/BrandLeftBlock/BrandLeftBlock";
import BrandSingleImageBlock from "../../components/BrandSingleImageBlock/BrandSingleImageBlock";


export default function Brand() {
    return (
        <div>
            <MainNav/>
            <BrandHeroSection/>
            <ProductIntroSection/>
            <ProductListSection/>
            <BrandRightBlock/>
            <BrandLeftBlock/>
            <BrandSingleImageBlock/>
            {/* <InsightSection/> */}
            <FooterSection/>
        </div>
    )
}

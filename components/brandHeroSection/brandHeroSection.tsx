import next from "next";
import styles from "./brandHeroSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Slider from "react-slick";
export default function BrandHeroSection({heroSection, hereProduct}:any) {
    // console.log('Hero==',heroSection);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div>
            <div className={styles.brandHeroSection}>
                <div className={`container`}>
                    <Slider {...settings}>
                    
                        {heroSection?.map((element:any,index: any)=> (
                            <div key={index}>
                                    <div className={`row justify-content-center align-items-center`}>
                                            <div className={`col-md-6`}>
                                                <div className={styles.brandImage}>
                                                    <img src={`/images/client-1.png`} />
                                                </div>
                                                <div className={styles.HeroContent}>
                                                    <h2>{element.brand_hero_title}</h2>
                                                </div>

                                            </div>
                                            <div className={`col-md-6`}>
                                                <div className={styles.heroBanner}>
                                                    <img src={element.brand_hero_image.url} />
                                                </div>
                                            </div>
                                    </div>
                            </div>
                        ) )}
                        </Slider>
                   
                </div>

            </div>
               
                {hereProduct?.map((element:any, index:any)=>(
                    <div className={`row gx-0`} key={index}>
                                <div className={`col-md-6 bg-primary pr-0`}>
                                    <div className={`row gx-0 justify-content-center align-items-center`}>
                                        <div className={`col-md-6 text-white`}>
                                            <div className={styles.heroSmallContent}>
                                                <h4>{element.left_content.title}</h4>
                                                <div dangerouslySetInnerHTML={{__html: element.left_content.description}}></div>
                                                <Link href={element.left_content.link_url}>{element.left_content.link_text}</Link>
                                            </div>
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.heroSmallImg}>
                                                <img src={element.left_image.image.url} alt={element.left_image.image.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 bg-primary pr-0`}>
                                    <div className={`row gx-0 justify-content-center align-items-center`}>
                                        <div className={`col-md-6 text-white`}>
                                            <div className={styles.heroSmallContent}>
                                                <h4>{element.right_content.title}</h4>
                                                <div dangerouslySetInnerHTML={{__html: element.right_content.description}}></div>
                                                <Link href={element.right_content.link_url}>{element.right_content.link_text}</Link>
                                            </div>
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.heroSmallImg}>
                                                <img src={element.right_image.image.url} alt={element.right_image.image.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                   </div>
                       
                ))}
                   
        </div>
        
    );
}
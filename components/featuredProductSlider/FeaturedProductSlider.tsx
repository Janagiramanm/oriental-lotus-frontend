import next from "next";
import Slider from "react-slick";
import styles from "./FeaturedProductSlider.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FeaturedProductSlider({productSlider}:any) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500
    };
    return (
       <div className={styles.featuredSlider}>
           <div className={`container`}>
               <div className={styles.title}>
                   <h3>{productSlider.title}</h3>
               </div>
           </div>

               <div className={styles.SliderSection}>
                   <Slider {...settings}>
                        {productSlider?.slider_product?.map((element:any, index:any)=>(
                                <div className={``} key={index}>
                                    <div className={styles.featuredSlide}>
                                        <img alt={`image`} src={element.image.url} />
                                    </div>
                                </div>
                        ))}
                   </Slider>
                  

           </div>
       </div>
    );
}
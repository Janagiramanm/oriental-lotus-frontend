import next from "next";
import styles from "./FeaturedProductSlider.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FeaturedProductSlider({productSlider}:any) {
    return (
       <div className={styles.featuredSlider}>
           <div className={`container`}>
               <div className={styles.title}>
                   <h3>{productSlider.title}</h3>
               </div>
           </div>
           <div className={`container`}>
               <div className={styles.SliderSection}>
                   {productSlider?.slider_product?.map((element:any, index:any)=>(
                        <div className={``} key={index}>
                            <img alt={`image`} src={element.image.url} />
                        </div>
                   ))}
                  
               </div>
           </div>
       </div>
    );
}
import next from "next";
import styles from "./FeaturedProductSlider.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FeaturedProductSlider() {
    return (
       <div className={styles.featuredSlider}>
           <div className={`container`}>
               <div className={styles.title}>
                   <h3>For Hotels & Hospitality</h3>
               </div>
           </div>
           <div className={`container`}>
               <div className={styles.SliderSection}>
                   <div className={``}>
                       <img alt={`image`} src={`/images/featuredbanner.png`} />
                   </div>
               </div>
           </div>
       </div>
    );
}
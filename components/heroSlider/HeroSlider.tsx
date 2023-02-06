import next from "next";
import styles from "./HeroSlider.module.scss";
import React, {} from 'react'
import Image from "next/image";
import Link from "next/link";
export default function HeroSlider({heroSlider, heroProduct}:any) {
    return (
        <div className={styles.heroSlider}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-6`}>
                         <div className={styles.heroSliderMain}>
                            <div className={styles.heroContent}>
                                <h1 className={`text-secondary`}>{heroSlider[0].title}</h1>
                                <p className={`text-secondary`}>{heroSlider[0].description}</p>
                                <Link href={heroSlider[0].link_url}><button className={`btn btn-primary`}>{heroSlider[0].link_title}</button></Link>
                            </div>
                         </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={styles.heroBanner}>
                            <img src={heroSlider[0].banner_image.url} width={`100%`}  alt={`image`}/>
                        </div>
                    </div>
                </div>
                <div className={styles.heroSliderSection}>
                    <div className={`row`}>
                        {heroProduct?.map((element:any, index:any)=>(
                            <div className={`col-md-4`} key={index}>
                                <div className={`${styles.heroCard} d-flex justify-content-between align-items-center text-secondary`}>
                                    <div className={styles.herocardLeft}>
                                        <h3>{element.product_title}</h3>
                                        <Link href={element.product_link}><img src={`/images/arrow-right.svg`} alt={`image`} /></Link>
                                    </div>
                                    <div className={styles.herocardRight}>
                                        <img className={styles.heroImage} src={element.product_image.url} alt={`image`} />
                                    </div>
                                </div>
                            </div>

                        ))}
                        

                    </div>


                </div>
            </div>
        </div>
    );
}
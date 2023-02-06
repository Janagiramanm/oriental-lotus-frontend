import next from "next";
import Slider from "react-slick";
import styles from "./HeroSlider.module.scss";
import React, {} from 'react'
import Image from "next/image";
import Link from "next/link";
export default function HeroSlider({heroSlider, heroProduct}:any) {
    console.log('RES==--',heroProduct)

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
            <div className={styles.heroSlider}>
                <div>
                    <Slider {...settings}>
                        <div>
                            <div className={styles.slide}>
                                <div className={`container`}>
                                    <div className={`row justify-content-center align-items-center`}>
                                        <div className={`col-6`}>
                                            <div className={styles.heroSliderMain}>
                                                <div className={styles.heroContent}>
                                                    <h1 className={`text-secondary`}>{heroSlider[0].title}</h1>
                                                    <p className={`text-secondary`}>{heroSlider[0].description}</p>
                                                    <button className={`btn btn-primary`}>{heroSlider[0].link_title}</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-6`}>
                                            <div className={styles.heroBanner}>
                                                <img src={heroSlider[0].banner_image.url} width={`100%`}  alt={`image`}/>
                                            </div>
                                        </div>
                                    </div>
                                     </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.slide}>
                                <div className={`container`}>
                                    <div className={`row justify-content-center align-items-center`}>
                                        <div className={`col-6`}>
                                            <div className={styles.heroSliderMain}>
                                                <div className={styles.heroContent}>
                                                    <h1 className={`text-secondary`}>{heroSlider[0].title}</h1>
                                                    <p className={`text-secondary`}>{heroSlider[0].description}</p>
                                                    <button className={`btn btn-primary`}>{heroSlider[0].link_title}</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-6`}>
                                            <div className={styles.heroBanner}>
                                                <img src={heroSlider[0].banner_image.url} width={`100%`}  alt={`image`}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={styles.slide}>
                                <div className={`container`}>
                                    <div className={`row justify-content-center align-items-center`}>
                                        <div className={`col-6`}>
                                            <div className={styles.heroSliderMain}>
                                                <div className={styles.heroContent}>
                                                    <h1 className={`text-secondary`}>{heroSlider[0].title}</h1>
                                                    <p className={`text-secondary`}>{heroSlider[0].description}</p>
                                                    <button className={`btn btn-primary`}>{heroSlider[0].link_title}</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`col-6`}>
                                            <div className={styles.heroBanner}>
                                                <img src={heroSlider[0].banner_image.url} width={`100%`}  alt={`image`}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div>
                    <div className={`container`}>
                    <div className={styles.heroSliderSection}>
                        <div className={`row`}>
                            {heroProduct?.map((element:any, index:any)=>(
                                <div className={`col-md-4`} key={index}>
                                    <div className={`${styles.heroCard} d-flex justify-content-between align-items-center text-secondary`}>
                                        <div className={styles.herocardLeft}>
                                            <h3>{element.product_title}</h3>
                                            <img src={`/images/arrow-right.svg`} alt={`image`} />
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
            </div>
        </div>

    );
}
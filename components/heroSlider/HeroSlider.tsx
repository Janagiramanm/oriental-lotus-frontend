import next from "next";
import styles from "./HeroSlider.module.scss";
import React, {} from 'react'
import Image from "next/image";
export default function HeroSlider() {
    return (
        <div className={styles.heroSlider}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-6`}>
                         <div className={styles.heroSliderMain}>
                            <div className={styles.heroContent}>
                                <h1 className={`text-secondary`}>The wide range of amenities brand </h1>
                                <p className={`text-secondary`}>Discover our totally innovative products for your needs</p>
                                <button className={`btn btn-primary`}>Read More</button>
                            </div>
                         </div>
                    </div>
                    <div className={`col-6`}>
                        <div className={styles.heroBanner}>
                            <Image src={`/images/banner.png`}  alt={`image`}/>
                        </div>
                    </div>
                </div>
                <div className={styles.heroSliderSection}>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={`${styles.heroCard} d-flex justify-content-center align-items-center text-secondary`}>
                                <div className={styles.herocardLeft}>
                                    <h3>Personal Care Products</h3>
                                    <Image src={`/images/arrow-right.svg`} alt={`image`} />
                                </div>
                                <div className={styles.herocardRight}>
                                    <Image className={styles.heroImage} src={`/images/card-image.png`} alt={`image`} />
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.heroCard} d-flex justify-content-center align-items-center text-secondary`}>
                                <div className={styles.herocardLeft}>
                                    <h3>Personal Care Products</h3>
                                    <Image src={`/images/arrow-right.svg`} alt={`image`} />
                                </div>
                                <div className={styles.herocardRight}>
                                    <Image className={styles.heroImage}  src={`/images/card-image.png`} alt={`image`} />
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.heroCard} d-flex justify-content-center align-items-center text-secondary`}>
                                <div className={styles.herocardLeft}>
                                    <h3>Personal Care Products</h3>
                                    <Image src={`/images/arrow-right.svg`} alt={`image`} />
                                </div>
                                <div className={styles.herocardRight}>
                                    <Image className={styles.heroImage} src={`/images/card-image.png`} alt={`image`} />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}
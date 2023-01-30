import next from "next";
import styles from "./HeroSlider.module.scss";
import React, {} from 'react'
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
                            <img src={`../images/banner.png`} width={`100%`} />
                        </div>
                    </div>
                </div>
                <div className={styles.heroSliderSection}>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={`${styles.heroCard} d-flex justify-content-center align-items-center text-primary`}>
                                <div className={styles.herocardLeft}>
                                    <h3>Personal Care Products</h3>
                                    <img src={`../images/arrow-right.svg`} />
                                </div>
                                <div className={styles.herocardRight}>
                                    <img className={styles.heroImage} src={`../images/card-image.png`} />
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.heroCard} d-flex justify-content-center align-items-center text-primary`}>
                                <div className={styles.herocardLeft}>
                                    <h3>Personal Care Products</h3>
                                    <img src={`../images/arrow-right.svg`} />
                                </div>
                                <div className={styles.herocardRight}>
                                    <img className={styles.heroImage}  src={`../images/card-image.png`} />
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.heroCard} d-flex justify-content-center align-items-center text-primary`}>
                                <div className={styles.herocardLeft}>
                                    <h3>Personal Care Products</h3>
                                    <img src={`../images/arrow-right.svg`} />
                                </div>
                                <div className={styles.herocardRight}>
                                    <img className={styles.heroImage} src={`../images/card-image.png`} />
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}
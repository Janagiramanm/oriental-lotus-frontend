import next from "next";
import styles from "./HeroSlider.module.scss";
import React, {} from 'react'
export default function HeroSlider() {
    return (
        <div className={styles.heroSlider}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-6`}>
                         <div className={styles.heroSliderMain}>
                            <div className={styles.heroContent}>
                                <h1 className={`primary`}>The wide range of amenities brand </h1>
                                <p>Discover our totally innovative products for your needs</p>
                                <button className={`btn btn-primary`}>Read More</button>
                            </div>
                         </div>
                    </div>
                </div>
                <div className={styles.heroSliderSection}>


                </div>
            </div>
        </div>
    );
}
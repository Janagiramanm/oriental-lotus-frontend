import next from "next";
import styles from "./BrandLeftBlock.module.scss";
import React, {} from 'react'
export default function BrandLeftBlock() {
    return (
        <div className={styles.RightImageBlock}>

                <div className={`row justify-content-center align-items-center g-0  bg-primary`}>
                    <div className={`col-md-6`}>
                        <div className={styles.RightImage}>
                            <img src={`/images/brand-banner.png`} />
                        </div>
                    </div>
                    <div className={`col-md-6`}>
                        <div className={styles.RightContent}>
                            <h3>About Amaki</h3>
                            <p>Amaki products are created with all natural ingredients that work together to draw impurities from deep within the pores, leaving behind a healthy, natural glow. Regular use of Amaki’s natural skin care products means freedom from heavy makeup and concealers to mask imperfections. When used regularly and according to directions,</p>
                            <p>Amaki’s skin care line will help your skin heal and revitalize over time, thanks to the naturally occurring deep cleansers and anti-oxidant ingredients that whisk away environmental impurities that build up, causing blemishes, allergies, roughness, pigmentation and other problems.</p>
                        </div>
                    </div>

                </div>

        </div>
    );
}
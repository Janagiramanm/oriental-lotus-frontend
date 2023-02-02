import next from "next";
import styles from "./brandHeroSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
export default function BrandHeroSection() {
    return (
        <div>
            <div className={styles.brandHeroSection}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center`}>
                       <div className={`col-md-6`}>
                           <div className={styles.brandImage}>
                                <img src={`/images/client-1.png`} />
                           </div>
                               <div className={styles.HeroContent}>
                                   <h2>Keep up with good skin care habits to stay Glow</h2>
                               </div>

                       </div>
                       <div className={`col-md-6`}>
                           <div className={styles.heroBanner}>
                               <img src={`/images/amaki.png`} />
                           </div>
                       </div>
               </div>
                </div>

            </div>
                <div className={`row gx-0`}>
                    <div className={`col-md-6 bg-primary pr-0`}>
                        <div className={`row gx-0 justify-content-center align-items-center`}>
                            <div className={`col-md-6 text-white`}>
                                <div className={styles.heroSmallContent}>
                                    <h4>LIQUIDS</h4>
                                    <p>Moisturize, purify and relax with Oriental lotus sensorial body care products</p>
                                    <Link href={`/`}>Explore the Collection</Link>
                                </div>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={styles.heroSmallImg}>
                                    <img src={`/images/small-banner.png`} alt={`image`} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 bg-primary pr-0`}>
                        <div className={`row gx-0 justify-content-center align-items-center`}>
                            <div className={`col-md-6 text-white`}>
                                <div className={styles.heroSmallContent}>
                                    <h4>LIQUIDS</h4>
                                    <p>Moisturize, purify and relax with Oriental lotus sensorial body care products</p>
                                    <Link href={`/`}>Explore the Collection</Link>
                                </div>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={styles.heroSmallImg}>
                                    <img src={`/images/small-banner.png`} alt={`image`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
import next from "next";
import styles from "./productHeroSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
export default function ProductHeroSection() {
    return (
        <div>
        <div className={styles.productHeroSection}>
            <div className={`container`}>
                <div className={`row`}>
                   <div className={`col-md-6`}>

                       <div className={styles.breadcrumb}>
                           <nav aria-label="breadcrumb">
                               <ol className="breadcrumb">
                                   <li className="breadcrumb-item"><a href="#">Home</a></li>
                                   <li className="breadcrumb-item active" aria-current="page">Library</li>
                               </ol>
                           </nav>
                           </div>
                           <div className={styles.HeroContent}>
                               <h2>Moisturize, purify and relax with LOccitane sensorial body care products, made with natural ingredients from the South of France.</h2>
                           </div>

                   </div>
                   <div className={`col-md-6`}>
               </div>
           </div>
            </div>

        </div>
            <div className={`row gx-0`}>
                <div className={`col-md-6 bg-secondary pr-0`}>
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
                <div className={`col-md-6 bg-secondary pr-0`}>
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
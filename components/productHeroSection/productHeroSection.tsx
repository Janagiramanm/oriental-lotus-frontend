import next from "next";
import styles from "./productHeroSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
export default function ProductHeroSection({heroProduct}:any) {
   
    return (
        <div>
            <div className={styles.productHeroSection}>
                <div className={`container-fluid px-0`}>
                    <div className={`row justify-content-center align-items-center g-0`}>
                       <div className={`col-md-6`}>
                                <div className={styles.productSection}>

                                    <div className={styles.breadcrumb}>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb p-0">
                                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                                <li className="breadcrumb-item active" aria-current="page">{heroProduct.title}</li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <div className={styles.HeroContent}>
                                        <h4>{heroProduct.product_intro.intro_content}</h4>
                                    </div>
                                </div>

                            </div>
                            <div className={`col-md-6`}>
                                <div className={styles.proIntroBanner}>
                                    <img src={heroProduct.product_intro.intro_product_image.url} alt={`image`} />
                                </div>
                            </div>
               </div>
                </div>

            </div>
            {heroProduct.hero_product?.map((element:any, index:any)=>(
                    <div className={`row gx-0`} key={index}>
                                <div className={`col-md-6 bg-secondary pr-0`}>
                                    <div className={`row gx-0 justify-content-center align-items-center`}>
                                        <div className={`col-md-6 text-white`}>
                                            <div className={styles.heroSmallContent}>
                                                <h4>{element.left_content.title}</h4>
                                                <p>{element.left_content.description}</p>
                                                <Link href={element.left_content.link_url}>{element.left_content.link_text}</Link>
                                            </div>
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.heroSmallImg}>
                                                <img src={element.left_image.image.url} alt={element.left_image.image.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`col-md-6 bg-secondary pr-0`}>
                                    <div className={`row gx-0 justify-content-center align-items-center`}>
                                        <div className={`col-md-6 text-white`}>
                                            <div className={styles.heroSmallContent}>
                                                <h4>{element.right_content.title}</h4>
                                                <p>{element.right_content.description}</p>
                                                <Link href={element.right_content.link_url}>{element.right_content.link_text}</Link>
                                            </div>
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className={styles.heroSmallImg}>
                                                <img src={element.right_image.image.url} alt={element.right_image.image.name} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                   </div>
                       
                ))}
                {/* <div className={`row gx-0`}>
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
                </div> */}
        </div>
    );
}
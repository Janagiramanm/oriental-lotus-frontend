import next from "next";
import styles from "./FeaturedProductSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FeaturedProductSection() {
    return (
        <div className={styles.featuredSection}>
            <div className={`container`}>
                <div className={`${styles.pushTop} row`}>
                    <div className={`col-md-4`}>
                        <div className={styles.featuredPro}>
                            <div className={styles.featuredImage}>
                                <Image src={"/images/product-image.png"} alt={`image`}/>
                                <Link href={`/`}>Body Lotion</Link>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-4 pt-5`}>
                        <div className={styles.featuredImage}>
                            <Image src={"/images/product-image.png"} alt={`image`}/>
                            <Link href={`/`}>Body Lotion</Link>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.featuredImage}>
                            <Image src={"/images/product-image.png"} alt={`image`}/>
                            <Link href={`/`}>Body Lotion</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
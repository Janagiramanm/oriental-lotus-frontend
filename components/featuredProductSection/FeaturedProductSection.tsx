import next from "next";
import styles from "./FeaturedProductSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FeaturedProductSection({featureProduct}:any) {

    return (
        <div className={styles.featuredSection}>
            <div className={`container`}>
                <div className={`${styles.pushTop} row`}>
                    {featureProduct?.map((element:any, index:any)=>(
                        <div className={ (index==1)? `col-md-4 pt-md-5`:`col-md-4`} key={index}>
                            <div className={styles.featuredPro} >
                                <div className={styles.featuredImage}>
                                    <img src={element.product_image.url} alt={`image`}/>
                                    <Link href={element.product_link}>{element.product_title}</Link>
                                </div>
                            </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
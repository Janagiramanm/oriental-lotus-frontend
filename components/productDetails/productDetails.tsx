import next from "next";
import styles from "./productDetails.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function ProductDetails() {
    return (
        <div className={styles.productDetails}>
            <div className={styles.breadcrumb}>
                <p>Home / Facial Soap / French Lavender with Shea Butter Soap</p>
            </div>

            <div className={styles.productDetailsBlock}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <div className={styles.productImage}>
                                <img src={`../images/amaki.png`} />
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={styles.proContent}>
                                <h2>French Lavender with Shea Butter Soap</h2>
                                <p>Lavender oil is excellent for aroma therapy and is beneficial in alleviating the symptoms of acne and eczema. coconut oil, lavender extract, lavender buds, glycerin, lavender essential oil, and purified water, this soap is perfect for anyone looking for a natural and effective way to cleanse and hydrate their skin.Treat your skin to a blissful and relaxing cleansing experience with our Shea Butter and Lavender Soap. Made with high-quality shea butter, coconut oil, lavender extract, lavender buds, glycerin, lavender essential oil, and purified water, this soap is perfect for anyone looking for a natural and effective way to cleanse and hydrate their skin. </p>
                                <button className={`btn btn-primary`}>Add to Enquiry</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
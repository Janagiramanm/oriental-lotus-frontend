import next from "next";
import styles from "./AboutSection.module.scss";
import React, {} from 'react'
export default function AboutSection() {
    return (
        <div className={styles.aboutSection}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-6`}>
                        <h2>A global name in personal care cosmetics and hotel amenities manufacturing and supply.</h2>
                    </div>
                    <div className={`col-md-6`}>
                        <p>We specialise in wet body essentials like soaps, shampoos, conditioners and lotions. We also offer oral care items like toothbrush, toothpaste, and mouthwash. Along with personal care we have also developed expertise in hygiene products like hand wash, sanitizers. With goodness of pure, fresh ingredients & clean formulations for skin and hair, our products are 100% Paraben-free, sulphate-free, cruelty-free with recyclable packaging.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
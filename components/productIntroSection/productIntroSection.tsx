import next from "next";
import styles from "./productHeroSection.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function ProductIntroSection() {
    return (
        <div className={styles.introSection}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12 text-center`}>
                        <div className={styles.introContent}>
                            <h2>Our best-selling collection!</h2>
                            <h4>Esa natural guest toiletries are made using spa quality formulations, minimal
                                preservatives, post consumer non-bleached board, soy based ink, and crafted vegetable
                                based soaps. Choose from 6 bottled products, 5 soaps, and numerous sundry items. Our esa
                                natural collection of guest toiletries has been a best selling hotel amenity line for
                                many years throughout the U.S. and Canada.</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="marquee">
                <div className="marquee--inner">
                    <span>
                        <div className="orb">LIQUIDS</div>
                        <div className="orb">BAR SOAP</div>
                        <div className="orb">CREAMS AND FOAMS</div>
                        <div className="orb">PERSONAL CARE</div>
                        <div className="orb">LIQUIDS</div>
                        <div className="orb">SHOWER GEL</div>
                        <div className="orb">BODY SHOWER</div>
                          <div className="orb">BODY SHOWER</div>
                          <div className="orb">BODY SHOWER</div>
                        <div className="orb">CAP</div>
                    </span>
                    <span>
                        <div className="orb">LIQUIDS</div>
                        <div className="orb">BAR SOAP</div>
                        <div className="orb">CREAMS AND FOAMS</div>
                        <div className="orb">PERSONAL CARE</div>
                        <div className="orb">LIQUIDS</div>
                        <div className="orb">SHOWER GEL</div>
                        <div className="orb">BODY SHOWER</div>
                          <div className="orb">BODY SHOWER</div>
                          <div className="orb">BODY SHOWER</div>
                        <div className="orb">CAP</div>
                    </span>

                </div>
            </div>
        </div>
    );
}
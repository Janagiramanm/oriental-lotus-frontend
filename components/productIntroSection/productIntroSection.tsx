import next from "next";
import styles from "./productHeroSection.module.scss";
import React, {} from 'react'
import Link from "next/link";

export default function ProductIntroSection({introContent}:any) {
    return (
        <div className={styles.introSection}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-12 text-center`}>
                        <div className={styles.introContent}>
                            <h2>{introContent?.title}</h2>
                            <h4 dangerouslySetInnerHTML={{ __html: introContent?.description}}></h4>
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
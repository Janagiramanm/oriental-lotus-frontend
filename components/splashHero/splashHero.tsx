import next from "next";
import React, { useRef, useEffect } from "react";
import styles from "./splashHero.module.scss";
import FooterSection from "../footerSection/footerSection";


export default function SplashHero({service}:any) {


    return (
        <div>
            <div className={styles.IntroText}>
                <div className={`container animate__animated animate__pulse`}>
                        <div className={styles.logoBlock}>
                            <div className={styles.icon}><img className={`animate__animated animate__fadeIn animate__delay-2s `} src={"./images/lotus-icon.png"} /></div>
                            <div className={styles.icon}><img className={`animate__animated animate__fadeIn animate__delay-3s `} src={"./images/text-logo.png"} /></div>
                            <div className={styles.icon}><img className={`animate__animated animate__fadeIn animate__delay-4s `} src={"./images/tagline.png"} /></div>
                        </div>
                </div>
            </div>
            <FooterSection/>

        </div>

    );
}
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
                            <div className={styles.icon}><img className={`animate__animated animate__fadeIn animate__delay-2s `} src={"./images/icon.svg"} width={'140px'} /></div>
                            <div className={styles.icon}><img className={`animate__animated animate__fadeIn animate__delay-3s mb-3 `} src={"./images/logo.svg"}   width={'440px'}  /></div>
                            <div className={styles.icon}><img className={`animate__animated animate__fadeIn animate__delay-4s `} src={"./images/tagline.svg"}  width={'440px'} /></div>
                        </div>
                </div>
            </div>
        </div>

    );
}
import next from "next";
import React, { useRef, useEffect } from "react";
import styles from "./splashHero.module.scss";


export default function SplashHero({service}:any) {


    return (
        <div>
            <div className={styles.IntroText}>
                <div className={`container animate__animated animate__pulse`}>
                    <h5>WELCOME</h5>
                    <h1 className={`animate__animated animate__pulse`}>Proven Results -Tried, Tested & Loved</h1>
                    <h3>Bring your mind + skin back into balance with our new skincare collection. Powered by our BioActive complex to help reveal your most beautiful complexion ever</h3>
                </div>
            </div>
            <div className={styles.smallText}>
                Copyright © 2023 Oriental Lotus | All Rights Reserved. | Powered by NetiApps.
            </div>
        </div>

    );
}
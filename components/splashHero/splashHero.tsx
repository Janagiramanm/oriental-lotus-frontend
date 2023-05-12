import next from "next";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Power2 } from 'gsap/all';
import { CSSPlugin } from "gsap/CSSPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./splashHero.module.scss";
import getDocumentElement from "@popperjs/core/lib/dom-utils/getDocumentElement";



export default function SplashHero({service}:any) {

    useEffect(()=>{
       animateBox();
       animateLogo();
    },[])

    const animateBox = () => {
        gsap.fromTo(".slogan12",{
            opacity: 1, y: -100, duration:1, scale: ("1"),
            },
        {
            opacity: 1, delay: 3, y: 60, duration: 1, scale: (".5"), ease: "linear"
        });
    };




    const animateLogo = () => {
        gsap.fromTo(".logoAni",{
                opacity: 0, y: "50%", duration:1,
            },
            {
                opacity: 1, delay: 4, duration: 1, y:80, stagger: 1, ease: "bounce",
            });
    };


    return (
        <div>
            <div className={styles.IntroText}>

                <div className={`container`}>
                        <div className={`${styles.logoBlock} logoAni`}>
                            <div className={`${styles.icon} logoAni`}><img src={"./images/icon.svg"} width={'140px'} /></div>
                            <div className={`${styles.icon} logoAni`}><img src={"./images/logo.svg"}   width={'440px'}  /></div>
                            <div className={`${styles.icon} mt-4 logoAni`}><img src={"./images/tagline.svg"}  width={'440px'} /></div>
                        </div>

                    <div className={``}>
                        <div className={`slogan12`}><img className={`slogan12`} src={`./images/slogan.svg`} width={`100%`}  /> </div>
                    </div>
                </div>
            </div>

        </div>

    );
}
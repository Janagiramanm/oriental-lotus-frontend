import next from "next";
import styles from "./footerSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FooterSection() {
    return (
       <div className={`${styles.footerSection} animate__animated animate__delay-4s animate__fadeInUp`}>
           <div className={`container`}>
               <div className={`row justify-content-center align-items-center`}>
                   {/*<div className={`col-md-12 text-center`}>*/}
                   {/*   <img className={styles.footLogo} src={'/images/logo-footer.png'} alt={`image`}  />*/}
                   {/*</div>*/}
               </div>
               <div className={styles.footerBottom}>
                   <div className={`row`}>
                       <div className={`col-md-12 text-center`}>
                               <p className={`text-white`}>Copyright © 2023 Oriental Lotus  |  All Rights Reserved.  |  Powered by NetiApps</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
}
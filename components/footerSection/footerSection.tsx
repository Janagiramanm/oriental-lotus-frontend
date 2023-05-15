import next from "next";
import styles from "./footerSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FooterSection() {
    return (
       <div className={styles.footerSection}>
           <div className={`container`}>

              <div className={`row justify-content-center pt-5`}>
                  <div className={`col-md-12 text-start text-white text-center`}>
                      <div className={styles.footerLeft}>
                          <img src={'/images/logo-footer.png'} alt={`image`} width={`100px`} className={`mb-3`}  />
                          <p className={``}>Oriental Lotus is the industry benchmark for manufacturing and production of world class hotel amenities, catering the largest client base of 1500+ premium 5-star and luxury boutique hotels in India</p>
                          <ul className={`d-flex flex-row mb-3 justify-content-center align-items-center`}>
                              <li className={`px-2`}><Link href={`https://www.facebook.com/OrientalLotusHospitalitySolutions`} target={"_blank"}><i className="bi bi-facebook"></i></Link></li>
                              <li className={`px-2`}><Link href={`https://www.linkedin.com/company/oriental-lotus-hospitality-solutions`} target={"_blank"}><i className="bi bi-linkedin"></i></Link></li>
                              <li className={`px-2`}><Link href={`https://www.instagram.com/olhsindia/`} target={"_blank"}><i className="bi bi-instagram"></i></Link></li>
                              <li className={`px-2`}><Link href={`https://twitter.com/OLHSIndia`} target={"_blank"}><i className="bi bi-twitter"></i></Link></li>
                              <li className={`px-2`}><Link href={`https://www.youtube.com/@OLHS`} target={"_blank"}><i className="bi bi-youtube"></i></Link></li>
                          </ul>
                      </div>

                  </div>

              </div>
               <div className={styles.footerBottom}>
                   <div className={`row`}>
                       <div className={`col-md-12 text-center`}>
                               <p className={`text-white`}>Copyright © 2023 Oriental Lotus  |  All Rights Reserved.  |  Designed and Developed by <a href={`hhtps://www.netiapps.com`} target={`_blank`} className={`text-white text-underline`}>NetiApps</a></p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
}
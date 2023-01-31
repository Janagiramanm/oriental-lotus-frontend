import next from "next";
import styles from "./BrandSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image"
export default function BrandSection() {
    return (
       <div className={styles.brandSection}>

           <div className={`container`}>
               <div className={`row`}>
                   <div className={`col-md-12 text-center`}>
                       <h3>BRANDS & PRODUCTS</h3>
                   </div>
               </div>
              <div className={`row justify-content-center align-items-center`}>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <Image src={`/images/client-1.png`} alt={`image`} />
                      </div>
                  </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <Image src={`/images/client-2.png`} alt={`image`} />
                      </div>
                  </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <Image src={`/images/client-3.png`} alt={`image`} />
                      </div>
                  </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <Image src={`/images/client-4.png`} alt={`image`} />
                      </div>
                  </div> <div className={`col-md-2`}>
                  <div className={styles.brandBlock}>
                      <Image src={`/images/client-5.png`} alt={`image`} />
                  </div>
              </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <Image src={`/images/client-6.png`} alt={`image`} />
                      </div>
                  </div>

              </div>
           </div>
       </div>
    );
}
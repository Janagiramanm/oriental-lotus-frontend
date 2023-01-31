import next from "next";
import styles from "./BrandSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
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
                          <img src={`../images/client-1.png`} />
                      </div>
                  </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <img src={`../images/client-2.png`} />
                      </div>
                  </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <img src={`../images/client-3.png`} />
                      </div>
                  </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <img src={`../images/client-4.png`} />
                      </div>
                  </div> <div className={`col-md-2`}>
                  <div className={styles.brandBlock}>
                      <img src={`../images/client-5.png`} />
                  </div>
              </div>
                  <div className={`col-md-2`}>
                      <div className={styles.brandBlock}>
                          <img src={`../images/client-6.png`} />
                      </div>
                  </div>

              </div>
           </div>
       </div>
    );
}
import next from "next";
import styles from "./ServiceSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function ServiceSection() {
    return (
       <div className={styles.serviceSection}>
           <div className={`container`}>
              <div className={`row`}>
                  <div className={`col-md-3`}>
                      <div className={styles.serviceBlock}>
                          <Image src={`/images/icon-1.png`}  alt={`image`}/>
                          <h5>PRABEN FREE</h5>
                          <p>Our products are paraben free, and that goes for all our products, not just our top picks.</p>
                      </div>
                  </div>
                  <div className={`col-md-3`}>
                      <div className={styles.serviceBlock}>
                          <Image src={`/images/icon-2.png`} alt={`image`} />
                          <h5>PRABEN FREE</h5>
                          <p>Our products are paraben free, and that goes for all our products, not just our top picks.</p>
                      </div>
                  </div>
                  <div className={`col-md-3`}>
                      <div className={styles.serviceBlock}>
                          <Image src={`/images/icon-3.png`} alt={`image`} />
                          <h5>PRABEN FREE</h5>
                          <p>Our products are paraben free, and that goes for all our products, not just our top picks.</p>
                      </div>
                  </div>
                  <div className={`col-md-3`}>
                      <div className={styles.serviceBlock}>
                          <Image src={`/images/icon-4.png`} alt={`image`} />
                          <h5>PRABEN FREE</h5>
                          <p>Our products are paraben free, and that goes for all our products, not just our top picks.</p>
                      </div>
                  </div>
              </div>
           </div>
       </div>
    );
}
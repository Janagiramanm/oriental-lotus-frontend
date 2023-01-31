import next from "next";
import styles from "./InsightSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from 'next/image';
export default function InsightSection() {
    return (
       <div className={styles.insightSection}>
           <div className={`container`}>
               <div className={`row pb-5`}>
                   <div className={`col-md-6 text-left`}>
                       <h3>LATEST INSIGHT</h3>
                   </div>
                   <div className={`col-md-6 justify-content-end text-end`}>
                       <button className={`btn btn-primary`}>View More</button>
                   </div>
               </div>
              <div className={`row justify-content-center align-items-center`}>
                  <div className={`col-md-4`}>
                      <div className={styles.InsightBlock}>
                          <div className={styles.image1}>
                            <Image src={"../images/insight-1.png"} alt={`image`} />
                          </div>
                          <h6>NOVEMBER 16, 2022</h6>
                          <p>INTERNATIONAL MENS DAY 2022: THOUGHTFUL GIFTS TO CELEBRATE THE MEN IN OUR LIVES</p>
                      </div>
                  </div>
                  <div className={`col-md-4`}>
                      <div className={styles.InsightBlock}>
                          <div className={styles.image1}>
                              <Image src={"../images/insight-1.png"} alt={`image`} />
                          </div>
                          <h6>NOVEMBER 16, 2022</h6>
                          <p>INTERNATIONAL MENS DAY 2022: THOUGHTFUL GIFTS TO CELEBRATE THE MEN IN OUR LIVES</p>
                      </div>
                  </div>
                  <div className={`col-md-4`}>
                      <div className={styles.InsightBlock}>
                          <div className={styles.image1}>
                              <Image src={"../images/insight-1.png"} alt={`image`} />
                          </div>
                          <h6>NOVEMBER 16, 2022</h6>
                          <p>INTERNATIONAL MENS DAY 2022: THOUGHTFUL GIFTS TO CELEBRATE THE MEN IN OUR LIVES</p>
                      </div>
                  </div>

              </div>
           </div>
       </div>
    );
}
import next from "next";
import styles from "./footerSection.module.scss";
import React, {} from 'react'
import Link from "next/link";
import Image from "next/image";
export default function FooterSection() {
    return (
       <div className={styles.footerSection}>
           <div className={`container`}>
               <div className={`row pb-5 justify-content-center align-items-center`}>
                   <div className={`col-md-8 text-start`}>
                      <Image src={'../images/logo-footer.png'} alt={`image`}  />
                   </div>
                   <div className={`col-md-4 justify-content-end text-end`}>
                        <div className={styles.talkExpert}>
                            <h5 className={`text-white`}>Talk to expert?</h5>
                            <button className={`btn btn-primary text-secondary`}>Talk Now</button>
                        </div>
                   </div>
               </div>
              <div className={`row justify-content-center pt-5 pb-5`}>
                  <div className={`col-md-6 text-start`}>
                      <div className={styles.footerLeft}>
                          <h3 className={`text-white`}>Subscribe to our newsletter</h3>
                          <div className={`${styles.InputCustom} input-group mb-3`}>
                              <input type="text" className="form-control" placeholder="Enter Email Address"
                                     aria-label="Enter Email Address" aria-describedby="button-addon2" />
                                  <button className="btn btn-outline-secondary" type="button"
                                          id="button-addon2">Submit
                                  </button>
                          </div>
                      </div>

                  </div>
                  <div className={`col-md-2`}>
                      <h5>Useful Links</h5>
                      <ul>
                          <li><Link href={`/`}>Products</Link></li>
                          <li><Link href={`/`}>Campaigns</Link></li>
                          <li><Link href={`/`}>Blog</Link></li>
                          <li><Link href={`/`}>Site Map</Link></li>
                      </ul>

                  </div>
                  <div className={`col-md-2`}>
                      <h5>About</h5>
                      <ul>
                          <li><Link href={`/`}>Our Story</Link></li>
                          <li><Link href={`/`}>Benefits</Link></li>
                          <li><Link href={`/`}>Team</Link></li>
                          <li><Link href={`/`}>Careers</Link></li>
                      </ul>
                  </div>
                  <div className={`col-md-2 justify-content-start`}>
                      <h5>Help</h5>
                      <ul>
                          <li><Link href={`/`}>FAQs</Link></li>
                          <li><Link href={`/`}>Contact Us</Link></li>
                      </ul>
                  </div>
              </div>
               <div className={styles.footerBottom}>
                   <div className={`row`}>
                       <div className={`col-md-4`}>
                           <ul className={`nav-link`}>
                               <li><Link href={`/`}>Terms & Conditions</Link></li>
                               <li><Link href={`/`}>Privacy Policy</Link></li>
                           </ul>
                       </div>
                       <div className={`col-md-8 text-end`}>
                               <p className={`text-white`}>Copyright © 2023 Oriental Lotus  |  All Rights Reserved.  |  Powered by NetiApps</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    );
}